# Hero Video Kit

Full-width hero with a looping muted background video, dark overlay, and centered text with CTA buttons. Falls back to a solid background if the video fails to load.

## Files
| File | Purpose |
|------|---------|
| `hero-video.css` | Video positioning, overlay, text sizing, responsive scaling |
| `hero-video.php` | WordPress template partial with `<video>` element |

## Integration

1. Copy CSS from `hero-video.css` into your theme's `style.css`
2. Copy `hero-video.php` into your theme root
3. In any template, include with:
```php
<?php get_template_part( 'hero-video' ); ?>
```
4. Set the video URL via `hero_video_url` theme mod or hardcode the `src`
5. Add a `poster` image for the fallback before the video loads

## Customization
- **Height**: Change `min-height: 90vh` on `.hero-video`
- **Overlay darkness**: Adjust `rgba(26, 18, 8, 0.65)` in `.hero-video__overlay`
- **Text width**: Modify `max-width` on `.hero-video__content`
- **Video sizing**: The video auto-covers the section via `object-fit: cover`

## Performance Notes
- Use short clips (10-30 seconds) to minimize file size
- Compress to H.264 MP4, target under 5MB
- Always set `muted`, `autoplay`, `loop`, and `playsinline` for auto-play
- Provide a `poster` image for instant visual feedback
