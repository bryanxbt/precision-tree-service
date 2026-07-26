# QB Tree Services

Marketing website for **QB Tree Services** (Quintin & Bryan) — local tree care in North Indy and surrounding areas.

**Brand colors:** bright red, white, and blue.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Live preview (GitHub Pages)

https://bryanxbt.github.io/qb-tree-services/

Every push to `main` rebuilds and updates that link (GitHub Actions).

## Getting started

```bash
cd qb-tree-services   # or your local clone path
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize business details

Edit **`src/lib/site.ts`**:

- Phone, email, service area, hours
- Service list and gallery
- Tagline and partner story hooks

### Brand logos

Official art lives in `public/brand/`:

| File | Use |
|------|-----|
| `QBlogo.png` | Master logo (red Q, blue B, gold tree) — header, hero, footer |
| `logo-mark.png` / `logo-wordmark.png` | Same master (compat aliases) |
| `src/app/icon.png` | Favicon / app icon |

Source download: `Downloads/QBlogo.png`. Paths are wired via `site.logo` in `src/lib/site.ts`.

## Pages

| Route | Purpose |
| ----- | ------- |
| `/` | Home / hero / services preview |
| `/services` | Full service list |
| `/service-areas` | Local SEO city pages |
| `/about` | Partners & values |
| `/gallery` | Project photos |
| `/contact` | Free quote form |

## Next steps

- [ ] Real phone, email, city/service area (confirm)
- [ ] Partner bios and photos for Quintin & Bryan
- [ ] Replace stock/AI gallery with real job-site photos when available
- [ ] Optional: add QB logo vinyl to trucks in future real photos
- [ ] Wire quote form to email (Resend / Formspree / etc.)
- [ ] Custom domain + Google Business Profile
- [ ] Optional: rename GitHub repo when ready (update `basePath` + Pages)

## Deploy

Repo (bryanxbt): https://github.com/bryanxbt/qb-tree-services  

```bash
gh auth switch -u bryanxbt   # if needed
git add -A && git commit -m "Your message" && git push
```
