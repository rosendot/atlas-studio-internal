# Footer Mega Kit

Large multi-section footer with about blurb, services list, quick links, newsletter signup, contact row with icons, and bottom bar. Reduces bounce by giving visitors multiple pathways.

## Files
| File | Purpose |
|------|---------|
| `footer-mega.css` | Multi-row grid layout, newsletter form, contact row, responsive |
| `footer-mega.php` | WordPress template partial with nav menu, theme mods, newsletter form |

## Integration

1. Copy CSS into your theme's `style.css`
2. Copy `footer-mega.php` into your theme root
3. Register a `footer` menu location in `functions.php`
4. Include in `footer.php`:
```php
<?php get_template_part( 'footer-mega' ); ?>
```
5. Connect the newsletter form to your email service (Mailchimp, ConvertKit, etc.)

## Customization
- **Columns**: Adjust `grid-template-columns` on `.footer-mega__top`
- **Newsletter button color**: Uses palette primary via CSS custom properties
- **Services list**: Edit directly in PHP or pull from a custom menu
- **Contact icons**: Uses Unicode characters — swap for SVG icons if preferred

## Responsive Behavior
- **1024px** — 2 columns, contact row wraps
- **480px** — single column, everything stacks
