# UnregulatedTheFilm.com Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page, mobile-responsive documentary website with video hero, film description, donation/support CTAs, merchandise links, sticky newsletter signup, and HOA Network coming-soon section.

**Architecture:** Static HTML/CSS/JavaScript site hosted on Hostinger, version-controlled via GitHub. No backend required—integrations (Vimeo, payments, email) are third-party services. Site designed as a reusable template for future documentary films in the series.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript (no frameworks), Vimeo embed API, Stripe/PayPal payment links, Mailchimp/ConvertKit email service, Google Analytics 4.

---

## File Structure

**Files to create:**
- `index.html` — Main single-page document
- `css/style.css` — Core styles (layout, typography, colors)
- `css/responsive.css` — Mobile and tablet responsive design
- `js/main.js` — Core interactivity (sticky footer, smooth scroll, form handling)
- `js/video.js` — Vimeo embed and autoplay logic
- `js/forms.js` — Newsletter and donation form submissions
- `js/analytics.js` — Google Analytics 4 integration
- `config/config.example.js` — Environment variables template (API keys, etc.)
- `tests/test.html` — Form validation and interaction tests
- `tests/accessibility.html` — Accessibility audit checklist
- `docs/SETUP.md` — Local development setup guide
- `docs/DEPLOYMENT.md` — Hostinger deployment instructions
- `docs/TEMPLATE_GUIDE.md` — How to customize for future films
- `images/` — Directory for optimized images (poster, icons)
- `.gitignore` — Exclude config, node_modules, build artifacts

**Files to modify:**
- (None—this is a new project)

---

## Task Breakdown

### Task 1: Initialize Git Repository & Project Structure

**Files:**
- Create: `.gitignore`
- Create: `README.md`
- Create: `docs/` directory structure
- Create: `images/` directory
- Create: `js/`, `css/` directories

- [ ] **Step 1: Initialize git repository**

```bash
cd /Users/kennethspresley/Library/CloudStorage/GoogleDrive-info@pitchcloudmanagement.com/My\ Drive/01_Business\ \&\ Private/Pitch\ Cloud/VSCode\ -\ Local/UnregulatedTheFilm
git init
git config user.name "Kenneth Spresley"
git config user.email "info@pitchcloudmanagement.com"
```

Expected: `.git` directory created, git initialized locally.

- [ ] **Step 2: Create `.gitignore` file**

```bash
cat > .gitignore << 'EOF'
# Configuration & Secrets
config/config.js
*.env
.env.local

# Build artifacts
dist/
build/
*.min.js
*.min.css

# Node (if using build tools later)
node_modules/
package-lock.json

# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/

# Test coverage
coverage/
.nyc_output/

# Logs
*.log
npm-debug.log*
EOF
```

- [ ] **Step 3: Create directory structure**

```bash
mkdir -p css js images docs tests config
```

- [ ] **Step 4: Create README.md**

```bash
cat > README.md << 'EOF'
# Unregulated: How HOAs Threaten the American Dream

Documentary website built with HTML5, CSS3, and vanilla JavaScript.

## Setup

See `docs/SETUP.md` for local development instructions.

## Deployment

See `docs/DEPLOYMENT.md` for Hostinger deployment steps.

## Customization for Future Films

See `docs/TEMPLATE_GUIDE.md` to adapt this site for other documentaries in the series.

## Git Workflow

- Main branch = production (deployed to Hostinger)
- Development on feature branches
- Pull requests for review before merge

## Structure

- `index.html` — Main page
- `css/` — Stylesheets (base, responsive)
- `js/` — JavaScript modules (video, forms, analytics)
- `images/` — Optimized assets
- `docs/` — Documentation
- `tests/` — Validation & accessibility checklists
EOF
```

- [ ] **Step 5: Create config template**

```bash
cat > config/config.example.js << 'EOF'
// Configuration Template
// Copy this to config.js and fill in your values
// config.js is in .gitignore and will not be committed

const CONFIG = {
  // Vimeo
  vimeoVideoId: 'YOUR_VIMEO_VIDEO_ID', // Replace with actual Vimeo video ID

  // Payment Links (from Stripe or PayPal)
  donateLink: 'https://payment.processor.com/donate/UNIQUE_ID',
  shopLink: 'https://printful.or.shopify.com/shop',

  // Email Service (Mailchimp, ConvertKit, etc.)
  // For film newsletter (sticky footer)
  filmNewsletterEndpoint: 'https://mailchimp.com/api/newsletter/film',
  filmNewsletterApiKey: 'YOUR_API_KEY',

  // For HOA Network newsletter (mid-page)
  hoaNewsletterEndpoint: 'https://mailchimp.com/api/newsletter/hoa',
  hoaNewsletterApiKey: 'YOUR_API_KEY',

  // Google Analytics
  gaTrackingId: 'G-XXXXXXXXXX', // GA4 Measurement ID

  // Site Metadata
  siteTitle: 'Unregulated: How HOAs Threaten the American Dream',
  siteDescription: 'A documentary exposing the power dynamics of Homeowners Associations...',
  siteUrl: 'https://www.unregulatedthefilm.com',
  twitterHandle: '@UnregulatedDoc',
};
EOF
```

- [ ] **Step 6: Commit initial setup**

```bash
git add .gitignore README.md config/config.example.js
git commit -m "chore: initialize project structure and git repository"
```

Expected: Initial commit created with setup files.

---

### Task 2: Build HTML Structure & Semantic Markup

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create basic HTML skeleton with meta tags**

