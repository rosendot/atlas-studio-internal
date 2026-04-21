# Performance Audit

Run before every site launch and periodically on live sites.

## Tools

**Google Lighthouse** (built into Chrome DevTools)
- Open the site, open DevTools, go to the Lighthouse tab
- Run for both Mobile and Desktop
- Target scores: Performance 90+, Accessibility 90+, Best Practices 90+, SEO 90+
- This is the industry standard — the same engine used by Google PageSpeed Insights

**SpeedVitals** (~$10/mo — buy when you have 5+ clients)
- Tracks Core Web Vitals over time across all client sites
- Useful for catching regressions after plugin updates
- Dashboard view across all sites in one place

## Core Web Vitals targets

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | Under 2.5s |
| FID / INP (Interaction to Next Paint) | Under 200ms |
| CLS (Cumulative Layout Shift) | Under 0.1 |

## Common issues to fix before launch

- [ ] Images are WebP format and properly sized (no uploading 4MB photos)
- [ ] Images have width and height attributes set (prevents CLS)
- [ ] No render-blocking scripts in the head
- [ ] Cloudways caching stack is enabled (Varnish + Redis + Breeze)
- [ ] Google Fonts loaded via `font-display: swap`
- [ ] No unnecessary plugins installed

## Deploy checklist integration

Performance audit is required at Stage 5 of the deploy checklist. Do not go live with a Lighthouse Performance score below 80 on mobile.
