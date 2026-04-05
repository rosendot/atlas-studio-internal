# Testimonial Slider Kit

Single-testimonial carousel with large quote, star rating, author info, and auto-rotation with dot navigation. Crossfade transitions.

## Files
| File | Purpose |
|------|---------|
| `testimonial-slider.css` | Viewport, crossfade transitions, dots, responsive |
| `testimonial-slider.js` | Auto-rotation timer, dot click navigation |
| `testimonial-slider.php` | WordPress template partial |

## Integration

1. Copy CSS into your theme's `style.css`
2. Enqueue JS in `functions.php`
3. Replace hardcoded `$testimonials` with WP_Query
4. Include with:
```php
<?php get_template_part( 'testimonial-slider' ); ?>
```

## Customization
- **Interval**: Set `data-interval` attribute (default: 6000ms)
- **Dot click**: Clicking a dot resets the timer and jumps to that slide
