# TechGeekzz

> Project overview and knowledge base

## Business Context

- **Company**: TechGeekz Services — a **creative agency** focused on branding, SEO, ads, social media marketing, and social media management
- **Live Site**: https://techgeekzservices.com/
- **Redesign Goal**: The existing live site includes development/tech services — the redesign **removes all development offerings** and repositions TechGeekz purely as a creative agency
- **Core Services**: Branding, SEO, Paid Advertising, Social Media Marketing, Social Media Management

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend UI library |
| Vite | Build tool & dev server |
| JavaScript (JSX) | Language |
| Vanilla CSS | Styling |
| ESLint | Linting |

## Directory Structure

```
techgeekzz/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components (Navbar, Footer, sections)
│   ├── pages/           # Route-level pages
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ReferralPage.jsx
│   ├── App.jsx          # Root component + router
│   ├── App.css          # App-level styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Dependencies & scripts
```

## Reading Order

| # | File | Description |
|---|---|---|
| 1 | `README.md` | This file — project overview |
| 2 | `changelog.md` | Chronological history of changes |

## Quick Facts

| Key | Value |
|---|---|
| Dev Server | `npm run dev` |
| Build | `npm run build` |
| Preview | `npm run preview` |
| Lint | `npm run lint` |

## Critical Rules

- **Brand color is `#a500fd`** -- use this as the single accent color everywhere, no gradients
- **No emojis anywhere** -- use text or HTML entities (e.g., `&#10003;`) instead
- **No decorative radial glow blobs** -- they look AI-generated
- Use Vanilla CSS for all styling (no Tailwind unless explicitly requested)
- Follow React best practices with functional components and hooks
- Keep components modular and reusable
