# AGENTS.md

Overview of this project for AI agents and developers working on this codebase.

## Project Overview

A single-page marketing site for Umesh Utsav Udyan, a marriage palace in Bhopal. Built with TanStack Start and deployed on Netlify. Black-and-gold, royal-styled design; no backend data storage — the site is presentational plus two Netlify Forms for enquiries.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (CSS-first `@theme` config) |
| Icons | lucide-react |
| Forms | Netlify Forms |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   └── __forms.html          # Hidden static skeleton so Netlify's build bot detects the
│                              # client-rendered "contact" and "booking" forms.
├── src
│   ├── components
│   │   ├── Nav.tsx            # Fixed header nav with mobile menu.
│   │   ├── Hero.tsx           # Full-height hero banner with animated title.
│   │   ├── Gallery.tsx        # Asymmetric grid of venue highlights (CSS/SVG, no photos).
│   │   ├── Services.tsx       # Zig-zag list of the five service offerings.
│   │   ├── About.tsx          # Split "our story" layout with stats.
│   │   ├── Testimonials.tsx   # Scroll-snap carousel of guest quotes.
│   │   ├── Booking.tsx        # Booking enquiry form (Netlify Forms, name="booking").
│   │   ├── Contact.tsx        # Contact details + message form (Netlify Forms, name="contact").
│   │   ├── Footer.tsx         # Site footer with nav, contact info, socials.
│   │   └── Ornament.tsx       # Shared decorative primitives (dividers, section headings, corner flourishes).
│   ├── routes
│   │   ├── __root.tsx         # Root layout: fonts (Google Fonts), page metadata, global styles.
│   │   └── index.tsx          # Assembles all sections onto the single route ("/").
│   ├── router.tsx             # TanStack Router setup with scroll restoration.
│   └── styles.css             # Tailwind import + `@theme` design tokens (colors, fonts) + animation utilities.
├── netlify.toml                # Build command, output dir, dev server settings.
├── package.json
├── tsconfig.json                # `@/*` path alias for `src/*`.
└── vite.config.ts
```

## Key Concepts

### Single-page, anchor-based navigation

All sections live on the `/` route as stacked `<section id="...">` elements (`#home`, `#gallery`, `#services`, `#about`, `#testimonials`, `#booking`, `#contact`). Nav links and CTAs are plain anchor links; there is no client-side routing between sections.

### Design tokens

Colors and fonts are defined once in `src/styles.css` under `@theme` (Tailwind v4 CSS-first config) — e.g. `--color-gold`, `--color-ink`, `--font-display`. Tailwind auto-generates utility classes from these (`bg-ink`, `text-gold`, `font-display`, etc.). Prefer adding new tokens there over hardcoding hex values in components.

### Netlify Forms

Two forms exist: `contact` (in `Contact.tsx`) and `booking` (in `Booking.tsx`). Both submit via `fetch` to `/__forms.html` (not `/`) because TanStack Start's SSR catch-all would otherwise intercept a POST to `/`. `public/__forms.html` is a hidden, non-rendered HTML file that mirrors both forms' fields so Netlify's build-time scanner can register them — if you add a field to a form component, add it to `__forms.html` too. Forms only work on deployed builds, not local dev.

## Development Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
```

## Conventions

### Naming
- Components: PascalCase, one section per file in `src/components/`
- Routes: kebab-case files under `src/routes/`

### Styling
- Tailwind utility classes throughout; no CSS modules or styled-components
- Design tokens (colors/fonts) centralized in `src/styles.css`
- Animations are CSS keyframes defined as utility classes in `src/styles.css` (`animate-fade-up`, `animate-shimmer`, `animate-drift`, etc.) rather than a JS animation library

### TypeScript
- Strict mode enabled
- Import paths use the `@/` alias (maps to `src/`)
