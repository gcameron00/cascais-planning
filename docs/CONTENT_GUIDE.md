# Content guide

How to write entries for this site.

## Voice

- Friendly, direct, never breathless. Write the way you'd tell a friend who just landed.
- Assume the reader is intelligent but new to Cascais.
- It's OK to have opinions. "Skip this one" is more useful than "some say it's nice".

## Structure of an entry

Each "card" is one venue/activity. Aim for **3–5 short sentences**.

```html
<article class="card">
  <h3>Restaurant / Activity name</h3>
  <p class="card-meta">Neighbourhood · Price · Best for</p>
  <p>What it is and why a tourist should care. One concrete detail
     that proves you've actually been there.</p>
  <p class="card-practical">
    <strong>Practical:</strong> hours, booking, how to get there.
  </p>
</article>
```

## What to include

- **Why a visitor should care.** Not "great food" — "the only place in town doing arroz de marisco the old way".
- **One concrete detail** that couldn't come from a brochure (the staircase, the dog, the view from table 4).
- **June-specific** notes if relevant — closed Mondays in June, gets booked out for Santos Populares week, queues form by 7 pm in summer.
- **Practical info** — neighbourhood, price band (€ / €€ / €€€), how to get there.

## What to skip

- "Hidden gem", "must-visit", "world-class". Hollowed-out by overuse.
- Empty superlatives without a reason.
- Long history lessons — link out if it matters.
- Anything you haven't verified yourself (or with a trusted local) in the last 12 months.

## Fact-checking

Confirm before publishing:

- Opening hours (websites lie — call or visit).
- Whether reservations are required.
- Prices within ~20%.
- Spelling of the venue and street (Portuguese accents matter).

## Accessibility

- Use semantic HTML (`<article>`, `<section>`, `<nav>`, `<h2>` → `<h3>`).
- Every `<img>` needs meaningful `alt` text. Decorative images get `alt=""`.
- Don't rely on colour alone to convey information.
- Aim for AA contrast in both light and dark modes.

## Performance

- Images: WebP, max 1600 px wide, `loading="lazy"`, explicit `width`/`height`.
- No third-party scripts (analytics, fonts, embeds) without discussion.
- Inline CSS only for above-the-fold critical styles, if at all.
