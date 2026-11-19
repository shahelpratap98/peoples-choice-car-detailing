# People's Choice Car Detailing

Demo marketing site for People's Choice Car Detailing — a mobile car detailer
in Whangārei, New Zealand.

React 18 + TypeScript + Vite + Tailwind + `motion/react` + `lucide-react`,
with `react-router-dom` for four pages.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle into dist/
npm run preview  # serve the production build
```

## Pages

| Route | What's on it |
|---|---|
| `/` | Hero with the M3 photograph, info strip, what the work covers, vehicle types, service preview, CTA |
| `/services` | All 12 services, the three named packages, Facebook and Instagram links |
| `/about` | Who they are, four principles, stats, four-step process |
| `/contact` | WhatsApp / call / email / Facebook cards, plus a booking form that composes a prefilled message |

## Where the content came from

Everything on the site was read from public sources on 19 Nov 2026. Each field
in `src/config.ts` is tagged with its source.

| Fact | Source |
|---|---|
| Phone `027 231 6818`, WhatsApp `+64 27 231 6818`, email `pccarvalet@gmail.com` | Facebook page, Contact info |
| Instagram `@pccar_detailing` | Facebook page |
| Whangārei, mobile, "Whangārei & surrounding areas" | Facebook page and posts |
| The 10 "Specialities" (hood lining, seats shampooing, vinyl/wrap/sticker removal, exterior, interior, paint correction, wash and wax, pet hair, headlights, cut and polish) | Facebook page, Services |
| Full valet, maintenance valet, fleet, Black Pearl Package, one- and two-step cut and polish, ozone treatment, leather steam clean, baked-on cement and moss | Facebook posts |
| "More than 8 years experience" | Instagram bio / Yellow listing |
| 5.0 rating, "100% recommend (8 reviews)" | Google result for the Facebook page |
| Opening hours | Yellow NZ listing only — **unconfirmed** |

## Before this goes live

1. **Confirm the opening hours** — `src/config.ts`. They come from a third-party
   directory; the Facebook page only says "Open now".
2. **Prices** — none are shown. The page says "call for quote" throughout. The
   only published figure was a time-limited $99-a-pair headlight Christmas
   special, which is deliberately not repeated.
3. **Reviews** — the rating is shown, but no review quotes: the review text is
   not publicly readable. Ask the owner for a few they are happy to publish.
4. **Hero photograph** — `public/hero-m3.webp` is an **AI-generated
   illustration** (a BMW M3 in the brand colours), not the business's own work.
   Fine for a demo; swap it for a real job photo before launch if the owner
   prefers. `public/hero-m3-alt.webp` is a second take of the same shot.
5. **Logo** — `LogoMark` in `src/components/Primitives.tsx` is a placeholder
   sparkle, not the client's logo. Drop their artwork into `public/` and swap it.
6. **Service wording** — have the owner read `src/data/services.ts`. Blurbs
   paraphrase their posts but were not written by them.
7. **OG image URL** — `index.html` points `og:image` at `/og.jpg`. Make it an
   absolute URL once the domain is known.

## Brand

The client's chosen three-colour palette, defined in `tailwind.config.js`:

| Token | Hex | Used for |
|---|---|---|
| `raven` | `#080402` | Page ground |
| `powder` | `#B6DFF5` | Small accents, icons, eyebrows, the headline glint (15:1 on raven) |
| `brand` | `#E0091F` | Poppy red — buttons, large headline type, the logo mark |

Poppy red is 4.1:1 on raven, so it is **not used for small text**. White on
poppy (buttons) is 5.0:1.

## Deploying

Hosted on Vercel. Vercel auto-detects the Vite preset: build `npm run build`,
output `dist`. No environment variables — the contact form has no backend.

`vercel.json` carries a catch-all rewrite to `/index.html`. This is
**required**: the site uses `BrowserRouter`, so without it `/services`,
`/about` and `/contact` return 404 on a direct load or a refresh.

## Where things live

- `src/config.ts` — every business detail in one place, with its source.
- `src/data/services.ts` — the 12 services and 3 packages.
- `src/components/Primitives.tsx` — logo mark, wordmark, buttons, section
  eyebrow, the headline gradient, and both SVG noise filters.
- `src/index.css` — the `liquid-glass` treatment, the hero edge masks, and the
  `c3-*` package-card system.

## Notes

- The contact form has **no backend**. It validates, then opens WhatsApp or the
  user's mail client with the message already written. Nothing is stored or
  transmitted by the site itself.
- `prefers-reduced-motion` is respected globally in `src/index.css`.
- History: this repo previously held demos for two other detailers (MR SONS at
  `47d066a`/`92ca578`, Soft Touch Auto Finishing at `45d0b47`). Both are
  recoverable from git.