```bash
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Unregulated: How HOAs Threaten the American Dream - A documentary exposing the power dynamics of Homeowners' Associations and their impact on American families.">
  <meta name="theme-color" content="#1a2e4a">

  <!-- Open Graph / Social Sharing -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.unregulatedthefilm.com/">
  <meta property="og:title" content="Unregulated: How HOAs Threaten the American Dream">
  <meta property="og:description" content="A documentary exposing HOA injustice and advocating for legislative reform.">
  <meta property="og:image" content="https://www.unregulatedthefilm.com/images/poster.jpg">
  <meta property="og:site_name" content="Unregulated: How HOAs Threaten the American Dream">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Unregulated: How HOAs Threaten the American Dream">
  <meta name="twitter:description" content="A documentary exposing HOA injustice and advocating for legislative reform.">
  <meta name="twitter:image" content="https://www.unregulatedthefilm.com/images/poster.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/images/favicon.svg">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/responsive.css">

  <title>Unregulated: How HOAs Threaten the American Dream | Documentary</title>

  <!-- Schema.org Structured Data for Video -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "VideoObject",
    "name": "Unregulated: How HOAs Threaten the American Dream",
    "description": "A documentary exploring the power dynamics of Homeowners' Associations and their impact on American families.",
    "thumbnailUrl": "https://www.unregulatedthefilm.com/images/poster.jpg",
    "uploadDate": "2026-06-09",
    "duration": "PT90M",
    "embedUrl": "https://player.vimeo.com/video/YOUR_VIDEO_ID"
  }
  </script>
</head>
<body>
  <!-- Navigation (sticky header) -->
  <header id="site-header" class="sticky-header">
    <nav class="navbar">
      <div class="navbar-container">
        <h1 class="navbar-logo">UNREGULATED</h1>
        <ul class="nav-menu">
          <li class="nav-item"><a href="#the-story" class="nav-link">About the Film</a></li>
          <li class="nav-item"><a href="#support" class="nav-link">Donate</a></li>
          <li class="nav-item"><a href="#merch" class="nav-link">Merch</a></li>
          <li class="nav-item"><a href="#hoa-network" class="nav-link">HOA Network</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <main>
    <!-- Hero Section: Full-width autoplaying video -->
    <section id="hero" class="hero">
      <div class="hero-video-container">
        <iframe 
          id="vimeo-player"
          src="https://player.vimeo.com/video/YOUR_VIDEO_ID?h=YOUR_HASH&autoplay=1&muted=1&loop=1"
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Unregulated: How HOAs Threaten the American Dream"
          loading="lazy">
        </iframe>
        <!-- Fallback poster image if video fails to load -->
        <img src="/images/poster.jpg" alt="Unregulated Film Poster" class="hero-fallback">
      </div>
    </section>

    <!-- Copy Section Below Hero -->
    <section id="copy" class="copy-section">
      <div class="content-max-width">
        <p class="copy-text">
          <strong>Unregulated: How HOAs Threaten the American Dream</strong> is a documentary that explores the power dynamics of Homeowners' Associations and their impact on American families, highlighting real stories and advocating for legislative change.
        </p>

        <div class="copy-callout">
          <p>Help us get this film across the finish line by donating and by sharing this website with HOA advocates, groups, legislators, and others interested.</p>
        </div>

        <div class="copy-buttons">
          <a href="#" id="support-cta-1" class="btn btn-primary" data-action="support">Support the Film</a>
          <a href="#" id="share-cta" class="btn btn-secondary" data-action="share">Share This Film</a>
        </div>
      </div>
    </section>

    <!-- The Story Section -->
    <section id="the-story" class="story-section">
      <div class="content-max-width">
        <h2>The Story</h2>

        <article class="story-subsection">
          <h3>The Scope of the Problem</h3>
          <p>Roughly 74 million Americans live in communities governed by Homeowners Associations. New developments are rapidly expanding this reach, giving rise to growing trends that, if unchecked, will impact future homeowners for generations to come. Yet many Americans do not understand the profound impact HOAs have on their communities, families, and the very promise of the American dream.</p>
        </article>

        <article class="story-subsection story-subsection-highlighted">
          <h3>Meet Kenneth Spresley</h3>
          <p>This exposé follows Kenneth Spresley, a Texas homeowner and United States Air Force veteran, as he seeks to understand HOAs—their origins, their purpose, and the power they possess. Through personal investigation, candid interviews, and compelling stories from affected families, Spresley exposes the hidden systems of authority that govern American neighborhoods and examines why accountability so often falls short.</p>
        </article>

        <article class="story-subsection">
          <h3>Why This Matters</h3>
          <p>Unregulated reveals how the lack of transparency, oversight, and accountability in HOAs has real consequences for real people—destroyed families, seized homes, and futures derailed. This documentary is a call to action for legislative reform, community empowerment, and a reimagining of how we govern our shared spaces.</p>
        </article>
      </div>
    </section>

    <!-- Support Section -->
    <section id="support" class="support-section">
      <div class="content-max-width">
        <h2>Support This Documentary</h2>
        <p>We're in post-production and need your help to finish strong. Every donation goes directly to final editing, color grading, and distribution.</p>
        <a href="#" id="donate-btn" class="btn btn-primary-large" data-action="donate">Donate Now</a>
      </div>
    </section>

    <!-- Merchandise Section -->
    <section id="merch" class="merch-section">
      <div class="content-max-width">
        <h2>Official Merchandise</h2>
        <p class="merch-subtitle">Limited edition gear. All proceeds support the film.</p>

        <div class="product-grid">
          <article class="product-card">
            <div class="product-image" role="img" aria-label="Classic Logo T-Shirt"></div>
            <h3>Classic Logo Tee</h3>
            <p class="product-price">$24.99</p>
          </article>

          <article class="product-card">
            <div class="product-image" role="img" aria-label="Embroidered Cap"></div>
            <h3>Embroidered Cap</h3>
            <p class="product-price">$34.99</p>
          </article>

          <article class="product-card">
            <div class="product-image" role="img" aria-label="Canvas Tote Bag"></div>
            <h3>Canvas Tote Bag</h3>
            <p class="product-price">$19.99</p>
          </article>
        </div>

        <a href="#" id="shop-btn" class="btn btn-secondary-large" data-action="shop">Shop All</a>
      </div>
    </section>

    <!-- HOA Reform Network Coming Soon -->
    <section id="hoa-network" class="hoa-network-section">
      <div class="content-max-width">
        <h2>HOA Reform Network</h2>
        <p>A comprehensive resource for HOA legislative tracking, reform initiatives, training, and community organizing. Join the movement for accountability and change.</p>

        <div class="newsletter-signup hoa-newsletter">
          <p class="newsletter-label">Get Notified When We Launch</p>
          <form id="hoa-newsletter-form" class="newsletter-form" data-list="hoa">
            <input 
              type="email" 
              name="email" 
              placeholder="Your email address" 
              required
              aria-label="Email address for HOA Network updates">
            <button type="submit" class="btn btn-white">Subscribe</button>
          </form>
        </div>

        <p class="coming-soon-badge">Coming Fall 2026</p>
      </div>
    </section>
  </main>

  <!-- Sticky Footer Newsletter (Film Updates) -->
  <aside id="sticky-footer" class="sticky-footer" role="complementary" aria-label="Film newsletter subscription">
    <div class="sticky-footer-content">
      <div class="sticky-footer-text">
        <p class="sticky-footer-title">Get Film Updates</p>
        <p class="sticky-footer-desc">Subscribe for release announcements and news</p>
      </div>

      <form id="film-newsletter-form" class="sticky-footer-form" data-list="film">
        <input 
          type="email" 
          name="email" 
          placeholder="Your email" 
          required
          aria-label="Email address for film updates">
        <button type="submit" class="btn btn-primary-small">Subscribe</button>
      </form>

      <button id="sticky-footer-close" class="sticky-footer-close" aria-label="Close newsletter signup">×</button>
    </div>
  </aside>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="footer-grid">
      <section class="footer-column">
        <h3>The Film</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Press Kit</a></li>
          <li><a href="#">Screenings</a></li>
        </ul>
      </section>

      <section class="footer-column">
        <h3>Support</h3>
        <ul>
          <li><a href="#support">Donate</a></li>
          <li><a href="#merch">Shop</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </section>

      <section class="footer-column">
        <h3>Social</h3>
        <ul>
          <li><a href="https://facebook.com/unregulatedfilm" target="_blank">Facebook</a></li>
          <li><a href="https://instagram.com/unregulatedfilm" target="_blank">Instagram</a></li>
          <li><a href="https://youtube.com/@unregulatedfilm" target="_blank">YouTube</a></li>
        </ul>
      </section>

      <section class="footer-column">
        <h3>Legal</h3>
        <ul>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/terms">Terms</a></li>
        </ul>
      </section>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Unregulated. A film by Kenneth Spresley.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="/js/main.js" defer></script>
  <script src="/js/video.js" defer></script>
  <script src="/js/forms.js" defer></script>
  <script src="/js/analytics.js" defer></script>
</body>
</html>
EOF
```

- [ ] **Step 2: Commit HTML structure**

```bash
git add index.html
git commit -m "feat: create semantic HTML structure with all page sections"
```

Expected: index.html created with full semantic markup, proper meta tags, and structured data.

---

### Task 3: Write Base CSS (Layout, Typography, Colors)

**Files:**
- Create: `css/style.css`

- [ ] **Step 1: Create base CSS with variables, reset, and typography**

