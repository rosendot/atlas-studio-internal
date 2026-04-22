# Landing — SaaS

Full landing page for a SaaS product. Feature-heavy storytelling flow: hero → social proof → three-pillar value prop → alternating feature deep-dives → stats → testimonial slider → closing CTA, bookended by header and minimal footer.

## Composition

| Step | Kit | Purpose |
|------|-----|---------|
| 1 | `header-classic` | Sticky nav + CTA |
| 2 | `hero-split` | Product headline with 2 CTAs + product screenshot/visual |
| 3 | `logo-wall` | "Trusted by" customer logos |
| 4 | `feature-grid` | Three-pillar value proposition (3 cards) |
| 5 | `feature-alternating` | Zig-zag feature deep-dives (2–3 rows) |
| 6 | `stats-counter` | Big numbers: rollback rate, MTTR, uptime |
| 7 | `testimonial-slider` | Rotating large customer quote |
| 8 | `cta-banner` | Final-call "Start free / Talk to sales" |
| 9 | `footer-minimal` | Single-line copyright + socials |

Every kit is pulled in — no kit code is duplicated in this section. `section.php` uses `get_template_part()`, `section.css` only handles page flow + alternating bands, and `preview.html` links every kit's CSS by relative path.

## Default palette
`modern-navy` — clean navy + coral, sans-serif throughout. Fits product/developer tool brands. Any vault palette can be swapped in via the `:root` CSS custom properties.

## Variables

Content-only. Colors and fonts flow from the palette.

| Variable | Default |
|----------|---------|
| `productName` | Atlas |
| `heroEyebrow` | New · v2.0 just launched |
| `heroTitle` | Ship your next release without breaking the last one |
| `heroBody` | (pitch line) |
| `heroPrimaryLabel` / `heroSecondaryLabel` | Start free / Watch a demo |
| `logoWallTitle` | Trusted by teams shipping at scale |
| `pillarsTitle` / `pillarsSubtitle` | Everything your release pipeline needs / Six capabilities… |
| `featuresTitle` / `featuresSubtitle` | Built for the way shipping actually works / Each capability… |
| `statsTitle` | The numbers teams see after switching |
| `testimonialsTitle` | What our customers are saying |
| `ctaTitle` / `ctaSubtitle` | Start shipping with confidence / Free for teams up to 10… |
| `ctaPrimaryLabel` / `ctaSecondaryLabel` | Start free / Talk to sales |

## Integration

1. Ensure all 9 kits are in your theme's `kits/` directory
2. Enqueue kit CSS and section CSS in `functions.php`:
   ```php
   foreach ( array(
       'header-classic', 'hero-split', 'logo-wall', 'feature-grid',
       'feature-alternating', 'stats-counter', 'testimonial-slider',
       'cta-banner', 'footer-minimal',
   ) as $kit ) {
       wp_enqueue_style( $kit, get_template_directory_uri() . "/kits/{$kit}/{$kit}.css" );
   }
   wp_enqueue_style( 'landing-saas', get_template_directory_uri() . '/sections/landing-saas/section.css' );
   ```
3. Enqueue kit JS for interactive kits (testimonial-slider, stats-counter, header-classic)
4. Use in your front-page template:
   ```php
   <?php get_template_part( 'sections/landing-saas/section' ); ?>
   ```
5. Set content via Customizer under `lsaas_*` keys or override with `set_theme_mod()`

## Rules observed
- **No kit code copied** — every block pulled from a kit folder
- **No colors hardcoded** — palette-driven via CSS custom properties
- **Dark band pattern** — `.landing-saas__band--dark` inverts foreground/background around the stats kit without touching the kit's internal CSS
