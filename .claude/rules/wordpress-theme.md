---
globs: "web/app/themes/**/*.php"
---

# WordPress Theme Rules

## Output Escaping
Always escape output in templates:
- `esc_html()` for text content
- `esc_attr()` for HTML attributes
- `esc_url()` for URLs
- `wp_kses_post()` for content that should allow some HTML

## Template Functions
- Use `get_header()` and `get_footer()` — never hardcode HTML structure
- Use `get_template_part()` to break up large templates into reusable partials
- Use `the_title()`, `the_content()`, `the_excerpt()` inside the loop
- Use `get_post_meta()` for custom fields

## Security
- Use `wp_nonce_field()` and `wp_verify_nonce()` for any form handling
- Use `sanitize_text_field()`, `sanitize_textarea_field()` when saving data
- Check `DOING_AUTOSAVE` before saving meta boxes
- Use `current_user_can()` for permission checks

## Enqueueing Assets
- Never hardcode `<link>` or `<script>` tags
- Use `wp_enqueue_style()` and `wp_enqueue_script()` in functions.php
- Hook into `wp_enqueue_scripts` action

## Custom Post Types
- Register in `functions.php` using `register_post_type()`
- Always set `'show_in_rest' => true` for Gutenberg compatibility
- Use `'supports'` array to define which editor features are available
