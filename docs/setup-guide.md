# Microsoft 365 Automation Suite - Setup Guide

This comprehensive setup guide walks you through the complete process of configuring the Microsoft 365 Automation Suite for your organization.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Azure AD Application Setup](#azure-ad-application-setup)
3. [Local Development Environment](#local-development-environment)
4. [Configuration](#configuration)
5. [Testing the Setup](#testing-the-setup)
6. [Troubleshooting](#troubleshooting)

## 🎯 Prerequisites

Before beginning the setup process, ensure you have:

### System Requirements

- **Operating System**: Windows 10/11, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Python**: Version 3.8 or higher
- **Git**: Version 2.25 or higher
- **Memory**: Minimum 4GB RAM (8GB recommended)
- **Storage**: At least 1GB free disk space

### Microsoft 365 Requirements

- **Microsoft 365 Business or Enterprise** subscription
- **Global Administrator** or **Application Administrator** role in Azure AD
- **SharePoint Online** enabled in your tenant
- **Microsoft Teams** enabled (if using Teams automation features)

### Network Requirements

- **Internet Access**: Required for Microsoft Graph API calls
- **Firewall**: Ensure outbound HTTPS (443) traffic is allowed
- **Proxy**: Configure if your organization uses web proxies

## 🔐 Azure AD Application Setup

### Step 1: Access Azure Portal

1. Navigate to [Azure Portal](https://portal.azure.com)
2. Sign in with your Microsoft 365 admin account
3. Search for "Azure Active Directory" in the search bar
4. Click on "Azure Active Directory" service

### Step 2: Register New Application

1. In the Azure AD blade, click on "App registrations"
2. Click "New registration"
3. Fill in the application details:
   - **Name**: `M365 Automation Suite` (or your preferred name)
   - **Supported account types**: `Accounts in this organizational directory only`
   - **Redirect URI**: Leave blank for now
4. Click "Register"

### Step 3: Configure API Permissions

1. In your new application, click on "API permissions"
2. Click "Add a permission"
3. Select "Microsoft Graph"
4. Choose "Application permissions"
5. Add the following permissions:
   - `Group.ReadWrite.All`
   - `Sites.ReadWrite.All`
   - `User.ReadWrite.All`
   - `Team.ReadWrite.All`
   - `Directory.ReadWrite.All`
6. Click "Add permissions"
7. **Important**: Click "Grant admin consent for [Your Organization]"

### Step 4: Create Client Secret

1. In your application, click on "Certificates & secrets"
2. Click "New client secret"
3. Add a description (e.g., "Automation Suite Secret")
4. Choose expiration (recommend 24 months for production)
5. Click "Add"
6. **Copy the secret value immediately** - you won't be able to see it again

### Step 5: Note Application Details

Record the following information for later use:
- **Application (client) ID**: Found on the "Overview" page
- **Directory (tenant) ID**: Found on the "Overview" page
- **Client Secret**: The value you copied in Step 4

## 💻 Local Development Environment

### Step 1: Install Python

#### Windows
1. Download Python from [python.org](https://www.python.org/downloads/)
2. Run the installer with "Add Python to PATH" checked
3. Verify installation: `python --version`

#### macOS
```bash
# Using Homebrew (recommended)
brew install python

# Or download from python.org
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv
```

### Step 2: Install Git

#### Windows
1. Download from [git-scm.com](https://git-scm.com/download/win)
2. Run the installer with default settings
3. Verify installation: `git --version`

#### macOS
```bash
# Using Homebrew
brew install git

# Or using Xcode Command Line Tools
xcode-select --install
```

#### Linux
```bash
sudo apt install git
```

### Step 3: Clone the Repository

```bash
# Navigate to your desired directory
cd /path/to/your/projects

# Clone the repository
git clone <your-repository-url>
cd m365-automation

# Verify the structure
ls -la
```

### Step 4: Create Virtual Environment

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Verify activation (should show venv path)
which python
```

### Step 5: Install Dependencies

```bash
# Upgrade pip first
pip install --upgrade pip

# Install project dependencies
pip install -r requirements.txt

# Verify installation
pip list
```

## ⚙️ Configuration

### Step 1: Environment Variables

1. Copy the example environment file:
   ```bash
   cp config/env.example config/.env
   ```

2. Edit the `.env` file with your actual values:
   ```bash
   # Use your preferred text editor
   # Windows: notepad config\.env
   # macOS/Linux: nano config/.env or vim config/.env
   ```

3. Update the following variables:
   ```env
   TENANT_ID=your_actual_tenant_id
   CLIENT_ID=your_actual_client_id
   CLIENT_SECRET=your_actual_client_secret
   ```

### Step 2: Application Settings (Optional)

1. Create `config/settings.yaml` for application-specific settings:
   ```yaml
   # SharePoint site creation settings
   sharepoint:
     default_template: "STS#0"
     time_zone: "UTC"
     locale: "1033"
   
   # Logging configuration
   logging:
     level: "INFO"
     format: "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
   
   # API settings
   api:
     timeout: 30
     max_retries: 5
     retry_delay: 2
   ```

### Step 3: Logging Configuration

1. Ensure the `logs/` directory exists:
   ```bash
   mkdir -p logs
   ```

2. Verify write permissions:
   ```bash
   # Test log file creation
   echo "Test log entry" > logs/test.log
   rm logs/test.log
   ```

## 🧪 Testing the Setup

### Step 1: Basic Python Test

```bash
# Ensure Python is working correctly
python -c "print('Python is working!')"
```

### Step 2: Import Test

```bash
# Test if dependencies can be imported
python -c "
import requests
import msal
import structlog
print('All dependencies imported successfully!')
"
```

### Step 3: Run Unit Tests

```bash
# Install pytest if not already installed
pip install pytest

# Run basic tests
python -m pytest tests/unit/ -v
```

### Step 4: Test Authentication

1. Create a simple test script `test_auth.py`:
   ```python
   import os
   from dotenv import load_dotenv
   
   # Load environment variables
   load_dotenv('config/.env')
   
   # Test environment variable loading
   tenant_id = os.getenv('TENANT_ID')
   client_id = os.getenv('CLIENT_ID')
   client_secret = os.getenv('CLIENT_SECRET')
   
   print(f"Tenant ID: {tenant_id}")
   print(f"Client ID: {client_id}")
   print(f"Client Secret: {'*' * len(client_secret) if client_secret else 'Not set'}")
   ```

2. Run the test:
   ```bash
   python test_auth.py
   ```

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Issue: Python Not Found
**Symptoms**: `python: command not found` or `python3: command not found`

**Solutions**:
- Windows: Ensure Python is added to PATH during installation
- macOS: Use `python3` instead of `python`
- Linux: Install python3 package

#### Issue: Permission Denied
**Symptoms**: `Permission denied` when creating directories or files

**Solutions**:
- Check file permissions: `ls -la`
- Use `sudo` for system directories (Linux/macOS)
- Run as Administrator (Windows)

#### Issue: Virtual Environment Not Activating
**Symptoms**: Python path doesn't change after activation

**Solutions**:
- Ensure you're in the correct directory
- Use the correct activation command for your OS
- Check if virtual environment was created properly

#### Issue: Dependencies Not Installing
**Symptoms**: `pip install` fails with errors

**Solutions**:
- Upgrade pip: `pip install --upgrade pip`
- Check internet connectivity
- Use `--user` flag if permission issues: `pip install --user -r requirements.txt`

#### Issue: Azure AD Authentication Fails
**Symptoms**: 401 Unauthorized or 403 Forbidden errors

**Solutions**:
- Verify application permissions are granted
- Check admin consent was provided
- Ensure client secret hasn't expired
- Verify tenant ID and client ID are correct

### Getting Additional Help

1. **Check Logs**: Review the `logs/` directory for detailed error information
2. **Microsoft Documentation**: Refer to [Microsoft Graph API documentation](https://learn.microsoft.com/en-us/graph/)
3. **Community Support**: Use GitHub Issues for project-specific problems
4. **Azure Support**: Contact Microsoft support for Azure AD issues

## ✅ Setup Verification Checklist

Use this checklist to ensure your setup is complete:

- [ ] Python 3.8+ installed and accessible
- [ ] Git installed and configured
- [ ] Repository cloned successfully
- [ ] Virtual environment created and activated
- [ ] Dependencies installed without errors
- [ ] Azure AD application registered
- [ ] API permissions granted and admin consent provided
- [ ] Client secret created and recorded
- [ ] Environment variables configured in `.env`
- [ ] Logs directory created and writable
- [ ] Basic tests passing
- [ ] Authentication test successful

## 🚀 Next Steps

After completing the setup:

1. **Review Documentation**: Read the [API Reference](api-reference.md) for usage examples
2. **Explore Examples**: Check the `scripts/` directory for sample automation scripts
3. **Start Developing**: Begin creating your own automation modules in the `src/` directory
4. **Join the Community**: Contribute to the project and help improve the automation suite

---

**Important**: Always test automation scripts in a development environment before running them in production. The setup process creates a foundation for safe and effective automation development.
