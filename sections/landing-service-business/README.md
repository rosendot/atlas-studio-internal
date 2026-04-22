# Landing — Service Business

A full landing page for service businesses (contractors, cleaners, consultants, agencies). Composes 9 existing kits into a proven conversion flow — hero → social proof → services → process → testimonials → FAQ → closing CTA, bookended by a header and footer.

## Composition

| Step | Kit | Purpose |
|------|-----|---------|
| 1 | `header-classic` | Sticky top nav with logo + links + CTA |
| 2 | `hero-split` | 50/50 hero — eyebrow, headline, body, two CTAs, visual |
| 3 | `logo-wall` | "Trusted by" client logos strip |
| 4 | `service-cards` | 3 service offerings with price + learn-more link |
| 5 | `process-steps` | Numbered "How it works" (kickoff → care) |
| 6 | `testimonial-cards` | 3 quote cards with photo + role + stars |
| 7 | `faq-accordion` | Top 4–6 questions expanded inline |
| 8 | `cta-banner` | Final-call conversion closer |
| 9 | `footer-classic` | Multi-column footer |

Every kit is referenced — never duplicated. `section.php` pulls each kit in with `get_template_part()`, `section.css` handles only page-level spacing and alternating-band rhythm, and `preview.html` links directly to each kit's CSS via relative paths.

## Default palette
`ember-hearth` — warm reds, gold accents, serif headings. Swap to any of the 31 vault palettes in the dashboard (only the `:root` CSS custom properties change; kit CSS stays put).

## Variables

Content-only. Colors and fonts come from the active palette.

| Variable | Default |
|----------|---------|
| `businessName` | Atlas Studio |
| `heroEyebrow` | Websites for service businesses |
| `heroTitle` | You run the business. We hold up your site. |
| `heroBody` | (long pitch line) |
| `heroPrimaryLabel` / `heroSecondaryLabel` | Start a project / See our work |
| `logoWallTitle` | Trusted by small businesses across the region |
| `servicesTitle` / `servicesSubtitle` | What we do / Pick a service… |
| `processTitle` / `processSubtitle` | How it works / From kickoff to live site… |
| `testimonialsTitle` | What our clients say |
| `faqTitle` | Common questions |
| `ctaTitle` / `ctaSubtitle` | Ready to ship faster? / (supporting line) |
| `ctaPrimaryLabel` / `ctaSecondaryLabel` | Start a project / Book a call |

## Integration

1. Ensure all 9 kits listed above exist in your theme's `kits/` directory (copy the folders or add as a git submodule)
2. Enqueue each kit's CSS in your theme's `functions.php`:
   ```php
   foreach ( array(
       'header-classic', 'hero-split', 'logo-wall', 'service-cards',
       'process-steps', 'testimonial-cards', 'faq-accordion',
       'cta-banner', 'footer-classic',
   ) as $kit ) {
       wp_enqueue_style( $kit, get_template_directory_uri() . "/kits/{$kit}/{$kit}.css" );
   }
   wp_enqueue_style( 'landing-service-business', get_template_directory_uri() . '/sections/landing-service-business/section.css' );
   ```
3. Enqueue any kit JS (e.g., `faq-accordion.js` if interactive — check each kit's README)
4. Use the section as your front-page template:
   ```php
   // In your theme's front-page.php:
   <?php get_template_part( 'sections/landing-service-business/section' ); ?>
   ```
5. Set the content values in the Customizer under `lsb_*` keys, or override via `set_theme_mod()` before the template part call

## Rules observed
- **No kit code copied** — every visual block is pulled from the kit folder
- **No colors hardcoded** — all palette-driven via CSS custom properties
- **Content ≠ style** — variables carry content only; palette carries style
- **Flat flow** — each kit sits in its own wrapper `<div>` so page-level layout CSS can target rhythm without touching kit internals
