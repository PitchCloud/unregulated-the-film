# Local Development Setup Guide

UnregulatedTheFilm.com - How to Set Up Your Development Environment

---

## Overview

This guide walks you through setting up **UnregulatedTheFilm.com** for local development. The project is a static website built with HTML, CSS, and JavaScript, hosted on GitHub and deployed to Hostinger.

**What you'll have after setup:**
- Local copy of the project on your computer
- Development server running for testing
- Configuration file ready for your settings
- All systems ready for making changes

---

## Prerequisites

Before you start, make sure you have the following installed:

### Required Tools

1. **Git** — Version control system
   - Download: https://git-scm.com/download
   - Verify: Open Terminal/Command Prompt and type `git --version`
   - Expected output: `git version 2.x.x` (version 2.x or higher)

2. **A Code Editor** — For editing HTML, CSS, and JavaScript
   - Recommended: [VS Code](https://code.visualstudio.com/) (free)
   - Alternatives: Sublime Text, Atom, or any text editor
   - For VS Code, install the "Live Server" extension (search in Extensions panel)

3. **A Web Browser** — For testing the site
   - Recommended: Google Chrome or Firefox (latest version)
   - You'll use this to view the local site as you make changes

4. **Python 3** (Optional, for running a web server)
   - Download: https://www.python.org/downloads/
   - Verify: Open Terminal/Command Prompt and type `python3 --version`
   - Expected output: `Python 3.x.x` (version 3.x or higher)
   - Only needed if you don't use VS Code Live Server or Node.js

### Account Requirements

- **GitHub account** — https://github.com/signup (free)
- Access to the UnregulatedTheFilm repository (you should have been invited)

---

## Installation Steps

### Step 1: Clone the Repository

Open Terminal (Mac/Linux) or Command Prompt (Windows) and run:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/unregulated-the-film.git
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

**What this does:**
- Downloads the entire project to your computer
- Creates a folder called `unregulated-the-film/`

**Navigate to the project:**

```bash
cd unregulated-the-film
```

### Step 2: Copy and Configure the Config File

The project uses a configuration file to store settings (API endpoints, analytics IDs, social media links, etc.).

**Copy the template:**

```bash
cp config/config.example.js config/config.js
```

Or manually:
1. Open `config/config.example.js` in your editor
2. Save it as `config/config.js` in the same folder

**Edit the config file:**

Open `config/config.js` and update these settings:

```javascript
const CONFIG = {
  environment: 'development', // Keep as 'development' for local testing
  
  analytics: {
    googleAnalyticsId: 'G_YOUR_GA_ID_HERE', // Replace with actual GA ID when ready
  },
  
  social: {
    facebook: 'https://facebook.com/unregulatedthefilm',
    instagram: 'https://instagram.com/unregulatedthefilm',
    twitter: 'https://twitter.com/unregulatedfilm',
    youtube: 'https://youtube.com/unregulatedthefilm',
  },
  
  contact: {
    email: 'info@unregulatedthefilm.com',
  },
  // ... other settings
};
```

**Important:** The `config/config.js` file is listed in `.gitignore` and will never be committed to GitHub. Keep your API keys and personal settings safe here.

---

## Running Locally

Choose one of the three methods below. **Method 1 (VS Code Live Server)** is recommended for beginners.

### Method 1: VS Code Live Server (Recommended)

**Setup:**
1. Open the project in VS Code: `File → Open Folder` → Select the `unregulated-the-film` folder
2. Install the "Live Server" extension:
   - Click the Extensions icon (square icon on left sidebar)
   - Search for "Live Server"
   - Click "Install" (look for the one by Ritwick Dey)

**Run the site:**
1. Right-click on `index.html` in the file explorer
2. Select "Open with Live Server"
3. Your browser automatically opens to `http://localhost:5500`

**Stop the server:**
- Click the "Go Live" button in the bottom-right corner to toggle it off

### Method 2: Python 3 (Built-In)

**Start the server:**

```bash
# Mac/Linux
python3 -m http.server 8000

# Windows (if "python3" doesn't work, try "python")
python -m http.server 8000
```

**Access the site:**
- Open your browser to `http://localhost:8000`

**Stop the server:**
- Press `Ctrl+C` in the Terminal/Command Prompt

### Method 3: Node.js/npm (For Future Build Tools)

If the project adds build tools (Webpack, Vite, etc.), installation instructions will be added. For now, this is not needed.

---

## Configuration Setup

### Analytics Setup

To enable Google Analytics tracking:

1. Go to https://analytics.google.com/
2. Create a new Property for UnregulatedTheFilm.com
3. Copy your **Measurement ID** (format: `G_XXXXXXXXXX`)
4. Update `config/config.js`:

```javascript
analytics: {
  enabled: true,
  googleAnalyticsId: 'G_YOUR_MEASUREMENT_ID', // Paste your ID here
  trackingEnabled: true,
}
```

### Social Media Links

Update the social media URLs in `config/config.js` to match your accounts:

```javascript
social: {
  facebook: 'https://facebook.com/your-page',
  instagram: 'https://instagram.com/your-handle',
  twitter: 'https://twitter.com/your-handle',
  youtube: 'https://youtube.com/your-channel',
}
```

### Feature Flags

Control which features are enabled/disabled in `config/config.js`:

```javascript
features: {
  emailCapture: true,      // Enable/disable newsletter signups
  socialSharing: true,     // Enable/disable social share buttons
  comments: true,          // Enable/disable comments (future)
  userAccounts: false,     // Enable when user accounts are ready
  premiumContent: false,   // Enable when paid content is ready
}
```

---

## Testing Checklist

After setting up, verify everything works:

### Visual Inspection
- [ ] Open the site in your browser (localhost)
- [ ] Scroll through all sections (Hero, Story, Support, Merch, HOA Network, Footer)
- [ ] Check that all text displays correctly
- [ ] Verify images load properly
- [ ] Test that the video hero plays (with sound off)

### Navigation Testing
- [ ] Click "About the Film" — scrolls to "The Story" section
- [ ] Click "Donate" — scrolls to "Support This Documentary" section
- [ ] Click "Merch" — scrolls to "Official Merchandise" section
- [ ] Click "HOA Network" — links to external site or placeholder

### Responsive Design
- [ ] Open DevTools: Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
- [ ] Click the device icon (top-left of DevTools) to toggle "Device Toolbar"
- [ ] Test on these viewport sizes:
  - **Mobile:** 375px wide (iPhone)
  - **Tablet:** 768px wide (iPad)
  - **Desktop:** 1200px+ wide
- [ ] Check that layout stacks correctly and buttons are tappable

### Forms Testing
- [ ] Try the newsletter signup (sticky footer)
- [ ] Enter an invalid email → should show error
- [ ] Enter a valid email → should show success message
- [ ] Try closing the sticky footer → cookie should remember for 7 days

### Browser Compatibility
- [ ] Test in Chrome (latest)
- [ ] Test in Firefox (latest)
- [ ] Test in Safari (latest, if you're on Mac)
- [ ] Verify no JavaScript errors (check DevTools Console)

### Performance
- [ ] Open DevTools Network tab
- [ ] Refresh the page
- [ ] Check total page load time (target: < 3 seconds)
- [ ] Look for any failed requests (red items in Network tab)

---

## Git Workflow

### Before Making Changes

Always start with the latest code:

```bash
git pull origin main
```

### Making Changes

1. **Create a feature branch** (don't work directly on `main`):

```bash
git checkout -b feature/your-feature-name
```

Example: `git checkout -b feature/add-newsletter-form`

2. **Make your changes** in your code editor

3. **Test your changes** locally (open in browser, check all sections work)

4. **Check what you changed:**

```bash
git status
```

This shows modified files.

5. **Stage your changes:**

```bash
# Stage specific files
git add path/to/file.html path/to/file.css

# Or stage all changes
git add .
```

6. **Commit with a descriptive message:**

```bash
git commit -m "feat: add newsletter signup form styling"
```

**Commit message format:**
- `feat:` — New feature or functionality
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — CSS or formatting (no logic change)
- `refactor:` — Code improvement (same functionality)

7. **Push to GitHub:**

```bash
git push origin feature/your-feature-name
```

8. **Open a Pull Request (PR):**
   - Go to GitHub repository
   - Click "Pull requests" tab
   - Click "New pull request"
   - Select your branch and click "Create pull request"
   - Write a description of your changes
   - Click "Create pull request"

### Code Review & Merging

1. Share the PR link with the team for review
2. Address any feedback or requested changes
3. Once approved, click "Merge pull request" on GitHub
4. Delete the branch after merging

### Keeping Your Branch Updated

If `main` gets updates while you're working:

```bash
git fetch origin
git rebase origin/main
```

Or if you have uncommitted changes, stash them first:

```bash
git stash
git rebase origin/main
git stash pop
```

---

## Troubleshooting

### Site won't load in browser

**Problem:** Blank page or "Cannot GET /"

**Solution:**
1. Make sure your local server is running (check the Terminal)
2. Check you're visiting the correct URL:
   - VS Code Live Server: `http://localhost:5500`
   - Python: `http://localhost:8000`
3. Try refreshing the page (`Ctrl+R` or `Cmd+R`)
4. Check for red errors in DevTools Console (`F12`)

### JavaScript errors in Console

**Problem:** Errors like "CONFIG is not defined" or "Cannot read property..."

**Solution:**
1. Verify `config/config.js` exists and is in the right location
2. Check that `index.html` includes the config before other scripts:
   ```html
   <script src="config/config.js"></script>
   <script src="js/main.js"></script>
   ```
3. Reload the page

### Git clone fails

**Problem:** "Permission denied" or "repository not found"

**Solution:**
1. Verify you're invited to the GitHub repository
2. Check your GitHub authentication:
   - Mac/Linux: Check SSH keys are set up
   - All platforms: Or use HTTPS with a Personal Access Token
3. Try this command:
   ```bash
   git clone https://github.com/YOUR_USERNAME/unregulated-the-film.git
   ```

### Config file not found

**Problem:** Browser console shows "CONFIG is not defined"

**Solution:**
1. Make sure you created `config/config.js` (not just `config.example.js`)
2. Check the file path is correct: `config/config.js`
3. Verify the file has content (not empty)

### Live Server extension not working

**Problem:** "Open with Live Server" option doesn't appear

**Solution:**
1. Install the extension again (search "Live Server" in VS Code Extensions)
2. Reload VS Code (Press `Ctrl+Shift+P` → type "Reload Window")
3. Try right-clicking on `index.html` again

---

## Quick Reference Commands

```bash
# Clone the project
git clone https://github.com/YOUR_USERNAME/unregulated-the-film.git

# Navigate into project
cd unregulated-the-film

# Copy config template
cp config/config.example.js config/config.js

# Start Python server
python3 -m http.server 8000

# Check git status
git status

# Create a new branch
git checkout -b feature/your-feature

# Commit changes
git commit -m "feat: description of changes"

# Push to GitHub
git push origin feature/your-feature

# Update from main
git pull origin main
```

---

## Next Steps

1. **Complete the testing checklist** above
2. **Create your first feature branch** and make a small change (try updating some text)
3. **Push to GitHub** and open a Pull Request
4. **Read DEPLOYMENT.md** when ready to launch the site
5. **Read TEMPLATE_GUIDE.md** to understand how to customize for future films

---

## Getting Help

- **GitHub Issues:** Open an issue on the repository if you encounter problems
- **VS Code Docs:** https://code.visualstudio.com/docs
- **Git Docs:** https://git-scm.com/doc
- **Python HTTP Server:** https://docs.python.org/3/library/http.server.html

---

**Last Updated:** June 9, 2026  
**Maintained By:** UnregulatedTheFilm Team
