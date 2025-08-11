"""
Unit tests for the authentication module.

This module tests the M365Authenticator class and related functionality
to ensure proper authentication behavior.
"""

import unittest
from unittest.mock import patch, MagicMock
import os
import sys
from pathlib import Path

# Add src directory to Python path
sys.path.insert(0, str(Path(__file__).parent.parent.parent / "src"))

from auth.authenticator import M365Authenticator, AuthenticationError


class TestM365Authenticator(unittest.TestCase):
    """Test cases for M365Authenticator class."""
    
    def setUp(self):
        """Set up test fixtures."""
        # Mock environment variables
        self.env_patcher = patch.dict(os.environ, {
            'TENANT_ID': 'test-tenant-id',
            'CLIENT_ID': 'test-client-id',
            'CLIENT_SECRET': 'test-client-secret'
        })
        self.env_patcher.start()
    
    def tearDown(self):
        """Clean up test fixtures."""
        self.env_patcher.stop()
    
    @patch('auth.authenticator.load_dotenv')
    @patch('auth.authenticator.ConfidentialClientApplication')
    def test_initialization_success(self, mock_msal, mock_load_dotenv):
        """Test successful initialization of authenticator."""
        # Mock MSAL application
        mock_app = MagicMock()
        mock_msal.return_value = mock_app
        
        # Create authenticator
        auth = M365Authenticator()
        
        # Verify initialization
        self.assertEqual(auth.tenant_id, 'test-tenant-id')
        self.assertEqual(auth.client_id, 'test-client-id')
        self.assertEqual(auth.client_secret, 'test-client-secret')
        self.assertEqual(auth.authority, 'https://login.microsoftonline.com/test-tenant-id')
        self.assertEqual(auth.app, mock_app)
        
        # Verify dotenv was loaded
        mock_load_dotenv.assert_called_once()
    
    @patch('auth.authenticator.load_dotenv')
    def test_initialization_missing_tenant_id(self, mock_load_dotenv):
        """Test initialization failure when TENANT_ID is missing."""
        with patch.dict(os.environ, {}, clear=True):
            with self.assertRaises(AuthenticationError) as context:
                M365Authenticator()
            
            self.assertIn('Missing required environment variables: TENANT_ID', str(context.exception))
    
    @patch('auth.authenticator.load_dotenv')
    def test_initialization_missing_client_id(self, mock_load_dotenv):
        """Test initialization failure when CLIENT_ID is missing."""
        with patch.dict(os.environ, {'TENANT_ID': 'test-tenant-id'}, clear=True):
            with self.assertRaises(AuthenticationError) as context:
                M365Authenticator()
            
            self.assertIn('Missing required environment variables: CLIENT_ID', str(context.exception))
    
    @patch('auth.authenticator.load_dotenv')
    def test_initialization_missing_client_secret(self, mock_load_dotenv):
        """Test initialization failure when CLIENT_SECRET is missing."""
        with patch.dict(os.environ, {
            'TENANT_ID': 'test-tenant-id',
            'CLIENT_ID': 'test-client-id'
        }, clear=True):
            with self.assertRaises(AuthenticationError) as context:
                M365Authenticator()
            
            self.assertIn('Missing required environment variables: CLIENT_SECRET', str(context.exception))
    
    @patch('auth.authenticator.load_dotenv')
    @patch('auth.authenticator.ConfidentialClientApplication')
    def test_get_access_token_success(self, mock_msal, mock_load_dotenv):
        """Test successful token acquisition."""
        # Mock MSAL application
        mock_app = MagicMock()
        mock_app.acquire_token_silent.return_value = None
        mock_app.acquire_token_for_client.return_value = {
            'access_token': 'test-token-123',
            'expires_in': 3600
        }
        mock_msal.return_value = mock_app
        
        # Create authenticator
        auth = M365Authenticator()
        
        # Get token
        token = auth.get_access_token()
        
        # Verify token
        self.assertEqual(token, 'test-token-123')
        
        # Verify MSAL calls
        mock_app.acquire_token_silent.assert_called_once()
        mock_app.acquire_token_for_client.assert_called_once()
    
    @patch('auth.authenticator.load_dotenv')
    @patch('auth.authenticator.ConfidentialClientApplication')
    def test_get_access_token_cached(self, mock_msal, mock_load_dotenv):
        """Test token acquisition from cache."""
        # Mock MSAL application with cached token
        mock_app = MagicMock()
        mock_app.acquire_token_silent.return_value = {
            'access_token': 'cached-token-456',
            'expires_in': 3600
        }
        mock_msal.return_value = mock_app
        
        # Create authenticator
        auth = M365Authenticator()
        
        # Get token
        token = auth.get_access_token()
        
        # Verify token
        self.assertEqual(token, 'cached-token-456')
        
        # Verify only silent acquisition was called
        mock_app.acquire_token_silent.assert_called_once()
        mock_app.acquire_token_for_client.assert_not_called()
    
    @patch('auth.authenticator.load_dotenv')
    @patch('auth.authenticator.ConfidentialClientApplication')
    def test_get_access_token_failure(self, mock_msal, mock_load_dotenv):
        """Test token acquisition failure."""
        # Mock MSAL application
        mock_app = MagicMock()
        mock_app.acquire_token_silent.return_value = None
        mock_app.acquire_token_for_client.return_value = {
            'error': 'invalid_client',
            'error_description': 'Invalid client credentials'
        }
        mock_msal.return_value = mock_app
        
        # Create authenticator
        auth = M365Authenticator()
        
        # Attempt to get token
        with self.assertRaises(AuthenticationError) as context:
            auth.get_access_token()
        
        self.assertIn('Authentication failed: Invalid client credentials', str(context.exception))
    
    @patch('auth.authenticator.load_dotenv')
    @patch('auth.authenticator.ConfidentialClientApplication')
    def test_validate_credentials_success(self, mock_msal, mock_load_dotenv):
        """Test successful credential validation."""
        # Mock MSAL application
        mock_app = MagicMock()
        mock_app.acquire_token_silent.return_value = None
        mock_app.acquire_token_for_client.return_value = {
            'access_token': 'test-token-123',
            'expires_in': 3600
        }
        mock_msal.return_value = mock_app
        
        # Create authenticator
        auth = M365Authenticator()
        
        # Validate credentials
        result = auth.validate_credentials()
        
        # Verify result
        self.assertTrue(result)
    
    @patch('auth.authenticator.load_dotenv')
    @patch('auth.authenticator.ConfidentialClientApplication')
    def test_validate_credentials_failure(self, mock_msal, mock_load_dotenv):
        """Test failed credential validation."""
        # Mock MSAL application
        mock_app = MagicMock()
        mock_app.acquire_token_silent.return_value = None
        mock_app.acquire_token_for_client.return_value = {
            'error': 'invalid_client',
            'error_description': 'Invalid client credentials'
        }
        mock_msal.return_value = mock_app
        
        # Create authenticator
        auth = M365Authenticator()
        
        # Validate credentials
        result = auth.validate_credentials()
        
        # Verify result
        self.assertFalse(result)
    
    @patch('auth.authenticator.load_dotenv')
    @patch('auth.authenticator.ConfidentialClientApplication')
    def test_get_token_info(self, mock_msal, mock_load_dotenv):
        """Test token info retrieval."""
        # Mock MSAL application
        mock_app = MagicMock()
        mock_app.acquire_token_silent.return_value = None
        mock_app.acquire_token_for_client.return_value = {
            'access_token': 'test-token-123',
            'expires_in': 3600
        }
        mock_msal.return_value = mock_app
        
        # Create authenticator
        auth = M365Authenticator()
        
        # Get token info
        info = auth.get_token_info()
        
        # Verify info structure
        expected_keys = ['tenant_id', 'client_id', 'authority', 'has_client_secret', 'credentials_valid']
        for key in expected_keys:
            self.assertIn(key, info)
        
        # Verify specific values
        self.assertEqual(info['tenant_id'], 'test-tenant-id')
        self.assertEqual(info['client_id'], 'test-client-id')
        self.assertEqual(info['authority'], 'https://login.microsoftonline.com/test-tenant-id')
        self.assertTrue(info['has_client_secret'])
        self.assertTrue(info['credentials_valid'])
    
    def test_repr(self):
        """Test string representation."""
        with patch('auth.authenticator.load_dotenv'), \
             patch('auth.authenticator.ConfidentialClientApplication'):
            auth = M365Authenticator()
            repr_str = repr(auth)
            self.assertIn('M365Authenticator', repr_str)
            self.assertIn('test-tenant-id', repr_str)
            self.assertIn('test-client-id', repr_str)
    
    def test_str(self):
        """Test human-readable string representation."""
        with patch('auth.authenticator.load_dotenv'), \
             patch('auth.authenticator.ConfidentialClientApplication'):
            auth = M365Authenticator()
            str_repr = str(auth)
            self.assertIn('Microsoft 365 Authenticator', str_repr)
            self.assertIn('test-tenant-id', str_repr)


if __name__ == '__main__':
    unittest.main()
