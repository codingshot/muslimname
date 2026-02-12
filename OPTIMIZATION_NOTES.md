# Optimization Notes

## Resource Optimizations Applied

### Images & Assets
- **Hero background** — Moved to `/public/hero-bg.jpg` (not bundled, ~160KB served as static)
- **Logo** — Uses `/favicon.ico` (20KB) instead of bundled `logo.png` (1.5MB) in header/footer
- **Favicon** — `index.html` now references `favicon.ico` instead of `favicon.png`
- **Header logo** — `width`/`height` + `fetchPriority="high"` for LCP
- **Footer logo** — `loading="lazy"` (below fold)

### Code Splitting
- **Layout** — "Random Quranic Name" loads `namesDatabase` only on click (dynamic import)
- **NameDetail** — `preloadVoices()` deferred until hover/focus on speak button
- **Vite chunks** — `data-legal`, `vendor-markdown` extracted (LegalGuidePage ~18KB vs ~144KB before)

### Caching (vercel.json)
- **JS/CSS assets** — `Cache-Control: max-age=31536000, immutable`
- **Static images** — `Cache-Control: max-age=86400` (hero, favicon, og-image)

### Fonts
- Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`
- Inter 300 weight removed from font load (400–700 only)

## Further Recommendations

1. **Compress hero-bg.jpg** — Use `convert hero-bg.jpg -quality 80 -resize 1920x hero-bg-opt.jpg` (ImageMagick)
2. **Optimize logo** — Create 32×32 and 64×64 WebP/PNG versions; run `./scripts/optimize-images.sh`
3. **favicon.png** — Currently 1.5MB; consider removing if `favicon.ico` is sufficient
4. **Index initial load** — Names + blogs data (~400KB) loads on homepage; consider CDN or edge caching for repeat visitors
