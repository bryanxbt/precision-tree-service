# Precision Tree Service

Marketing website for **Precision Tree Service** — a local tree care business.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Location

Project lives on the LaCie drive:

```text
/Volumes/BryanXBTLacie/Projects/tree-service
```

## Live preview (GitHub Pages)

https://bryanxbt.github.io/precision-tree-service/

Every push to `main` rebuilds and updates that link (GitHub Actions).

## Getting started

```bash
cd /Volumes/BryanXBTLacie/Projects/tree-service
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize business details

Edit **`src/lib/site.ts`**:

- Phone, email, service area, hours
- Service list and gallery placeholders
- Tagline and about copy hooks

## Pages

| Route       | Purpose                          |
| ----------- | -------------------------------- |
| `/`         | Home / hero / services preview   |
| `/services` | Full service list                |
| `/about`    | Story and values                 |
| `/gallery`  | Project placeholders             |
| `/contact`  | Free quote form (client demo)    |

## Next steps

- [ ] Real phone, email, city/service area
- [ ] Business story and owner bios
- [ ] Real gallery photos in `public/gallery`
- [ ] Wire quote form to email (Resend / Formspree / etc.)
- [ ] Deploy to Vercel under `bryanxbt`
- [ ] Custom domain + Google Business Profile link

## Deploy

Repo (bryanxbt): https://github.com/bryanxbt/precision-tree-service  

Push to `main` to update the live GitHub Pages preview:

```bash
gh auth switch -u bryanxbt
cd /Volumes/BryanXBTLacie/Projects/tree-service
git add -A && git commit -m "Your message" && git push
```
