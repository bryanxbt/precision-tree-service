# QB Tree Service

Marketing website for **QB Tree Service** (Quintin & Bryan) — local tree care in North Indy and surrounding areas.

**Brand colors:** bright red, white, and blue.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Live preview (GitHub Pages)

https://bryanxbt.github.io/precision-tree-service/

Every push to `main` rebuilds and updates that link (GitHub Actions).

> Repo folder is still named `precision-tree-service` for GitHub Pages `basePath` compatibility. The public brand is **QB Tree Service**.

## Getting started

```bash
cd precision-tree-service
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

| File | Use |
|------|-----|
| `public/brand/logo-mark.png` | Header + favicon mark |
| `public/brand/logo-wordmark.png` | Footer / hero wordmark |

Paths are wired via `site.logo` in `src/lib/site.ts`.

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
- [ ] Real gallery photos in `public/gallery`
- [ ] Wire quote form to email (Resend / Formspree / etc.)
- [ ] Custom domain + Google Business Profile
- [ ] Optional: rename GitHub repo when ready (update `basePath` + Pages)

## Deploy

Repo (bryanxbt): https://github.com/bryanxbt/precision-tree-service  

```bash
gh auth switch -u bryanxbt   # if needed
git add -A && git commit -m "Your message" && git push
```
