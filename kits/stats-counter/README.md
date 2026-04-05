# Stats Counter Kit

Row of animated counters showing key business metrics. Numbers count up with easing when the section scrolls into view.

## Files
| File | Purpose |
|------|---------|
| `stats-counter.css` | Grid layout, number sizing, responsive stacking |
| `stats-counter.js` | IntersectionObserver trigger, count-up animation with easing |
| `stats-counter.php` | WordPress template partial with configurable stats array |

## Integration

1. Copy CSS into your theme's `style.css`
2. Enqueue JS in `functions.php`
3. Edit the `$stats` array in the PHP with your numbers
4. Include with:
```php
<?php get_template_part( 'stats-counter' ); ?>
```

## Data Attributes
- `data-target` — the number to count up to
- `data-suffix` — character appended after the number (+, %, etc.)

## Notes
- Animation triggers once when section enters viewport (IntersectionObserver)
- Uses ease-out quadratic easing for natural feel
- 2-second animation duration