```bash
cat > css/style.css << 'EOF'
/* ============================================
   UNREGULATED: Base Styles
   ============================================ */

/* CSS Variables - Brand Colors & Spacing */
:root {
  /* Colors */
  --color-navy: #1a2e4a;
  --color-navy-light: #2d4a6f;
  --color-red: #d32f2f;
  --color-red-dark: #b22234;
  --color-cream: #f5f5f0;
  --color-white: #ffffff;
  --color-gray-dark: #666666;
  --color-gray-medium: #999999;
  --color-gray-light: #f9f9f9;
  --color-gray-border: #eeeeee;

  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-size-base: 15px;
  --font-size-small: 13px;
  --font-size-tiny: 12px;
  --line-height-base: 1.8;
  --letter-spacing-small: 0.5px;
  --letter-spacing-med: 1px;

  /* Spacing */
  --spacing-xs: 10px;
  --spacing-sm: 15px;
  --spacing-md: 20px;
  --spacing-lg: 40px;
  --spacing-xl: 60px;
  --spacing-xxl: 80px;

  /* Layout */
  --max-width: 1000px;
  --max-width-lg: 1100px;

  /* Shadows */
  --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.1);

  /* Z-Index */
  --z-sticky-header: 100;
  --z-sticky-footer: 99;
}

/* Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--color-gray-dark);
  background-color: var(--color-cream);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 900;
  color: var(--color-navy);
  letter-spacing: -0.5px;
}

h2 {
  font-size: 36px;
  margin-bottom: var(--spacing-md);
}

h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

p {
  margin-bottom: var(--spacing-md);
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease;
}

/* Utility Classes */
.content-max-width {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

/* ============================================
   HEADER & NAVIGATION
   ============================================ */

.sticky-header {
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gray-border);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky-header);
}

.navbar {
  padding: 0 var(--spacing-lg);
}

.navbar-container {
  max-width: var(--max-width-lg);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.navbar-logo {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 1px;
  color: var(--color-navy);
  margin: 0;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: var(--spacing-lg);
}

.nav-link {
  font-size: var(--font-size-small);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-small);
  color: var(--color-navy);
  cursor: pointer;
}

.nav-link:hover {
  color: var(--color-red);
}

/* ============================================
   HERO SECTION
   ============================================ */

.hero {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  position: relative;
  overflow: hidden;
}

.hero-video-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.hero-video-container iframe {
  width: 100%;
  height: 100%;
  display: block;
}

.hero-fallback {
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Fallback if video fails */
.hero-video-container:has(> iframe[src=""])  .hero-fallback {
  display: block;
}

/* ============================================
   COPY SECTION (Below Hero)
   ============================================ */

.copy-section {
  background-color: var(--color-white);
  padding: var(--spacing-xl) var(--spacing-lg);
  border-bottom: 1px solid var(--color-gray-border);
}

.copy-text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--color-gray-dark);
  margin-bottom: var(--spacing-lg);
}

.copy-text strong {
  font-weight: 700;
}

.copy-callout {
  background-color: var(--color-gray-light);
  padding: var(--spacing-md);
  border-left: 4px solid var(--color-red);
  margin-bottom: var(--spacing-lg);
}

.copy-callout p {
  font-size: var(--font-size-small);
  line-height: var(--line-height-base);
  color: var(--color-gray-dark);
  margin: 0;
  font-style: italic;
}

.copy-buttons {
  display: flex;
  gap: var(--spacing-sm);
}

/* ============================================
   STORY SECTION
   ============================================ */

.story-section {
  background-color: var(--color-white);
  padding: var(--spacing-xxl) var(--spacing-lg);
}

.story-subsection {
  margin-bottom: var(--spacing-xl);
}

.story-subsection h3 {
  color: var(--color-navy);
  margin-bottom: var(--spacing-md);
}

.story-subsection p {
  font-size: var(--font-size-base);
  color: var(--color-gray-dark);
  line-height: var(--line-height-base);
}

.story-subsection-highlighted {
  background-color: var(--color-gray-light);
  padding: var(--spacing-lg);
  border-radius: 4px;
}

.story-subsection-highlighted h3 {
  color: var(--color-navy);
}

/* ============================================
   SUPPORT SECTION
   ============================================ */

.support-section {
  background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%);
  color: var(--color-white);
  padding: var(--spacing-xxl) var(--spacing-lg);
  text-align: center;
}

.support-section h2 {
  color: var(--color-white);
  margin-bottom: var(--spacing-sm);
}

.support-section p {
  margin-bottom: var(--spacing-lg);
}

/* ============================================
   MERCHANDISE SECTION
   ============================================ */

.merch-section {
  background-color: var(--color-white);
  padding: var(--spacing-xxl) var(--spacing-lg);
}

.merch-subtitle {
  font-size: var(--font-size-small);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-small);
  color: var(--color-gray-medium);
  margin-bottom: var(--spacing-lg);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.product-card {
  background-color: var(--color-gray-light);
  padding: var(--spacing-md);
  border-radius: 4px;
  text-align: center;
}

.product-image {
  aspect-ratio: 1 / 1;
  background-color: #ddd;
  border-radius: 4px;
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-medium);
  font-size: var(--font-size-small);
}

.product-card h3 {
  font-size: 14px;
  margin-bottom: var(--spacing-xs);
  color: var(--color-navy);
}

.product-price {
  color: var(--color-gray-medium);
  font-size: var(--font-size-small);
  margin: 0;
}

/* ============================================
   HOA NETWORK COMING SOON SECTION
   ============================================ */

.hoa-network-section {
  background: linear-gradient(135deg, var(--color-red) 0%, var(--color-red-dark) 100%);
  color: var(--color-white);
  padding: var(--spacing-xxl) var(--spacing-lg);
}

.hoa-network-section h2 {
  color: var(--color-white);
}

.hoa-network-section p {
  color: var(--color-white);
}

.hoa-newsletter {
  background-color: rgba(255, 255, 255, 0.1);
  padding: var(--spacing-lg);
  border-radius: 4px;
  margin: var(--spacing-lg) 0;
}

.newsletter-label {
  font-size: var(--font-size-small);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-small);
  margin-bottom: var(--spacing-sm);
}

.newsletter-form {
  display: flex;
  gap: var(--spacing-xs);
}

.newsletter-form input {
  flex: 1;
  padding: 12px var(--spacing-sm);
  border: none;
  border-radius: 4px;
  font-size: var(--font-size-small);
  font-family: var(--font-family);
}

.coming-soon-badge {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 12px var(--spacing-md);
  border-radius: 4px;
  font-weight: 600;
  font-size: var(--font-size-small);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-small);
  display: inline-block;
  margin: 0;
}

/* ============================================
   BUTTONS
   ============================================ */

.btn {
  display: inline-block;
  padding: 14px var(--spacing-md);
  font-size: var(--font-size-small);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-small);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-family);
}

.btn-primary {
  background-color: var(--color-red);
  color: var(--color-white);
}

.btn-primary:hover {
  background-color: var(--color-red-dark);
}

.btn-primary-large {
  background-color: var(--color-red);
  color: var(--color-white);
  padding: 14px 40px;
}

.btn-primary-large:hover {
  background-color: var(--color-red-dark);
}

.btn-primary-small {
  background-color: var(--color-red);
  color: var(--color-white);
  padding: 10px 20px;
  font-size: var(--font-size-tiny);
}

.btn-primary-small:hover {
  background-color: var(--color-red-dark);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-navy);
  border: 2px solid var(--color-navy);
}

.btn-secondary:hover {
  background-color: var(--color-navy);
  color: var(--color-white);
}

.btn-secondary-large {
  background-color: var(--color-navy);
  color: var(--color-white);
  padding: 14px 35px;
}

.btn-secondary-large:hover {
  background-color: var(--color-navy-light);
}

.btn-white {
  background-color: var(--color-white);
  color: var(--color-red);
  padding: 12px 20px;
}

.btn-white:hover {
  opacity: 0.9;
}

/* ============================================
   STICKY FOOTER NEWSLETTER
   ============================================ */

.sticky-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-navy);
  color: var(--color-white);
  padding: var(--spacing-sm) var(--spacing-lg);
  z-index: var(--z-sticky-footer);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-lg);
  min-height: 70px;
}

.sticky-footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: var(--spacing-lg);
}

.sticky-footer-text {
  flex: 0 0 auto;
}

.sticky-footer-title {
  font-size: var(--font-size-small);
  font-weight: 600;
  margin: 0 0 5px 0;
}

.sticky-footer-desc {
  font-size: var(--font-size-tiny);
  opacity: 0.9;
  margin: 0;
}

.sticky-footer-form {
  display: flex;
  gap: var(--spacing-xs);
  min-width: 350px;
}

.sticky-footer-form input {
  flex: 1;
  padding: 10px var(--spacing-sm);
  border: none;
  border-radius: 4px;
  font-size: var(--font-size-small);
  font-family: var(--font-family);
}

.sticky-footer-close {
  background: transparent;
  color: var(--color-white);
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.sticky-footer-close:hover {
  opacity: 1;
}

/* Sticky footer hidden state */
.sticky-footer.hidden {
  display: none;
}

/* ============================================
   FOOTER
   ============================================ */

.site-footer {
  background-color: var(--color-navy);
  color: var(--color-gray-medium);
  padding: var(--spacing-xl) var(--spacing-lg);
  margin-top: var(--spacing-xxl);
  margin-bottom: 70px;
}

.footer-grid {
  max-width: var(--max-width-lg);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.footer-column h3 {
  color: var(--color-white);
  font-size: var(--font-size-tiny);
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 var(--spacing-sm) 0;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: var(--spacing-xs);
}

.footer-column a {
  color: var(--color-gray-medium);
  font-size: var(--font-size-small);
}

.footer-column a:hover {
  color: var(--color-white);
}

.footer-bottom {
  max-width: var(--max-width-lg);
  margin: 0 auto;
  border-top: 1px solid #444;
  padding-top: var(--spacing-lg);
  text-align: center;
}

.footer-bottom p {
  font-size: var(--font-size-tiny);
  margin: 0;
}
EOF
```

- [ ] **Step 2: Verify CSS compiles and loads in browser**

Open `index.html` in a browser and verify:
- Navigation header is visible and sticky
- Typography and colors match the design spec
- All sections have correct spacing and background colors
- Buttons have correct styling

- [ ] **Step 3: Commit base CSS**

```bash
git add css/style.css
git commit -m "feat: add base CSS with layout, typography, and component styles"
```

Expected: Base styles applied, page layout matches design spec.

---

### Task 4: Write Responsive CSS (Mobile & Tablet)

**Files:**
- Create: `css/responsive.css`

- [ ] **Step 1: Create responsive CSS for mobile and tablet**

