# FAQ Accordion

Expandable Q&A accordion with smooth animations. Supports one-at-a-time (default) or multi-open mode. Fully accessible with keyboard navigation and ARIA attributes.

## HTML Structure

```html
<div class="faq-accordion">
    <div class="faq-accordion__item">
        <button class="faq-accordion__question" aria-expanded="false" aria-controls="faq-0">
            Your question here
            <span class="faq-accordion__icon" aria-hidden="true"></span>
        </button>
        <div class="faq-accordion__answer" id="faq-0" role="region">
            <div class="faq-accordion__answer-inner">
                Your answer here.
            </div>
        </div>
    </div>
    <!-- Repeat for each Q&A -->
</div>
```

## Variants

- **Default** — One item open at a time. Opening a new item closes the previous.
- **Multi-open** — Add `faq-accordion--multi` class to allow multiple items open simultaneously.

```html
<div class="faq-accordion faq-accordion--multi">
    ...
</div>
```

## WordPress Integration

### Enqueue in functions.php

```php
wp_enqueue_style( 'faq-accordion', get_template_directory_uri() . '/assets/css/faq-accordion.css', [], '1.0.0' );
wp_enqueue_script( 'faq-accordion', get_template_directory_uri() . '/assets/js/faq-accordion.js', [], '1.0.0', true );
```

### Use in a template

```php
<?php get_template_part( 'faq-accordion' ); ?>
```

Or build the FAQ items dynamically from a custom field or CPT.

## Customizable Variables

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `borderColor` | color | `#e0d6c8` | Border between items |
| `iconColor` | color | `#b42318` | Plus/minus icon color |
| `questionColor` | color | `#1a1208` | Question text color |
| `answerColor` | color | `#6b5e4f` | Answer text color |
| `transitionSpeed` | string | `0.3s` | Animation speed |

Override in CSS:
```css
.faq-accordion__item { border-color: #your-color; }
.faq-accordion__icon { color: #your-color; }
.faq-accordion__question { color: #your-color; }
.faq-accordion__answer-inner { color: #your-color; }
```

## Accessibility

- Uses `<button>` for questions (keyboard focusable)
- `aria-expanded` toggles on open/close
- `aria-controls` links questions to answers
- `role="region"` on answer panels
- Focus-visible outline for keyboard users
