# Footer Classic Kit

Multi-column footer with logo, contact info, quick links, business hours, and social icons. The most universal footer pattern — works for any business type.

## Files
| File | Purpose |
|------|---------|
| `footer-classic.css` | 4-column grid layout, responsive stacking, bottom bar |
| `footer-classic.php` | WordPress template partial with nav menu and theme mods |

## Integration

1. Copy CSS into your theme's `style.css`
2. Copy `footer-classic.php` into your theme root
3. Register a `footer` menu location in `functions.php`
4. Include in `footer.php`:
```php
<?php get_template_part( 'footer-classic' ); ?>
```

## Customization
- **Columns**: Adjust `grid-template-columns` on `.footer-classic__inner`
- **Colors**: Uses CSS custom properties — colors come from the palette
- **Social links**: Replace `href="#"` with real social URLs
- **Hours**: Edit directly in the PHP or pull from custom fields

## Responsive Behavior
- **1024px** — 2 columns
- **480px** — single column, bottom bar stacks
