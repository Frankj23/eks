# E.K's Tech — Design System

The reference for anyone changing how the site looks or moves. Tokens and
component classes live in `src/styles/global.css`; shared markup lives in
`src/components/`. `src/pages/index.astro` is the canonical example of every
pattern below — read it before building a page.

## Direction

**An engineer's editorial.** Warm paper, ink navy, one brass accent. A serif
display face carries the voice; a quiet sans carries the reading; a mono face
labels things the way a drawing's title block does. Structure comes from
hairlines, numbered indexes and whitespace — not from boxes, shadows or colour
blocks.

The firm sells precision and plain dealing. The page should feel the same:
nothing decorative that is not also doing a job.

### What that rules out

- Grids of identical bordered cards as the default layout. Use a ruled list
  (`.rule-list`), an index, or a two-column editorial split first. Cards are for
  things that are genuinely cards: a property, a project, a post.
- Navy hero blocks with a photo washed out behind them. Heroes are type on paper.
- Uppercase letter-spaced button labels. Buttons are sentence case.
- Shadows at rest, gradients, glass, pills, icon-in-a-rounded-square.
- `font-bold` / `font-semibold` on serif headings (the serif is loaded at
  400–500 only; heavier weights are faux-bolded by the browser).
- More than one italic brass phrase (`.accent`) per page.

## Tokens

| Token (Tailwind class) | Value | Use |
| --- | --- | --- |
| `primary` | `#0a1f3c` | Ink navy. Headings, primary buttons, dark sections |
| `primary-container` | `#163258` | Hover on primary |
| `ink` | `#06152b` | Footer; the deepest surface |
| `secondary` | `#76570f` | Brass on paper: eyebrows, index numbers, the accent |
| `secondary-fixed` | `#e6c079` | Brass on navy: same roles on dark, gold button |
| `background` | `#f6f4ee` | Paper. The page |
| `surface` | `#fdfcf9` | Cards and inputs |
| `surface-container-low` | `#edeae1` | Alt sections, image placeholders, skeletons |
| `on-surface` | `#131a24` | Body text |
| `on-surface-variant` | `#4a525e` | Secondary text |
| `outline-variant` | `#d8d3c6` | Hairlines |
| `outline` | `#8c8676` | Input borders (needs 3:1) |
| `tertiary` / `error` | `#17603a` / `#a3261d` | Success / error text only |

Fonts: `font-display` Newsreader · `font-sans` Geist · `font-mono` Geist Mono.
Radius is tight: 2–4px. `rounded-full` is a true circle (avatars only).

## Type

Use the classes, not ad-hoc `text-4xl font-bold`.

| Class | Role |
| --- | --- |
| `display-1` | Homepage headline only |
| `display-2` | Page `<h1>` (via `PageHero`), CTA band title |
| `heading-1` | Section `<h2>` (via `Section`); large list-row names |
| `heading-2` | Sub-section titles, prominent row titles |
| `heading-3` | Small serif titles: process steps, FAQ questions, list items |
| `title` | Sans UI title: card titles, sidebar headings |
| `lead` | The paragraph under a heading |
| `prose` | Long-form copy (stories, legal, detail descriptions) |
| `eyebrow` | Mono uppercase label. Add `eyebrow-rule` for the leading hairline |
| `num` | Mono brass index figure: `01`, `02` |
| `caption` | Mono uppercase caption / metadata |
| `stat-figure` | Large serif numerals |
| `accent` | Italic brass phrase inside a display headline. Once per page |

Body copy is 16px/1.6; supporting copy `text-[15px]`; nothing below 13px except
`eyebrow` / `caption` / `num` / `tag`.

## Layout

- `container-max` — 1320px, fluid gutters. Every section's inner wrapper.
- `Section.astro` — owns vertical rhythm and the section header.
  - `tone="paper" | "alt" | "ink"` (`alt` boolean still works)
  - `layout="stack"` (title left, intro right, content below) or `"split"`
    (header pinned in a 4-col left rail, content in the right 8)
  - `ruled` — contained hairline between two consecutive paper sections
  - `eyebrow`, `title`, `intro`, `index`, `id`
- `PageHero.astro` — the hero for every page except home. `crumbs`, `eyebrow`,
  `title` (or a `title` slot for an `.accent` phrase), `lead`, `image`,
  `compact`; default slot = action buttons.
- Vary the rhythm: alternate `stack` and `split`, and use at most one `ink`
  section per page in addition to the CTA band.
- 12-column grids at `lg`; text columns stay under ~42rem.

## Components

