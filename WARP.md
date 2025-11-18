# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js App Router project created with `create-next-app`. The main entrypoint is the `app` directory, with a single root page and custom typography/layout.

### High-level architecture

- **App router structure**
  - `app/layout.tsx`: Global root layout. Sets up HTML shell and global `<body>` class names, wiring in font variables for both local fonts (`TT Commons`, `Grift`) and Geist fonts from `next/font`.
  - `app/page.tsx`: Current home page. Renders a full-height hero section with a centered container and headline typography using custom font classes and CSS utilities.
  - `app/globals.css`: Global styles. Imports Tailwind CSS, defines CSS custom properties (colors, layout constraints), the hero background/vertical line styles, and a `container` width based on a `clamp` variable.
  - `app/fonts/`: Local font assets (`.otf`) for the TT Commons and Grift families. These are loaded via `next/font/local` in `layout.tsx` and exposed as CSS variables.

- **Styling and typography**
  - Tailwind CSS is enabled via `@import "tailwindcss";` in `app/globals.css`.
  - Font variables are defined in `layout.tsx` (e.g. `--font-tt-commons`, `--font-grift`) and applied as classes on `<body>`. Components/pages can rely on these variables via utility classes (e.g. `font-grift`, `font-ttCommons`) and Tailwind.
  - The hero section combines Tailwind utilities (`flex`, `justify-center`, `items-center`, `h-screen`) with custom classes (`home-hero_bg`, `home-hero_bg-line`, `container`).

As you add new pages, co-locate them under `app/` using the App Router conventions (e.g. nested routes, layouts, and components). Keep global layout & font wiring in `app/layout.tsx` and use `app/globals.css` for truly global styles.

## Commands

All commands are defined in `package.json` and assume a Node/PNPM/Yarn/Bun environment. Replace `npm` with your preferred package manager as needed.

### Install dependencies

- Install with npm:
  - `npm install`

### Development server

- Start the Next.js dev server on port 3000:
  - `npm run dev`

### Build & production

- Create an optimized production build:
  - `npm run build`
- Start the production server (after `npm run build`):
  - `npm run start`

### Linting

- Run ESLint across the project:
  - `npm run lint`

### Testing

There is currently no test script configured in `package.json`. If you add a test runner (e.g. Jest, Vitest, Playwright), prefer to:

- Add a `test` script (e.g. `"test": "jest"`) and document common single-test commands here.

## Notes for future Warp agents

- Source of truth for framework behavior is the official Next.js documentation (App Router, `next/font`, routing, layouts, and data fetching).
- When adding new features, favor colocating components and routes within the `app/` tree instead of introducing a separate `pages/` directory.
- When changing fonts or typography, update both `app/fonts/` assets and the `localFont` definitions in `app/layout.tsx` to keep font variables and file paths in sync.
