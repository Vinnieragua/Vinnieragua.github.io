# AGENTS.MD

This file contains instructions and context for future AI agents working on this website project.

## Project Overview
This is a personal website repository hosted at `Vinnieragua.github.io`. The site is deployed via GitHub Pages.

## Development Environment
- **Platform**: Windows (win32)
- **Working Directory**: `C:\Users\Gebruiker\Documents\website\Vinnieragua.github.io`
- **Git Path**: `C:\Program Files\Git\bin\git.exe` (use full path for git commands)
- **Git Remote**: `https://github.com/Vinnieragua/Vinnieragua.github.io.git`

## Available Commands
When working on this project, use these commands:

### Git Operations
```bash
# Always use the full git path
"C:\Program Files\Git\bin\git.exe" status
"C:\Program Files\Git\bin\git.exe" add .
"C:\Program Files\Git\bin\git.exe" commit -m "commit message"
"C:\Program Files\Git\bin\git.exe" push
"C:\Program Files\Git\bin\git.exe" pull
```

### File Operations
- Use the standard file tools (read, write, edit, glob, grep)
- Directory listing: `dir` (Windows command)
- Navigation: `cd "path"`

## Project Structure
- Root: Website files and assets
- `test-commit.txt`: Test file for git operations (can be removed)
- Additional directories may be added as the project grows

## Commit Guidelines
- Only commit when explicitly requested by the user
- Use clear, concise commit messages
- Always check git status before committing
- Verify push was successful

## Testing
- No specific test framework is currently configured
- Check for `package.json` or similar files to determine testing setup if added later

## Deployment
- Site is automatically deployed via GitHub Pages when pushing to main branch
- No additional build steps required unless specified in project files

## Notes
- User has GitHub Desktop installed
- Git commands must use full path on this system
- Working directory should always be set to the project root when executing commands