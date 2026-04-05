# Footer CTA Kit

Call-to-action banner above a standard multi-column footer. Bold headline with button drives conversions on every page.

## Files
| File | Purpose |
|------|---------|
| `footer-cta.css` | CTA banner, footer grid, responsive stacking |
| `footer-cta.php` | WordPress template partial with theme mods for CTA content |

## Integration

1. Copy CSS into your theme's `style.css`
2. Copy `footer-cta.php` into your theme root
3. Register a `footer` menu location in `functions.php`
4. Include in `footer.php`:
```php
<?php get_template_part( 'footer-cta' ); ?>
```
5. Set CTA content via theme mods: `footer_cta_heading`, `footer_cta_text`, `footer_cta_btn`, `footer_cta_url`

## Customization
- **CTA colors**: Banner uses palette primary as background, white text, inverted button
- **CTA content**: Heading, body text, and button label are all customizable via theme mods
- **Footer columns**: Same structure as footer-classic below the CTA band
- **Button URL**: Set via `footer_cta_url` theme mod

## Responsive Behavior
- **1024px** — footer columns become 2-column
- **768px** — CTA heading shrinks
- **480px** — everything stacks single column