| Thing | How |
| --- | --- |
| Primary action | `btn-primary` (+ `btn-arrow` for the arrow) |
| Secondary action | `btn-secondary` |
| On navy | `btn-gold`, `btn-outline-light` |
| Small button | add `btn-sm` |
| Text link in copy | `link` |
| "Explore →" link | `link-arrow` (legacy alias: `card-cta`) |
| Arrow glyph alone | `<span class="arrow" aria-hidden="true"></span>` (`arrow--out`, `arrow--back`) |
| Icon-only button | `icon-btn` (44px target) |
| Card | `card` — on an `<a>` it gets hover/press states automatically |
| Image frame | `media` + an aspect class, `<img>` inside |
| Label on an image / status | `tag`, `tag--ink`, `tag--line` |
| Ruled rows | `rule-list` on the parent |
| Capability list | `check-list` on the `<ul>` |
| Key/value facts | `<dl class="spec">` with `<div><dt/><dd/></div>` rows |
| Filter chips | `filter-btn` inside `filter-row`; active = `aria-pressed="true"` or `.is-active` |
| Form | `field-label`, `field` (input/select/textarea), `field-hint` |
| Steps | `Process.astro` (`steps=[{title,text}]`) |
| FAQ | `Faq.astro` (`items=[{q,a}]`) |
| Closing CTA | `CTABand.astro` |
| Loading placeholder | `skeleton` blocks shaped like the content they replace |
| Empty / error message | `status-note` |

## Motion

Follows Emil Kowalski's rules. In short:

1. **Should it move at all?** Things seen constantly (nav hover, filters) get
   colour changes only. Things seen once per visit (section entrance, hero
   image, process line) may move.
2. **Only `transform` and `opacity`.** Never animate `width`, `height`, `gap`,
   `padding`, `top`. Never `transition: all`.
3. **Easing:** entering/exiting → `var(--ease-emphasized)`; on-screen movement →
   `var(--ease-move)`; drawer → `var(--ease-drawer)`; colour/hover → `ease`.
   Never `ease-in`.
4. **Duration:** press 160ms · hover 180ms · panels 200–240ms · drawer 420ms in /
   240ms out. Exits are faster than entrances. UI stays under 300ms.
5. **Press feedback** on everything pressable: `scale(0.97)` (already in the
   button/chip/card classes).
6. **Hover effects are gated** behind `@media (hover: hover) and (pointer: fine)`.
7. **Nothing enters from `scale(0)`** — start at 0.96+ with opacity.
8. **Keyboard-initiated actions do not animate** (see the mega menu).
9. **Reduced motion** keeps fades, drops travel. Handled globally; new
   animations must add themselves to the block at the bottom of `global.css`.

Ready-made:

- `data-reveal` on an element → fades up when scrolled into view; elements that
  arrive together cascade automatically. Never put it on above-the-fold hero
  text. Add `data-reveal-keep` if a child uses `data-reveal-line`.
- `media-reveal` on a `.media` frame → one-time curtain reveal (hero image).
- `enter` on script-inserted nodes, with `style="--enter-i: N"` for a cascade.

## Data-driven regions

Listings, projects and posts come from `/api/*` at runtime. Every such region
has four designed states:

- **Loading** — `skeleton` blocks in the shape of the cards that will arrive
  (never a bare "Loading…" line as the only feedback; keep the `role="status"`
  text for screen readers).
- **Populated** — cards get the `enter` class as they are inserted.
- **Empty** — a `status-note` that says what to do next.
- **Error** — a `status-note` with a way out (contact link).

Titles and locations are user-entered: never assume a length. Clamp with
`line-clamp-*`, allow wrapping, and give images a fixed aspect so a missing or
odd photo cannot break a row.

### Card anatomy

Every API-driven card (property, project, post) is built the same way, whether
it is written in Astro markup or created by a script:

```html
<a class="card enter flex flex-col" href="…" style="--enter-i: 0">
  <div class="media aspect-[4/3]">            <!-- data-empty="No photo yet" when there is no image -->
    <img src="…" alt="…" loading="lazy" />
    <span class="tag absolute top-3 left-3">For rent</span>
  </div>
  <div class="flex flex-col grow p-5 md:p-6">
    <p class="caption mb-2">Molyko, Buea</p>   <!-- one line of metadata -->
    <h3 class="title line-clamp-2">Two-bedroom apartment</h3>
    <p class="mt-2 text-sm leading-relaxed text-on-surface-variant line-clamp-2">…</p>
    <p class="mt-auto pt-5 …">…</p>            <!-- price, or a link-arrow -->
  </div>
</a>
```

The matching loading state is the same box with `skeleton` blocks:

```html
<div class="card" aria-hidden="true">
  <div class="skeleton aspect-[4/3] rounded-none"></div>
  <div class="p-5 md:p-6 space-y-3">
    <div class="skeleton h-3 w-24"></div>
    <div class="skeleton h-5 w-4/5"></div>
    <div class="skeleton h-4 w-3/5"></div>
  </div>
</div>
```

Card grids: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6`.

## Mobile

- Design the phone layout on purpose; do not just stack the desktop one.
- Touch targets ≥ 44px; inline links ≥ 24px (`link-target`).
- Inputs are 16px (`field`) so iOS does not zoom.
- Filter rows scroll sideways (`filter-row`) instead of wrapping.
- Respect safe areas on anything fixed to an edge.
- The floating WhatsApp button sits bottom-right on every page. A page that has
  its own WhatsApp action, or controls along its right edge, passes
  `hideWhatsApp` to `BaseLayout` rather than padding around it.
- No horizontal overflow at 320px.
