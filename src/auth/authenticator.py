"""
Microsoft 365 Authenticator Module

This module provides authentication functionality for the Microsoft 365 Automation Suite
using the client credentials flow with MSAL (Microsoft Authentication Library).

Classes:
    M365Authenticator: Handles authentication and token acquisition
"""

import os
import logging
from typing import List, Optional
from dotenv import load_dotenv
from msal import ConfidentialClientApplication

# Set up logging
logger = logging.getLogger(__name__)


class AuthenticationError(Exception):
    """Raised when authentication operations fail."""
    pass


class M365Authenticator:
    """
    Handles Microsoft 365 authentication using client credentials flow.
    
    This class manages the authentication process for accessing Microsoft Graph API
    using Azure AD application credentials. It supports automatic token refresh
    and provides secure credential management.
    
    Attributes:
        tenant_id (str): Azure AD tenant ID
        client_id (str): Azure AD application client ID
        client_secret (str): Azure AD application client secret
        authority (str): Azure AD authority URL
        app (ConfidentialClientApplication): MSAL application instance
    """
    
    def __init__(self, env_file: str = "config/.env"):
        """
        Initialize the authenticator with credentials from environment variables.
        
        Args:
            env_file (str): Path to the .env file containing credentials
            
        Raises:
            AuthenticationError: If required environment variables are missing
        """
        # Load environment variables
        load_dotenv(env_file)
        
        # Get credentials from environment
        self.tenant_id = os.getenv('TENANT_ID')
        self.client_id = os.getenv('CLIENT_ID')
        self.client_secret = os.getenv('CLIENT_SECRET')
        
        # Validate required credentials
        if not all([self.tenant_id, self.client_id, self.client_secret]):
            missing_vars = []
            if not self.tenant_id:
                missing_vars.append('TENANT_ID')
            if not self.client_id:
                missing_vars.append('CLIENT_ID')
            if not self.client_secret:
                missing_vars.append('CLIENT_SECRET')
            
            raise AuthenticationError(
                f"Missing required environment variables: {', '.join(missing_vars)}. "
                f"Please check your {env_file} file."
            )
        
        # Build authority URL
        self.authority = f"https://login.microsoftonline.com/{self.tenant_id}"
        
        # Initialize MSAL application
        try:
            self.app = ConfidentialClientApplication(
                client_id=self.client_id,
                client_credential=self.client_secret,
                authority=self.authority
            )
            logger.info("MSAL application initialized successfully")
            
        except Exception as e:
            logger.error(f"Failed to initialize MSAL application: {str(e)}")
            raise AuthenticationError(f"MSAL initialization failed: {str(e)}")
    
    def get_access_token(self, scopes: Optional[List[str]] = None) -> str:
        """
        Get access token for Microsoft Graph API.
        
        This method attempts to acquire a token silently first, then falls back
        to client credentials flow if no cached token is available.
        
        Args:
            scopes (List[str], optional): List of scopes to request.
                Defaults to ['https://graph.microsoft.com/.default']
            
        Returns:
            str: Access token for API calls
            
        Raises:
            AuthenticationError: If token acquisition fails
        """
        if scopes is None:
            scopes = ['https://graph.microsoft.com/.default']
        
        logger.debug(f"Requesting access token for scopes: {scopes}")
        
        try:
            # First, try to get token silently (from cache)
            result = self.app.acquire_token_silent(scopes, account=None)
            
            if not result:
                logger.debug("No cached token found, acquiring new token")
                # If no cached token, acquire new one using client credentials
                result = self.app.acquire_token_for_client(scopes=scopes)
            
            # Check if token acquisition was successful
            if "access_token" in result:
                logger.info("Access token acquired successfully")
                return result["access_token"]
            else:
                error_msg = result.get('error_description', 'Unknown error')
                logger.error(f"Token acquisition failed: {error_msg}")
                raise AuthenticationError(f"Authentication failed: {error_msg}")
                
        except Exception as e:
            logger.error(f"Unexpected error during token acquisition: {str(e)}")
            raise AuthenticationError(f"Token acquisition failed: {str(e)}")
    
    def validate_credentials(self) -> bool:
        """
        Validate that the configured credentials are working.
        
        This method attempts to acquire a token to verify that the
        configured credentials are valid and have the necessary permissions.
        
        Returns:
            bool: True if credentials are valid, False otherwise
        """
        try:
            token = self.get_access_token()
            # If we get here, credentials are valid
            logger.info("Credentials validation successful")
            return True
            
        except AuthenticationError as e:
            logger.warning(f"Credentials validation failed: {str(e)}")
            return False
    
    def get_token_info(self) -> dict:
        """
        Get information about the current token and configuration.
        
        Returns:
            dict: Token and configuration information
        """
        return {
            "tenant_id": self.tenant_id,
            "client_id": self.client_id,
            "authority": self.authority,
            "has_client_secret": bool(self.client_secret),
            "credentials_valid": self.validate_credentials()
        }
    
    def __repr__(self) -> str:
        """Return string representation of the authenticator."""
        return f"M365Authenticator(tenant_id='{self.tenant_id}', client_id='{self.client_id}')"
    
    def __str__(self) -> str:
        """Return human-readable string representation."""
        return f"Microsoft 365 Authenticator for tenant {self.tenant_id}"
