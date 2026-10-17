# Sorek Engineers – static site

React + Vite, RTL Hebrew, no backend. Build output in `dist/` is plain static files (any host: Netlify, Cloudflare Pages, GitHub Pages, S3).

```
npm install
npm run dev       # local dev
npm run build     # production build -> dist/
npm run preview   # serve dist/
```

- Content: `src/data.js` (contact details, services, projects, clients, stats).
- Images: `public/img/*.webp` (optimized from the original site).
- Leads: the form opens a prefilled email by default. To receive leads without a mail app, set `VITE_FORM_ENDPOINT` (e.g. a Formspree URL) at build time.
