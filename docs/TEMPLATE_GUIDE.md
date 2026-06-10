# Template Customization Guide

UnregulatedTheFilm.com - How to Adapt This Site for Future Films

---

## Overview

**UnregulatedTheFilm.com** is designed as a **reusable template** for a potential series of documentary films. This guide shows you how to customize the site for new films with minimal changes to the codebase.

**Key Philosophy:**
- Write code once, reuse for many films
- Centralize customization in configuration files
- Maintain consistent design across the series
- Minimize code duplication

---

## What Makes This a Good Template?

### 1. Separation of Content from Code

**Content (Easy to Change):**
- Text, headlines, descriptions
- Images and videos
- Film-specific settings

**Code (Shared Across Films):**
- HTML structure and layout
- CSS styling and design system
- JavaScript functionality

This separation means each new film only requires:
- Updating config files
- Swapping images and videos
- No code rewrites

### 2. Centralized Configuration

All film-specific settings live in `config/config.example.js`:
- Film title and description
- Social media links
- Analytics IDs
- Contact information
- Feature flags

### 3. Reusable HTML Structure

The single-page design (sections for Hero, Story, Support, Merch, Footer) works for any documentary:
- Hero video section
- About filmmaker section
- Support/donation section
- Merchandise section
- Email signup and social links

### 4. Flexible Styling

CSS uses custom properties (variables) for colors, fonts, and spacing:
- Easy to adjust colors per film
- Consistent typography
- Responsive design works for all films

---

## Customization Workflow

Here's the process for adapting this template for a new film:

### Step 1: Create a New Repository

For each new film, create a new GitHub repository:

```bash
# Option A: Start from scratch
git init my-documentary-name

# Option B: Clone this repository and modify
git clone https://github.com/unregulated-the-film.git my-documentary-name
cd my-documentary-name
git remote set-url origin https://github.com/YOUR-USERNAME/my-documentary-name.git
git push -u origin main
```

### Step 2: Update Configuration

Edit `config/config.example.js` with new film details:

```javascript
const CONFIG = {
  // Film Information
  film: {
    title: 'My New Documentary',
    description: 'A documentary about [topic]',
    year: 2026,
    filmmaker: 'Your Name',
    filmmakerBio: 'Brief biography of the filmmaker',
  },

  // Environment
  environment: 'development', // or 'production'

  // Analytics
  analytics: {
    enabled: true,
    googleAnalyticsId: 'G_YOUR_NEW_GA_ID',
  },

  // Social Media
  social: {
    facebook: 'https://facebook.com/my-doc',
    instagram: 'https://instagram.com/my-doc',
    twitter: 'https://twitter.com/my-doc',
    youtube: 'https://youtube.com/my-doc',
  },

  // Contact
  contact: {
    email: 'info@mydocumentary.com',
    supportEmail: 'support@mydocumentary.com',
  },

  // Features
  features: {
    emailCapture: true,
    socialSharing: true,
    comments: false,
  },

  // Customizable Colors (Optional)
  colors: {
    primary: '#1a2e4a',        // Dark blue (from film poster)
    accent: '#d32f2f',          // Red accent
    lightBg: '#f9f9f9',         // Light gray background
  },
};
```

### Step 3: Update HTML Content

Edit `index.html` to reflect the new film:

#### Hero Section
```html
<!-- Replace video URL -->
<section class="hero" id="hero">
  <video autoplay muted loop>
    <source src="https://path-to-your-vimeo-video" type="video/mp4">
  </video>
</section>
```

#### Title and Description
```html
<!-- Update film title and description -->
<h1>My New Documentary Title</h1>
<p>Updated description about your film...</p>
```

#### "The Story" Section
```html
<!-- Update filmmaker name and biography -->
<div class="filmmaker-box">
  <h2>Meet [Filmmaker Name]</h2>
  <p>Updated biography and story...</p>
</div>
```

#### Contact Email
```html
<!-- Update email links -->
<a href="mailto:info@mynewdocumentary.com">Contact Us</a>
```

### Step 4: Update Images

Replace placeholder images with your own:

```
images/
├── og-image.jpg           # Social share image (1200x630px)
├── film-poster.jpg        # Optional: poster image
├── filmmaker-photo.jpg    # Filmmaker headshot
└── hero-fallback.jpg      # Video fallback image
```

**Image Requirements:**
- Optimize for web (compress with TinyPNG, ImageOptim)
- Use descriptive filenames
- Provide alt text in HTML

### Step 5: Update Video

Replace the hero video with your documentary reel:

**Video Options:**
1. **Vimeo (Recommended)**
   - Upload to Vimeo
   - Copy embed code
   - Update video source in HTML

2. **Direct MP4**
   - Host on CDN or server
   - Update video source path
   - Provide fallback image

**Video Specifications:**
- Duration: 30-60 seconds (optimal for hero loop)
- Format: MP4 or WebM
- Aspect ratio: 16:9
- Resolution: 1920x1080 minimum

### Step 6: Customize Colors (Optional)

If you want different colors per film:

#### Option A: Update CSS Variables

Edit `css/variables.css`:

```css
:root {
  /* Primary Colors */
  --color-primary: #1a2e4a;      /* Dark blue - change to your film's color */
  --color-accent: #d32f2f;       /* Red - change to your accent color */
  --color-light-bg: #f9f9f9;     /* Light backgrounds */
  
  /* Typography */
  --font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-size-base: 15px;
  --font-size-heading-lg: 36px;
  --font-size-heading-sm: 24px;
}
```

#### Option B: Use JavaScript to Set Colors

In `js/main.js`, add color configuration from `config.js`:

```javascript
// Apply custom colors from config
if (CONFIG.colors) {
  document.documentElement.style.setProperty('--color-primary', CONFIG.colors.primary);
  document.documentElement.style.setProperty('--color-accent', CONFIG.colors.accent);
}
```

### Step 7: Update Footer Links

Customize footer sections in `index.html`:

```html
<footer class="footer">
  <div class="footer-column">
    <h4>The Film</h4>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="press-kit.html">Press Kit</a></li>
      <li><a href="screenings.html">Screenings</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h4>Support</h4>
    <ul>
      <li><a href="#donate">Donate</a></li>
      <li><a href="shop.html">Shop</a></li>
      <li><a href="mailto:info@mydocumentary.com">Contact</a></li>
    </ul>
  </div>
  <!-- ... -->
</footer>
```

### Step 8: Update SEO Metadata

In `index.html`, update meta tags:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Update these for your film -->
  <title>My New Documentary | A Film About [Topic]</title>
  <meta name="description" content="A powerful documentary exploring [topic]. Follow the journey of [filmmaker] as we investigate...">
  
  <!-- Social Sharing -->
  <meta property="og:title" content="My New Documentary">
  <meta property="og:description" content="Description of your film">
  <meta property="og:image" content="/images/og-image.jpg">
  <meta property="og:url" content="https://mydocumentary.com">
  
  <!-- Keywords -->
  <meta name="keywords" content="documentary, [topic], [filmmaker], [relevant keywords]">
</head>
```

---

## File Structure for Multiple Films

If you're managing multiple documentary sites, here's a recommended structure:

### Option 1: Separate Repositories (Recommended)

Each film gets its own repository:

```
GitHub Organization
├── unregulated-the-film          # Film 1
├── documentary-2-name             # Film 2
├── documentary-3-name             # Film 3
└── shared-templates/              # Shared utilities
```

**Benefits:**
- Each film is independent
- Easy to manage versions and deployments
- Separate hosting and domains

### Option 2: Monorepo Structure

All films in one repository:

```
documentary-series/
├── films/
│   ├── unregulated-the-film/      # Film 1
│   │   ├── index.html
│   │   ├── css/
│   │   ├── js/
│   │   ├── images/
│   │   └── config/
│   ├── documentary-2/             # Film 2
│   │   ├── index.html
│   │   ├── css/
│   │   ├── js/
│   │   ├── images/
│   │   └── config/
│   └── documentary-3/             # Film 3
├── shared/                        # Shared code
│   ├── css/
│   │   ├── base-styles.css
│   │   └── variables.css
│   ├── js/
│   │   ├── shared-utils.js
│   │   └── analytics.js
│   └── images/
│       └── shared-assets/
└── README.md
```

**Benefits:**
- Shared CSS and JavaScript
- Consistent design system
- Easier version control
- Single deployment pipeline

---

## Code Reuse Across Films

### Shared CSS

Create a base stylesheet that all films inherit:

**shared/css/base-styles.css:**
```css
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-stack);
  line-height: 1.6;
  color: var(--color-text);
}

