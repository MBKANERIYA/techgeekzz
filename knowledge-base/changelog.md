# Changelog

## 2026-04-23 — Initial Project Setup
**What**: Scaffolded React + Vite project
**Why**: Starting a new frontend project
**Files Changed**: All (initial scaffold via `create-vite`)
- Created React app using `npx create-vite@latest` with the `react` template
- Installed all dependencies (`npm install`)
- Project runs on Vite dev server

## 2026-04-24 — Referral Program Page
**What**: Created premium referral program page at `/referral`
**Why**: New page needed to showcase the partner/referral program
**Files Changed**:
- `src/pages/ReferralPage.jsx` (NEW) — full referral page with Hero, How It Works, Commission Tiers, Testimonials, FAQ, and Join form
- `src/App.jsx` — added `/referral` route
- `src/components/Navbar.jsx` — updated Referral Program link from `#` to `/referral`
- Follows existing design patterns: Bootstrap 5 grid, inline styles, dark theme with purple gradients
- Sections: Hero with stats grid, 4-step process, 4 commission tiers (Bronze/Silver/Gold/Diamond), partner testimonials, Reviews (Clutch card), Awards (6 laurel wreath cards), accordion FAQ, application form

## 2026-04-24 — Referral Page Component Extraction
**What**: Refactored inline ReferralPage into modular components under `src/components/referral/`
**Why**: Match the AboutPage architecture — each section as its own component file for maintainability
**Files Changed**:
- `src/pages/ReferralPage.jsx` — rewritten to import components (same pattern as AboutPage)
- `src/components/referral/ReferralHero.jsx` (NEW)
- `src/components/referral/ReferralHowItWorks.jsx` (NEW)
- `src/components/referral/ReferralTiers.jsx` (NEW)
- `src/components/referral/ReferralTestimonials.jsx` (NEW)
- `src/components/referral/ReferralReviews.jsx` (NEW)
- `src/components/referral/ReferralAwards.jsx` (NEW)
- `src/components/referral/ReferralFAQ.jsx` (NEW)
- `src/components/referral/ReferralCTA.jsx` (NEW)
- Also reuses shared `LocationsSection` component

## 2026-04-24 — Marketing & Technology Partners Page
**What**: Created full Partners page at `/partners` with 7 modular components
**Why**: New page to showcase technology/marketing partner ecosystem
**Files Changed**:
- `src/pages/PartnersPage.jsx` (NEW) — page assembling all partner components
- `src/components/partners/PartnersHero.jsx` (NEW) — hero with stats grid
- `src/components/partners/PartnersLogos.jsx` (NEW) — tech & marketing partner grids with tier badges
- `src/components/partners/PartnersTypes.jsx` (NEW) — 4 partnership models (Technology, Agency, Strategic, Education)
- `src/components/partners/PartnersBenefits.jsx` (NEW) — 6 benefit cards with stats
- `src/components/partners/PartnersProcess.jsx` (NEW) — 4-step onboarding process
- `src/components/partners/PartnersTestimonials.jsx` (NEW) — 3 partner testimonials
- `src/components/partners/PartnersCTA.jsx` (NEW) — application form with partnership type dropdown
- `src/App.jsx` — added `/partners` route
- `src/components/Navbar.jsx` — updated "Marketing And Technology Partners" link to `/partners`
- Reuses shared `AwardsSection` and `LocationsSection` components

## 2026-04-24 — Contact Page
**What**: Created Contact page at `/contact` with 5 modular components
**Why**: Dedicated contact page with form, office locations, FAQ, and social proof
**Files Changed**:
- `src/pages/ContactPage.jsx` (NEW) — page assembling contact components
- `src/components/contact/ContactHero.jsx` (NEW) — centered hero with gradient text
- `src/components/contact/ContactForm.jsx` (NEW) — proposal form with budget/service dropdowns + contact info sidebar
- `src/components/contact/ContactOffices.jsx` (NEW) — 4 global office cards (NY, London, Singapore, Dubai)
- `src/components/contact/ContactWhyUs.jsx` (NEW) — 6 reasons to choose NinjaPromo
- `src/components/contact/ContactFAQ.jsx` (NEW) — 5-item contact FAQ accordion
- `src/App.jsx` — added `/contact` route
- `src/components/Navbar.jsx` — updated "Contacts" link to `/contact`
- Reuses shared `ReviewsSection` and `AwardsSection` components

