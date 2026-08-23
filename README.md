# MR SONS Car Detailing

Marketing site for **MR SONS Cleaning Service** — mobile car detailing across Auckland.

React 18 · TypeScript · Vite · Tailwind CSS · motion (Framer Motion) · lucide-react · react-router-dom

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle into dist/
npm run preview  # serve the production build
```

## Pages

| Route | What's on it |
|---|---|
| `/` | Hero, info strip, what a full detail covers, vehicle types, service preview, reviews, CTA |
| `/services` | All 8 services with inclusions, the three packages with a sedan/SUV time toggle, Facebook link |
| `/about` | How Janish works, four operating principles, stats, four-step process, reviews |
| `/contact` | WhatsApp / call / email / Facebook cards, plus a booking form that composes a prefilled message |

## Before this goes live

Everything below is tracked with a `TODO(launch)` comment in the source.

1. **Confirm the email address** — `src/config.ts`. `mrsonscardetailing@gmail.com` is a **placeholder**; it was not verifiable from any public source. The phone number (`022 510 4885`) and the Facebook URL are verified.
2. **Confirm the service list** — `src/data/services.ts`. The Facebook page is login-walled and could not be read programmatically, so the eight services are inferred from the public recommendations on that page (mobile service, 2–3.5 hour full cleans, dog hair and odour removal, 7 and 8 seaters) plus standard NZ mobile-detailing scope.
3. **Add real prices** — `src/data/services.ts`. Packages currently lead with *time on the tools* rather than a price, because quoting a real business's rates without confirmation would mislead customers. Add a `price` field to `Package` once Janish confirms.
4. **Replace the background video** — `BACKGROUND_VIDEO` in `src/components/Layout.tsx` currently points at the CloudFront clip supplied in the brief. Swap in real detailing footage when there is some.
5. **Add the logo file** — the header currently uses a drawn SVG mark plus a wordmark (`LogoMark` / `Wordmark` in `src/components/Primitives.tsx`) that echoes the Facebook logo. Drop the real PNG into `public/` and swap it in if you want the exact original artwork.
6. **Add an OG image** — `index.html` has the OG tags but no `og:image`.

## Where things live

- `src/config.ts` — every business detail (phone, email, hours, links) in one place, plus the `waLink` / `mailLink` helpers.
- `src/data/services.ts` — services and packages. Also holds a `STAGES` array describing the six stages of a detail; it is currently unused (see the comment above it).
- `src/data/reviews.ts` — the six Facebook recommendations, quoted verbatim.
- `src/components/Primitives.tsx` — logo mark, wordmark, buttons, section eyebrow, the shiny-gradient style, and both SVG noise filters.
- `src/index.css` — the `liquid-glass` treatment, the shiny headline keyframes, and the `c3-*` package-card system.

## Notes

- The contact form has **no backend**. It validates, then opens WhatsApp or the user's mail client with the message already written. Nothing is stored or transmitted by the site itself.
- `prefers-reduced-motion` is respected globally in `src/index.css`.
- The mobile menu manages its own mount/unmount rather than using `AnimatePresence` — see the comment in `src/components/Navbar.tsx` for why.
