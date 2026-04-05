# Logo Wall Kit

Grid of client or partner logos. Grayscale by default with color on hover. Builds trust and credibility.

## Files
| File | Purpose |
|------|---------|
| `logo-wall.css` | Grid layout, grayscale filter, hover transition |
| `logo-wall.php` | WordPress template partial |

## Integration

1. Copy CSS into your theme's `style.css`
2. Copy `logo-wall.php` into your theme root
3. Replace the `$logos` array with ACF gallery field IDs or a custom query
4. Include with:
```php
<?php get_template_part( 'logo-wall' ); ?>
```

## Notes
- Logos should be transparent PNGs for best results
- The grayscale → color hover works via CSS `filter: grayscale()`
- Max logo height is 48px to keep them uniform
