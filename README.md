# Soft Touch Auto Finishing

Marketing site for Soft Touch Auto Finishing — a mobile car detailing business.

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
| `/` | Hero, info strip, what a full detail covers, vehicle types, service preview, CTA |
| `/services` | All 8 services with inclusions, the three packages with a sedan/SUV time toggle, Facebook link |
| `/about` | How the business works, four operating principles, stats, four-step process |
| `/contact` | WhatsApp / call / email / Facebook cards, plus a booking form that composes a prefilled message |

## Before this goes live

**Almost every business detail on this site is a placeholder.** The Facebook
page is login-walled, so nothing could be read from it except the business
name. Everything below is tracked with a `TODO(launch)` comment in the source.

1. **Contact details** — `src/config.ts`. The phone number (`021 000 0000`),
   the WhatsApp number and the email address are all invented placeholders.
   Every CTA on the site is wired to them, so nothing works until they are
   real. The number is deliberately obviously fake so it cannot ship by
   accident.
2. **Country** — NZ phone formatting is used purely because that is where the
   other sites in this account operate. It has not been confirmed.
3. **Location** — no city or region is named anywhere on the site, on purpose.
   Asserting the wrong one is worse than saying nothing. To add it once
   confirmed: put a `region` field back on `BUSINESS` and wire it into
   `InfoStrip`, `Footer`, `Home`, `Services`, `About` and `index.html`.
4. **Services** — `src/data/services.ts`. The eight services and three
   packages are inferred from what a mobile detailer typically offers, not
   read from the business. Confirm the list.
5. **Prices** — packages currently lead with *time on the tools* rather than a
   price, because quoting a real business's rates without confirmation would
   mislead customers. Add a `price` field to `Package` once rates are known.
6. **Reviews** — there are none on the site. The previous version of this
   codebase carried six real Facebook recommendations belonging to a
   *different* business; they were removed rather than re-attributed. Add real
   Soft Touch reviews when there are some.
7. **Opening hours** — `src/config.ts`, currently a guess.
8. **Background video** — `BACKGROUND_VIDEO` in `src/components/Layout.tsx`
   points at the CloudFront clip supplied in the brief. Swap in real footage.
9. **Logo** — the header uses a drawn SVG mark plus a wordmark
   (`LogoMark` / `Wordmark` in `src/components/Primitives.tsx`) that echoes the
   real logo. Drop the actual PNG into `public/` and swap it in for the exact
   artwork.
10. **OG image** — `index.html` has the OG tags but no `og:image`.

## Brand

Palette sampled from the logo, defined in `tailwind.config.js`:

| Token | Hex | Used for |
|---|---|---|
| `brand` | `#F2661F` | Primary text/CTA orange. Lightened from the logo's `#D9430E` so it clears 4.5:1 on the `#0c0c0c` ground. |
| `ember` | `#D9430E` | The logo's true orange — graphics only, not text. |
| `gold` | `#F5C518` | "Auto Finishing" wordmark, headline gradient peak. |
| `azure` | `#2E86DE` | Logo wave, accents. |
| `aqua` | `#5BC8DC` | Logo swoosh and sparkles. |

The shiny headline gradient and the packages watermark both sweep
dark → ember → gold rather than the original blue.

## Deploying

Hosted on Vercel. Vercel auto-detects the Vite preset: build `npm run build`,
output `dist`. No environment variables — the contact form has no backend.

`vercel.json` carries a catch-all rewrite to `/index.html`. This is
**required**: the site uses `BrowserRouter`, so without it `/services`,
`/about` and `/contact` return 404 on a direct load or a refresh. Vercel checks
the filesystem before applying rewrites, so real assets still serve normally.

## Where things live

- `src/config.ts` — every business detail in one place, plus the `waLink` /
  `mailLink` helpers.
- `src/data/services.ts` — services and packages. Also holds an unused
  `STAGES` array describing the six stages of a detail (see the comment above
  it).
- `src/components/Primitives.tsx` — logo mark, wordmark, buttons, section
  eyebrow, the shiny-gradient style, and both SVG noise filters.
- `src/index.css` — the `liquid-glass` treatment, the shiny headline
  keyframes, and the `c3-*` package-card system.

## Notes

- The contact form has **no backend**. It validates, then opens WhatsApp or the
  user's mail client with the message already written. Nothing is stored or
  transmitted by the site itself.
- `prefers-reduced-motion` is respected globally in `src/index.css`.
