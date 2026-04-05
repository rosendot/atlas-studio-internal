# Hero Slideshow Kit

Full-width hero with auto-rotating background images, crossfade transitions, and slide indicators. Centered text with CTA buttons.

## Files
| File | Purpose |
|------|---------|
| `hero-slideshow.css` | Slide positioning, crossfade transitions, indicators, responsive scaling |
| `hero-slideshow.js` | Auto-rotation timer, dot navigation, crossfade logic |
| `hero-slideshow.php` | WordPress template partial with dynamic slide images |

## Integration

1. Copy CSS from `hero-slideshow.css` into your theme's `style.css`
2. Copy `hero-slideshow.php` into your theme root
3. Enqueue `hero-slideshow.js` in your `functions.php`:
```php
wp_enqueue_script( 'hero-slideshow', get_template_directory_uri() . '/js/hero-slideshow.js', array(), '1.0', true );
```
4. Set slide images via theme mods, ACF repeater, or hardcode in the PHP

## Customization
- **Height**: Change `min-height: 90vh` on `.hero-slideshow`
- **Overlay darkness**: Adjust `rgba` in `.hero-slideshow__overlay`
- **Transition speed**: Modify `transition: opacity 1.2s` on `.hero-slideshow__slide`
- **Rotation interval**: Set `data-interval` attribute (default: 5000ms)
- **Slide count**: Add/remove `.hero-slideshow__slide` divs and matching dots

## Performance Notes
- Optimize background images to ~200KB each
- Use `loading="lazy"` on images if using `<img>` tags instead of `background-image`
- 3-5 slides is the sweet spot — more than that and users won't see them all
