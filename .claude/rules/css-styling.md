---
globs: "web/app/themes/**/*.css"
---

# CSS Styling Rules

## Approach
- Mobile-first responsive design
- Use CSS Grid and Flexbox for layout
- Use CSS custom properties (variables) for colors, fonts, spacing

## Naming
- Use BEM-style class names: `.block__element--modifier`
- Keep selectors shallow (max 2-3 levels deep)
- Avoid styling by tag name alone — use classes

## Responsive
- Breakpoints: 768px (tablet), 1024px (desktop), 1200px (wide)
- Use `min-width` media queries (mobile-first)
- Test at 320px, 768px, 1024px, 1440px

## Performance
- Avoid `@import` in CSS — use `wp_enqueue_style` dependencies instead
- Keep specificity low
- Minimize use of `!important`