## 2026-04-24 — Service Pages (7 pages)
**What**: Created 7 service pages with a reusable ServicePageTemplate component
**Why**: Each service in the navbar right column needed its own page
**Files Changed**:
- `src/components/services/ServicePageTemplate.jsx` (NEW) — DRY template accepting config object (hero, services, process, whyUs, FAQ, CTA)
- `src/pages/SocialMediaPage.jsx` (NEW) — `/services/social-media`
- `src/pages/EmailMarketingPage.jsx` (NEW) — `/services/email-marketing`
- `src/pages/CROPage.jsx` (NEW) — `/services/cro`
- `src/pages/PublicRelationsPage.jsx` (NEW) — `/services/public-relations`
- `src/pages/DigitalStrategyPage.jsx` (NEW) — `/services/digital-strategy`
- `src/pages/WebAnalyticsPage.jsx` (NEW) — `/services/web-analytics`
- `src/pages/AIMarketingPage.jsx` (NEW) — `/services/ai-marketing`
- `src/App.jsx` — added 7 service routes under `/services/*`
- `src/components/Navbar.jsx` — converted servicesRight links from `<a>` to `<Link>` with proper routes; removed Industries mega menu

## 2026-04-24 — Service Dropdown Pages (17 pages)
**What**: Created all pages for left-column mega menu dropdowns (SEO, Paid Advertising, Digital Design)
**Why**: Every nav link now routes to a real page
**Files Changed**:
- SEO: `SEOPage`, `LocalSEOPage`, `TechnicalSEOPage`, `InternationalSEOPage`, `MultilingualSEOPage`, `GEOPage`
- Paid Ads: `PaidAdvertisingPage`, `GoogleAdsPage`, `FacebookAdsPage`, `InstagramAdsPage`, `YouTubeAdsPage`, `XAdsPage`, `AmazonAdsPage`
- Design: `DigitalDesignPage`, `WebDesignPage`, `UIUXDesignPage`, `BrandingPage`
- All use `ServicePageTemplate` with unique config objects
- `src/App.jsx` — added 17 new routes
- `src/components/Navbar.jsx` — servicesData now uses `{label, href}` objects and `<Link>` routing; category headers also link to parent pages
- `ServicePageTemplate` updated to include `ReviewsSection` and `AwardsSection`

## 2026-04-24 — Hero Background Images
**What**: Added themed background images to hero sections across all pages
**Why**: Visual depth and premium feel — each page now has a relevant, semi-transparent background image behind the hero text
**Files Changed**:
- `public/images/heroes/` (NEW) — 8 generated background images: hero-seo, hero-ads, hero-design, hero-social, hero-ai, hero-business, hero-email, hero-pr
- `src/components/services/ServicePageTemplate.jsx` — added `heroImage` background layer with dark gradient overlay
- All 24 service page configs — added `heroImage` field mapped to relevant category image
- `src/components/Hero.jsx` — added background image to home hero
- `src/components/about/AboutHero.jsx` — added background image
- `src/components/referral/ReferralHero.jsx` — added background image
- `src/components/partners/PartnersHero.jsx` — added background image
- `src/components/contact/ContactHero.jsx` — added background image

