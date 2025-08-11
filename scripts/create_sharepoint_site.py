#!/usr/bin/env python3
"""
SharePoint Site Creation Script

This script demonstrates how to use the Microsoft 365 Automation Suite
to create a new SharePoint team site.

Usage:
    python create_sharepoint_site.py --site-name "project-alpha" --display-name "Project Alpha"
    
Requirements:
    - Valid Azure AD application credentials in config/.env
    - Appropriate Microsoft Graph API permissions
"""

import argparse
import logging
import sys
import os
from pathlib import Path

# Add src directory to Python path
sys.path.insert(0, str(Path(__file__).parent.parent / "src"))

from auth.authenticator import M365Authenticator, AuthenticationError
from sharepoint.manager import SharePointManager, SiteCreationError


def setup_logging():
    """Set up logging configuration."""
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler('logs/site_creation.log'),
            logging.StreamHandler(sys.stdout)
        ]
    )


def parse_arguments():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(
        description="Create a new SharePoint team site",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
    python create_sharepoint_site.py --site-name "project-alpha" --display-name "Project Alpha"
    python create_sharepoint_site.py --site-name "hr-team" --display-name "HR Team" --description "Human Resources team site"
        """
    )
    
    parser.add_argument(
        '--site-name',
        required=True,
        help='URL-friendly name for the site (e.g., "project-alpha")'
    )
    
    parser.add_argument(
        '--display-name',
        required=True,
        help='Human-readable display name for the site'
    )
    
    parser.add_argument(
        '--description',
        help='Optional description for the site'
    )
    
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be created without actually creating the site'
    )
    
    return parser.parse_args()


def validate_site_name(site_name: str) -> bool:
    """
    Validate the site name format.
    
    Args:
        site_name (str): Site name to validate
        
    Returns:
        bool: True if valid, False otherwise
    """
    # SharePoint site names must be URL-friendly
    import re
    pattern = r'^[a-z0-9-]+$'
    
    if not re.match(pattern, site_name):
        return False
    
    if len(site_name) < 3 or len(site_name) > 63:
        return False
    
    return True


def main():
    """Main execution function."""
    # Set up logging
    setup_logging()
    logger = logging.getLogger(__name__)
    
    try:
        # Parse command line arguments
        args = parse_arguments()
        
        # Validate site name
        if not validate_site_name(args.site_name):
            logger.error(
                f"Invalid site name '{args.site_name}'. "
                "Site names must be 3-63 characters long and contain only lowercase letters, numbers, and hyphens."
            )
            sys.exit(1)
        
        # Display what will be created
        logger.info("SharePoint Site Creation Script")
        logger.info("=" * 40)
        logger.info(f"Site Name: {args.site_name}")
        logger.info(f"Display Name: {args.display_name}")
        if args.description:
            logger.info(f"Description: {args.description}")
        logger.info(f"Dry Run: {args.dry_run}")
        logger.info("=" * 40)
        
        if args.dry_run:
            logger.info("DRY RUN MODE - No site will be created")
            return
        
        # Initialize authentication
        logger.info("Initializing authentication...")
        try:
            authenticator = M365Authenticator()
            logger.info("Authentication initialized successfully")
            
            # Validate credentials
            if not authenticator.validate_credentials():
                logger.error("Credential validation failed. Please check your configuration.")
                sys.exit(1)
            
        except AuthenticationError as e:
            logger.error(f"Authentication failed: {str(e)}")
            sys.exit(1)
        
        # Initialize SharePoint manager
        logger.info("Initializing SharePoint manager...")
        sharepoint_manager = SharePointManager(authenticator)
        
        # Create the site
        logger.info(f"Creating SharePoint site '{args.display_name}'...")
        try:
            site_result = sharepoint_manager.create_team_site(
                site_name=args.site_name,
                display_name=args.display_name,
                description=args.description
            )
            
            logger.info("SharePoint site created successfully!")
            logger.info(f"Site ID: {site_result.get('id', 'N/A')}")
            logger.info(f"Site URL: {site_result.get('webUrl', 'N/A')}")
            logger.info(f"Site Name: {site_result.get('displayName', 'N/A')}")
            
        except SiteCreationError as e:
            logger.error(f"Failed to create SharePoint site: {str(e)}")
            sys.exit(1)
        
        logger.info("Script completed successfully!")
        
    except KeyboardInterrupt:
        logger.info("Script interrupted by user")
        sys.exit(1)
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        sys.exit(1)


if __name__ == "__main__":
    main()