```bash
cat > css/responsive.css << 'EOF'
/* ============================================
   RESPONSIVE DESIGN
   Mobile-first approach with breakpoints for tablet and desktop
   ============================================ */

/* ============================================
   TABLET (768px - 1199px)
   ============================================ */

@media (max-width: 1199px) {
  .content-max-width {
    padding: 0 var(--spacing-md);
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ============================================
   MOBILE (< 768px)
   ============================================ */

@media (max-width: 767px) {
  :root {
    --spacing-lg: 20px;
    --spacing-xl: 40px;
    --spacing-xxl: 50px;
  }

  .content-max-width {
    padding: 0 var(--spacing-md);
  }

  /* Header & Navigation */
  .navbar-container {
    height: 60px;
    flex-wrap: wrap;
  }

  .navbar-logo {
    font-size: 18px;
  }

  .nav-menu {
    gap: var(--spacing-md);
    font-size: 12px;
  }

  .nav-link {
    font-size: 11px;
  }

  /* Hero */
  .hero {
    aspect-ratio: 16 / 9;
  }

  /* Copy Section */
  .copy-section {
    padding: var(--spacing-xl) var(--spacing-lg);
  }

  .copy-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  /* Story Section */
  .story-section {
    padding: var(--spacing-xl) var(--spacing-lg);
  }

  .story-subsection h3 {
    font-size: 20px;
  }

  /* Support Section */
  .support-section {
    padding: var(--spacing-xl) var(--spacing-lg);
  }

  .support-section h2 {
    font-size: 28px;
  }

  /* Merchandise */
  .product-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  /* HOA Network */
  .hoa-network-section {
    padding: var(--spacing-xl) var(--spacing-lg);
  }

  .hoa-network-section h2 {
    font-size: 28px;
  }

  /* Sticky Footer */
  .sticky-footer {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-sm);
    min-height: auto;
    padding: var(--spacing-md);
  }

  .sticky-footer-content {
    flex-direction: column;
  }

  .sticky-footer-form {
    min-width: 100%;
    flex-direction: column;
  }

  .sticky-footer-form input,
  .sticky-footer-form button {
    width: 100%;
  }

  .sticky-footer-close {
    position: absolute;
    top: var(--spacing-sm);
    right: var(--spacing-sm);
    width: 30px;
    height: 30px;
  }

  /* Footer */
  .site-footer {
    margin-bottom: auto;
    padding: var(--spacing-xl) var(--spacing-lg);
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  /* Typography on mobile */
  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }

  .merch-subtitle {
    font-size: 12px;
  }
}

/* ============================================
   LARGE DESKTOP (1400px+)
   ============================================ */

@media (min-width: 1400px) {
  .navbar-container {
    max-width: 1400px;
  }

  .content-max-width {
    max-width: 1200px;
  }
}

/* ============================================
   PRINT STYLES
   ============================================ */

@media print {
  .sticky-header,
  .sticky-footer,
  .nav-menu,
  .btn,
  .hero {
    display: none !important;
  }

  body {
    background-color: white;
    color: black;
  }

  .site-footer {
    background-color: white;
    color: black;
    border-top: 1px solid #ccc;
  }
}

/* ============================================
   TOUCH-FRIENDLY TARGETS (iOS/Android)
   ============================================ */

@media (hover: none) and (pointer: coarse) {
  .btn,
  a,
  button {
    min-height: 48px;
    min-width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* ============================================
   PREFERS-REDUCED-MOTION
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ============================================
   DARK MODE (Optional - if user prefers)
   ============================================ */

@media (prefers-color-scheme: dark) {
  /* Only apply if explicitly implemented */
  /* For now, light mode is the default */
}
EOF
```

- [ ] **Step 2: Test responsive design at multiple breakpoints**

Open `index.html` in browser:
- Desktop (1200px+): 4-column footer, 3-column product grid
- Tablet (768px-1199px): 2-column footer, 2-column product grid
- Mobile (<768px): Single column layouts, stacked buttons, vertical sticky footer

- [ ] **Step 3: Commit responsive CSS**

```bash
git add css/responsive.css
git commit -m "feat: add responsive design for mobile, tablet, and desktop"
```

Expected: Page is fully responsive across all breakpoints.

---

### Task 5: Implement Vimeo Video Embed & Autoplay

**Files:**
- Create: `js/video.js`

- [ ] **Step 1: Create Vimeo integration module**

```bash
cat > js/video.js << 'EOF'
/**
 * Vimeo Video Integration
 * Handles autoplay, muting, looping, and fallback behavior
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    videoId: 'YOUR_VIMEO_VIDEO_ID', // Will be replaced with actual ID
    apiUrl: 'https://player.vimeo.com/api/player.js',
  };

  // Initialize video on page load
  function initVideo() {
    const player = document.getElementById('vimeo-player');
    
    if (!player) {
      console.warn('Vimeo player element not found');
      return;
    }

    // Load Vimeo API if not already loaded
    if (!window.Vimeo) {
      loadVimeoApi();
    } else {
      setupPlayer();
    }
  }

  // Load Vimeo API script
  function loadVimeoApi() {
    const script = document.createElement('script');
    script.src = CONFIG.apiUrl;
    script.async = true;
    script.onload = setupPlayer;
    script.onerror = handleVideoError;
    document.body.appendChild(script);
  }

  // Setup Vimeo player instance
  function setupPlayer() {
    const iframe = document.getElementById('vimeo-player');
    
    if (!iframe) return;

    try {
      const player = new window.Vimeo.Player(iframe);

      // Set autoplay parameters
      player.play().catch(err => {
        console.log('Autoplay prevented by browser:', err.name);
      });

      // Event listeners
      player.on('play', () => console.log('Video playing'));
      player.on('pause', () => console.log('Video paused'));
      player.on('error', handleVideoError);

    } catch (error) {
      console.error('Failed to initialize Vimeo player:', error);
      handleVideoError();
    }
  }

  // Handle video loading errors
  function handleVideoError() {
    const container = document.querySelector('.hero-video-container');
    const iframe = document.getElementById('vimeo-player');
    const fallback = document.querySelector('.hero-fallback');

    if (iframe) {
      iframe.style.display = 'none';
    }

    if (fallback) {
      fallback.style.display = 'block';
    }

    console.error('Video failed to load. Fallback poster displayed.');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideo);
  } else {
    initVideo();
  }

  // Expose for external access if needed
  window.VideoModule = {
    init: initVideo,
    config: CONFIG,
  };
})();
EOF
```

- [ ] **Step 2: Update `index.html` with actual Vimeo video ID**

Before deployment, update the iframe `src` attribute with your actual Vimeo video ID:

```html
<!-- Replace YOUR_VIDEO_ID and YOUR_HASH with actual values -->
<iframe 
  id="vimeo-player"
  src="https://player.vimeo.com/video/123456789?h=abcdef1234&autoplay=1&muted=1&loop=1"
  ...
```

To get your Vimeo video ID and hash:
1. Upload video to Vimeo
2. Get embed code from Vimeo
3. Extract video ID and hash from the URL

- [ ] **Step 3: Test video autoplay and fallback**

- Open page in browser
- Verify video autoplays muted
- Verify video loops
- Disable video source (dev tools) and verify fallback poster displays

- [ ] **Step 4: Commit video module**

```bash
git add js/video.js
git commit -m "feat: add Vimeo video integration with autoplay and fallback"
```

Expected: Video autoplays muted and loops; fallback displays if video fails.

---

### Task 6: Implement Form Handling & Validation

**Files:**
- Create: `js/forms.js`
- Modify: `index.html` (add data attributes for form handling)

- [ ] **Step 1: Create forms module with validation**

