# StabiliCore OrthoSlab — landing page

React + Vite. No UI or animation library; the motion is CSS keyframes plus a
small rAF loop, so the JS bundle is essentially React itself.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

Vercel / Netlify: framework preset **Vite**, build `npm run build`, output `dist`.

## What's where

```
src/
  styles/tokens.css      every colour, size and spacing value
  styles/fonts.css       self-hosted Outfit + Hanken Grotesk, latin only
  styles/global.css      reset, layout, labels, reveal
  hooks/
    useNavVisibility.js  pill nav: tuck on scroll, return on settle, tint swap
    useSectionSpy.js     active nav link
    useReveal.js         IntersectionObserver fade-up
  components/
    Nav / Hero / Purpose / Build / Fitting / InUse / Upkeep / Closing / Footer
    FloatingSlab.jsx     3D product float: tilt, parallax, sheen, contact shadow
    Icons.jsx            the icon set, 5 strokes or fewer per glyph
```

## Palette

Sampled from the logo:

| token | value | from |
|---|---|---|
| `--blue-600` | `#1A70B8` | the wordmark |
| `--green-600` | `#94C03D` | the wordmark and the crown |
| `--deep` | `#16405F` | the single dark band |
| `--paper-sky` | `#E7F0F8` | the tinted panels |

## Notes on the artwork

- The supplied PNGs already carry clean alpha. Logos and stills are only
  cropped to content and converted to WebP.
- `wordmark.webp` is the top line of the colour lockup, cut above `OrthoSlab`,
  so it reads at nav size. The nav inverts it to white over the dark band.
- `mascot.webp` is the figure alone. The supplied file has the wordmark
  underneath it and the two touch, so the crop is followed by a
  largest-connected-component pass to drop the leftover sparkle marks.
- The slab renders are tall crops (the front view is 654 x 1300), so each `.fs`
  is sized by *width* with the height following from `aspect-ratio`. Re-export a
  render at a different crop and both values need updating together.

## House rules carried over

- No em dashes in the copy.
- Counts are plain digits in sequence, never `01`-style.
- Icons are five strokes or fewer, so they hold at 18px.
- The nav glass re-tints to the band behind it; it tucks away on scroll and
  returns the moment scrolling settles.
- Everything respects `prefers-reduced-motion`.
- Partner logos sit on a white plate and keep their own brand colours.
