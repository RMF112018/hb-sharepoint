"""
SharePoint Module for Microsoft 365 Automation Suite

This module provides SharePoint-specific automation operations including:
- Site creation and management
- Document library operations
- Permission management
- Site configuration
"""

from .manager import SharePointManager

__all__ = ['SharePointManager']
