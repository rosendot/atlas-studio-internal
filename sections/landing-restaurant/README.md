# Landing — Restaurant

Full landing page for a restaurant. Mood-setting hero video → fan-favorites carousel → menu teaser → atmosphere gallery → guest reviews → map/hours/contact → final reservation CTA. Bookended by a transparent header (sits on the hero video) and a mega footer.

## Composition

| Step | Kit | Purpose |
|------|-----|---------|
| 1 | `header-transparent` | Logo + nav + reserve CTA, overlays the hero video |
| 2 | `hero-video` | Looping background video with eyebrow, title, and dual CTAs |
| 3 | `infinite-carousel` | "Fan favorites" dish carousel |
| 4 | `menu-list` | Menu teaser with 3–5 signature items + prices |
| 5 | `grid-gallery` | Atmosphere / interior photo grid (shown on dark band) |
| 6 | `testimonial-cards` | Guest reviews with stars |
| 7 | `google-map-embed` | Map + address + phone + hours |
| 8 | `cta-banner` | Final "Reserve now" closer |
| 9 | `footer-mega` | Full multi-column footer with contact + hours + socials |

Every kit is pulled in — no kit code is duplicated. `section.php` uses `get_template_part()`, `section.css` only handles page flow and the cream/dark band rhythm, and `preview.html` links every kit's CSS by relative path.

## Default palette
`ember-hearth` — warm reds, gold accents, serif headings. The warmest palette in the vault and the obvious fit for a family-run restaurant. Swap to any vault palette via the `:root` CSS custom properties.

## Variables

Content-only — colors/fonts flow from the palette.

| Variable | Default |
|----------|---------|
| `restaurantName` | Trattoria del Fuoco |
| `heroEyebrow` | Wood-fired, family-run, since 1998 |
| `heroTitle` | A taste of old-world Italy, right in your neighborhood |
| `heroBody` | (mood + pitch line) |
| `heroPrimaryLabel` / `heroSecondaryLabel` | Reserve a table / View the menu |
| `favoritesTitle` / `favoritesSubtitle` | Fan favorites / The dishes our regulars order… |
| `menuTitle` / `menuSubtitle` | A few highlights from the menu / Seasonal, locally-sourced… |
| `galleryTitle` / `gallerySubtitle` | Inside the restaurant / Warm light, open kitchen… |
| `testimonialsTitle` | What our guests say |
| `visitTitle` / `visitSubtitle` | Come visit / Walk-ins welcome… |
| `visitAddress` / `visitPhone` / `visitEmail` / `visitHours` | (contact details) |
| `ctaTitle` / `ctaSubtitle` | Save your table tonight / Book online in under a minute… |
| `ctaPrimaryLabel` / `ctaSecondaryLabel` | Reserve now / Call (201) 555-0142 |

## Integration

1. Ensure all 9 kits are in your theme's `kits/` directory
2. Enqueue kit CSS + section CSS in `functions.php`:
   ```php
   foreach ( array(
       'header-transparent', 'hero-video', 'infinite-carousel', 'menu-list',
       'grid-gallery', 'testimonial-cards', 'google-map-embed',
       'cta-banner', 'footer-mega',
   ) as $kit ) {
       wp_enqueue_style( $kit, get_template_directory_uri() . "/kits/{$kit}/{$kit}.css" );
   }
   wp_enqueue_style( 'landing-restaurant', get_template_directory_uri() . '/sections/landing-restaurant/section.css' );
   ```
3. Enqueue kit JS for interactive kits: `hero-video.js` (autoplay), `infinite-carousel.js` (loop + arrows), `header-transparent.js` (scroll detection)
4. Use in the front-page template:
   ```php
   <?php get_template_part( 'sections/landing-restaurant/section' ); ?>
   ```
5. Set content via Customizer under `lrest_*` keys or `set_theme_mod()`

## vs restaurant-classic template

`templates/restaurant-classic/` is a full multi-page WordPress theme (home + menu + about pages, custom post types, full enqueue + routing). Use it when you're spinning up an entire restaurant site from scratch.

`sections/landing-restaurant/` is just the front page composition. Use it when you already have a theme and you need a polished home view that pulls existing kits together without the full template scaffolding.

## Rules observed
- **No kit code copied** — every block pulled from a kit folder
- **No colors hardcoded** — palette-driven via CSS custom properties
- **Dark band around gallery** — `.landing-restaurant__band--dark` flips fg/bg around the photo grid without touching the gallery kit's internal CSS
- **Transparent header over video** — achieved by kit choice (`header-transparent`) plus stacking order in section.php, no CSS overrides needed