/* Common Patterns */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

.button {
  display: inline-block;
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
```

**Each film's css/style.css imports it:**
```css
@import '../shared/css/base-styles.css';
@import './variables.css';

/* Film-specific styles */
.hero {
  /* ... */
}
```

### Shared JavaScript

Common functionality used by all films:

**shared/js/shared-utils.js:**
```javascript
// Scroll to section navigation
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Form validation
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Analytics tracking
function trackEvent(eventName, eventData) {
  if (window.gtag) {
    gtag('event', eventName, eventData);
  }
}
```

**Each film's js/main.js uses shared utilities:**
```javascript
// Use shared utilities
document.querySelector('[data-scroll="about"]').addEventListener('click', () => {
  scrollToSection('about');
});
```

---

## Updating Across All Films

If you find a bug or improvement that benefits all films:

### Process

1. **Fix in one film** (test thoroughly)
2. **Apply to shared code** (if using monorepo)
3. **Update other films** to use the fix
4. **Document the change** in CHANGELOG.md

### Example: Adding a New Feature

If you want email capture across all films:

1. **Create shared component:**
   ```javascript
   // shared/js/email-capture.js
   function initEmailCapture() {
     const form = document.querySelector('.email-form');
     if (!form) return;
     
     form.addEventListener('submit', async (e) => {
       e.preventDefault();
       const email = form.querySelector('input[type="email"]').value;
       
       // Validate and submit
       if (validateEmail(email)) {
         // Send to email service
       }
     });
   }
   ```

2. **Import in each film:**
   ```html
   <!-- In each film's index.html -->
   <script src="/shared/js/email-capture.js"></script>
   <script src="js/main.js"></script>
   ```

3. **Initialize in main.js:**
   ```javascript
   initEmailCapture();
   ```

---

## Film-Specific Extensions

Different films might need different features. Here's how to handle it:

### Option 1: Feature Flags in Config

```javascript
const CONFIG = {
  // ... base config

  features: {
    emailCapture: true,
    socialSharing: true,
    comments: true,        // Only for interactive films
    guestbook: true,       // Only for community-focused films
    petitions: false,      // Only for activism docs
  },
};
```

Then in JavaScript, check flags:

```javascript
// Only load comments if enabled
if (CONFIG.features.comments) {
  loadCommentsSection();
}
```

### Option 2: Film-Specific CSS Files

```
films/unregulated-the-film/
├── css/
│   ├── base.css          # Shared
│   ├── style.css         # Film-specific
│   └── features.css      # Extra features
```

### Option 3: Film-Specific JavaScript Modules

```javascript
// films/unregulated-the-film/js/
├── main.js               # Shared entry point
├── features/
│   ├── petition-tracker.js    # Specific to this film
│   └── story-submissions.js   # Specific to this film
```

---

## Customization Checklist

When launching a new film:

**Content Updates**
- [ ] Film title and description updated
- [ ] Hero video replaced
- [ ] Filmmaker name and bio updated
- [ ] Contact email updated
- [ ] Social media links updated
- [ ] Footer links updated

**Configuration**
- [ ] config/config.js created (from config.example.js)
- [ ] Analytics ID updated (Google Analytics)
- [ ] Feature flags configured appropriately
- [ ] Colors updated (if different from default)

**Visuals**
- [ ] Hero fallback image replaced
- [ ] OG image for social sharing updated
- [ ] Favicon updated (if needed)
- [ ] Any film-specific images optimized

**SEO**
- [ ] Meta title updated
- [ ] Meta description updated
- [ ] OG tags updated
- [ ] Keywords updated

**Testing**
- [ ] Site tested on desktop, tablet, mobile
- [ ] All links work (internal and external)
- [ ] Video plays correctly
- [ ] Forms work (newsletter signup, donations)
- [ ] Analytics tracking works
- [ ] No console errors

**Deployment**
- [ ] Domain purchased and configured
- [ ] SSL certificate installed
- [ ] GitHub repository created
- [ ] Hostinger hosting configured
- [ ] Files uploaded/deployed
- [ ] Live site verified

---

## Future Enhancements

As you manage more films, consider these improvements:

### 1. Template Generator

Create a script to auto-generate new film sites:

```bash
#!/bin/bash
# create-film.sh
FILM_NAME=$1
FILM_SLUG=$(echo $FILM_NAME | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

# Clone template
git clone template-repo.git $FILM_SLUG
cd $FILM_SLUG

# Update config
sed -i "s/FILM_TITLE/$FILM_NAME/g" config/config.example.js

# Create new git repo
git remote set-url origin https://github.com/YOUR-ORG/$FILM_SLUG.git
git push -u origin main

echo "New film site created: $FILM_SLUG"
```

### 2. Design System

Build a comprehensive design system documenting:
- Color palettes (primary, accent, neutral)
- Typography (font sizes, weights, spacing)
- Component patterns (buttons, cards, forms)
- Layout grid and responsive breakpoints

### 3. Component Library

Create reusable web components:

```html
<!-- Custom element for merchandise cards -->
<merch-card>
  <img src="product.jpg">
  <h3>Product Name</h3>
  <p>$29.99</p>
</merch-card>

<script>
class MerchCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    // Render component
  }
}
customElements.define('merch-card', MerchCard);
</script>
```

### 4. Centralized Content Management

Move frequently-changed content to JSON files:

**content/films.json:**
```json
[
  {
    "id": "unregulated-the-film",
    "title": "Unregulated: How HOAs Threaten the American Dream",
    "description": "...",
    "filmmaker": "Kenneth Spresley",
    "year": 2026,
    "videoUrl": "https://vimeo.com/..."
  }
]
```

Then load via JavaScript:

```javascript
fetch('content/films.json')
  .then(r => r.json())
  .then(data => {
    const film = data[0];
    document.querySelector('h1').textContent = film.title;
  });
