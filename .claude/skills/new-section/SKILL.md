# Create New Section

Scaffolds a section folder with all required files — a pre-built page section focused on layout structure.

## Usage
`/new-section <section-name>`

## Steps

1. Create directory `sections/$ARGUMENTS/`
2. Ask the user for:
   - Description (one sentence about the layout)
   - Category (menu, hero, faq, gallery, contact, nav, etc.)
   - Layout style (list, grid, cards, split, stacked, etc.)
   - Which kits to use (if any)
   - Content variables (NOT colors — those come from palettes)
   - Default palette (browse available from `palettes/`)
3. Create the following files:

### section.json
```json
{
  "name": "<Section Name>",
  "slug": "$ARGUMENTS",
  "description": "<description>",
  "category": "<category>",
  "tags": [],
  "layout": "<layout>",
  "default_palette": "<palette-slug>",
  "kits_used": [],
  "files": {
    "php": ["section.php"],
    "css": ["section.css"]
  },
  "variables": {}
}
```
Variables should be content/layout only (titles, subtitles, column counts). Never put color variables here.

### section.php
WordPress template partial with:
- Proper escaping (esc_html, esc_attr, esc_url)
- WordPress coding standards (tabs, snake_case)
- CSS classes using BEM naming

### section.css
Styles using CSS custom properties for all colors and fonts:
- `var(--color-primary)`, `var(--color-secondary)`, `var(--color-dark)`, etc.
- `var(--font-heading)`, `var(--font-body)`
- Never hardcode color values — palettes provide them
- Responsive breakpoints at 768px and 480px

### preview.html
Self-contained HTML preview with:
- Inline `:root` CSS setting palette defaults
- Link to section.css
- Placeholder content demonstrating the layout

### README.md
Integration guide with structure, enqueue, variables, customization.

## Rules
- Colors and fonts MUST come from CSS custom properties — never hardcode them
- Content variables only in section.json — no color variables
- Every section must reference a default_palette
- Every section must have section.json, section.php, section.css, preview.html, README.md
