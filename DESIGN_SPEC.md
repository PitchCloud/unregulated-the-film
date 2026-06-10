# Unregulated: How HOAs Threaten the American Dream
## Website Design Specification

**Project:** UnregulatedTheFilm.com Redesign  
**Date:** June 9, 2026  
**Status:** Design Approved - Ready for Implementation  
**Stack:** GitHub (source of truth) → Hostinger (hosting)

---

## 1. Project Overview

**UnregulatedTheFilm.com** is a focused, single-page documentary website designed as the first in a potential series of documentary films. The site serves as a hub for the film *Unregulated: How HOAs Threaten the American Dream*, emphasizing film promotion, audience engagement, and support-seeking (donations, merchandise, advocacy signups).

**Key Strategic Context:**
- This is **Series 1** of a potential multi-film documentary series
- Advocacy content (blog, petition, story submissions) will live on a separate domain: **HOAReformNetwork.com** (launching later)
- Site design is intentionally minimal and reusable for future films in the series
- Primary audience: Homeowners, advocates, legislators, attorneys, realtors interested in HOA reform

---

## 2. Design Architecture

### 2.1 Single-Page Layout
The site uses a single-page scroll design with sticky navigation. All content flows vertically with distinct sections, each optimized for a specific purpose.

### 2.2 Navigation Structure

**Primary Navigation Items:**
- About the Film (anchors to "The Story" section)
- Donate (anchors to "Support This Documentary" section)
- Merch (anchors to "Official Merchandise" section)
- HOA Network (links to HOA Reform Network — coming soon)

**Navigation Behavior:**
- Fixed/sticky header throughout page scroll
- Clean, minimal design (logo + nav items)
- Responsive collapse on mobile

---

## 3. Page Sections

