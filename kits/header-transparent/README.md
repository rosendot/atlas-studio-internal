# Header Transparent Kit

Transparent overlay header that sits on top of the hero section. Transitions to a solid background with shadow on scroll.

## Files
| File | Purpose |
|------|---------|
| `header-transparent.css` | Fixed positioning, transparent → solid transition, responsive |
| `header-transparent.js` | Scroll detection for background transition, hamburger toggle |
| `header-transparent.php` | WordPress template partial with wp_nav_menu |

## Integration

1. Copy CSS into your theme's `style.css`
2. Enqueue JS in `functions.php`
3. Register a `primary` menu location
4. Include in `header.php`:
```php
<?php get_template_part( 'header-transparent' ); ?>
```

## Notes
- Best paired with a hero section that has a background image or dark background
- The header uses `position: fixed` so add `padding-top: 72px` to the body or first section if needed
- CTA button uses outline style when transparent, transitions to solid on scroll
