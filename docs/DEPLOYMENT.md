# Deployment Guide: Hostinger Setup

UnregulatedTheFilm.com - How to Deploy to Hostinger

---

## Overview

This guide walks you through deploying **UnregulatedTheFilm.com** from GitHub to **Hostinger** hosting. The site is static (HTML, CSS, JavaScript), so deployment is straightforward.

**What you'll have after deployment:**
- Live website accessible at unregulatedthefilm.com
- Domain configured and pointing to Hostinger
- Automatic updates via GitHub or manual FTP uploads
- SSL certificate (HTTPS) active and secure

---

## Prerequisites

Before deploying, you need:

1. **Hostinger Account**
   - Sign up at https://hostinger.com/
   - Purchase a hosting plan (recommended: **Premium Hosting** for WordPress-like flexibility)
   - Purchase the domain `unregulatedthefilm.com` (or transfer existing domain)

2. **GitHub Repository**
   - Project pushed to https://github.com/YOUR_USERNAME/unregulated-the-film
   - Repository is public or you have access
   - All code is committed and ready to deploy

3. **FTP Client (Optional, for Method 2)**
   - Filezilla (free): https://filezilla-project.org/
   - Or any FTP/SFTP client

4. **Admin Access to Hostinger**
   - Email and password for Hostinger control panel
   - Ability to manage files, domains, and SSL

---

## Hostinger Setup

### Step 1: Create/Purchase Hosting Plan

1. Log in to Hostinger at https://hpanel.hostinger.com/
2. If you don't have hosting yet:
   - Click "New Account" or "Purchase Hosting"
   - Select **Premium Hosting** plan (recommended for flexibility)
   - Choose your billing cycle (annually saves money)
   - Complete purchase

3. Navigate to your hosting dashboard

### Step 2: Add Your Domain

**If you purchased the domain with Hostinger:**
- It's already configured
- Skip to Step 3

**If you're transferring a domain:**
1. Go to **Domains** section in Hostinger
2. Click "Add Domain"
3. Follow the transfer process
4. Update DNS at your old registrar to point to Hostinger

**If you're using a subdomain (e.g., unregulated.yourdomain.com):**
1. Go to **Domains** section
2. Click "Manage" on your main domain
3. Add a subdomain pointing to your hosting account

### Step 3: Set Up SSL Certificate

1. In Hostinger control panel, go to **Domains** → select your domain
2. Click "SSL/TLS Certificate"
3. Hostinger usually provides a **free Let's Encrypt certificate**
4. Click "Install" or "Generate"
5. Wait for it to activate (usually instant, sometimes up to 24 hours)

**Verify SSL is working:**
- Visit https://unregulatedthefilm.com (note the `https://`)
- You should see a green lock icon in your browser

### Step 4: Configure DNS (If Needed)

If you're managing DNS elsewhere:

1. In Hostinger, go to **Domains** → **Manage DNS**
2. Copy the **Nameservers** or **A Records** provided by Hostinger
3. Go to your domain registrar (GoDaddy, Namecheap, etc.)
4. Update the DNS to point to Hostinger's nameservers
5. Wait for DNS to propagate (can take up to 48 hours)

---

## Deployment Methods

Choose one of two methods: **Git-based (Automatic)** or **FTP Upload (Manual)**.

### Method 1: GitHub Integration (Recommended)

This method automatically deploys your site when you push to GitHub.

#### 1A: Enable GitHub Integration in Hostinger

1. Log in to Hostinger control panel
2. Go to **Website** → **Git**
3. Click "Connect with GitHub" or "Authorize GitHub"
4. Select your GitHub account
5. Select the repository: `unregulated-the-film`
6. Select the branch: `main`
7. Set the **Public HTML Folder** to `/` (root directory)
   - This tells Hostinger where your site files are
   - For this project, all files are in the root, so use `/`

8. Click "Deploy" or "Connect"

**What this does:**
- Clones your GitHub repository to Hostinger
- Watches for new commits to the `main` branch
- Automatically redeploys when you push updates

#### 1B: Deploy Updates

From now on, deploying is simple:

1. Make changes locally and test them (see SETUP.md)
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "fix: update hero video link"
   git push origin main
   ```

3. Within seconds to a few minutes, Hostinger automatically deploys your changes
4. Visit https://unregulatedthefilm.com to see the updates live

#### 1C: Monitor Deployments

In Hostinger control panel:
1. Go to **Website** → **Git**
2. Click on your repository
3. You'll see a list of recent deployments
4. Green checkmark = successful deployment
5. Red X = deployment failed (check error message)

#### 1D: Redeploy a Previous Version (If Something Breaks)

1. In Hostinger Git panel, click on a previous deployment
2. Click "Redeploy"
3. The previous version goes live

**Or from GitHub:**
```bash
# If you need to revert the last commit
git revert HEAD
git push origin main
# Hostinger will auto-deploy the reverted version
```

---

### Method 2: Manual FTP Upload

Use this if you prefer manual control or GitHub integration isn't available.

#### 2A: Get FTP Credentials

1. Log in to Hostinger control panel
2. Go to **Account** → **FTP/SSH Accounts**
3. Create a new FTP account or use the default
4. Note down:
   - **Hostname:** Usually `ftp.your-domain.com` or an IP address
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** Usually `21` for FTP or `22` for SFTP

#### 2B: Connect via FTP Client

1. Open Filezilla or your FTP client
2. Go to **File** → **Site Manager**
3. Create a new site with:
   - **Host:** `ftp.your-domain.com` (or the hostname from above)
   - **Protocol:** FTP or SFTP
   - **User:** Your FTP username
   - **Password:** Your FTP password
4. Click "Connect"

#### 2C: Upload Files

1. In your FTP client:
   - **Left side:** Your local `unregulated-the-film` folder
   - **Right side:** Hostinger's public HTML folder (usually `/public_html` or `/`)

2. Select all files from your local folder:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `images/` folder
   - `config/` folder (only `config.example.js`, NOT `config.js`)
   - `docs/` folder

3. Drag and drop to the right side, or right-click → "Upload"

4. Wait for upload to complete (usually takes a minute or two)

#### 2D: Verify Upload

1. Visit https://unregulatedthefilm.com in your browser
2. Verify all pages load correctly
3. Check for missing images or CSS
4. Test responsive design (open DevTools, toggle device toolbar)

#### 2E: Update Config on Server

The `config/config.js` file is gitignored (not in GitHub). You need to create it manually on Hostinger:

1. In your FTP client, navigate to `/public_html/config/`
2. Right-click → "Create New File" → name it `config.js`
3. Or upload `config.example.js`, rename it to `config.js`, then edit it

4. Double-click the file to open in a text editor
5. Copy the contents of `config.example.js`
6. Update for production:
   ```javascript
   const CONFIG = {
     environment: 'production', // Change to 'production'
     
     analytics: {
       googleAnalyticsId: 'G_YOUR_PRODUCTION_GA_ID', // Your GA ID
       trackingEnabled: true,
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

7. Save the file

#### 2F: Deploy Updates

Each time you update the site:

1. Make changes locally and test
2. Connect to FTP (Filezilla remembers your connection)
3. Upload changed files
4. Refresh your browser to see updates

---

## Domain Configuration

### Step 1: Point Domain to Hostinger

If your domain is registered elsewhere (GoDaddy, Namecheap, etc.):

1. Log in to your domain registrar's control panel
2. Find **Nameservers** or **DNS Settings**
3. Update to Hostinger's nameservers:
   - These are shown in your Hostinger control panel under **Domains** → **Nameservers**
   - Usually something like:
     ```
     ns1.hostinger.com
     ns2.hostinger.com
     ```
4. Save the changes
5. Wait 24-48 hours for DNS to propagate

**Check if DNS is propagated:**
```bash
nslookup unregulatedthefilm.com
# Or
dig unregulatedthefilm.com
```

### Step 2: Set Up Subdomains (Optional)

If you want `www.unregulatedthefilm.com` or other subdomains:

1. In Hostinger **Domains** → **DNS Settings**
2. Add an **A Record** or **CNAME** for:
   - `www` → Points to same IP as main domain
   - `blog` → Points to blog subdomain
   - `api` → Points to API server (if needed later)

---

## Post-Deployment Checklist

After deploying, verify everything works:

### Accessibility
- [ ] Visit https://unregulatedthefilm.com (should redirect to `www` version or vice versa)
- [ ] All pages load without errors
- [ ] No broken links (all internal links work)
- [ ] Images display correctly

### Design & Layout
- [ ] Desktop layout looks correct (1200px+)
- [ ] Tablet layout works (768px-1199px)
- [ ] Mobile layout responsive (< 768px)
- [ ] All sections visible (Hero, Story, Support, Merch, HOA Network, Footer)

### Functionality
- [ ] Navigation links scroll to correct sections
- [ ] Video hero plays (muted, looping)
- [ ] Newsletter signup form accepts email
- [ ] Donation button links correctly
- [ ] Merch link goes to correct shop
- [ ] Social media links work

### Performance
- [ ] Page loads in < 3 seconds
- [ ] Open DevTools Network tab, check for failed requests
- [ ] Check Lighthouse score (DevTools → Lighthouse)
  - Target: Performance 80+, Accessibility 90+

### Security
- [ ] HTTPS works (green lock icon)
- [ ] Check for mixed content warnings (if any)
- [ ] No console errors (DevTools → Console)

### SEO
- [ ] Meta title is correct in browser tab
- [ ] Meta description appears in search results preview
- [ ] Open Graph tags work (test on Facebook share dialog)
- [ ] Structured data is valid (test at https://schema.org/validator)

### Analytics
- [ ] Google Analytics is configured and recording page views
- [ ] Events are tracking (if implemented)

---

## Troubleshooting

### Site shows "Coming Soon" or Hostinger Placeholder

**Problem:** You see a default Hostinger page instead of your site

**Solution:**
1. Make sure files were uploaded to the correct directory (public_html)
2. Check that `index.html` exists in the root
3. Clear your browser cache (`Ctrl+Shift+Delete`)
4. Check Hostinger control panel to verify the domain is pointing to your hosting

### 404 Errors on All Pages

**Problem:** Files not found, nothing loads

**Solution:**
1. Verify files were uploaded to `/public_html` or `/public` (depending on Hostinger)
2. Use FTP to navigate to the root and check files are there
3. Verify permissions are correct (usually 644 for files, 755 for folders)

### GitHub Deployment Fails

**Problem:** Hostinger Git panel shows a red X

**Solution:**
1. Check the error message in Hostinger Git panel
2. Common issues:
   - Repository is private but Hostinger can't access it → Make it public or create a deploy key
   - Public HTML folder is set incorrectly → Should be `/` for this project
   - Branch doesn't exist → Make sure you're deploying `main`, not `master`

### Config.js Not Found / CONFIG is Undefined

**Problem:** Browser console shows "CONFIG is not defined"

**Solution:**
1. Create `config/config.js` on the server (via FTP or Hostinger file manager)
2. Make sure it's in `/public_html/config/config.js`
3. Use the production values (see Method 2E above)

### HTTPS Not Working / Mixed Content Warnings

**Problem:** Site loads but shows warnings, or won't load over HTTPS

**Solution:**
1. In Hostinger control panel, go to **Domains** → your domain
2. Click "SSL/TLS Certificate" and ensure it's installed
3. In your HTML, use relative URLs or `https://` for all external resources
4. Check that videos and external links use `https://`
5. Clear browser cache and try again

### Domain Points to Old Site / DNS Issues

**Problem:** Domain still shows old content after deployment

**Solution:**
1. Wait 24-48 hours for DNS to propagate fully
2. Check DNS is pointed to Hostinger:
   ```bash
   nslookup unregulatedthefilm.com
   ```
   Should show Hostinger's IP address
3. If still wrong, check Hostinger control panel **Domains** → **Nameservers**
4. Verify changes were saved at your domain registrar

### FTP Upload Slow or Fails

**Problem:** Files won't upload, connection drops, or very slow

**Solution:**
1. Try SFTP instead of FTP (more stable)
2. Upload in smaller batches instead of all at once
3. Check your internet connection
4. Try a different FTP client (Filezilla alternative: WinSCP, Cyberduck)

---

## Updating the Site

### If Using GitHub Integration (Method 1)

**To update:**
1. Make changes locally
2. Test on your machine (see SETUP.md)
3. Commit and push:
   ```bash
   git add .
   git commit -m "fix: update description"
   git push origin main
   ```
4. Hostinger automatically deploys within seconds

**To rollback:**
1. Go to Hostinger Git panel
2. Find the deployment before the broken one
3. Click "Redeploy" to restore that version

### If Using Manual FTP (Method 2)

**To update:**
1. Make changes locally
2. Test on your machine
3. Connect via FTP
4. Upload changed files
5. Refresh browser

**To rollback:**
- Keep a backup of the working version locally
- Re-upload those files via FTP

---

## Maintenance

### Regular Tasks

- **Weekly:** Check that site loads, forms work, links are valid
- **Monthly:** Review analytics, check for broken links, test on different browsers
- **Before major updates:** Backup your files (download via FTP)
- **After deploying:** Verify on mobile, tablet, and desktop

### Updating Content

To change text, images, or video:
1. Edit the HTML file locally
2. Test in your browser (see SETUP.md)
3. Deploy via GitHub or FTP (see above)

### Adding New Pages

If you want to add pages beyond the single-page design:
1. Create a new HTML file (e.g., `about.html`)
2. Copy the header and footer from `index.html`
3. Add your content
4. Link from navigation or other pages
5. Deploy to Hostinger

---

## Performance Optimization

After deployment, improve loading speed:

### Images
- Use optimized image formats (WebP with fallbacks)
- Compress images (tools: TinyPNG, ImageOptim)
- Use responsive images (`srcset`) for different screen sizes

### Caching
- In Hostinger control panel, enable **Caching**
- Set browser cache to 30 days
- Enable server-side caching

### CDN (Content Delivery Network)
- For faster global loading, consider CloudFlare (free tier available)
- Improves performance for international visitors

### Minification
- Minify CSS and JavaScript (future optimization)
- Reduce file sizes for faster loading

---

## Security Best Practices

### Protect Your Site

1. **HTTPS:** Always use (enabled via SSL certificate, already done)
2. **Regular backups:** Download files via FTP weekly
3. **Update software:** Keep Hostinger, WordPress (if added), plugins updated
4. **Limit access:** Use strong FTP passwords
5. **Monitor traffic:** Check Hostinger control panel for unusual activity

### Protect config.js

- Keep API keys and secrets only in `config.js` on the server
- Never commit `config.js` to GitHub (it's in .gitignore)
- Use production values in the server config

### Form Security

If you add forms (email capture, donations):
- Use HTTPS for all submissions
- Validate input on server (not just browser)
- Never store sensitive data longer than needed
- Use established payment processors (Stripe, PayPal) for donations

---

## Going Live Checklist

Before announcing the site publicly:

- [ ] Domain resolves correctly (https://unregulatedthefilm.com)
- [ ] HTTPS working (green lock icon)
- [ ] All pages load without errors
- [ ] Mobile design works correctly
- [ ] All links work (internal and external)
- [ ] Images display correctly
- [ ] Video plays
- [ ] Forms work (newsletter signup, donations)
- [ ] Analytics is tracking pageviews
- [ ] Lighthouse score 80+ for Performance, 90+ for Accessibility
- [ ] No console errors in DevTools
- [ ] Test in Chrome, Firefox, Safari
- [ ] Backup of working site saved locally

---

## Next Steps

1. **Complete the setup** in SETUP.md
2. **Choose deployment method** (Git or FTP)
3. **Follow the post-deployment checklist** above
4. **Announce the site** once verified
5. **Refer to TEMPLATE_GUIDE.md** for future films

---

## Quick Reference

```bash
# Check DNS propagation
nslookup unregulatedthefilm.com

# Or (Mac/Linux)
dig unregulatedthefilm.com

# Check SSL certificate
curl -I https://unregulatedthefilm.com

# Get your server IP (from Hostinger panel)
# Use this when configuring domain DNS
```

---

**Last Updated:** June 9, 2026  
**Maintained By:** UnregulatedTheFilm Team