### 3.1 Header & Navigation
- **Background:** White with subtle border
- **Logo/Brand:** "UNREGULATED" text-based logo (22px, bold, #1a2e4a)
- **Navigation:** Four main items in uppercase, 13px font, #1a2e4a
- **Behavior:** Sticky positioning as user scrolls

### 3.2 Hero Section: Full-Width Video
- **Layout:** Full viewport width and height (16:9 aspect ratio)
- **Content:** Autoplaying, muted, looping video (Vimeo embed via CDN)
- **Video Clips:** User-provided film clips compiled into a short reel
- **No Text Overlay:** Video fills entire hero to maximize cinematic impact
- **Purpose:** Immediate visual impact, establishes professional documentary tone

**Technical Requirements:**
- Vimeo embed with autoplay + mute + loop parameters
- Fallback: Static poster image if video doesn't load
- Mobile: Video scales responsively, maintains aspect ratio

### 3.3 Copy Section Below Hero
- **Background:** White
- **Width:** Max 700px centered
- **Spacing:** 50px padding top/bottom, 40px sides

**Content:**
```
**Unregulated: How HOAs Threaten the American Dream** is a documentary that explores 
the power dynamics of Homeowners' Associations and their impact on American families, 
highlighting real stories and advocating for legislative change.

[Support message in highlighted box]
Help us get this film across the finish line by donating and by sharing this website 
with HOA advocates, groups, legislators, and others interested.

[Two CTAs]
- Support the Film (red button)
- Share This Film (white border button)
```

**Design:**
- Title in bold, integrated into paragraph
- Main text: 15px, line-height 1.8, #666
- Highlighted box: Light gray background, left red border, 20px padding
- CTAs: Two-button layout, clear hierarchy

### 3.4 The Story Section
- **Background:** White
- **Width:** Max 900px centered
- **Content Structure:** Three subsections

**Subsection 1: The Scope of the Problem**
- Headline: "The Scope of the Problem" (24px, #d32f2f)
- Text: Statistics (74 million Americans in HOAs), trend implications, lack of awareness
- Font: 15px, line-height 1.8, #666

**Subsection 2: Meet Kenneth Spresley**
- Background: Light gray (#f9f9f9) with 40px padding, rounded corners
- Headline: "Meet Kenneth Spresley" (24px, #1a2e4a)
- Text: Introduces filmmaker as Texas homeowner and USAF veteran; describes his investigative journey through the documentary
- Font: 15px, line-height 1.8, #666

**Subsection 3: Why This Matters**
- Headline: "Why This Matters" (24px, #1a2e4a)
- Text: Stakes, impact on families, call to action for reform
- Font: 15px, line-height 1.8, #666

### 3.5 Support Section
- **Background:** Dark navy gradient (#1a2e4a to #2d4a6f)
- **Text Color:** White
- **Layout:** Centered, max 700px
- **Content:**
  - Headline: "Support This Documentary" (36px, bold, white)
  - Text: Emphasizes post-production stage, direct impact of donations
  - CTA Button: "Donate Now" (red, #d32f2f background, white text, uppercase)
- **Purpose:** Clear call-to-action for financial support

### 3.6 Merchandise Section
- **Background:** White
- **Width:** Max 1000px centered
- **Content:**
  - Headline: "Official Merchandise" (36px, #1a2e4a)
  - Subheading: "Limited edition gear. All proceeds support the film." (13px, uppercase, #999)
  - Product Grid: 3-column grid on desktop
    - Each product card: Image placeholder, product name, price
    - Background: Light gray (#f9f9f9), 20px padding, rounded corners
  - CTA Button: "Shop All" (dark navy background, white text, uppercase)
- **Purpose:** Revenue generation, brand engagement

### 3.7 HOA Reform Network Coming Soon
- **Background:** Red gradient (#d32f2f to #b22234)
- **Text Color:** White
- **Width:** Max 700px centered
- **Content:**
  - Headline: "HOA Reform Network" (36px, bold, white)
  - Description: "A comprehensive resource for HOA legislative tracking, reform initiatives, training, and community organizing. Join the movement for accountability and change."
  - Newsletter Signup Box:
    - Background: Semi-transparent white (rgba(255,255,255,0.1))
    - Label: "Get Notified When We Launch" (13px, uppercase, white)
    - Email Input Field + Subscribe Button
    - Button: White background, red text, uppercase
  - Status: "Coming Fall 2026" (inline badge below, semi-transparent white background)
- **Purpose:** Build audience for future resource platform, capture email signups

### 3.8 Footer
- **Background:** Dark navy (#1a2e4a)
- **Text Color:** Gray (#999)
- **Layout:** 4-column grid on desktop, stacked on mobile

**Columns:**
1. **The Film** — About, Press Kit, Screenings
2. **Support** — Donate, Shop, Contact
3. **Social** — Facebook, Instagram, YouTube
4. **Legal** — Privacy, Terms

**Footer Bottom:** Copyright notice and links to legal pages

---

## 4. Color Palette

**Primary Colors (from film poster):**
- Dark Navy Blue: `#1a2e4a` (headers, primary text, structure)
- Bold Red: `#d32f2f` (accents, CTAs, highlights)
- Off-White/Cream: `#f5f5f0` (backgrounds, light sections)

**Supporting Colors:**
- Medium Gray: `#666` (body text)
- Light Gray: `#999` (secondary text, labels)
- Very Light Gray: `#f9f9f9` (card backgrounds, sections)

**Gradients:**
- Dark Navy to Medium Blue: `linear-gradient(135deg, #1a2e4a 0%, #2d4a6f 100%)` (Support section)
- Red gradient: `linear-gradient(135deg, #d32f2f 0%, #b22234 100%)` (HOA Network section)

---

## 5. Typography

**Font Family:** System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)

**Font Sizes:**
- Navigation: 13px, uppercase, 0.5px letter-spacing
- Section Headlines: 36px, 900 weight, -0.5px letter-spacing
- Subsection Headlines: 24px, 700 weight
- Body Text: 15px, line-height 1.8
- Small Text/Labels: 12-13px, uppercase, 0.5px letter-spacing

---

## 6. Navigation & Linking

**Internal Navigation:**
- "About the Film" → Scrolls to "The Story" section
- "Donate" → Scrolls to "Support This Documentary" section
- "Merch" → Scrolls to "Official Merchandise" section
- "HOA Network" → Links to HOAReformNetwork.com (when live; placeholder before launch)

**External Links:**
- Donate button → Payment processor (Stripe/PayPal - TBD)
- Merch "Shop All" → Printful/Shopify store (not yet created)
- HOA Network → www.HOAReformNetwork.com

---

## 7. Video Integration

**Video Hosting:** Vimeo (via CDN link)
**Video Details:**
- Format: MP4 or WebM
- Duration: Recommend 30-60 seconds for hero loop
- Content: Compiled clips from the documentary
- Parameters: autoplay, muted, loop, no controls visible during hero

**Implementation:**
- Vimeo embed code with custom parameters
- Fallback poster image: Static film poster frame
- Mobile: Full responsiveness, maintains aspect ratio

---

## 8. Forms & Data Capture

### Sticky Footer Newsletter Signup (Film Updates)
- **Placement:** Fixed footer position, visible on all pages during scroll
- **Purpose:** Capture email subscribers for film updates, release announcements, screening info
- **Fields:** Email address only
- **Design:** 
  - Background: Dark navy (#1a2e4a)
  - Text Color: White
  - Layout: Horizontal (email input + subscribe button side-by-side)
  - Compact height: ~60-70px
  - Close button (X) to dismiss sticky footer
  - Mobile: Stacks vertically or full-width input with button below
- **Validation:** Basic email format validation
- **Submission:** Email list integration (separate from HOA Network - Mailchimp, ConvertKit, etc. - TBD)
- **Confirmation:** Brief success message ("Check your email!" or similar)
- **Behavior:** 
  - Appears after user scrolls past hero section
  - Can be dismissed (close button)
  - Remembers dismissal with cookie (don't show again for 7 days)

### Newsletter Signup (HOA Network Section - Mid-Page)
- **Fields:** Email address only
- **Validation:** Basic email format validation
- **Submission:** Email list integration (HOA Network list - separate from film list)
- **Confirmation:** Success message or redirect to confirmation page
- **Note:** This is the HOA Reform Network coming-soon signup, different list from film newsletter

### Future: Story Submission Form
- **Note:** NOT on this site. Will be on HOAReformNetwork.com
- **Content:** Captured for future documentary/advocacy use

---

## 9. Responsive Design

**Breakpoints:**
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

**Mobile Adjustments:**
- Navigation collapses to hamburger menu (if using fixed header)
- Single-column layout for all sections
- Font sizes reduce proportionally (maintain readability)
- Product grid: 1 column on mobile, 2 on tablet
- Hero video: Full viewport, maintains aspect ratio
- Buttons: Full width on mobile for easy touch targets

---

## 10. Accessibility & SEO

**Accessibility:**
- Alt text for all images and video fallback posters
- High contrast text (dark blue/red on white, white on dark backgrounds)
- Button text is descriptive ("Support the Film", "Shop All", not "Click Here")
- Form labels are associated with inputs
- Semantic HTML (headings, navigation, sections)

**SEO:**
- Meta title: "Unregulated: How HOAs Threaten the American Dream | Documentary"
- Meta description: Compelling 160-character summary of film and mission
- H1: "Unregulated: How HOAs Threaten the American Dream"
- Open Graph tags for social sharing
- Structured data for video (schema.org/VideoObject)

---

## 11. Technical Requirements

**Technology Stack:**
- **Frontend:** HTML5, CSS3, JavaScript (vanilla or lightweight framework)
- **Hosting:** Hostinger (as specified)
- **Version Control:** GitHub (source of truth)
- **Video:** Vimeo embed
- **Payments:** Stripe or PayPal (for donations - TBD)
- **Merch Shop:** External link to Printful/Shopify (not built in)
- **Email List:** Third-party service (Mailchimp, ConvertKit, etc. - TBD)

**Performance Targets:**
- Page load: < 3 seconds
- Video autoplay performance: Optimized for Vimeo CDN
- Mobile rendering: Fast (Lighthouse score 80+)

---

## 12. Content Management & Updates

**Static Content:**
- Headlines, copy, section text — edit directly in HTML/CMS

**Dynamic Content:**
- Merchandise pricing and descriptions — link to external Shopify store
- Blog/News — links to HOAReformNetwork.com (when live)
- Petition/Advocacy — links to HOAReformNetwork.com (when live)

**Newsletter List:**
- Managed via email service provider (separate integration)

---

## 13. Future Extensibility

**For Series Films:**
- Hero video: Swap video file and poster image
- Copy sections: Update film title, description, filmmaker names
- Color scheme: Optional adjustment per film series
- Structure: Reusable for all films in the series

**Integration with HOA Reform Network:**
- "HOA Network" nav link and "Coming Soon" section will link to HOAReformNetwork.com
- Story submissions, blog, petition, and other advocacy content remain on the separate domain
- No content duplication between sites

---

## 14. Launch Checklist

- [ ] Video edited and uploaded to Vimeo
- [ ] Domain configured (DNS, SSL)
- [ ] Payment processor integrated (Stripe/PayPal)
- [ ] Email service integrated (Mailchimp/ConvertKit)
- [ ] External links configured (Merch shop, payment links)
- [ ] SEO metadata implemented
- [ ] Mobile testing completed
- [ ] Accessibility audit completed
- [ ] Performance optimization (images, video, CSS)
- [ ] Analytics setup (Google Analytics 4)
- [ ] Social media preview testing

---

## 15. Success Metrics

- Page load time < 3 seconds
- Mobile usability score 90+
- Email signup conversion rate tracking
- Donation flow completion rate
- Social shares from website
- Time on page
- Navigation anchor click tracking

---

## Appendix: Mockup References

Visual mockups created during design phase:
- Hero video + sidebar comparison (explored, rejected)
- Full-width video layout (approved)
- Complete single-page design with all sections (approved)

Mockups stored in: `.superpowers/brainstorm/` (visual companion session)

---

**Design Spec Approved By:** Kenneth Spresley  
**Date Approved:** June 9, 2026  
**Ready for:** Implementation Planning (Writing-Plans Phase)
