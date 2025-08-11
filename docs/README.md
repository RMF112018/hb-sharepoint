# Microsoft 365 Automation Suite

A comprehensive automation framework for managing Microsoft 365 and SharePoint resources using the Microsoft Graph API. This project focuses on creating SharePoint team sites and other M365 resources through automated scripts designed for IT staff collaboration.

## 🚀 Project Overview

The Microsoft 365 Automation Suite provides a scalable, modular approach to automating common Microsoft 365 administrative tasks. Built with Python and following best practices for enterprise automation, this suite enables IT teams to:

- Create and manage SharePoint team sites
- Automate group and user provisioning
- Manage Microsoft Teams and channels
- Handle bulk operations with error handling and logging
- Collaborate effectively through version-controlled automation scripts

## 📁 Directory Structure

```
m365-automation/
├── src/                    # Source code for automation scripts
│   ├── auth/              # Authentication and token management
│   ├── sharepoint/         # SharePoint-specific automation modules
│   ├── teams/              # Microsoft Teams automation modules
│   └── utils/              # Common utility functions
├── tests/                  # Unit and integration tests
│   ├── unit/               # Unit tests for individual modules
│   └── integration/        # End-to-end workflow tests
├── docs/                   # Project documentation
│   ├── README.md           # This file
│   ├── setup-guide.md      # Detailed setup instructions
│   └── api-reference.md    # API usage examples
├── config/                 # Configuration files
│   ├── env.example         # Environment variables template
│   └── settings.yaml       # Application settings
├── logs/                   # Log files (not in version control)
├── scripts/                # Standalone utility scripts
└── requirements.txt        # Python dependencies
```

## 🛠️ Prerequisites

Before setting up this project, ensure you have:

- **Python 3.8+** installed on your system
- **Git** for version control
- **Azure AD application** registered with appropriate permissions
- **Microsoft 365 tenant** with admin access
- **SharePoint Online** enabled in your tenant

### Required Azure AD Permissions

Your Azure AD application needs the following Microsoft Graph API permissions:

- `Group.ReadWrite.All` - For creating and managing groups
- `Sites.ReadWrite.All` - For SharePoint site management
- `User.ReadWrite.All` - For user provisioning (if applicable)
- `Team.ReadWrite.All` - For Microsoft Teams management (if applicable)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd m365-automation
```

### 2. Set Up Python Virtual Environment

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

```bash
# Copy the example environment file
cp config/env.example config/.env

# Edit the .env file with your actual values
# Use your preferred text editor to fill in:
# - TENANT_ID
# - CLIENT_ID
# - CLIENT_SECRET
```

### 5. Verify Installation

```bash
# Run basic tests to ensure everything is working
python -m pytest tests/unit/ -v
```

## Authentication Setup

Follow these steps to configure authentication and verify connectivity to Microsoft Graph.

### 1. Obtain Azure AD App Credentials

1. Go to the Azure Portal and open Azure Active Directory.
2. Navigate to App registrations > New registration.
3. Register an app (e.g., "M365 Automation Suite").
4. Record the following from the app's Overview page:
   - Tenant ID (Directory ID)
   - Client ID (Application ID)
5. Go to Certificates & secrets > New client secret, create a secret, and copy its value.
6. Grant required Graph application permissions (e.g., `Organization.Read.All`) and click "Grant admin consent".

### 2. Populate the .env File

1. Copy the example file:
   ```bash
   cp config/env.example config/.env
   ```
2. Open `config/.env` and replace placeholders with your values:
   ```ini
   TENANT_ID=<your-tenant-id>
   CLIENT_ID=<your-client-id>
   CLIENT_SECRET=<your-client-secret>
   ```

### 3. Test Authentication with auth.py

Run the provided authentication script to obtain a token and verify access using a lightweight endpoint (`/organization` for app-only auth):

```bash
python src/auth.py
```

- On success: you'll see "Graph connectivity OK." and a log entry in `logs/auth.log`.
- On failure: check `logs/auth.log` for detailed errors (e.g., invalid credentials, missing consent).

## Running Tests

Follow these steps to run the unit tests for authentication.

### 1. Install Test Dependencies

Install all project dependencies (includes testing packages):

```bash
pip install -r requirements.txt
```

### 2. Run the Tests

Run the `unittest` suite for the authentication module:

```bash
python -m unittest tests/test_auth.py -v
```

Alternatively, run all tests:

```bash
python -m unittest discover -s tests -p "test_*.py" -v
```

### 3. Interpreting Results

- Tests will print PASS/FAIL summaries to the console.
- Detailed logs are written to `logs/test_auth.log` with timestamps.
- If a test fails, review the log file and the error message for guidance.

## 📚 Detailed Setup Guide

For comprehensive setup instructions, including Azure AD application registration and detailed configuration, see [setup-guide.md](setup-guide.md).

## 🔧 Configuration

### Environment Variables

The following environment variables must be configured in your `.env` file:

| Variable | Description | Example |
|----------|-------------|---------|
| `TENANT_ID` | Your Azure AD tenant ID | `12345678-1234-1234-1234-123456789012` |
| `CLIENT_ID` | Azure AD application client ID | `87654321-4321-4321-4321-210987654321` |
| `CLIENT_SECRET` | Azure AD application client secret | `your-secret-here` |
| `GRAPH_API_ENDPOINT` | Microsoft Graph API endpoint | `https://graph.microsoft.com/v1.0` |