## 2026-04-24 — Blog Page + Footer & Hero Fixes
**What**: Created full Blog page; cleaned up footer to match navbar; standardized hero positioning
**Why**: Blog page completes the content hub; footer/hero alignment ensures consistent UX
**Files Changed**:
- `src/pages/BlogPage.jsx` (NEW) — Full blog with hero, category filter, article grid, newsletter, featured press, reviews/awards, CTA
- `public/images/heroes/hero-blog.png` (NEW) — Blog hero background
- `public/images/blog/thumb-1..6.png` (NEW) — 6 blog article thumbnails
- `src/App.jsx` — added `/blog` route
- `src/components/Navbar.jsx` — blog links now use `<Link to="/blog">`
- `src/components/Footer.jsx` — removed Industries/Blog sections; added Blog under Company; all links use `<Link>` routing
- All page wrappers — removed `paddingTop: '100px'` to match home hero positioning
- All hero images — opacity increased from 0.18 to 0.35

## 2026-04-29 — Blog Page Dummy Data Enhancement
**What**: Rewrote BlogPage with comprehensive dummy blog data, 8 new custom thumbnails, and UI polish
**Why**: Blog page needed rich, realistic content with varied categories, excerpts, authors, and read times
**Files Changed**:
- `src/pages/BlogPage.jsx` — complete rewrite with 16 dummy articles across 10 categories
- `public/images/blog/thumb-seo.png` (NEW) — SEO-themed thumbnail
- `public/images/blog/thumb-social.png` (NEW) — Social media-themed thumbnail
- `public/images/blog/thumb-ai.png` (NEW) — AI marketing-themed thumbnail
- `public/images/blog/thumb-ppc.png` (NEW) — PPC advertising-themed thumbnail
- `public/images/blog/thumb-email.png` (NEW) — Email marketing-themed thumbnail
- `public/images/blog/thumb-design.png` (NEW) — Web design-themed thumbnail
- `public/images/blog/thumb-ecommerce.png` (NEW) — Ecommerce-themed thumbnail
- `public/images/blog/thumb-content.png` (NEW) — Content marketing-themed thumbnail
- Added per-category tag colors, article excerpts, author avatars, read times
- Featured sidebar now shows thumbnail images alongside text
- Load More now works with actual pagination (shows 8 at a time)
- Renamed "Ninja Academy" to "TechGeekz Academy" for branding consistency

## 2026-04-29 — Blog Post Pages + Clickable Cards
**What**: Created individual blog post page and made all blog cards clickable/navigable
**Why**: Blog cards were not linked — clicking did nothing. Needed a full article view page.
**Files Changed**:
- `src/data/blogPosts.js` (NEW) — Centralised blog post data with full article body content, shared across all blog pages
- `src/pages/BlogPostPage.jsx` (NEW) — Full article page with hero, breadcrumbs, author info, body sections, social share, and related articles
- `src/pages/BlogPage.jsx` — Refactored to import from shared data; wrapped all cards (featured, sidebar, grid) with `<Link>` to `/blog/post/:slug`
- `src/pages/BlogCategoryPage.jsx` — Wrapped all post cards with `<Link>` to `/blog/post/:slug`; renamed "Ninja Academy" → "TechGeekz Academy"
- `src/App.jsx` — Added route `/blog/post/:postSlug` → `BlogPostPage`; imported `BlogPostPage`

## 2026-04-29 — Blog Post Page Redesign (Light Theme Article Layout)
**What**: Completely redesigned BlogPostPage to match a professional blog article layout
**Why**: Previous version had dark-themed centered content with no sidebars; new design follows industry-standard article layout
**Files Changed**:
- `src/pages/BlogPostPage.jsx` — Full redesign with:
  - Dark hero section with breadcrumbs, category badge, title, and author info
  - Hero image with gradient transition from dark hero to white content area
  - 3-column layout: sticky Table of Contents (left), article body (center), CTA sidebar (right)
  - White/light-themed article body with proper typography (#374151 text on #fff background)
  - Active section highlighting in TOC on scroll
  - Author bio card at bottom of article
  - Dark-themed related articles section
  - Social share buttons in left sidebar
  - Newsletter subscription in right sidebar
  - CTA card with feature checklist in right sidebar
  - Fixed invalid CSS hex color concatenation (replaced `${hex}12` with `hexToRgba()` helper)
- `src/pages/BlogCategoryPage.jsx` — Now uses shared `blogPosts` data instead of local `allPosts`


