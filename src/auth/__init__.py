"""
Authentication Module for Microsoft 365 Automation Suite

This package exposes client-credentials helpers for Microsoft Graph:
- load_environment: Load and validate environment configuration
- obtain_access_token: Acquire an access token via client credentials
- verify_graph_connection: Verify Graph connectivity (e.g., /organization)
- configure_logging: Set up logging for auth operations
"""

from .authenticator import (
    load_environment,
    obtain_access_token,
    verify_graph_connection,
    configure_logging,
)

__all__ = [
    "load_environment",
    "obtain_access_token",
    "verify_graph_connection",
    "configure_logging",
]