### Logging Configuration

Logs are automatically written to the `logs/` directory with the following levels:
- **DEBUG**: Detailed execution information
- **INFO**: General operation status
- **WARNING**: Non-critical issues
- **ERROR**: Critical failures

## 🧪 Testing

### Running Tests

```bash
# Run all tests
python -m pytest

# Run only unit tests
python -m pytest tests/unit/

# Run with coverage report
python -m pytest --cov=src tests/

# Run specific test file
python -m pytest tests/unit/test_auth.py
```

### Test Structure

- **Unit Tests**: Test individual functions and classes in isolation
- **Integration Tests**: Test complete workflows and API interactions
- **Mock Tests**: Use mocked responses to avoid live API calls during development

## 📝 Development Guidelines

### Code Style

This project follows PEP 8 style guidelines:
- 4-space indentation
- 79-character line limits
- Descriptive variable and function names
- Comprehensive docstrings using Google-style format

### Git Workflow

1. **Branch Naming**: Use descriptive branch names (e.g., `feature/sharepoint-site-creation`)
2. **Commit Messages**: Follow the format `type(scope): brief description`
   - Examples: `feat(auth): add token refresh logic`, `fix(sharepoint): resolve site creation timeout`
3. **Pull Requests**: Include detailed descriptions and reference related issues

### Adding New Automation Modules

1. Create a new module in the appropriate `src/` subdirectory
2. Follow the established naming conventions and structure
3. Include comprehensive error handling and logging
4. Write unit tests for all new functionality
5. Update documentation with usage examples

## 🤝 Contributing

We welcome contributions from IT staff and developers! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat(scope): add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Checklist

- [ ] Code follows PEP 8 style guidelines
- [ ] Functions include comprehensive docstrings
- [ ] Error handling is implemented for all external calls
- [ ] Unit tests are written and passing
- [ ] Documentation is updated
- [ ] No sensitive information is committed

## 📖 API Reference

For detailed API usage examples and endpoint documentation, see [api-reference.md](api-reference.md).

## 🐛 Troubleshooting

### Common Issues

1. **Authentication Errors**: Verify your Azure AD application permissions and credentials
2. **Permission Denied**: Ensure your application has the required Microsoft Graph API permissions
3. **Rate Limiting**: Implement exponential backoff for API calls (already included in the framework)

### Getting Help

- Check the logs in the `logs/` directory for detailed error information
- Review the [Microsoft Graph API documentation](https://learn.microsoft.com/en-us/graph/)
- Open an issue in the repository with detailed error logs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- Microsoft Graph API team for comprehensive API documentation
- Python community for excellent libraries and tools
- IT professionals who provided feedback and requirements

---

**Note**: This automation suite is designed for enterprise use. Always test automation scripts in a development environment before running them in production.
