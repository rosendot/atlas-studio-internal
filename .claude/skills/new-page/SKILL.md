# Create New Page Template

Creates a new WordPress page template in the theme.

## Usage
`/new-page <page-name>`

## Steps
1. Create `page-$ARGUMENTS.php` in the active theme directory
2. Add the template with `get_header()` and `get_footer()`
3. Include the Template Name comment at the top if it's a custom template
4. Add basic HTML structure with appropriate CSS classes
5. Add corresponding CSS section in `style.css`

## Template
```php
<?php
/**
 * Template Name: $ARGUMENTS Page
 */
get_header(); ?>

<main class="page-$ARGUMENTS">
    <section class="page-hero">
        <h1><?php the_title(); ?></h1>
    </section>

    <section class="page-content">
        <?php the_content(); ?>
    </section>
</main>

<?php get_footer(); ?>
```
