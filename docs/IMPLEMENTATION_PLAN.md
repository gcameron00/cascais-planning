# Implementation Plan

Phased plan for building out the Cascais-in-June tourist guide.

## Goals

1. Useful, opinionated, **single-trip** guide for someone in Cascais for ~1–2 weeks in June.
2. Fast — readable on a phone over hotel/cafe Wi-Fi. No framework, no heavy assets.
3. Easy for non-developers to update — a contributor should be able to add a restaurant by editing one HTML file.

## Non-goals

- No bookings, no payments, no user accounts.
- No exhaustive directory of every restaurant — curation > coverage.
- No CMS — a future contributor with HTML literacy is the audience.

## Phase 1 — Skeleton (this PR)

- [x] README + implementation plan.
- [x] Shared CSS (typography, layout, header, hero, cards, footer).
- [x] Shared JS (mobile nav toggle, current-page highlight).
- [x] Home page with hero + section cards.
- [x] Six topic pages with placeholder-but-real content:
  - Food, Entertainment, Excursions, Water sports, Teens, About.
- [x] Cloudflare Pages config (`_headers`, `_redirects` if needed).
- [x] Mobile-first responsive layout.

## Phase 2 — Real content (next)

- [ ] Replace placeholder picks with first-hand recommendations.
- [ ] Add June festival calendar with concrete 2026 dates (Santos Populares, Cool Jazz lineup, beach openings).
- [ ] Add a "**Today** in Cascais" callout the visitor can scan in 10 seconds.
- [ ] Add photos — locally hosted, `<img loading="lazy">`, WebP where possible.
- [ ] Add OpenGraph/Twitter meta for shareability.

## Phase 3 — Polish

- [ ] Print stylesheet (people print itineraries before they fly).
- [ ] Offline support via a simple Service Worker — flaky 4G on the train to Sintra.
- [ ] PT/EN language toggle (most visitors are EN-speakers, but locals will read it too).
- [ ] Lighthouse pass: target 100/100 on performance and accessibility.

## Phase 4 — Stretch

- [ ] Interactive map (Leaflet + OSM tiles) on each topic page, no tracking.
- [ ] Filters on each list page (e.g. food: price / cuisine / dog-friendly).
- [ ] A small JSON file per topic so the same content can power a future React/native version without re-keying.

## Information architecture

```
/
├── /food/           — restaurants, markets, sweets, where locals eat
├── /entertainment/  — nightlife, music, festivals, family evenings
├── /excursions/     — Sintra, Cabo da Roca, Lisbon, Boca do Inferno, Guincho
├── /water-sports/   — surf, SUP, kayak, sail, dive
├── /teens/          — activities aimed at 13–19 yr olds
└── /about/          — what this is, who made it, how to contribute
```

Each topic page follows the same structure:

1. **One-sentence intro** — what this page is for.
2. **June callout** — anything seasonal a visitor must know (festivals, closures, water temps).
3. **Top picks** — 3–5 curated entries as cards.
4. **More to explore** — short list with one-line descriptions.
5. **Practical** — booking, opening hours, getting there, costs.

## Content sources

- First-hand visits (gold standard).
- Cascais municipality (`cascais.pt`) for official events and beach status.
- **Visit Cascais** (`visitcascais.com`) for festival programming.
- CP and Carris Metropolitana for transport timetables.
- IPMA for sea temperature & UV.

Never copy text — always paraphrase and credit if the fact is non-obvious (e.g. festival dates).

## Open questions

- Are we targeting a specific traveller (family with teens? couples? solo)? Current draft assumes **family with teenagers** since that's in the issue.
- Do we want a "build your day" itinerary generator, or is curation enough?
- Domain — does `cascais-planning.pages.dev` stay, or do we move to a custom domain?

## Design principles

- **Mobile first.** Most readers will be on a phone, on the move.
- **Scannable.** Headings, short paragraphs, cards. No walls of text.
- **No dark patterns.** No popups, cookie banners (we set no cookies), no "subscribe" modal.
- **Respect the reader's time.** A useful page beats a comprehensive one.
