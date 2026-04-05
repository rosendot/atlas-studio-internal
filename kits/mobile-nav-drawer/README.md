# Mobile Nav Drawer Kit

Off-canvas slide-in navigation drawer for mobile. Triggered by any button with `data-drawer-open`. Includes backdrop overlay, close button, nav links, CTA, and social icons.

## Files
| File | Purpose |
|------|---------|
| `mobile-nav-drawer.css` | Drawer positioning, slide animation, backdrop overlay |
| `mobile-nav-drawer.js` | Open/close logic, backdrop click, Escape key |
| `mobile-nav-drawer.php` | WordPress template partial with wp_nav_menu |

## Integration

1. Copy CSS into your theme's `style.css`
2. Enqueue JS in `functions.php`
3. Add `data-drawer-open` to your hamburger button
4. Include at the end of `footer.php`:
```php
<?php get_template_part( 'mobile-nav-drawer' ); ?>
```

## Variants
- `mobile-nav-drawer--right` (default) — slides from right
- `mobile-nav-drawer--left` — slides from left

## Keyboard Support
- **Escape** — closes the drawer
