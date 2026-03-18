# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:8080
npm run build        # Production build (base: /)
npm run build:pages  # GitHub Pages build (base: /alex-bil-76-vibes/)
npm run lint         # ESLint (expect 4 pre-existing errors, 7 warnings — do not fix unless related to your changes)
npm run preview      # Preview production build
```

No test suite is configured.

## Architecture

Single-page React 18 app (TypeScript, Vite + SWC) for a retro 1970s-themed car dealership site. Deployed to GitHub Pages.

**Entry flow:** `index.html` → `src/main.tsx` → `App.tsx` (BrowserRouter, QueryClient, Toaster) → `pages/Index.tsx` → section components (Hero, AboutSection, CarsSection, ContactSection, Footer).

**Routing:** React Router v6 with BrowserRouter. Base URL from `import.meta.env.BASE_URL`. SPA routing for GitHub Pages handled via redirect scripts in `index.html` and `public/404.html`. New routes must go ABOVE the catch-all `<Route path="*" />` in `App.tsx`.

**Styling:** Tailwind CSS with custom retro theme (`retro-brown`, `retro-cream`, `chrome-light`, `chrome-dark`), custom fonts (Righteous, Pacifico via Google Fonts), and `tailwindcss-animate` plugin. Dark mode via `class` strategy. CSS variables in `src/index.css`.

**UI components:** shadcn-ui (54 components in `src/components/ui/`), Radix UI primitives, Lucide icons.

**State/forms:** TanStack Query for server state, React Hook Form + Zod for form validation, Sonner for toasts.

## Key Conventions

- **Path alias:** `@/*` → `./src/*` (configured in tsconfig + vite)
- **Package manager:** npm (ignore `bun.lockb`)
- **TypeScript:** `strict: false` for app code (`tsconfig.app.json`)
- **CI:** GitHub Actions deploys to Pages on push to `main` — runs `npm ci` then `npm run build:pages`
