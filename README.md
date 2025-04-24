# Service Library Template

Welcome to the Service Library Template repository. This template provides a structured foundation for building microservice libraries that encapsulate reusable functions and types. Published as a private package on npm via the GitLab registry, these libraries can be easily consumed by other services in your ecosystem.

## Overview 

A Service Library is a modular collection of code designed for specific microservices. This repository is structured to help you quickly bootstrap your own library while adhering to best practices for versioning, CI/CD, and development workflows.

## Getting Started

Follow these steps to create a new service library:

1. Fork this repository
2. Update the following files:
   - package.json: Change the name to `@flxfleet-backend-apps/<service-name>-lib`
   - vite.config.ts: Update the library name to `<service-name>-lib`
3. Set up GitLab CI/CD:
   - Rename `.gitlab-ci.yml.example` to `.gitlab-ci.yml`
   - Add the required CI/CD environment variables in GitLab:
     - GITLAB_TOKEN: Personal access token for GitLab (ensure it's available for all branches)

## Local Development

1. Install global dependencies:
```bash
npm install -g dotenv-cli```

2. Create a .env file using .env.example as a template:
env
`GITLAB_TOKEN=your_gitlab_token_here`

3. Install dependencies
```bash
npm run auth-install
```


## Versioning and Deployment

The library uses semantic versioning with automatic version increments based on commit messages:

- feat: Minor version (1.0.0 -> 1.1.0)
- All these will increment patch version (1.0.0 -> 1.0.1):
    - fix:
    - perf:
    - refactor:
    - style:
    - docs:
    - test:
    - ci:
    - build:
    - deps:
    - chore:
    - scope: "security"
- BREAKING CHANGE: Major version bump (1.0.0 -> 2.0.0)

## Development Workflow
1. Create a feature branch from main branch
2. Make your changes
3. Commit your changes using conventional commit format:

```bash
# For new features
feat(scope): add new functionality

# For bug fixes
fix(scope): resolve issue

# For breaking changes
feat(scope)!: completely new API

BREAKING CHANGE: description of breaking changes

```
example

```bash
# Minor version bump (1.0.0 -> 1.1.0)
feat(auth): add new login system

# Patch version bump (1.1.0 -> 1.1.1)
fix(auth): correct token validation
refactor(db): optimize queries
style(ui): format code
docs(api): update documentation
perf(cache): improve caching

# Major version bump (1.1.1 -> 2.0.0)
feat!: completely new API structure
# or
feat(api): new structure

BREAKING CHANGE: Complete API overhaul
```
4. Create a merge request to main
5. When merging, use squash commits with a semantic commit message

The CI/CD pipeline will automatically:
- Run tests and linting
- Generate changelog
- Increment version based on commit messages
- Publish to Gitlab registry

## Installing Private Packages
To install private packages from our GitLab registry:
```bash
npm run auth-install <package-name>
```


### Troubleshooting
If you encounter authentication issues:
1. Verify your GITLAB_TOKEN has correct permissions
2. Ensure .npmrc is properly configured
3. Try clearing npm cache: `npm cache clean --force`