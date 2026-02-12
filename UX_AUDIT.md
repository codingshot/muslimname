# UX Audit — MuslimName.me

## Summary

Overall grade: **Good**. The site has solid navigation, clear value propositions, and a well-structured name discovery flow. Key improvements focus on accessibility, mobile UX, and per-page SEO.

## Findings

### Critical
- **BlogDetailPage link handling**: Markdown `a` component uses `<Link to={href}>` for all URLs; external links (e.g. `https://...`) break with React Router. Should use `<a>` for external, `<Link>` for internal.

### Important
- **Mobile nav button**: Missing `aria-expanded` and `aria-label` for screen readers.
- **Index hero input**: No visible label; relies on placeholder only. Add `aria-label` or associated label.
- **NamesPage search clear button**: Icon-only; needs `aria-label="Clear search"`.
- **Filter dropdowns**: Add `aria-expanded` and `aria-haspopup="listbox"` for accessibility.
- **OG/Twitter images**: Using `/favicon.png` instead of `/og-image.png` for social sharing.

### Suggestions
- **Skip link**: Add "Skip to main content" for keyboard users.
- **Empty state CTA**: NamesPage empty state could link to /generator as alternative path.
- **Focus visible**: Ensure `:focus-visible` ring is consistent on interactive elements.

## Recommendations

1. Fix BlogDetailPage external link handling (use `<a>` for external URLs).
2. Add aria attributes to nav, inputs, and filter controls.
3. Use full OG image (`/og-image.png`) for social cards.
4. Add sitemap.xml and JSON-LD for SEO.
5. Add security headers (X-Frame-Options, CSP, etc.) in vercel.json.

## Accessibility Checklist

- [x] Nav current page indicated
- [x] Footer links complete
- [ ] Icon buttons have aria-label
- [ ] Form inputs have labels/aria-label
- [x] External links use rel="noopener noreferrer"
- [ ] Dropdowns have aria-expanded
- [ ] Skip link for keyboard users