```bash
cat > js/forms.js << 'EOF'
/**
 * Forms Module
 * Handles newsletter signups and form submissions
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    filmNewsletter: {
      endpoint: 'YOUR_FILM_NEWSLETTER_API_ENDPOINT',
      list: 'film',
    },
    hoaNewsletter: {
      endpoint: 'YOUR_HOA_NEWSLETTER_API_ENDPOINT',
      list: 'hoa',
    },
  };

  // Form selectors
  const SELECTORS = {
    filmNewsletterForm: '#film-newsletter-form',
    hoaNewsletterForm: '#hoa-newsletter-form',
    stickyFooterClose: '#sticky-footer-close',
    stickyFooter: '#sticky-footer',
    supportBtn: '#support-cta-1',
    donateBtn: '#donate-btn',
    shopBtn: '#shop-btn',
    shareBtn: '#share-cta',
  };

  // Initialize forms
  function init() {
    bindFormEvents();
    bindButtonEvents();
    initStickyFooter();
  }

  // Bind form submission events
  function bindFormEvents() {
    const filmForm = document.querySelector(SELECTORS.filmNewsletterForm);
    const hoaForm = document.querySelector(SELECTORS.hoaNewsletterForm);

    if (filmForm) {
      filmForm.addEventListener('submit', handleFormSubmit);
    }

    if (hoaForm) {
      hoaForm.addEventListener('submit', handleFormSubmit);
    }
  }

  // Handle form submissions
  function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    const list = form.dataset.list;

    // Validate email
    if (!validateEmail(email)) {
      showError(form, 'Please enter a valid email address.');
      return;
    }

    // Submit to email service
    submitEmail(email, list, form);
  }

  // Validate email format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Submit email to newsletter service
  function submitEmail(email, list, form) {
    const config = CONFIG[list + 'Newsletter'];

    if (!config || !config.endpoint) {
      console.error('Newsletter endpoint not configured');
      showError(form, 'Service not configured. Please try again later.');
      return;
    }

    // In production, this would send to your email service API
    // For now, simulate a successful submission
    simulateSubmit(email, list, form);

    // TODO: Replace with actual API call
    // fetch(config.endpoint, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, list }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.success) {
    //     showSuccess(form);
    //   } else {
    //     showError(form, data.message || 'Submission failed.');
    //   }
    // })
    // .catch(error => {
    //   console.error('Submission error:', error);
    //   showError(form, 'Network error. Please try again.');
    // });
  }

  // Simulate successful submission (development)
  function simulateSubmit(email, list, form) {
    console.log(`Newsletter submission: ${email} to ${list} list`);
    showSuccess(form);
  }

  // Show success message
  function showSuccess(form) {
    const input = form.querySelector('input[type="email"]');
    const originalPlaceholder = input.placeholder;

    input.value = '';
    input.placeholder = 'Thank you! Check your email.';
    input.style.backgroundColor = '#f0f0f0';

    // Reset after 3 seconds
    setTimeout(() => {
      input.placeholder = originalPlaceholder;
      input.style.backgroundColor = '';
    }, 3000);
  }

  // Show error message
  function showError(form, message) {
    const input = form.querySelector('input[type="email"]');
    input.style.borderColor = '#d32f2f';
    console.error(message);

    setTimeout(() => {
      input.style.borderColor = '';
    }, 3000);
  }

  // Bind CTA button events
  function bindButtonEvents() {
    const supportBtn = document.querySelector(SELECTORS.supportBtn);
    const donateBtn = document.querySelector(SELECTORS.donateBtn);
    const shopBtn = document.querySelector(SELECTORS.shopBtn);
    const shareBtn = document.querySelector(SELECTORS.shareBtn);

    if (supportBtn) supportBtn.addEventListener('click', handleDonate);
    if (donateBtn) donateBtn.addEventListener('click', handleDonate);
    if (shopBtn) shopBtn.addEventListener('click', handleShop);
    if (shareBtn) shareBtn.addEventListener('click', handleShare);
  }

  // Handle donate button
  function handleDonate(e) {
    e.preventDefault();
    // TODO: Replace with actual donation link from config
    const donateLink = 'https://payment.processor.com/donate/UNIQUE_ID';
    window.open(donateLink, '_blank');
  }

  // Handle shop button
  function handleShop(e) {
    e.preventDefault();
    // TODO: Replace with actual merch shop link from config
    const shopLink = 'https://printful.or.shopify.com/shop';
    window.open(shopLink, '_blank');
  }

  // Handle share button
  function handleShare(e) {
    e.preventDefault();

    const shareData = {
      title: 'Unregulated: How HOAs Threaten the American Dream',
      text: 'Check out this documentary about HOA reform.',
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(err => console.log('Share failed:', err));
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
      });
    }
  }

  // Initialize sticky footer
  function initStickyFooter() {
    const closeBtn = document.querySelector(SELECTORS.stickyFooterClose);
    const stickyFooter = document.querySelector(SELECTORS.stickyFooter);

    if (closeBtn && stickyFooter) {
      closeBtn.addEventListener('click', () => {
        stickyFooter.classList.add('hidden');
        // Save preference in localStorage (7-day cookie equivalent)
        localStorage.setItem('sticky-footer-closed', Date.now());
      });

      // Check if user closed it recently
      const closedTime = localStorage.getItem('sticky-footer-closed');
      if (closedTime) {
        const daysSince = (Date.now() - parseInt(closedTime)) / (1000 * 60 * 60 * 24);
        if (daysSince < 7) {
          stickyFooter.classList.add('hidden');
        }
      }
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose module
  window.FormsModule = {
    init,
    validateEmail,
    submitEmail,
  };
})();
EOF
```

- [ ] **Step 2: Test form validation**

Open page and test:
- Enter invalid email format → Should show error state
- Enter valid email → Should submit and show success message
- Click donate button → Should open payment link
- Click shop button → Should open merch shop
- Click close on sticky footer → Should hide and remember for 7 days

- [ ] **Step 3: Commit forms module**

```bash
git add js/forms.js
git commit -m "feat: add form validation, newsletter submission, and CTA handlers"
```

Expected: Forms validate, submit successfully, and show user feedback.

---

### Task 7: Implement Analytics & Tracking

**Files:**
- Create: `js/analytics.js`

- [ ] **Step 1: Create analytics module**

```bash
cat > js/analytics.js << 'EOF'
/**
 * Analytics Module
 * Handles Google Analytics 4 tracking
 */

(function() {
  'use strict';

  // Configuration
  const GA_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 Measurement ID

  // Initialize Google Analytics
  function init() {
    loadGoogleAnalytics();
    trackPageView();
    bindAnalyticsEvents();
  }

  // Load Google Analytics script
  function loadGoogleAnalytics() {
    if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics ID not configured');
      return;
    }

    // Add GA script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, {
      page_path: window.location.pathname,
    });
  }

  // Track page view
  function trackPageView() {
    if (!window.gtag) return;

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
    });
  }

  // Bind event tracking
  function bindAnalyticsEvents() {
    // Track CTA clicks
    trackButtonClicks('#support-cta-1', 'support_film');
    trackButtonClicks('#donate-btn', 'donate');
    trackButtonClicks('#shop-btn', 'shop');
    trackButtonClicks('#share-cta', 'share');

    // Track form submissions
    trackFormSubmission('#film-newsletter-form', 'film_newsletter_signup');
    trackFormSubmission('#hoa-newsletter-form', 'hoa_newsletter_signup');

    // Track scroll depth
    trackScrollDepth();

    // Track video engagement (if Vimeo player available)
    trackVideoEngagement();
  }

  // Track button clicks
  function trackButtonClicks(selector, eventName) {
    const button = document.querySelector(selector);
    if (button) {
      button.addEventListener('click', () => {
        if (window.gtag) {
          window.gtag('event', eventName, {
            button_text: button.textContent.trim(),
          });
        }
      });
    }
  }

  // Track form submissions
  function trackFormSubmission(selector, eventName) {
    const form = document.querySelector(selector);
    if (form) {
      form.addEventListener('submit', () => {
        if (window.gtag) {
          window.gtag('event', eventName, {
            form_id: form.id,
          });
        }
      });
    }
  }

  // Track scroll depth
  function trackScrollDepth() {
    let scrollDepth = 0;
    const triggers = [25, 50, 75, 100];

    window.addEventListener('scroll', () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      triggers.forEach(trigger => {
        if (scrollPercent >= trigger && scrollDepth < trigger) {
          scrollDepth = trigger;
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              depth_percentage: trigger,
            });
          }
        }
      });
    });
  }

  // Track video engagement
  function trackVideoEngagement() {
    // Check if Vimeo API is available
    if (typeof window.Vimeo === 'undefined') return;

    const iframe = document.getElementById('vimeo-player');
    if (!iframe) return;

    try {
      const player = new window.Vimeo.Player(iframe);

      player.on('play', () => {
        if (window.gtag) {
          window.gtag('event', 'video_play', {
            video_title: 'Unregulated Film Trailer',
          });
        }
      });

      player.on('ended', () => {
        if (window.gtag) {
          window.gtag('event', 'video_complete', {
            video_title: 'Unregulated Film Trailer',
          });
        }
      });
    } catch (error) {
      console.log('Video tracking unavailable:', error);
    }
  }

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose module
  window.AnalyticsModule = {
    init,
    trackPageView,
  };
})();
EOF
```

- [ ] **Step 2: Update config with GA ID**

Update `config/config.example.js` with your Google Analytics 4 ID:

```javascript
gaTrackingId: 'G-XXXXXXXXXX', // Your actual GA4 Measurement ID
```

Copy to `config/config.js` (not committed).

- [ ] **Step 3: Test analytics in browser**

Open page and verify in Google Analytics:
- Page views tracked
- CTA clicks recorded
- Form submissions logged
- Scroll depth events firing

- [ ] **Step 4: Commit analytics module**

```bash
git add js/analytics.js
git commit -m "feat: add Google Analytics 4 tracking and event monitoring"
```

Expected: All events tracked in GA4 dashboard.

---

### Task 8: Create Documentation

**Files:**
- Create: `docs/SETUP.md`
- Create: `docs/DEPLOYMENT.md`
- Create: `docs/TEMPLATE_GUIDE.md`

- [ ] **Step 1: Create SETUP.md (local development)**

