# Copilot Instructions for alex-bil-76-vibes

## Project Overview

This is a **single-page React application** showcasing "Alex Bil" - a retro 1970s-themed used car dealership website. The site features a hero section, about section, cars for sale, contact form, and footer.

**Repository Size:** ~5.5MB (excluding node_modules)  
**Files:** 66 TypeScript/TSX files  
**Primary Language:** TypeScript  
**Framework:** React 18.3.1  
**Build Tool:** Vite 5.4.19  
**UI Library:** shadcn-ui with Radix UI primitives  
**Styling:** Tailwind CSS 3.4.17  
**Runtime:** Node.js 20.x, npm 10.x

## Critical Build Information

### Prerequisites
- **Node.js:** v20.x (tested with v20.19.5)
- **npm:** v10.x (tested with v10.8.2)

### Installation & Build Commands

**IMPORTANT:** Always run commands in the following order for a clean build:

1. **Install dependencies:**
   ```bash
   npm install
   # OR for CI/production (matches GitHub Actions):
   npm ci
   ```
   - Takes ~4-20 seconds depending on cache
   - Both `npm install` and `npm ci` work successfully
   - GitHub Actions workflow uses `npm ci` with Node 20 and npm cache

2. **Lint code:**
   ```bash
   npm run lint
   ```
   - Uses ESLint with typescript-eslint
   - **KNOWN ISSUE:** Repository has pre-existing lint errors (4 errors, 7 warnings) that exist in the base code:
     - `@typescript-eslint/no-empty-object-type` errors in ui/command.tsx and ui/textarea.tsx
     - `@typescript-eslint/no-require-imports` error in tailwind.config.ts (line 98)
     - `@typescript-eslint/no-explicit-any` error in vite.config.ts (line 15)
     - Multiple `react-refresh/only-export-components` warnings in UI components
   - **Do not attempt to fix these unless they are related to your changes**
   - Your changes should not introduce new lint errors beyond these existing ones

3. **Build for production:**
   ```bash
   npm run build
   ```
   - Takes ~3-4 seconds
   - Outputs to `dist/` directory
   - Base URL is `/` by default

4. **Build for GitHub Pages:**
   ```bash
   npm run build:pages
   ```
   - Sets `VITE_BASE=/alex-bil-76-vibes/` environment variable
   - Used by GitHub Actions workflow for deployment
   - Takes ~3-4 seconds

5. **Development server:**
   ```bash
   npm run dev
   ```
   - Runs on http://localhost:8080
   - Host set to "::" (all interfaces)

6. **Preview production build:**
   ```bash
   npm run preview
   ```

### Available npm Scripts
- `dev` - Start Vite development server
- `build` - Production build with base URL `/`
- `build:pages` - Production build for GitHub Pages with base `/alex-bil-76-vibes/`
- `build:dev` - Development mode build
- `lint` - Run ESLint on all files
- `preview` - Preview production build locally

**Note:** There are no test scripts configured in this project.

## Project Structure

### Root Directory Files
```
/
├── .github/
│   └── workflows/
│       └── pages.yml          # GitHub Pages deployment workflow
├── public/                     # Static assets
│   ├── .nojekyll              # GitHub Pages config
│   ├── 404.html               # 404 page for SPA routing
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/                # Images (car photos, hero background, portraits)
│   ├── components/            # React components
│   │   ├── ui/                # shadcn-ui components (54 files)
│   │   ├── AboutSection.tsx
│   │   ├── CarCard.tsx
│   │   ├── CarsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── NavLink.tsx
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts           # Utility functions (cn helper)
│   ├── pages/
│   │   ├── Index.tsx          # Main landing page
│   │   └── NotFound.tsx       # 404 page component
│   ├── App.tsx                # Root app component with routing
│   ├── App.css
│   ├── main.tsx               # Application entry point
│   ├── index.css              # Global styles with Tailwind imports
│   └── vite-env.d.ts
├── .gitignore
├── bun.lockb                  # Bun lockfile (unused, npm is primary)
├── components.json            # shadcn-ui configuration
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point with SPA routing script
├── package.json
├── package-lock.json
├── postcss.config.js          # PostCSS with Tailwind & Autoprefixer
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # Base TypeScript config
├── tsconfig.app.json          # App TypeScript config
├── tsconfig.node.json         # Node/build TypeScript config
└── vite.config.ts             # Vite configuration
```

### Key Architecture Details

**Application Entry Flow:**
1. `index.html` → loads `src/main.tsx`
2. `src/main.tsx` → renders `App.tsx` into `#root`
3. `App.tsx` → Sets up routing with BrowserRouter, QueryClient, Toaster, and TooltipProvider
4. Main route `/` → renders `src/pages/Index.tsx`
5. `Index.tsx` → Composes Hero, AboutSection, CarsSection, ContactSection, Footer

**Routing:**
- Uses `react-router-dom` v6.30.1 with BrowserRouter
- Base URL configured via `import.meta.env.BASE_URL` (from Vite)
- SPA routing for GitHub Pages handled in `index.html` with client-side redirect script
- 404 page at `public/404.html` redirects to app routing

**Path Aliases:**
- `@/*` maps to `./src/*` (configured in tsconfig and vite.config.ts)
- Import example: `import { Button } from "@/components/ui/button"`

**Styling:**
- Tailwind CSS with custom retro theme colors (`retro-brown`, `retro-cream`, `chrome-light`, `chrome-dark`)
- Custom fonts: Righteous and Pacifico from Google Fonts
- CSS variables for theming in `src/index.css`
- Dark mode support via `class` strategy