```

---

## Questions & Answers

### Q: Can I change the layout for a new film?

**A:** Yes! The structure is flexible. While the single-page design works well, you can:
- Add additional pages (about.html, screenings.html)
- Change section order
- Add/remove sections per film
- Customize color schemes

The shared CSS provides a foundation, but you can override or extend it.

### Q: How do I maintain consistent branding across films?

**A:** Use a design system:
- Standard color palette (primary, accent, neutral)
- Consistent typography
- Shared component styles
- Common layout patterns

All films should feel part of the same "series" even if they're about different topics.

### Q: What if films need completely different designs?

**A:** Start fresh rather than forcing the template:
- The template works best for similar documentary formats
- If a film needs a radically different design, clone the repo but build a custom theme
- Consider whether differences are necessary or just stylistic

### Q: How do I handle SEO for multiple films?

**A:** Each film should:
- Have unique meta tags (title, description, keywords)
- Target specific search terms relevant to that film
- Have a unique domain or subdomain
- Build backlinks specific to that film/topic

Link between films where relevant (e.g., "More from our series" section).

### Q: Can I integrate with a CMS later?

**A:** Yes! If you need dynamic content:
- Headless CMS (Strapi, Sanity, Contentful)
- Backend API + frontend (Node.js, Python)
- Database for content and user data

The static structure makes this upgrade straightforward when needed.

---

## Next Steps

1. **Customize for your first film** (follow the customization workflow above)
2. **Test thoroughly** on different devices and browsers
3. **Deploy to Hostinger** (see DEPLOYMENT.md)
4. **Document any film-specific changes** for future reference
5. **Create a style guide** as you build more films
6. **Consider a design system** when you have 2-3 films

---

## Resources

- **Design Specifications:** See DESIGN_SPEC.md
- **Deployment Instructions:** See DEPLOYMENT.md
- **Local Setup:** See SETUP.md
- **Web Components:** https://developer.mozilla.org/en-US/docs/Web/Web_Components
- **CSS Custom Properties:** https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **SEO Best Practices:** https://developers.google.com/search

---

**Last Updated:** June 9, 2026  
**Maintained By:** UnregulatedTheFilm Team
