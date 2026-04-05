# Footer Minimal Kit

Clean single-line footer with logo, copyright, and social icons. Unobtrusive and modern — perfect for minimal or portfolio-style sites.

## Files
| File | Purpose |
|------|---------|
| `footer-minimal.css` | Flexbox single-row layout, responsive stacking |
| `footer-minimal.php` | WordPress template partial with theme mods |

## Integration

1. Copy CSS into your theme's `style.css`
2. Copy `footer-minimal.php` into your theme root
3. Include in `footer.php`:
```php
<?php get_template_part( 'footer-minimal' ); ?>
```

## Customization
- **Colors**: Uses CSS custom properties — colors come from the palette
- **Social links**: Replace `href="#"` with real social URLs
- **Brand text**: Pulled from `business_name` theme mod or site name

## Responsive Behavior
- **768px** — stacks vertically, centered
