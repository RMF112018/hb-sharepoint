"""
Authentication Module for Microsoft 365 Automation Suite

This module handles all authentication operations including:
- Client credentials flow for Microsoft Graph API
- Token management and refresh
- Secure credential handling
"""

from .authenticator import M365Authenticator
from .token_manager import TokenManager

__all__ = ['M365Authenticator', 'TokenManager']
