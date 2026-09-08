# HABRA Website

A standalone Arabic restaurant website built with Vite, React, TypeScript, and Tailwind CSS.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run qa
npm run preview
```

## Content updates

- Site copy, image paths, navigation, and contact details: `src/data/site.ts`
- Menu categories, items, descriptions, prices, and featured state: `src/data/menu.ts`
- Supplied logo source and its direct raster extraction: `public/assets/brand/`
- Temporary generated food and restaurant photography: `public/assets/images/`

Contact entries intentionally have `null` values and links until HABRA provides approved details. Set both `value` and `href` for a method to turn it into a working contact link.

## Routes

- `/` — Home
- `/menu` — Menu
- `/contact` — Contact

The app uses browser-history routing. `public/_redirects` and `vercel.json` provide SPA rewrites for compatible static hosts.
