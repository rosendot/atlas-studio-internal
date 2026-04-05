# Header Classic Kit

Standard site header with logo left, navigation right, CTA button, and mobile hamburger toggle. Sticky on scroll with shadow.

## Files
| File | Purpose |
|------|---------|
| `header-classic.css` | Flexbox layout, sticky positioning, responsive hamburger |
| `header-classic.js` | Scroll shadow toggle, hamburger menu open/close |
| `header-classic.php` | WordPress template partial with wp_nav_menu |

## Integration

1. Copy CSS into your theme's `style.css`
2. Enqueue JS in `functions.php`
3. Register a `primary` menu location
4. Include in `header.php`:
```php
<?php get_template_part( 'header-classic' ); ?>
```

## Responsive Behavior
- **768px** — nav links hide, hamburger appears, nav drops down on toggle
