# Microsoft 365 Automation Suite - API Reference

This document provides comprehensive API usage examples and reference information for the Microsoft 365 Automation Suite.

## 📋 Table of Contents

1. [Authentication](#authentication)
2. [SharePoint Operations](#sharepoint-operations)
3. [Microsoft Teams Operations](#microsoft-teams-operations)
4. [Group Management](#group-management)
5. [User Management](#user-management)
6. [Error Handling](#error-handling)
7. [Logging](#logging)
8. [Best Practices](#best-practices)

## 🔐 Authentication

### Basic Authentication Setup

```python
import os
from dotenv import load_dotenv
from msal import ConfidentialClientApplication

# Load environment variables
load_dotenv('config/.env')

class M365Authenticator:
    """Handles Microsoft 365 authentication using client credentials flow."""
    
    def __init__(self):
        self.tenant_id = os.getenv('TENANT_ID')
        self.client_id = os.getenv('CLIENT_ID')
        self.client_secret = os.getenv('CLIENT_SECRET')
        self.authority = f"https://login.microsoftonline.com/{self.tenant_id}"
        
        # Initialize MSAL application
        self.app = ConfidentialClientApplication(
            client_id=self.client_id,
            client_credential=self.client_secret,
            authority=self.authority
        )
    
    def get_access_token(self, scopes=None):
        """
        Get access token for Microsoft Graph API.
        
        Args:
            scopes (list): List of scopes. Defaults to ['https://graph.microsoft.com/.default']
            
        Returns:
            str: Access token for API calls
            
        Raises:
            AuthenticationError: If authentication fails
        """
        if scopes is None:
            scopes = ['https://graph.microsoft.com/.default']
        
        result = self.app.acquire_token_silent(scopes, account=None)
        
        if not result:
            result = self.app.acquire_token_for_client(scopes=scopes)
        
        if "access_token" in result:
            return result["access_token"]
        else:
            raise AuthenticationError(f"Authentication failed: {result.get('error_description', 'Unknown error')}")

# Usage example
auth = M365Authenticator()
token = auth.get_access_token()
```

### Token Refresh and Management

```python
import time
from datetime import datetime, timedelta

class TokenManager:
    """Manages access tokens with automatic refresh."""
    
    def __init__(self, authenticator):
        self.authenticator = authenticator
        self.token = None
        self.expires_at = None
        self.token_buffer = 300  # 5 minutes buffer
    
    def get_valid_token(self):
        """
        Get a valid access token, refreshing if necessary.
        
        Returns:
            str: Valid access token
        """
        if self._is_token_expired():
            self._refresh_token()
        
        return self.token
    
    def _is_token_expired(self):
        """Check if current token is expired or close to expiring."""
        if not self.token or not self.expires_at:
            return True
        
        return datetime.now() >= (self.expires_at - timedelta(seconds=self.token_buffer))
    
    def _refresh_token(self):
        """Refresh the access token."""
        self.token = self.authenticator.get_access_token()
        # Set expiration to 1 hour from now (typical token lifetime)
        self.expires_at = datetime.now() + timedelta(hours=1)
```

## 🌐 SharePoint Operations

### Create SharePoint Site

```python
import requests
import json
from typing import Dict, Optional

class SharePointManager:
    """Manages SharePoint operations using Microsoft Graph API."""
    
    def __init__(self, token_manager):
        self.token_manager = token_manager
        self.base_url = "https://graph.microsoft.com/v1.0"
    
    def create_team_site(self, site_name: str, display_name: str, description: str = None) -> Dict:
        """
        Create a new SharePoint team site.
        
        Args:
            site_name (str): URL-friendly name for the site
            display_name (str): Human-readable display name
            description (str, optional): Site description
            
        Returns:
            Dict: Created site information
            
        Raises:
            SiteCreationError: If site creation fails
        """
        token = self.token_manager.get_valid_token()
        
        # First, create the site
        site_data = {
            "displayName": display_name,
            "description": description or f"Team site for {display_name}",
            "webTemplate": "STS#0",
            "siteCollection": {
                "hostname": f"{site_name}.sharepoint.com"
            }
        }
        
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/sites",
                headers=headers,
                json=site_data,
                timeout=30
            )
            
            if response.status_code == 201:
                return response.json()
            else:
                raise SiteCreationError(f"Site creation failed: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            raise SiteCreationError(f"Network error during site creation: {str(e)}")
    
    def get_site_by_name(self, site_name: str) -> Optional[Dict]:
        """
        Get SharePoint site by name.
        
        Args:
            site_name (str): Name of the site to retrieve
            
        Returns:
            Dict: Site information or None if not found
        """
        token = self.token_manager.get_valid_token()
        
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.get(
                f"{self.base_url}/sites/{site_name}",
                headers=headers,
                timeout=30
            )
            
            if response.status_code == 200:
                return response.json()
            elif response.status_code == 404:
                return None
            else:
                raise SharePointError(f"Failed to retrieve site: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            raise SharePointError(f"Network error: {str(e)}")
    
    def create_document_library(self, site_id: str, library_name: str, description: str = None) -> Dict:
        """
        Create a document library in a SharePoint site.
        
        Args:
            site_id (str): ID of the SharePoint site
            library_name (str): Name of the document library
            description (str, optional): Library description
            
        Returns:
            Dict: Created library information
        """
        token = self.token_manager.get_valid_token()
        
        library_data = {
            "name": library_name,
            "description": description or f"Document library for {library_name}",
            "documentLibrary": {
                "template": "DocumentLibrary"
            }
        }
        
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/sites/{site_id}/lists",
                headers=headers,
                json=library_data,
                timeout=30
            )
            
            if response.status_code == 201:
                return response.json()
            else:
                raise SharePointError(f"Library creation failed: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            raise SharePointError(f"Network error during library creation: {str(e)}")
```

### Site Permission Management

```python
class SharePointPermissions:
    """Manages SharePoint site permissions."""
    
    def __init__(self, token_manager):
        self.token_manager = token_manager
        self.base_url = "https://graph.microsoft.com/v1.0"
    
    def add_user_to_site(self, site_id: str, user_email: str, role: str = "read") -> Dict:
        """
        Add a user to a SharePoint site with specified role.
        
        Args:
            site_id (str): ID of the SharePoint site
            user_email (str): Email address of the user
            role (str): Role to assign (read, write, full control)
            
        Returns:
            Dict: Permission information
        """
        token = self.token_manager.get_valid_token()
        
        # Map role names to permission levels
        role_mapping = {
            "read": "read",
            "write": "write",
            "full": "full control"
        }
        
        permission_data = {
            "roles": [role_mapping.get(role, "read")],
            "grantedToIdentities": [{
                "application": None,
                "device": None,
                "user": {
                    "email": user_email
                }
            }]
        }
        
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/sites/{site_id}/permissions",
                headers=headers,
                json=permission_data,
                timeout=30
            )
            
            if response.status_code == 201:
                return response.json()
            else:
                raise PermissionError(f"Failed to add user: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            raise PermissionError(f"Network error: {str(e)}")
```

## 🎯 Microsoft Teams Operations

### Create Team and Channels

```python
class TeamsManager:
    """Manages Microsoft Teams operations."""
    
    def __init__(self, token_manager):
        self.token_manager = token_manager
        self.base_url = "https://graph.microsoft.com/v1.0"
    
    def create_team(self, display_name: str, description: str = None, visibility: str = "private") -> Dict:
        """
        Create a new Microsoft Team.
        
        Args:
            display_name (str): Name of the team
            description (str, optional): Team description
            visibility (str): Team visibility (private, public)
            
        Returns:
            Dict: Created team information
        """
        token = self.token_manager.get_valid_token()
        
        team_data = {
            "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
            "displayName": display_name,
            "description": description or f"Team for {display_name}",
            "visibility": visibility
        }
        
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/teams",
                headers=headers,
                json=team_data,
                timeout=30
            )
            
            if response.status_code == 202:  # Accepted for async operation
                return {"status": "accepted", "message": "Team creation initiated"}
            else:
                raise TeamsError(f"Team creation failed: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            raise TeamsError(f"Network error: {str(e)}")
    
    def create_channel(self, team_id: str, display_name: str, description: str = None) -> Dict:
        """
        Create a channel in a Microsoft Team.
        
        Args:
            team_id (str): ID of the team
            display_name (str): Name of the channel
            description (str, optional): Channel description
            
        Returns:
            Dict: Created channel information
        """
        token = self.token_manager.get_valid_token()
        
        channel_data = {
            "displayName": display_name,
            "description": description or f"Channel for {display_name}",
            "membershipType": "standard"
        }
        
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/teams/{team_id}/channels",
                headers=headers,
                json=channel_data,
                timeout=30
            )
            
            if response.status_code == 201:
                return response.json()
            else:
                raise TeamsError(f"Channel creation failed: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            raise TeamsError(f"Network error: {str(e)}")
```

## 👥 Group Management

### Create and Manage Groups

```python
class GroupManager:
    """Manages Microsoft 365 groups."""
    
    def __init__(self, token_manager):
        self.token_manager = token_manager
        self.base_url = "https://graph.microsoft.com/v1.0"
    
    def create_group(self, display_name: str, mail_nickname: str, description: str = None) -> Dict:
        """
        Create a new Microsoft 365 group.
        
        Args:
            display_name (str): Display name of the group
            mail_nickname (str): Email alias for the group
            description (str, optional): Group description
            
        Returns:
            Dict: Created group information
        """
        token = self.token_manager.get_valid_token()
        
        group_data = {
            "displayName": display_name,
            "mailNickname": mail_nickname,
            "description": description or f"Group for {display_name}",
            "mailEnabled": True,
            "securityEnabled": False,
            "groupTypes": ["Unified"]
        }
        
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/groups",
                headers=headers,
                json=group_data,
                timeout=30
            )
            
            if response.status_code == 201:
                return response.json()
            else:
                raise GroupCreationError(f"Group creation failed: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            raise GroupCreationError(f"Network error: {str(e)}")
    
    def add_member_to_group(self, group_id: str, user_id: str) -> Dict:
        """
        Add a user to a group.
        
        Args:
            group_id (str): ID of the group
            user_id (str): ID of the user to add
            
        Returns:
            Dict: Operation result
        """
        token = self.token_manager.get_valid_token()
        
        member_data = {
            "@odata.id": f"{self.base_url}/users/{user_id}"
        }
        
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/groups/{group_id}/members/$ref",
                headers=headers,
                json=member_data,
                timeout=30
            )
            
            if response.status_code == 204:
                return {"status": "success", "message": "User added to group"}
            else:
                raise GroupError(f"Failed to add user: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            raise GroupError(f"Network error: {str(e)}")
```

## 👤 User Management

### User Operations

```python
class UserManager:
    """Manages Microsoft 365 users."""
    
    def __init__(self, token_manager):
        self.token_manager = token_manager
        self.base_url = "https://graph.microsoft.com/v1.0"
    
    def get_user_by_email(self, email: str) -> Optional[Dict]:
        """
        Get user information by email address.
        
        Args:
            email (str): Email address of the user
            
        Returns:
            Dict: User information or None if not found
        """
        token = self.token_manager.get_valid_token()
        
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.get(
                f"{self.base_url}/users/{email}",
                headers=headers,
                timeout=30
            )
            
            if response.status_code == 200:
                return response.json()
            elif response.status_code == 404:
                return None
            else:
                raise UserError(f"Failed to retrieve user: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            raise UserError(f"Network error: {str(e)}")
    
    def create_user(self, user_data: Dict) -> Dict:
        """
        Create a new user in Microsoft 365.
        
        Args:
            user_data (Dict): User information including displayName, mailNickname, etc.
            
        Returns:
            Dict: Created user information
        """
        token = self.token_manager.get_valid_token()
        
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/users",
                headers=headers,
                json=user_data,
                timeout=30
            )
            
            if response.status_code == 201:
                return response.json()
            else:
                raise UserCreationError(f"User creation failed: {response.status_code} - {response.text}")
                
        except requests.exceptions.RequestException as e:
            raise UserCreationError(f"Network error: {str(e)}")
```

## ⚠️ Error Handling

### Custom Exception Classes

```python
class M365AutomationError(Exception):
    """Base exception for M365 automation errors."""
    pass

class AuthenticationError(M365AutomationError):
    """Raised when authentication fails."""
    pass

class SharePointError(M365AutomationError):
    """Raised when SharePoint operations fail."""
    pass

class TeamsError(M365AutomationError):
    """Raised when Teams operations fail."""
    pass

class GroupError(M365AutomationError):
    """Raised when group operations fail."""
    pass

class UserError(M365AutomationError):
    """Raised when user operations fail."""
    pass

class SiteCreationError(SharePointError):
    """Raised when site creation fails."""
    pass

class GroupCreationError(GroupError):
    """Raised when group creation fails."""
    pass

class UserCreationError(UserError):
    """Raised when user creation fails."""
    pass

class PermissionError(M365AutomationError):
    """Raised when permission operations fail."""
    pass
```

### Retry Mechanism

```python
from tenacity import retry, stop_after_attempt, wait_exponential

class RetryableOperations:
    """Provides retry mechanisms for API operations."""
    
    @retry(
        stop=stop_after_attempt(5),
        wait=wait_exponential(multiplier=1, min=4, max=10)
    )
    def create_site_with_retry(self, site_data: Dict) -> Dict:
        """
        Create site with automatic retry on failure.
        
        Args:
            site_data (Dict): Site creation data
            
        Returns:
            Dict: Created site information
        """
        # Implementation with retry logic
        pass
```

## 📝 Logging

### Structured Logging Setup

```python
import structlog
import logging
from datetime import datetime

def setup_logging(log_level: str = "INFO", log_file: str = "logs/automation.log"):
    """
    Set up structured logging for the automation suite.
    
    Args:
        log_level (str): Logging level (DEBUG, INFO, WARNING, ERROR)
        log_file (str): Path to log file
    """
    # Configure structlog
    structlog.configure(
        processors=[
            structlog.stdlib.filter_by_level,
            structlog.stdlib.add_logger_name,
            structlog.stdlib.add_log_level,
            structlog.stdlib.PositionalArgumentsFormatter(),
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.StackInfoRenderer(),
            structlog.processors.format_exc_info,
            structlog.processors.UnicodeDecoder(),
            structlog.processors.JSONRenderer()
        ],
        context_class=dict,
        logger_factory=structlog.stdlib.LoggerFactory(),
        wrapper_class=structlog.stdlib.BoundLogger,
        cache_logger_on_first_use=True,
    )
    
    # Configure file handler
    file_handler = logging.FileHandler(log_file)
    file_handler.setLevel(getattr(logging, log_level.upper()))
    
    # Configure console handler
    console_handler = logging.StreamHandler()
    console_handler.setLevel(getattr(logging, log_level.upper()))
    
    # Configure root logger
    root_logger = logging.getLogger()
    root_logger.setLevel(getattr(logging, log_level.upper()))
    root_logger.addHandler(file_handler)
    root_logger.addHandler(console_handler)

# Usage example
logger = structlog.get_logger()

def create_sharepoint_site(site_name: str, display_name: str):
    """Example function with structured logging."""
    logger.info(
        "Creating SharePoint site",
        site_name=site_name,
        display_name=display_name,
        operation="site_creation"
    )
    
    try:
        # Site creation logic here
        result = {"status": "success", "site_id": "12345"}
        logger.info(
            "SharePoint site created successfully",
            site_name=site_name,
            site_id=result["site_id"],
            operation="site_creation"
        )
        return result
        
    except Exception as e:
        logger.error(
            "Failed to create SharePoint site",
            site_name=site_name,
            error=str(e),
            operation="site_creation"
        )
        raise
```

## 🎯 Best Practices

### 1. Error Handling

- Always wrap API calls in try-catch blocks
- Use specific exception types for different error scenarios
- Implement retry mechanisms for transient failures
- Log all errors with sufficient context

### 2. Rate Limiting

- Implement exponential backoff for retries
- Respect Microsoft Graph API rate limits
- Use batch operations when possible
- Monitor API usage and adjust accordingly

### 3. Security

- Never log sensitive information (tokens, passwords)
- Use environment variables for configuration
- Implement proper token refresh mechanisms
- Validate all input data

### 4. Performance

- Use connection pooling for HTTP requests
- Implement caching where appropriate
- Use async operations for bulk operations
- Monitor execution times and optimize

### 5. Testing

- Write unit tests for all functions
- Mock external API calls in tests
- Test error scenarios and edge cases
- Maintain high test coverage

---

**Note**: This API reference provides examples and best practices. Always refer to the [official Microsoft Graph API documentation](https://learn.microsoft.com/en-us/graph/) for the most up-to-date information about endpoints and parameters.
