# Djihene Fenzar - Premium SEO Copywriter Portfolio

## Project Overview

This project is a high-end portfolio website for **Djihene Fenzar**, a specialized SEO Web Copywriter. The site positions her services for premium clients, luxury agencies, and serious startups, blending "Editorial" elegance with "Tech" precision.

**Key Objectives:**
- Showcase expertise in SEO copywriting.
- Transform the intangible service of writing into a visual authority experience.
- Convert high-value leads through a clean, content-first design.

## Tech Stack

- **Framework:** [Astro 5.x](https://astro.build) (Static Site Generation for performance)
- **UI Library:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS 4.x](https://tailwindcss.com) (Utility-first CSS)
- **Components:** [Shadcn UI](https://ui.shadcn.com) (Accessible, re-usable components)
- **Icons:** [Lucide React](https://lucide.dev)
- **Deployment:** Vercel

## Key Files & Directory Structure

```text
/
├── astro.config.mjs        # Astro configuration (Integrations: React, Tailwind, Vercel)
├── package.json            # Project dependencies and scripts
├── tailwind.config.mjs     # Tailwind CSS configuration (if present, else inferred)
├── tsconfig.json           # TypeScript configuration
├── public/                 # Static assets (images, fonts, icons)
│   └── images/             # Hero and content images
└── src/
    ├── components/         # React UI components
    │   └── ui/             # Shadcn UI primitives (Button, Card, etc.)
    ├── layouts/
    │   └── MainLayout.astro # Global layout (Head, Header, Footer, Fonts)
    ├── pages/
    │   └── index.astro     # Landing page (Hero, Services, About, Testimonials)
    └── styles/
        └── global.css      # Global styles and Tailwind directives
```

## Building and Running

| Command | Description |
| :--- | :--- |
| `npm install` | Install all dependencies. |
| `npm run dev` | Start the local development server at `http://localhost:4321`. |
| `npm run build` | Build the project for production (outputs to `.vercel/` or `dist/`). |
| `npm run preview` | Preview the production build locally. |
| `npm run astro -- help` | Display Astro CLI help. |

## Design System & Conventions

### Visual Identity ("Editorial-meets-Tech")
- **Typography:**
  - **Headings:** `Instrument Serif` (Serif, Elegant, Editorial)
  - **Body:** `Inter` (Sans-Serif, Clean, Readable)
- **Color Palette:**
  - **Backgrounds:** `Stone-50` (#fafaf9), `White` (#ffffff)
  - **Text:** `Stone-900` (#1c1917), `Stone-600` (#57534e)
  - **Accents:** Minimalist usage of deep blacks and soft grays.
- **Layout:** Bento grids, significant negative space, oversized typography.

### Code Conventions
- **Components:** React components are located in `src/components/`. UI primitives (Shadcn) are in `src/components/ui`.
- **Styling:** Use Tailwind utility classes directly in markup. Avoid custom CSS unless necessary (put in `global.css`).
- **Icons:** Use `lucide-react` components.
- **Responsiveness:** Mobile-first approach using Tailwind breakpoints (`md:`, `lg:`).

## Feature Roadmap (from STEER_PROJECT.md)
1.  **Vision:** Target high-end market.
2.  **Architecture:** SEO-friendly layout, reusable components, max performance.
3.  **Future:** Potential addition of Framer Motion for animations.
