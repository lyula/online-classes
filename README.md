# OnduSchool

Vue 3 SPA for OnduSchool online class services.

## Stack

- **Vue 3** + **Vite**
- **Vue Router** — multi-page routing with a `views/` folder
- **Tailwind CSS v4** — utility-first styling (no custom CSS in components)

## Project structure

```
src/
├── assets/          # Images and global Tailwind entry
├── components/      # Reusable UI sections and layout
├── config/          # Shared navigation config
├── router/          # Route definitions
└── views/           # Page-level components (one per route)
    ├── HomeView.vue
    └── PlaceholderView.vue
```

## Setup

```bash
npm install
npm run dev
```

## Hero image

Add your hero image as `src/assets/hero.jpg`.

## Routes

| Path | Page |
|---|---|
| `/` | Home (landing page) |
| `/online-class` | Same landing page |
| `/services`, `/about`, `/contact`, `/blog` | Placeholder (ready to build) |
| `/exam-help/*` | Exam help placeholders |

## Theme

Black & white palette via Tailwind (`neutral-950`, `white`, etc.). Update `src/assets/styles/main.css` when brand colors are defined.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
