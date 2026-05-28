# Cascais in June

A static guide for tourists visiting **Cascais, Portugal** in **June** — beaches, food, entertainment, excursions, water sports, and things that keep teenagers happy.

The site is hosted on **Cloudflare Pages** and is plain HTML, CSS, and JavaScript — no framework, no build step.

## Why June?

June is one of the best months to visit Cascais:

- Warm but not yet peak-summer crowded (mid-20s °C, sea around 18–20 °C).
- Long daylight (sunset ~9 pm) — more hours for the beach and outdoor dinners.
- The big June festivals: **Festas dos Santos Populares** (sardines, grilled streets, music) and the **Cascais Cool Jazz** kick-off.
- School holidays start late in the month, so the first half is calmer.

## Site contents

| Page | What it covers |
|------|----------------|
| `/` | Home — quick orientation, top picks, June-specific highlights. |
| `/food/` | Restaurants, markets, seafood, pastel-de-nata stops, casual vs. special-occasion. |
| `/entertainment/` | Nightlife, live music, festivals, family-friendly evenings. |
| `/excursions/` | Half-day and day-trips: Sintra, Cabo da Roca, Boca do Inferno, Guincho, Lisbon. |
| `/water-sports/` | Surfing, bodyboarding, SUP, kayaking, sailing, where to rent and learn. |
| `/teens/` | Activities for teenagers — surf camps, escape rooms, padel, beach hangouts. |
| `/about/` | About the site, scope, and how to contribute. |

## Tech stack

- **Hosting:** Cloudflare Pages (static).
- **HTML / CSS / JS** — no framework, no bundler.
- **No third-party JS** loaded by default. Keep it fast on hotel Wi-Fi.
- Responsive by default; light/dark colour scheme follows the OS.

## Local development

No tooling required. Open `index.html` directly, or run any static server:

```bash
# Python (built in)
python3 -m http.server 8080

# Node (if installed)
npx serve .
```

Then visit <http://localhost:8080>.

## Deploying

Cloudflare Pages is wired to the `main` branch:

1. Push to `main`.
2. Cloudflare builds the project (no build command — it's static).
3. Output directory: repo root.

`_headers` and `_redirects` (if present at the repo root) are read by Cloudflare Pages.

## Project documentation

- [Implementation plan](docs/IMPLEMENTATION_PLAN.md) — phased build-out, content sources, open questions.
- [Content guide](docs/CONTENT_GUIDE.md) — voice, structure, fact-checking rules for new entries.

## Contributing

This is a small, opinionated guide — not an exhaustive directory. When adding a venue or activity:

1. Visit it (or get a first-hand recommendation), don't just rephrase Google reviews.
2. Note **why** it's worth a tourist's time, especially in June.
3. Keep entries short — a paragraph, not an essay.

## License

Content © the contributors. Code under MIT. See `LICENSE` (TODO).
