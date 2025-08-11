"""
Unit tests for src/auth.py authentication utilities.

These tests validate:
- Successful access token retrieval via client credentials flow
- Handling invalid credentials (expected RuntimeError)
- Handling network errors (e.g., timeout)
- Verification of Microsoft Graph connectivity for success and failure cases

All HTTP calls are mocked so no live network requests are made.
Logs are written to logs/test_auth.log with timestamps for IT staff review.
"""

import os
import sys
import logging
import unittest
from pathlib import Path
from unittest.mock import patch, MagicMock

# Ensure the src directory is importable when running tests from project root
PROJECT_ROOT = Path(__file__).resolve().parents[1]
SRC_DIR = PROJECT_ROOT / "src"
if str(SRC_DIR) not in sys.path:
    sys.path.insert(0, str(SRC_DIR))

# Import functions under test from src/auth.py
from auth import (
    obtain_access_token,
    verify_graph_connection,
    load_environment,
)
import requests


def configure_test_logging() -> None:
    """Configure test logging to file and stdout with timestamps.

    Logs are written to logs/test_auth.log for later review by IT staff.
    """
    logs_dir = PROJECT_ROOT / "logs"
    logs_dir.mkdir(parents=True, exist_ok=True)
    log_file = logs_dir / "test_auth.log"

    fmt = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    datefmt = "%Y-%m-%dT%H:%M:%S%z"

    root_logger = logging.getLogger()
    root_logger.setLevel(logging.INFO)

    # Clear existing handlers to avoid duplicate logs across test runs
    root_logger.handlers = []

    file_handler = logging.FileHandler(str(log_file))
    file_handler.setLevel(logging.INFO)
    file_handler.setFormatter(logging.Formatter(fmt, datefmt))

    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(logging.INFO)
    console_handler.setFormatter(logging.Formatter(fmt, datefmt))

    root_logger.addHandler(file_handler)
    root_logger.addHandler(console_handler)


class TestAuthUtilities(unittest.TestCase):
    """Tests for authentication helper functions in src/auth.py.

    Each test uses mocking to simulate HTTP responses from Azure AD and
    Microsoft Graph, ensuring no real network calls are performed.
    """

    @classmethod
    def setUpClass(cls):
        configure_test_logging()
        # Provide default environment variables for tests
        cls.env_patch = unittest.mock.patch.dict(os.environ, {
            "TENANT_ID": "test-tenant-id",
            "CLIENT_ID": "test-client-id",
            "CLIENT_SECRET": "test-client-secret",
        }, clear=False)
        cls.env_patch.start()

    @classmethod
    def tearDownClass(cls):
        cls.env_patch.stop()

    @patch("auth.requests.post")
    def test_obtain_access_token_success(self, mock_post: MagicMock):
        """Token retrieval succeeds when Azure AD returns 200 with access_token.

        - Mocks the token endpoint to return a well-formed JSON payload.
        - Verifies that obtain_access_token returns the expected token string.
        """
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {"access_token": "mock-token-123"}
        mock_post.return_value = mock_response

        token = obtain_access_token(
            tenant_id="test-tenant-id",
            client_id="test-client-id",
            client_secret="test-client-secret",
        )
        self.assertEqual(token, "mock-token-123")
        mock_post.assert_called_once()

    @patch("auth.requests.post")
    def test_obtain_access_token_invalid_credentials(self, mock_post: MagicMock):
        """Invalid credentials are handled by raising RuntimeError.

        - Simulates a 401 Unauthorized with an error message from Azure AD.
        - Expects obtain_access_token to raise RuntimeError for operators to handle.
        """
        mock_response = MagicMock()
        mock_response.status_code = 401
        mock_response.text = "Unauthorized: invalid_client"
        mock_response.json.return_value = {"error": "invalid_client"}
        mock_post.return_value = mock_response

        with self.assertRaises(RuntimeError) as ctx:
            obtain_access_token(
                tenant_id="test-tenant-id",
                client_id="bad-client-id",
                client_secret="bad-secret",
            )
        self.assertIn("Token request failed with status 401", str(ctx.exception))
        mock_post.assert_called_once()

    @patch("auth.requests.post", side_effect=requests.exceptions.Timeout("Timeout"))
    def test_obtain_access_token_network_timeout(self, _mock_post: MagicMock):
        """Network timeouts are surfaced as RequestException for retry/alerting.

        - Simulates a timeout during POST to the token endpoint.
        - Expects a requests.exceptions.Timeout to be raised.
        """
        with self.assertRaises(requests.exceptions.Timeout):
            obtain_access_token(
                tenant_id="test-tenant-id",
                client_id="test-client-id",
                client_secret="test-client-secret",
            )

    @patch("auth.requests.get")
    def test_verify_graph_connection_success(self, mock_get: MagicMock):
        """Graph verification succeeds when endpoint returns 200 with JSON body.

        - Simulates a successful GET to /organization.
        - Expects verify_graph_connection to return (True, payload).
        """
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.content = b"{}"
        mock_response.json.return_value = {"value": []}
        mock_get.return_value = mock_response

        ok, payload = verify_graph_connection("mock-token")
        self.assertTrue(ok)
        self.assertIsInstance(payload, dict)
        mock_get.assert_called_once()

    @patch("auth.requests.get")
    def test_verify_graph_connection_forbidden(self, mock_get: MagicMock):
        """Graph verification returns (False, details) on 403 errors.

        - Simulates insufficient privileges (403) with a JSON error payload.
        - Expects verify_graph_connection to return a tuple with success=False.
        """
        mock_response = MagicMock()
        mock_response.status_code = 403
        mock_response.text = "{\"error\":{\"code\":\"Authorization_RequestDenied\"}}"
        mock_response.json.return_value = {"error": {"code": "Authorization_RequestDenied"}}
        mock_get.return_value = mock_response

        ok, details = verify_graph_connection("mock-token")
        self.assertFalse(ok)
        self.assertIsInstance(details, dict)
        mock_get.assert_called_once()

    def test_load_environment_missing_vars(self):
        """load_environment raises ValueError when required vars are missing.

        - Clears variables in a scoped patch to simulate missing config.
        - Ensures a clear error message is provided to guide IT staff.
        """
        with unittest.mock.patch.dict(os.environ, {}, clear=True):
            with self.assertRaises(ValueError) as ctx:
                load_environment(env_path="config/.env")
            self.assertIn("Missing required environment variables", str(ctx.exception))


if __name__ == "__main__":
    unittest.main(verbosity=2)
