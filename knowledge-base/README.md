# TechGeekzz

> Project overview and knowledge base

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

- Use Vanilla CSS for all styling (no Tailwind unless explicitly requested)
- Follow React best practices with functional components and hooks
- Keep components modular and reusable
