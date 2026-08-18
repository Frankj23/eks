# E.K's Tech — Multi-Division Website

Static site built with **Astro 7** and **Tailwind CSS 4**. Builds to plain HTML/CSS
that Hostinger's shared hosting serves directly. Total JavaScript per page: ~2.3 KB.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
```

> **Windows note.** If `npm run dev` fails with *"Cannot find native binding"*,
> delete `node_modules` and `package-lock.json` and run `npm install` again.
> Astro's bundler ships per-platform native binaries, and a lockfile generated on
> another OS pins the wrong one. Avoid apostrophes and spaces in the project path
> (`EK'S TECH` has caused issues) — prefer something like `C:\Users\you\eks-tech`.

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Builds the static site into `dist/` |
| `npm run preview` | Serves `dist/` locally to check the real build |
| `node check-links.mjs` | Verifies every internal link resolves (run after `build`) |

---

## The one thing to understand

**`src/data/navigation.js` is the single source of truth for all navigation.**

Every dropdown, the mobile drawer and the footer are generated from that one file.
Change a label or a path there and it updates on all 25 pages at once. This is what
permanently fixes the problem where each page had a different menu.

Do not hand-edit links inside `Header.astro` or `Footer.astro`.

**Rule: if a path appears in `navigation.js`, a page must exist for it.** Run
`node check-links.mjs` after any change — it fails the check if a link points at
nothing, or if a `#` placeholder sneaks back in.

---

## Structure

```
src/
├── data/
│   ├── navigation.js     ← ALL nav + footer links (single source of truth)
│   ├── site.js           ← brand, phone, email, WhatsApp, stats  ⚠️ has TODOs
│   └── divisions.js      ← division content: services, process, FAQs
├── layouts/
│   ├── BaseLayout.astro  ← <head>, SEO meta, Open Graph, structured data
│   └── LegalLayout.astro ← privacy / terms
├── components/
│   ├── Header.astro      ← mega-menu + mobile drawer  (the canonical navbar)
│   ├── Footer.astro
│   ├── Section.astro
│   ├── CTABand.astro
│   └── WhatsAppButton.astro
├── styles/
│   └── global.css        ← design tokens (Tailwind 4 @theme block)
└── pages/
    ├── index.astro                  /
    ├── about.astro                  /about
    ├── contact.astro                /contact
    ├── portfolio.astro              /portfolio
    ├── privacy.astro  terms.astro  404.astro
    ├── academic/projects.astro      /academic/projects
    ├── academic/apply.astro         /academic/apply
    ├── [division]/index.astro       → generates all 4 division pages
    └── [division]/[service].astro   → generates all 16 service pages
```

Those last two files generate 20 of the 25 pages from `divisions.js`. Add a service
to the data file and its page appears automatically.

---

## ⚠️ Before you go live

Search the project for `TODO` and replace every one.

**`src/data/site.js`** — the critical ones:
- `phone`, `phoneDisplay`, `whatsapp` — currently placeholder numbers
- `email`, `address`
- `url` — the real domain
- `social` — profile URLs (any left `null` is hidden, so no dead icons)
- `stats` — **use verified figures only.** Unprovable numbers cost more trust
  than they earn. Delete a stat rather than invent one.

**`astro.config.mjs`** — set `site:` to the real domain. This drives canonical
URLs and `sitemap-index.xml`.

**`src/pages/contact.astro`** — replace `YOUR_ACCESS_KEY` with a free key from
[web3forms.com](https://web3forms.com). Hostinger can send PHP mail, but
deliverability from shared hosting is poor; a form service or authenticated SMTP
through your business email is far more reliable.

**`src/data/divisions.js`** — FAQ answers are `TODO`. The Finance one about
licensing matters legally; answer it accurately.

**`privacy.astro` / `terms.astro`** — placeholders. Have a lawyer review these.

### Images — read this

13 images are included in `src/assets/images/`, recovered from the first Stitch
archive, cropped and converted to WebP. Astro optimises them at build time into
responsive `srcset` variants. Every one has real alt text.

**They are AI-generated stock, not photographs of E.K's Tech work.** They look
professional and make the site presentable now, but:

- None of it was shot in Cameroon — the civil engineering photo has a US skyline.
- None of it depicts a real client project.
- Using them on a live portfolio implies work the firm may not have done.

Treat them as **visual placeholders**. Replace with real project photography before
launch, or at minimum before adding real project names to `/portfolio`.

**To swap an image:** drop the new file into `src/assets/images/`, then update the
matching entry in `src/data/images.js` — the import path and the `alt` text. Nothing
else changes; every page using that key picks it up automatically.

**Gap:** the Finance division has no photography. Its hero falls back to solid navy,
which renders correctly but looks different from the other three divisions. It needs
one wide image (roughly 1200×800) — a real meeting, workspace or client session.

---

## Deploying to Hostinger

```bash
npm run build          # outputs to dist/
node check-links.mjs   # confirm nothing is broken
```

**Option A — Git deploy (Business plan and above)**

1. Push this repo to GitHub.
2. hPanel → Website → **Git** → connect the repo.
3. Build command `npm run build`, publish directory `dist`.

**Option B — Manual upload (any plan)**

1. Run `npm run build`.
2. hPanel → **File Manager** → open `public_html`.
3. Upload **the contents of `dist/`** — not the `dist` folder itself.

**Then, in hPanel:**

- **SSL** → issue the free Let's Encrypt certificate, then enable **Force HTTPS**
- **Performance** → turn on LiteSpeed cache
- **Emails** → create `contact@yourdomain.com` for the form
- Confirm `yourdomain.com/404.html` resolves; add an `.htaccess` line if Hostinger
  doesn't pick it up automatically:
  ```apache
  ErrorDocument 404 /404.html
  ```

---

## What was fixed from the original export

| Issue in the Stitch build | Status |
|---|---|
| Six different navbars across six pages | One component, generated from one data file |
| Fabricated services ("Business School", "Fixed Income Research", "Division Portal") | Removed — only real services remain |
| 101 conflicting URL paths | Pruned to 25 real pages, all verified |
| `href="#"` placeholders | Zero — build check enforces it |
| No mobile navigation on 3 of 6 pages | Accessible drawer with accordions, every page |
| `rounded-full: 0.75rem` (circles rendered as squares) | `9999px` |
| `data-alt` instead of `alt` | Real `alt` attributes |
| Tailwind CDN, ~400 KB, render-blocking | Compiled, 28 KB total CSS |
| 31 hotlinked expiring Google images | Self-hosted from `public/images/` |
| `opacity-0` + IntersectionObserver (blank page if JS fails) | Removed; content always visible |
| No favicon, meta description, OG tags, sitemap | All present, plus LocalBusiness structured data |
| Missing About, Contact, Portfolio, 404, Privacy, Terms | All built |
| No keyboard focus states, no skip link | Both added; reduced-motion respected |
| Placeholder `wa.me/1234567890` | Configurable in `site.js` (still needs your real number) |
