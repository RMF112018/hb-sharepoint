"""
Authentication utility for Microsoft 365 Automation Suite.

This script authenticates to Microsoft Graph using the client credentials
flow (application permissions) and verifies connectivity by calling a
lightweight Graph endpoint. It is intended for IT staff to quickly test
credentials and environment configuration.

Usage (from project root):
    python src/auth.py

Notes:
- Requires a valid Azure AD app registration with appropriate Graph app
  permissions and admin consent. See docs/README.md for details.
- Reads configuration from config/.env. Do not commit real secrets.

References:
- Microsoft identity platform OAuth 2.0 client credentials flow:
  https://learn.microsoft.com/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow
- Microsoft Graph REST API:
  https://learn.microsoft.com/graph/api/overview
"""

from __future__ import annotations

import os
import sys
import logging
from typing import Dict, Optional, Tuple

import requests
from dotenv import load_dotenv

# Constants
DEFAULT_ENV_PATH: str = "config/.env"
TOKEN_ENDPOINT_TEMPLATE: str = (
    "https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token"
)
GRAPH_DEFAULT_SCOPE: str = "https://graph.microsoft.com/.default"
GRAPH_VERIFY_ENDPOINT_APP_ONLY: str = (
    "https://graph.microsoft.com/v1.0/organization"
)
LOG_FILE_PATH: str = "logs/auth.log"


def ensure_logs_directory_exists(log_file_path: str) -> None:
    """Ensure the directory for the log file exists.

    Args:
        log_file_path: Path to the log file (e.g., logs/auth.log)
    """
    log_dir = os.path.dirname(log_file_path)
    if log_dir and not os.path.exists(log_dir):
        os.makedirs(log_dir, exist_ok=True)


def configure_logging(log_file_path: str = LOG_FILE_PATH, level: int = logging.INFO) -> None:
    """Configure application logging for both file and stdout.

    Args:
        log_file_path: Destination log file path.
        level: Logging level (e.g., logging.INFO).
    """
    ensure_logs_directory_exists(log_file_path)

    fmt = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    datefmt = "%Y-%m-%dT%H:%M:%S%z"

    # Root logger
    logging.basicConfig(level=level, format=fmt, datefmt=datefmt)

    # File handler
    file_handler = logging.FileHandler(log_file_path)
    file_handler.setLevel(level)
    file_handler.setFormatter(logging.Formatter(fmt, datefmt))

    # Console handler
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(level)
    console_handler.setFormatter(logging.Formatter(fmt, datefmt))

    root_logger = logging.getLogger()
    root_logger.handlers = []  # Prevent duplicate handlers if re-run
    root_logger.addHandler(file_handler)
    root_logger.addHandler(console_handler)


logger = logging.getLogger(__name__)


def load_environment(env_path: str = DEFAULT_ENV_PATH) -> Dict[str, str]:
    """Load and validate environment configuration from a .env file.

    Args:
        env_path: Path to the .env file in the config directory.

    Returns:
        Dict[str, str]: Dictionary containing TENANT_ID, CLIENT_ID, CLIENT_SECRET.

    Raises:
        ValueError: If required variables are missing.
    """
    # Load environment variables from file; existing environment variables take precedence
    load_dotenv(dotenv_path=env_path, override=False)

    tenant_id = os.getenv("TENANT_ID")
    client_id = os.getenv("CLIENT_ID")
    client_secret = os.getenv("CLIENT_SECRET")

    missing = [name for name, value in (
        ("TENANT_ID", tenant_id),
        ("CLIENT_ID", client_id),
        ("CLIENT_SECRET", client_secret),
    ) if not value]

    if missing:
        raise ValueError(
            "Missing required environment variables: " + ", ".join(missing) +
            f". Ensure {env_path} exists and is populated."
        )

    return {
        "TENANT_ID": tenant_id,
        "CLIENT_ID": client_id,
        "CLIENT_SECRET": client_secret,
    }


