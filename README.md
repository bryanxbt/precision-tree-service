# QB Tree Services

Marketing website + lead funnel for **QB Tree Services** (Quintin & Bryan) — local tree care in North Indy and surrounding areas.

**Brand colors:** bright red, white, and blue (logo gold accents).

## Stack

- Next.js (App Router) · TypeScript · Tailwind CSS
- Static export for GitHub Pages

## Live preview

https://bryanxbt.github.io/qb-tree-services/

Every push to `main` rebuilds and updates that link (GitHub Actions).

## Getting started

```bash
cd precision-tree-service   # or your clone path
cp .env.example .env.local  # optional: form + analytics keys
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Marketing funnel (launch)

See **[LAUNCH.md](./LAUNCH.md)** for the full checklist (form wiring, Google Business Profile, ads, reviews).

### Connect quote leads (required for launch)

Pick **one** and set it as a GitHub Actions **Variable** (or in `.env.local`):

| Variable | Service |
|----------|---------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | [Web3Forms](https://web3forms.com) (recommended) |
| `NEXT_PUBLIC_FORMSPREE_ID` | [Formspree](https://formspree.io) |
| `NEXT_PUBLIC_FORMSUBMIT_EMAIL` | [FormSubmit](https://formsubmit.co) |

Optional analytics:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4  
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta ads pixel  

Redeploy after adding Variables so they bake into the static build.

### Customize business details

Edit **`src/lib/site.ts`**:

- Phone, email, service area, hours  
- Service list, cities, gallery  
- Real reviews (set `placeholder: false`)  

### Brand logos

| File | Use |
|------|-----|
| `public/brand/QBlogo.png` | Master logo |
| `logo-mark.png` / `logo-wordmark.png` | Compat aliases |
| `src/app/icon.png` | Favicon |

## Pages

| Route | Purpose |
| ----- | ------- |
| `/` | Home / hero quote form |
| `/services` | Full service list + detail pages |
| `/service-areas` | Local SEO city pages |
| `/gallery` | Project photos |
| `/blog` | SEO guides (cost, permits, insurance…) |
| `/about` | Partners & values |
| `/faq` | Common questions |
| `/contact` | Full free quote form |
| `/thank-you` | Post-submit conversion page |
| `/privacy` | Privacy policy |

## Deploy

Repo: https://github.com/bryanxbt/qb-tree-services  

```bash
gh auth switch -u bryanxbt   # if needed
git add -A && git commit -m "Your message" && git push
```
