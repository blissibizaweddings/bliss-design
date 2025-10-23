# bliss-design

This repository contains a local replica of the Isla & Smith experience tailored for Bliss Ibiza Weddings. The site assets live in the original export folders while a Vite + React + Tailwind overlay injects Bliss branding.

## Local development

1. Install Node.js 18 or later.
2. Install dependencies:
   ```bash
   cd www.blissibizaweddings.com
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   Vite will expose the site on `http://localhost:5173` by default.

## Production build

Generate a static build that keeps the Isla & Smith layout and Bliss overlay:

```bash
cd www.blissibizaweddings.com
npm run build
```

The output in `dist/` can be hosted on any static provider (Vercel, Netlify, Cloudflare Pages). Ensure the adjacent asset folders (`../framerusercontent.com`, `../app.framerstatic.com`, etc.) are also uploaded because the HTML references them relatively.

## CMS integration recommendation

For a headless CMS that pairs well with the existing component structure, Storyblok is the most straightforward path:

1. Model the page as a single Storyblok story with nested blocks that mirror the Framer sections (hero, experience grid, portfolio reels, etc.).
2. Use Storyblok's visual editor to manage text, CTA labels, and image references while continuing to serve the high-fidelity media stored in this repo or an object store.
3. Replace the static HTML with React components that map Storyblok JSON fields to the existing class names, leveraging Tailwind utilities defined in `tailwind.config.js`.
4. Deploy via Vercel or Netlify using a simple webhook to trigger `npm run build` whenever content updates publish from Storyblok.

This setup keeps the pixel-perfect Isla & Smith presentation, adds the Bliss badge, and positions the project to evolve into a fully headless React + Tailwind build.