def obtain_access_token(
    tenant_id: str,
    client_id: str,
    client_secret: str,
    scope: str = GRAPH_DEFAULT_SCOPE,
    timeout_seconds: int = 30,
) -> str:
    """Obtain an access token from Azure AD using client credentials flow.

    Args:
        tenant_id: Azure AD tenant (directory) ID.
        client_id: Azure AD application (client) ID.
        client_secret: Azure AD application client secret.
        scope: OAuth 2.0 scope for Graph; defaults to https://graph.microsoft.com/.default
        timeout_seconds: Network timeout for the HTTP request.

    Returns:
        str: The access token.

    Raises:
        requests.exceptions.RequestException: For network-related errors.
        RuntimeError: For non-success HTTP responses or missing token in response.
    """
    token_url = TOKEN_ENDPOINT_TEMPLATE.format(tenant_id=tenant_id)

    # Form-encoded body as required by the token endpoint
    data = {
        "client_id": client_id,
        "client_secret": client_secret,
        "scope": scope,
        "grant_type": "client_credentials",
    }

    try:
        response = requests.post(token_url, data=data, timeout=timeout_seconds)
    except requests.exceptions.RequestException as exc:
        logger.error("Network error requesting token: %s", str(exc))
        raise

    if response.status_code != 200:
        # Avoid logging secrets; include safe context and server message
        logger.error(
            "Token request failed (status=%s). Response: %s",
            response.status_code,
            response.text,
        )
        raise RuntimeError(
            f"Token request failed with status {response.status_code}: {response.text}"
        )

    payload = response.json()
    access_token = payload.get("access_token")
    if not access_token:
        logger.error("Token response JSON missing access_token: %s", payload)
        raise RuntimeError("Token response missing access_token.")

    logger.info("Successfully obtained access token.")
    return access_token


def verify_graph_connection(
    access_token: str,
    endpoint_url: str = GRAPH_VERIFY_ENDPOINT_APP_ONLY,
    timeout_seconds: int = 30,
) -> Tuple[bool, Dict[str, object]]:
    """Verify Microsoft Graph connectivity using the provided access token.

    Args:
        access_token: Bearer token for Graph API calls.
        endpoint_url: Verification endpoint. For app-only, use /organization.
        timeout_seconds: Network timeout for the HTTP request.

    Returns:
        Tuple[bool, Dict[str, object]]: (success flag, parsed JSON or error details)
    """
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Accept": "application/json",
    }

    try:
        response = requests.get(endpoint_url, headers=headers, timeout=timeout_seconds)
    except requests.exceptions.RequestException as exc:
        logger.error("Network error during verification call: %s", str(exc))
        return False, {"error": str(exc)}

    if response.status_code in (200, 204):
        logger.info("Graph verification successful (status=%s).", response.status_code)
        try:
            return True, response.json() if response.content else {}
        except ValueError:
            return True, {}

    # Provide helpful diagnostics but avoid secrets
    logger.error(
        "Graph verification failed (status=%s). Response: %s",
        response.status_code,
        response.text,
    )
    try:
        return False, response.json()
    except ValueError:
        return False, {"status": response.status_code, "text": response.text}


def main() -> int:
    """Entry point for command-line execution.

    Returns:
        int: Process exit code (0 for success, non-zero for failure).
    """
    configure_logging()
    logger.info("Starting Microsoft Graph authentication test")

    try:
        env = load_environment()
    except ValueError as exc:
        logger.error("Environment configuration error: %s", str(exc))
        return 2

    try:
        access_token = obtain_access_token(
            tenant_id=env["TENANT_ID"],
            client_id=env["CLIENT_ID"],
            client_secret=env["CLIENT_SECRET"],
        )
    except requests.exceptions.RequestException:
        # Network errors already logged in obtain_access_token
        return 3
    except RuntimeError as exc:
        # API or parsing error
        logger.error("Failed to obtain access token: %s", str(exc))
        return 4

    # For app-only flows, /me is not available; prefer /organization
    success, result = verify_graph_connection(access_token)

    if success:
        logger.info("Authentication and verification succeeded.")
        # Provide a concise stdout message for operators
        print("Graph connectivity OK.")
        return 0

    logger.error("Verification failed. Details: %s", result)
    print("Graph connectivity FAILED. See logs/auth.log for details.")
    return 5


if __name__ == "__main__":
    sys.exit(main())