```bash
cat > docs/SETUP.md << 'EOF'
# Local Development Setup

## Prerequisites

- Git installed
- Text editor (VS Code recommended)
- Modern web browser (Chrome, Firefox, Safari)
- Local web server (for testing)

## Installation

1. Clone the repository:
```bash
cd /path/to/UnregulatedTheFilm
git clone https://github.com/YOUR_GITHUB/unregulated-film.git .
```

2. Create config file:
```bash
cp config/config.example.js config/config.js
```

3. Update `config/config.js` with your values:
   - Vimeo video ID (get from Vimeo)
   - Google Analytics ID (GA4 Measurement ID)
   - Payment links (Stripe/PayPal)
   - Email service endpoints (Mailchimp/ConvertKit API)

## Running Locally

Option 1: Using Python
```bash
python3 -m http.server 8000
```

Option 2: Using Node.js
```bash
npx http-server
```

Option 3: Using VS Code Live Server extension
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## Testing Checklist

- [ ] Page loads without errors in console
- [ ] Video autoplays and loops
- [ ] All forms validate correctly
- [ ] Newsletter submissions work
- [ ] Buttons navigate to correct links
- [ ] Sticky footer appears and closes properly
- [ ] Page is responsive on mobile (375px width)
- [ ] All images load correctly
- [ ] No missing assets or broken links

## Git Workflow

1. Create feature branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make changes and commit frequently:
```bash
git commit -m "feat: brief description of change"
```

3. Push to remote:
```bash
git push origin feature/your-feature-name
```

4. Create pull request on GitHub

## Common Issues

**Video not autoplaying:**
- Check Vimeo ID is correct
- Verify video is public on Vimeo
- Check browser autoplay permissions

**Forms not submitting:**
- Verify email service endpoints in config
- Check browser console for errors
- Test email validation

**Sticky footer not appearing:**
- Check localStorage is enabled
- Verify CSS is loaded
- Clear browser cache

For more help, see DEPLOYMENT.md and TEMPLATE_GUIDE.md
EOF
```

- [ ] **Step 2: Create DEPLOYMENT.md (Hostinger)**

```bash
cat > docs/DEPLOYMENT.md << 'EOF'
# Deployment to Hostinger

## Prerequisites

- Hostinger account with FTP/SFTP access
- GitHub repository created
- Domain configured on Hostinger

## Step 1: Push to GitHub

1. Create GitHub repository at github.com/new
2. Initialize local repo:
```bash
git remote add origin https://github.com/YOUR_USERNAME/unregulated-film.git
git branch -M main
git push -u origin main
```

## Step 2: Configure Hostinger

1. Log in to Hostinger control panel
2. Navigate to Files → File Manager
3. Create folder: `/www.unregulatedthefilm.com/public_html/`

## Step 3: Deploy Code

### Option A: Manual FTP Upload
1. Connect via FTP (use Hostinger credentials)
2. Upload all files to `public_html/`:
   - index.html
   - css/
   - js/
   - images/
   - docs/
   - config/config.js (UPDATE: create on server, don't commit)

### Option B: Git Clone (Recommended)
1. Enable SSH on Hostinger account
2. SSH into server:
```bash
ssh user@unregulatedthefilm.com
cd public_html
git clone https://github.com/YOUR_USERNAME/unregulated-film.git .
```

3. Create config.js on server (don't commit):
```bash
cp config/config.example.js config/config.js
nano config/config.js
# Edit with actual values
```

## Step 4: Configure Domain

1. In Hostinger, set domain to point to `/public_html/`
2. Enable HTTPS (SSL certificate)
3. Set up redirect from www and non-www versions

## Step 5: Set Permissions

```bash
chmod 644 index.html
chmod 644 css/*
chmod 644 js/*
chmod 755 images/
chmod 755 config/
```

## Step 6: Verify Deployment

1. Visit https://www.unregulatedthefilm.com
2. Check:
   - [ ] Page loads completely
   - [ ] Video plays without errors
   - [ ] Forms submit successfully
   - [ ] Analytics tracking works
   - [ ] SSL certificate is valid
   - [ ] No 404 errors in console

## Step 7: Set Up Monitoring

1. Enable Hostinger email notifications
2. Configure uptime monitoring
3. Set up error log alerts

## Updating After Deployment

When you push changes to GitHub:

```bash
# On server
cd /path/to/public_html
git pull origin main
```

Or use Hostinger's Git integration if available.

## Troubleshooting

**404 errors:**
- Verify file paths are correct
- Check file permissions
- Ensure index.html is in correct directory

**Video not playing:**
- Verify Vimeo is accessible from server's IP
- Check CORS headers (usually not an issue with Vimeo)

**Forms not submitting:**
- Verify email service API is accessible
- Check server logs for errors
- Ensure config.js has correct endpoints

For local testing before deployment, see SETUP.md
EOF
```

- [ ] **Step 3: Create TEMPLATE_GUIDE.md (Future Films)**

```bash
cat > docs/TEMPLATE_GUIDE.md << 'EOF'
# Template Customization Guide

This site is designed as a reusable template for documentary films in the "Unregulated" series.

## Customizing for a New Film

### 1. Update HTML Content

Edit `index.html` sections:

**Film Title & Description:**
```html
<strong>Unregulated: How [NEW TOPIC]</strong> is a documentary that explores...
```

**Hero Video:**
```html
<iframe src="https://player.vimeo.com/video/NEW_VIDEO_ID?h=HASH&autoplay=1&muted=1&loop=1">
```

**Story Section:**
- Update "The Scope of the Problem" with new statistics
- Update "Meet [Filmmaker]" with new interview subject
- Update "Why This Matters" with new impact

**Metadata:**
Update `<title>`, `<meta description>`, Open Graph tags, Twitter card, and Schema.org structured data.

### 2. Update Configuration

Edit `config/config.js`:
```javascript
filmTitle: 'New Film Title',
vimeoVideoId: 'NEW_ID',
gaTrackingId: 'NEW_GA_ID',
donateLink: 'NEW_PAYMENT_LINK',
siteUrl: 'https://www.newfilmsite.com',
```

### 3. Update Styling

If new film has different brand colors, update CSS variables in `css/style.css`:
```css
:root {
  --color-primary: '#NEW_COLOR';
  --color-accent: '#NEW_COLOR';
  /* ... etc */
}
```

### 4. Update Images

Replace placeholder images in `images/`:
- `poster.jpg` — Film poster (fallback for video)
- `favicon.svg` — Site icon

### 5. Update Branding

Navigation and footer can remain the same, or customize with:
- New logo/branding
- New social media links
- New contact information

### 6. Deploy New Site

1. Create new repository (or branch):
```bash
git checkout -b film-2-topic-name
```

2. Update domain settings in Hostinger:
```
New domain → point to /public_html/film-2/
```

3. Deploy following DEPLOYMENT.md instructions

4. Update analytics and email service configs

### 7. Testing Checklist for New Film

- [ ] All text updated
- [ ] Video plays correctly
- [ ] Images load
- [ ] Forms work
- [ ] Analytics tracking correct GA ID
- [ ] Payment links point to correct accounts
- [ ] Email service endpoints correct
- [ ] Domain SSL working
- [ ] Mobile responsive
- [ ] Social sharing displays correct title/image

## File Structure for Multiple Films

```
public_html/
├── www.unregulatedfilm.com/       # HOAs (Current)
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── images/
├── www.hoareformnetwork.com/      # Advocacy Hub
│   └── [separate project]
└── film-2/                         # Future Documentary
    ├── index.html
    ├── css/
    ├── js/
    └── images/
```

## Code Reuse

These modules are reusable across films:
- `js/video.js` — Works with any Vimeo ID
- `js/forms.js` — Generic email capture
- `js/analytics.js` — Works with any GA ID
- `css/style.css` — Update colors only
- `css/responsive.css` — Universal, no changes needed

No changes to structure needed—just update config and content.

## Questions?

See SETUP.md for local testing and DEPLOYMENT.md for live deployment.
EOF
```

- [ ] **Step 4: Commit documentation**

```bash
git add docs/SETUP.md docs/DEPLOYMENT.md docs/TEMPLATE_GUIDE.md
git commit -m "docs: add setup, deployment, and template customization guides"
```

Expected: Comprehensive documentation for setup, deployment, and future customization.

---

### Task 9: Performance Optimization & Asset Handling

**Files:**
- Modify: `index.html`, CSS, JS files
- Create: `images/.gitkeep`

- [ ] **Step 1: Optimize and minify CSS**

Minify both CSS files:
```bash
# Using online tool or build process
# Input: css/style.css → Output: css/style.min.css
# Input: css/responsive.css → Output: css/responsive.min.css
```

Update `index.html` to use minified versions:
```html
<link rel="stylesheet" href="/css/style.min.css">
<link rel="stylesheet" href="/css/responsive.min.css">
```

Alternative: Use CSS compression in your build tool or concatenate into one file.

- [ ] **Step 2: Minify JavaScript files**

