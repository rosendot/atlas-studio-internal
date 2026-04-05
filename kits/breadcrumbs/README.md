# Breadcrumbs Kit

Hierarchical navigation trail showing the user's location in the site structure. Includes schema.org BreadcrumbList markup for SEO.

## Files
| File | Purpose |
|------|---------|
| `breadcrumbs.css` | Flexbox trail layout, separator styling, responsive |
| `breadcrumbs.php` | WordPress template partial with automatic hierarchy detection |

## Integration

1. Copy CSS into your theme's `style.css`
2. Copy `breadcrumbs.php` into your theme root
3. Include below the header, above the page title:
```php
<?php get_template_part( 'breadcrumbs' ); ?>
```

## Automatic Hierarchy
The PHP partial auto-detects:
- Page parent hierarchy (for nested pages)
- Post categories (for blog posts)
- Custom post type archives
- Search results and 404 pages
- Skips breadcrumbs on the homepage

## Customization
- **Separator**: Set via `breadcrumb_separator` theme mod (default: `›`)
- **Schema markup**: Built-in schema.org BreadcrumbList for Google rich results

## SEO Notes
- Works alongside Rank Math's breadcrumb schema — you can use either
- Google displays breadcrumbs in search results instead of raw URLs
- Each item includes `itemListElement` with position metadata
