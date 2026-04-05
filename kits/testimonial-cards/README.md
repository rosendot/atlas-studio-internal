# Testimonial Cards Kit

Grid of client testimonial cards with photo/avatar, name, role, star rating, and quote text. Builds trust and social proof.

## Files
| File | Purpose |
|------|---------|
| `testimonial-cards.css` | Card grid layout, avatar, stars, responsive stacking |
| `testimonial-cards.php` | WordPress template partial with hardcoded or CPT data |

## Integration

1. Copy CSS into your theme's `style.css`
2. Copy `testimonial-cards.php` into your theme root
3. Replace the hardcoded `$testimonials` array with a WP_Query for your testimonials CPT
4. Include with:
```php
<?php get_template_part( 'testimonial-cards' ); ?>
```

## Responsive Behavior
- **1024px** — 2 columns
- **480px** — single column