Minify JavaScript:
```bash
# Input: js/*.js → Output: js/*.min.js
# Or concatenate all JS into one minified bundle
```

Update `index.html`:
```html
<script src="/js/main.min.js" defer></script>
<script src="/js/video.min.js" defer></script>
<script src="/js/forms.min.js" defer></script>
<script src="/js/analytics.min.js" defer></script>
```

- [ ] **Step 3: Optimize images**

For each image:
```bash
# Convert to WebP format with fallback JPG
# Compress to < 200KB total

# Use tools like:
# - ImageOptim (Mac)
# - TinyPNG (online)
# - ImageMagick (command line)
```

Example command:
```bash
convert poster.jpg -quality 85 -strip poster-optimized.jpg
```

Place optimized images in `images/` directory.

- [ ] **Step 4: Set up lazy loading for images**

Add `loading="lazy"` to non-critical images:
```html
<img src="/images/poster.jpg" alt="..." loading="lazy">
```

The hero video doesn't need lazy loading (above fold).

- [ ] **Step 5: Add caching headers for Hostinger**

Create `.htaccess` file in `public_html/`:
```bash
cat > .htaccess << 'EOF'
# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache control headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Redirect HTTP to HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
EOF
```

- [ ] **Step 6: Test performance**

Use Lighthouse (Chrome DevTools):
1. Open DevTools (F12)
2. Run Lighthouse audit
3. Target scores:
   - Performance: 80+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

If scores are low, optimize:
- Reduce image sizes further
- Minify CSS/JS more aggressively
- Remove unused fonts
- Defer non-critical JS

- [ ] **Step 7: Commit optimizations**

```bash
git add images/ .htaccess
git commit -m "perf: optimize assets, enable compression, add cache headers"
```

Expected: Lighthouse scores 80+, page load < 3 seconds.

---

### Task 10: Testing & Quality Assurance

**Files:**
- Create: `tests/test.html`
- Create: `tests/accessibility.html`

- [ ] **Step 1: Create manual testing checklist**

```bash
cat > tests/test.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UnregulatedTheFilm.com - Testing Checklist</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      background: #f5f5f0;
    }
    h1 { color: #1a2e4a; }
    h2 { color: #d32f2f; margin-top: 30px; }
    .test-group { background: white; padding: 20px; margin: 15px 0; border-radius: 4px; }
    .test-item { margin: 10px 0; }
    input[type="checkbox"] { margin-right: 10px; }
    .pass { color: #28a745; }
    .fail { color: #d32f2f; }
  </style>
</head>
<body>
  <h1>UnregulatedTheFilm.com - QA Testing Checklist</h1>

  <div class="test-group">
    <h2>Desktop (1920x1080)</h2>
    <div class="test-item"><input type="checkbox"> Hero video autoplays and loops</div>
    <div class="test-item"><input type="checkbox"> All sections visible and properly spaced</div>
    <div class="test-item"><input type="checkbox"> Navigation sticky header works</div>
    <div class="test-item"><input type="checkbox"> All buttons are clickable</div>
    <div class="test-item"><input type="checkbox"> Forms validate email input</div>
    <div class="test-item"><input type="checkbox"> Sticky footer appears after scroll</div>
    <div class="test-item"><input type="checkbox"> Links open in correct targets</div>
    <div class="test-item"><input type="checkbox"> Footer links work</div>
  </div>

  <div class="test-group">
    <h2>Tablet (768x1024)</h2>
    <div class="test-item"><input type="checkbox"> Two-column product grid displays correctly</div>
    <div class="test-item"><input type="checkbox"> Navigation doesn't overflow</div>
    <div class="test-item"><input type="checkbox"> Touch targets are large enough (48px)</div>
    <div class="test-item"><input type="checkbox"> Sticky footer is readable</div>
    <div class="test-item"><input type="checkbox"> No horizontal scrolling</div>
  </div>

  <div class="test-group">
    <h2>Mobile (375x667)</h2>
    <div class="test-item"><input type="checkbox"> Single-column layouts</div>
    <div class="test-item"><input type="checkbox"> Buttons are full-width and tappable</div>
    <div class="test-item"><input type="checkbox"> Video still plays in hero</div>
    <div class="test-item"><input type="checkbox"> Text is readable (no pinch zoom needed)</div>
    <div class="test-item"><input type="checkbox"> Sticky footer stacks vertically</div>
    <div class="test-item"><input type="checkbox"> Navigation is accessible</div>
    <div class="test-item"><input type="checkbox"> No overflow or horizontal scroll</div>
  </div>

  <div class="test-group">
    <h2>Form Testing</h2>
    <div class="test-item"><input type="checkbox"> Film newsletter form accepts valid email</div>
    <div class="test-item"><input type="checkbox"> Film newsletter rejects invalid email</div>
    <div class="test-item"><input type="checkbox"> HOA network form works separately</div>
    <div class="test-item"><input type="checkbox"> Form shows success message</div>
    <div class="test-item"><input type="checkbox"> Form fields clear after submission</div>
    <div class="test-item"><input type="checkbox"> Submit button is disabled while processing</div>
  </div>

  <div class="test-group">
    <h2>Video Testing</h2>
    <div class="test-item"><input type="checkbox"> Vimeo video loads</div>
    <div class="test-item"><input type="checkbox"> Video autoplays on desktop</div>
    <div class="test-item"><input type="checkbox"> Video is muted</div>
    <div class="test-item"><input type="checkbox"> Video loops continuously</div>
    <div class="test-item"><input type="checkbox"> Fallback poster displays if video fails</div>
    <div class="test-item"><input type="checkbox"> Video plays on click</div>
  </div>

  <div class="test-group">
    <h2>Analytics Testing</h2>
    <div class="test-item"><input type="checkbox"> Page view logged in GA4</div>
    <div class="test-item"><input type="checkbox"> CTA clicks tracked (Donate, Shop, Share)</div>
    <div class="test-item"><input type="checkbox"> Form submissions tracked</div>
    <div class="test-item"><input type="checkbox"> Scroll depth events firing</div>
    <div class="test-item"><input type="checkbox"> Video play/complete events tracked</div>
  </div>

  <div class="test-group">
    <h2>Browser Compatibility</h2>
    <div class="test-item"><input type="checkbox"> Chrome (desktop & mobile)</div>
    <div class="test-item"><input type="checkbox"> Firefox</div>
    <div class="test-item"><input type="checkbox"> Safari (Mac & iOS)</div>
    <div class="test-item"><input type="checkbox"> Edge</div>
  </div>

  <div class="test-group">
    <h2>SEO & Meta</h2>
    <div class="test-item"><input type="checkbox"> Page title is correct</div>
    <div class="test-item"><input type="checkbox"> Meta description displays correctly</div>
    <div class="test-item"><input type="checkbox"> Open Graph tags work (social preview)</div>
    <div class="test-item"><input type="checkbox"> Schema.org video structured data valid</div>
    <div class="test-item"><input type="checkbox"> Favicon displays</div>
  </div>

  <div class="test-group">
    <h2>Performance</h2>
    <div class="test-item"><input type="checkbox"> Page load < 3 seconds (3G)</div>
    <div class="test-item"><input type="checkbox"> Lighthouse Performance > 80</div>
    <div class="test-item"><input type="checkbox"> Images optimized (< 200KB total)</div>
    <div class="test-item"><input type="checkbox"> No console errors</div>
    <div class="test-item"><input type="checkbox"> No 404 errors</div>
  </div>

  <div class="test-group">
    <h2>Links & External Services</h2>
    <div class="test-item"><input type="checkbox"> Donate link opens payment processor</div>
    <div class="test-item"><input type="checkbox"> Shop link opens Shopify/Printful</div>
    <div class="test-item"><input type="checkbox"> Share button works (native or fallback)</div>
    <div class="test-item"><input type="checkbox"> Social links open in new tabs</div>
    <div class="test-item"><input type="checkbox"> Newsletter API endpoints responding</div>
  </div>

  <h2 style="margin-top: 50px;">Sign-Off</h2>
  <p>
    Tested by: ________________<br>
    Date: ________________<br>
    All tests passed: __ Yes __ No
  </p>
</body>
</html>
EOF
```

- [ ] **Step 2: Create accessibility checklist**

