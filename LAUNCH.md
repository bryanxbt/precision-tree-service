# QB Tree Services — Launch checklist

Goal: turn the website into a **job-getting funnel** (calls + quote leads), then feed it with local visibility.

Live preview: https://bryanxbt.github.io/qb-tree-services/

---

## Funnel overview

```
Google / Facebook / flyer / referral
        ↓
  Website (trust + SEO content)
        ↓
  Call (765) 867-1823  OR  quote form
        ↓
  Email / Formspree alert → Quintin & Bryan
        ↓
  On-site estimate → booked job → review ask
```

---

## A. Must do before paid ads (this week)

### 1. Connect the quote form (critical)

Without this, form submissions go nowhere.

**Recommended (easiest):** [Web3Forms](https://web3forms.com) (free)

1. Sign up → get an **access key** (sends to your real inbox).
2. GitHub repo `bryanxbt/qb-tree-services` → **Settings → Secrets and variables → Actions → Variables**
3. Add: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = your key
4. Push any commit (or re-run the Deploy workflow) so Pages rebuilds.

**Alternatives:**

| Service | Variable |
|--------|----------|
| Formspree | `NEXT_PUBLIC_FORMSPREE_ID` |
| FormSubmit | `NEXT_PUBLIC_FORMSUBMIT_EMAIL` |

Local test: copy `.env.example` → `.env.local`, fill one value, `npm run dev`, submit the form.

### 2. Confirm inbox & phone

- [ ] `hello@qbtreeservices.com` exists and is monitored (or change email in `src/lib/site.ts`)
- [ ] Phone `(765) 867-1823` rings / texts to someone who can answer **same day**
- [ ] Voicemail says QB Tree Services + “we’ll call back ASAP”

### 3. Google Business Profile (highest ROI free channel)

- [ ] Create GBP: **QB Tree Services** (or consistent legal/DBA name)
- [ ] Primary category: **Tree service**
- [ ] Service areas: Kokomo, Tipton, Cicero, Arcadia, Noblesville, Carmel, Westfield, Fishers, Indianapolis
- [ ] Hours match the site
- [ ] Phone + website URL (Pages URL until custom domain)
- [ ] Upload logo + every job photo you have
- [ ] Post once a week (job done, storm tip, free estimate CTA)

### 4. Analytics (so ads/SEO are measurable)

- [ ] Create GA4 property → add `NEXT_PUBLIC_GA_MEASUREMENT_ID` as a repo Variable → redeploy
- [ ] Optional: Meta Pixel → `NEXT_PUBLIC_META_PIXEL_ID` for Facebook/Instagram ads
- [ ] Search Console: property for the site URL, submit `sitemap.xml`

### 5. Smoke-test the funnel

- [ ] Submit hero form from phone → email arrives → `/thank-you/` shows
- [ ] Submit full contact form
- [ ] Tap Call button on mobile
- [ ] Check each service-area page loads

---

## B. Strongly recommended (first 2 weeks)

- [ ] Custom domain (e.g. `qbtreeservices.com`) → point to GitHub Pages → update `site.url` in `src/lib/site.ts`
- [ ] Facebook page + Instagram (link in `site.social`)
- [ ] Real job photos replace AI gallery when available
- [ ] After first 3–5 happy customers: Google review links; set `placeholder: false` on real quotes in `site.ts`
- [ ] Yard signs / truck magnets / door hangers with QR to site or call link
- [ ] Ask every satisfied customer for a Google review same day

---

## C. Already built on the site

| Piece | Status |
|-------|--------|
| Conversion homepage (hero + form above fold) | Done |
| Sticky mobile call bar | Done |
| Services + city SEO pages | Done (+ Arcadia) |
| FAQ + LocalBusiness schema | Done |
| Gallery | Done (upgrade with real jobs) |
| Quote form → thank-you + lead tracking hooks | Done (needs API key) |
| Privacy policy (ads/forms) | Done |
| Blog (5 launch SEO articles) | Done |
| GitHub Pages auto-deploy | Done |

---

## D. Paid acquisition (when form + phone are solid)

1. **Google Local Services Ads** or Search ads: “tree removal near me” + city keywords  
2. **Facebook/Instagram**: before/after creative, lead form or traffic to site  
3. Budget tip: start small, track cost per booked estimate, not just clicks  
4. Use UTM links: `?utm_source=facebook&utm_medium=paid&utm_campaign=launch`

Conversion events fire on successful submit / thank-you (`generate_lead` + Meta `Lead`) once analytics IDs are set.

---

## E. Content calendar (organic)

Already live under `/blog/`:

1. Tree removal cost in Indiana  
2. Permits  
3. Signs a tree needs removal  
4. Insurance & fallen trees  
5. Best time to trim in Indiana  

Next posts: per-city cost pages, storm season checklist, project case studies with photos.

---

## Quick reference — files to edit

| What | File |
|------|------|
| Phone, email, hours, cities | `src/lib/site.ts` |
| Form / analytics keys | GitHub Variables or `.env.local` |
| Blog posts | `src/lib/blog.ts` |
| Deploy | push to `main` |

```bash
cd precision-tree-service   # local folder name
npm run dev                 # http://localhost:3000
npm run build               # static export → out/
```