**State Management:**
- TanStack Query (React Query) v5.83.0 for server state
- React Hook Form v7.61.1 with Zod v3.25.76 for form validation
- Toast notifications via Sonner

## Configuration Files

### TypeScript Configuration
- **tsconfig.json**: Base config with path aliases, references app & node configs
- **tsconfig.app.json**: App source files, `strict: false`, targets ES2020
- **tsconfig.node.json**: Build tools (vite.config.ts), `strict: true`, targets ES2022

### ESLint Configuration (eslint.config.js)
- Flat config format (ESLint 9.x)
- Extends `@eslint/js` recommended and `typescript-eslint` recommended
- Plugins: `react-hooks`, `react-refresh`
- Ignores: `dist/`
- **Rule override:** `@typescript-eslint/no-unused-vars: "off"`

### Vite Configuration (vite.config.ts)
- Plugin: `@vitejs/plugin-react-swc` for Fast Refresh
- Plugin: `lovable-tagger` (development mode only)
- Dev server: Port 8080, host `::`
- Base URL: Configurable via `VITE_BASE` environment variable (defaults to `/`)
- Path alias: `@` → `./src`

### Tailwind Configuration (tailwind.config.ts)
- Content: `./src/**/*.{ts,tsx}` and other patterns
- Dark mode: `class` strategy
- Custom theme extensions with retro colors and fonts
- Custom animations: float, shine
- Plugin: `tailwindcss-animate`

### shadcn-ui Configuration (components.json)
- Style: `default`
- Base color: `slate`
- CSS variables: enabled
- Components installed in `src/components/ui/`

## GitHub Actions CI/CD

### Workflow: Deploy to GitHub Pages (.github/workflows/pages.yml)
**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Build Job:**
1. Checkout code
2. Setup Node.js 20 with npm cache
3. Run `npm ci` (clean install)
4. Run `npm run build:pages` (builds with VITE_BASE=/alex-bil-76-vibes/)
5. Add `.nojekyll` file to dist/
6. Upload dist/ as pages artifact

**Deploy Job:**
- Deploys to GitHub Pages environment
- URL: https://kristoffer-iveo.github.io/alex-bil-76-vibes/

**To replicate CI build locally:**
```bash
npm ci
npm run build:pages
touch dist/.nojekyll
```

## Common Development Workflows

### Making Code Changes
1. Run `npm install` to ensure dependencies are up to date
2. Make your changes to source files in `src/`
3. Run `npm run lint` to check for lint errors (expect pre-existing errors)
4. Run `npm run build` to ensure build succeeds
5. For UI changes, run `npm run dev` and verify at http://localhost:8080

### Adding New Components
- Custom components: Add to `src/components/`
- shadcn-ui components: Already installed in `src/components/ui/`
- Use path alias: `import Component from "@/components/ComponentName"`

### Adding New Pages
1. Create file in `src/pages/`
2. Add route in `src/App.tsx` Routes section
3. **IMPORTANT:** Add custom routes ABOVE the catch-all `<Route path="*" element={<NotFound />} />` route

### Modifying Styles
- Global styles: Edit `src/index.css`
- Component styles: Use Tailwind utility classes
- Custom colors: Defined in `tailwind.config.ts` theme.extend.colors
- Custom fonts: Already loaded in `index.html`

## Dependencies & Package Management

**Primary Package Manager:** npm (not bun, despite bun.lockb presence)

**Key Dependencies:**
- React & React DOM: 18.3.1
- React Router DOM: 6.30.1
- TanStack Query: 5.83.0
- Radix UI: Multiple packages for UI primitives
- Lucide React: 0.462.0 (icons)
- Tailwind Merge: 2.6.0
- Class Variance Authority: 0.7.1
- Zod: 3.25.76 (validation)
- React Hook Form: 7.61.1
- Date-fns: 3.6.0
- Sonner: 1.7.4 (toasts)

**Dev Dependencies:**
- Vite: 5.4.19
- TypeScript: 5.8.3
- ESLint: 9.32.0
- Tailwind CSS: 3.4.17
- lovable-tagger: 1.1.11

## Important Notes

### Things to Always Do
- **Always run `npm install` or `npm ci` before building** to ensure dependencies are installed
- **Always test your changes with `npm run build`** before committing
- **Do not attempt to fix pre-existing lint errors** unless they're directly related to your changes
- **Use path aliases** (`@/`) for imports from `src/`
- **Add new routes above the catch-all route** in App.tsx
- **Test GitHub Pages build** with `npm run build:pages` if modifying routing or base URL logic

### Things to Never Do
- Don't remove or modify the pre-existing lint errors in unrelated files
- Don't change the base build configuration unless specifically required
- Don't add test frameworks unless explicitly requested (project has no tests)
- Don't modify the SPA routing script in `index.html` without understanding GitHub Pages implications
- Don't commit `node_modules/` or `dist/` (already in .gitignore)

### Build Optimization
- Build times are fast (~3-4 seconds) due to SWC and small codebase
- No need to optimize build performance
- Clean builds (`rm -rf dist && npm run build`) work reliably

## Validation & Testing

Since this project has no test suite:
1. **Lint validation:** `npm run lint` (expect 4 errors, 7 warnings in base code)
2. **Build validation:** `npm run build` should complete in ~3-4 seconds
3. **Visual validation:** `npm run dev` and manually test at http://localhost:8080
4. **Production preview:** `npm run preview` after building

## Trust These Instructions

These instructions have been thoroughly validated by testing all commands, inspecting all configuration files, and analyzing the complete project structure. Only perform additional exploration or search if you encounter an error not documented here or need information about specific implementation details not covered in this guide.