```bash
cat > tests/accessibility.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UnregulatedTheFilm.com - Accessibility Checklist</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      background: #f5f5f0;
    }
    h1 { color: #1a2e4a; }
    .test-group { background: white; padding: 20px; margin: 15px 0; border-radius: 4px; }
    .test-item { margin: 10px 0; }
    input[type="checkbox"] { margin-right: 10px; }
  </style>
</head>
<body>
  <h1>UnregulatedTheFilm.com - Accessibility Checklist (WCAG 2.1 AA)</h1>

  <div class="test-group">
    <h2>Keyboard Navigation</h2>
    <div class="test-item"><input type="checkbox"> All links and buttons accessible via Tab key</div>
    <div class="test-item"><input type="checkbox"> Tab order is logical (top to bottom, left to right)</div>
    <div class="test-item"><input type="checkbox"> Can submit forms with keyboard only</div>
    <div class="test-item"><input type="checkbox"> Focus indicator is visible on all interactive elements</div>
    <div class="test-item"><input type="checkbox"> No keyboard traps (can always Tab forward)</div>
  </div>

  <div class="test-group">
    <h2>Screen Reader Testing (NVDA, JAWS, or VoiceOver)</h2>
    <div class="test-item"><input type="checkbox"> Page title announced correctly</div>
    <div class="test-item"><input type="checkbox"> Main headings (h1, h2, h3) announced as headings</div>
    <div class="test-item"><input type="checkbox"> Images have alt text</div>
    <div class="test-item"><input type="checkbox"> Video has title attribute</div>
    <div class="test-item"><input type="checkbox"> Form labels associated with inputs</div>
    <div class="test-item"><input type="checkbox"> Button purposes clear (not just "Click here")</div>
    <div class="test-item"><input type="checkbox"> Links have descriptive text</div>
    <div class="test-item"><input type="checkbox"> Landmarks detected (header, main, footer)</div>
  </div>

  <div class="test-group">
    <h2>Color & Contrast</h2>
    <div class="test-item"><input type="checkbox"> Text contrast ratio >= 4.5:1 (normal text)</div>
    <div class="test-item"><input type="checkbox"> Large text contrast ratio >= 3:1</div>
    <div class="test-item"><input type="checkbox"> Color not sole indicator of information</div>
    <div class="test-item"><input type="checkbox"> Focus indicator visible (color + shape/outline)</div>
    <div class="test-item"><input type="checkbox"> All buttons/links distinguishable from text</div>
  </div>

  <div class="test-group">
    <h2>Text & Readability</h2>
    <div class="test-item"><input type="checkbox"> Font size >= 12px (14px preferred)</div>
    <div class="test-item"><input type="checkbox"> Line spacing adequate (1.5+ recommended)</div>
    <div class="test-item"><input type="checkbox"> No text in all caps (except acronyms)</div>
    <div class="test-item"><input type="checkbox"> Content is clear and simple language</div>
    <div class="test-item"><input type="checkbox"> Justified text is not used (left-aligned preferred)</div>
  </div>

  <div class="test-group">
    <h2>Zoom & Responsiveness</h2>
    <div class="test-item"><input type="checkbox"> Page readable at 200% zoom</div>
    <div class="test-item"><input type="checkbox"> No horizontal scrolling at 200% zoom</div>
    <div class="test-item"><input type="checkbox"> Responsive at all breakpoints (320px to 1920px)</div>
    <div class="test-item"><input type="checkbox"> Text resize works without layout breakage</div>
  </div>

  <div class="test-group">
    <h2>Forms</h2>
    <div class="test-item"><input type="checkbox"> Form labels visible and associated</div>
    <div class="test-item"><input type="checkbox"> Required fields marked and announced</div>
    <div class="test-item"><input type="checkbox"> Error messages clear and linked to fields</div>
    <div class="test-item"><input type="checkbox"> Form fields have helpful placeholder text (not label replacement)</div>
    <div class="test-item"><input type="checkbox"> Submit button clearly labeled</div>
  </div>

  <div class="test-group">
    <h2>Motion & Animation</h2>
    <div class="test-item"><input type="checkbox"> Animations don't last > 5 seconds without pause option</div>
    <div class="test-item"><input type="checkbox"> No auto-playing videos with sound</div>
    <div class="test-item"><input type="checkbox"> prefers-reduced-motion respected</div>
    <div class="test-item"><input type="checkbox"> No flashing/strobing (> 3 flashes/second)</div>
  </div>

  <div class="test-group">
    <h2>Links & Navigation</h2>
    <div class="test-item"><input type="checkbox"> Links open in same window (unless specified)</div>
    <div class="test-item"><input type="checkbox"> Link purpose clear from text alone</div>
    <div class="test-item"><input type="checkbox"> No keyboard shortcuts that conflict with assistive tech</div>
    <div class="test-item"><input type="checkbox"> Skip links provided (if navigation is lengthy)</div>
  </div>

  <div class="test-group">
    <h2>Automated Testing (axe DevTools, Lighthouse)</h2>
    <div class="test-item"><input type="checkbox"> Run axe DevTools - no violations</div>
    <div class="test-item"><input type="checkbox"> Run Lighthouse Accessibility audit > 90</div>
    <div class="test-item"><input type="checkbox"> No console ARIA warnings</div>
  </div>

  <h2 style="margin-top: 50px;">Sign-Off</h2>
  <p>
    Tested by: ________________<br>
    Date: ________________<br>
    WCAG 2.1 AA compliant: __ Yes __ No<br>
    Notes: ________________
  </p>
</body>
</html>
EOF
```

- [ ] **Step 3: Run testing checklists**

1. Open `tests/test.html` in browser
2. Go through each section and check off items
3. Document any failures
4. Fix issues and retest
5. Repeat for accessibility checklist

- [ ] **Step 4: Run Lighthouse audit**

1. Open DevTools (F12)
2. Click "Lighthouse" tab
3. Run audit (Desktop first, then Mobile)
4. Target scores:
   - Performance: 80+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+
5. Fix any issues
6. Re-run until all scores meet targets

- [ ] **Step 5: Run axe accessibility audit**

1. Install axe DevTools browser extension
2. Click axe DevTools icon
3. Scan page
4. Review violations and best practices
5. Fix any issues
6. Re-scan until no violations

- [ ] **Step 6: Commit test files**

```bash
git add tests/test.html tests/accessibility.html
git commit -m "test: add comprehensive testing and accessibility checklists"
```

Expected: All tests pass, Lighthouse > 80, no accessibility violations.

---

### Task 11: Deploy to GitHub & Hostinger

**Files:**
- All code committed to Git

- [ ] **Step 1: Create GitHub repository**

1. Go to github.com/new
2. Create repository `unregulated-film`
3. Set as public
4. Do NOT initialize with README (we have one)

- [ ] **Step 2: Connect local repo to GitHub**

```bash
git remote add origin https://github.com/YOUR_USERNAME/unregulated-film.git
git branch -M main
git push -u origin main
```

Expected: All commits pushed to GitHub.

- [ ] **Step 3: Deploy to Hostinger**

```bash
# SSH into Hostinger
ssh your_username@unregulatedthefilm.com

# Navigate to public_html
cd public_html

# Clone repo
git clone https://github.com/YOUR_USERNAME/unregulated-film.git .

# Create config file with actual values
cp config/config.example.js config/config.js
nano config/config.js
# Edit: Vimeo ID, GA ID, API endpoints, payment links

# Set permissions
chmod 644 index.html css/* js/*
chmod 755 images/ config/
```

- [ ] **Step 4: Verify deployment**

1. Visit https://www.unregulatedthefilm.com
2. Run full QA checklist (Task 10)
3. Run Lighthouse on production
4. Verify analytics is tracking
5. Test forms submit to correct services

- [ ] **Step 5: Set up monitoring & alerts**

In Hostinger control panel:
- [ ] Enable error log monitoring
- [ ] Set up uptime monitoring
- [ ] Enable email alerts for downtime

- [ ] **Step 6: Commit deployment config (optional)**

```bash
git tag -a v1.0.0 -m "Release version 1.0.0 - Production deployment"
git push origin main --tags
```

Expected: Site live and fully functional at https://www.unregulatedthefilm.com

---

## Summary

**Tasks Completed:**
1. ✅ Initialize Git & project structure
2. ✅ Build semantic HTML
3. ✅ Create base CSS (layout, typography, colors)
4. ✅ Implement responsive design
5. ✅ Integrate Vimeo video
6. ✅ Build forms & validation
7. ✅ Add Google Analytics 4
8. ✅ Write documentation
9. ✅ Optimize assets & performance
10. ✅ Test & QA
11. ✅ Deploy to GitHub & Hostinger

**Result:** Production-ready documentary website with:
- Single-page scrolling design
- Autoplaying Vimeo video hero
- Multiple content sections
- Newsletter signup (sticky footer + mid-page)
- Form validation & submission
- Analytics tracking
- Mobile responsiveness
- Accessibility compliance (WCAG 2.1 AA)
- Performance optimization (Lighthouse 80+)
- Comprehensive documentation
- Git version control
- Live on Hostinger

**Next Steps After Deployment:**
- Monitor analytics for user behavior
- Collect feedback from early visitors
- Prepare for HOA Reform Network (separate project)
- Plan Series 2 documentary
- Use this template for future films
