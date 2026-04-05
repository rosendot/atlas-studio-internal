# Hero Split Kit

50/50 split hero with text on one side and an image on the other. Supports flipping content to the left or right.

## Files
| File | Purpose |
|------|---------|
| `hero-split.css` | Grid layout, responsive stacking, text sizing |
| `hero-split.php` | WordPress template partial (use with `get_template_part`) |

## Integration

1. Copy CSS from `hero-split.css` into your theme's `style.css`
2. Copy `hero-split.php` into your theme root
3. In any template, include with:
```php
<?php get_template_part( 'hero-split' ); ?>
```
4. Set a background image on `.hero-split__image` inline or via a custom field

## Variants

- **Content Left** (default): Text left, image right
- **Content Right**: Add class `hero-split--right` to the `<section>` to flip

## Customization
- **Height**: Change `min-height: 80vh` on `.hero-split`
- **Content padding**: Adjust padding on `.hero-split__content`
- **Text width**: Modify `max-width` on `.hero-split__text`
- **Button styles**: Swap `.btn--primary` / `.btn--outline` classes
