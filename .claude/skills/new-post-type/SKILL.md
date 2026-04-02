# Create New Custom Post Type

Registers a new custom post type with meta boxes and a front-end template.

## Usage
`/new-post-type <post-type-name>`

## Steps
1. Add `register_post_type('$ARGUMENTS', ...)` to `functions.php`
2. Add meta box registration with `add_meta_box()`
3. Add save handler with nonce verification and sanitization
4. Create `single-$ARGUMENTS.php` template for individual items
5. Optionally create `archive-$ARGUMENTS.php` for listing pages
6. Add basic CSS for the new post type templates
