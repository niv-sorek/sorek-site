# Backlog

## Phase 1 – SEO foundation (done, unverified in browser/Search Console)
- [x] Meta, canonical (`https://sorek.co.il/`), OG/Twitter, hero preload – `index.html`
- [x] JSON-LD `WebSite` + `ProfessionalService/LocalBusiness` – `index.html`
- [x] Build-time prerender + `sitemap.xml` – `scripts/prerender.mjs`, `npm run build`
- [x] `public/robots.txt`, `public/CNAME` (sorek.co.il)
- [x] SSR guard in `src/App.jsx` (`read()`)

## Phase 2 – Launch (user)
- [ ] DNS for sorek.co.il -> GitHub Pages; enforce HTTPS
- [ ] Deploy (push to `main` triggers `.github/workflows/deploy.yml`)
- [ ] Google Search Console + Bing Webmaster: add site, submit `/sitemap.xml`, request indexing
- [ ] Google Business Profile for Golomb 19, Haifa (same NAP as site)
- [ ] Validate: Rich Results Test, PageSpeed, social preview

## Phase 3 – Ideas (need user input/content)
- [x] Real URLs + per-route prerender (`src/pages.js`, `scripts/prerender.mjs`): /structural-design/, /bill-of-quantities/, /design-review/, /projects/, /privacy/, /accessibility/, 404.html. Hebrew copy is a DRAFT - needs Tal's review
- [ ] www.sorek.co.il still serves old site -> 301 to apex (DNS/host)
- [ ] sameAs/social links, opening hours (need real data)
- [x] FAQ section + FAQ markup (draft answers, need Tal's review)
- [x] 1200x630 OG image
- [ ] Add opening hours / social links to JSON-LD if available

## Handoff
- **Job:** make the Sorek Engineers site (React+Vite, Hebrew RTL, one page, GitHub Pages) as SEO-optimized as possible. Domain: `sorek.co.il` (user deploys today).
- **State:** Phase 1 complete; `npm run build` passes, dist has H1/H2s, valid JSON-LD, sitemap, robots, CNAME. Not tested in a browser or with Google tools. No decision records written.
- **Open for user:** DNS/HTTPS, Search Console, Business Profile; whether to invest in multi-page structure (Phase 3).
- **Notes:** `createRoot` replaces prerendered HTML on load (no hydration). Repo: github.com/niv-sorek/sorek-site; changes uncommitted until pushed. JSON-LD omits hours/sameAs on purpose (unknown facts).
- **Next step:** after deploy, verify live URL (view-source shows content, canonical, sitemap), then decide on Phase 3 multi-page plan.
