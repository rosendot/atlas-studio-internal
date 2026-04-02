# Create New Theme

Scaffolds a complete theme folder with all required files matching the vault's theme structure. Validates referenced kits and runs the theme-reviewer agent on the result.

## Usage
`/new-theme <theme-name>`

## Steps

### Phase 1: Gather requirements
1. Create directory `themes/$ARGUMENTS/`
2. Ask the user for:
   - Description (one sentence)
   - Category (e.g., restaurant, salon, service, retail)
   - Style (e.g., warm, modern, minimal, bold)
   - Layout (e.g., hero-first, grid-first)
   - Pages to include (e.g., home, menu, about, contact, services)
   - Which kits to use from `kits/` (browse available kits if needed)
   - Variables (business name, colors, contact info, etc.)

### Phase 2: Validate kits before building
3. For each kit the user wants to use:
   - Verify the kit exists in `kits/`
   - Run `/audit-kit <kit-slug>` on each referenced kit
   - If any kit has errors, warn the user before proceeding — the theme will inherit those problems
   - Verify the specific CSS/JS files that will go into `kit_files` actually exist

### Phase 3: Scaffold the theme
4. Create the following files:

#### theme.json
```json
{
  "name": "<Theme Name>",
  "slug": "$ARGUMENTS",
  "description": "<description>",
  "category": "<category>",
  "tags": [],
  "style": "<style>",
  "layout": "<layout>",
  "version": "1.0.0",
  "preview": "screenshot.png",
  "pages": [],
  "kits_used": [],
  "plugins_required": {},
  "files": {
    "php": [],
    "css": ["style.css"],
    "js": []
  },
  "kit_files": {
    "css": [],
    "js": []
  },
  "variables": {}
}
```

#### Required PHP files
- `index.php` — fallback template
- `header.php` — site header with nav
- `footer.php` — site footer
- `functions.php` — enqueue styles/scripts, register menus, theme support
- `front-page.php` — homepage template
- One `page-<name>.php` for each additional page

#### style.css
Main theme stylesheet using CSS custom properties for all variable values (colors, fonts, spacing).

#### preview.html
Self-contained HTML preview of the full theme. Must:
- Show the complete homepage layout with placeholder content
- Reference theme CSS and kit CSS/JS via API routes
- Be viewable standalone in a browser

#### README.md
Setup instructions including:
- Theme overview and what it's designed for
- Which kits are used and why
- How to customize variables
- WordPress setup steps (menus, pages, widgets)

### Phase 4: Validate the theme
5. Verify:
   - `theme.json` `files` array matches actual files on disk
   - `theme.json` `kits_used` only references kits that exist in `kits/`
   - `theme.json` `kit_files` paths point to real kit files
   - `preview.html` exists and renders correctly
   - All PHP templates use `get_header()` and `get_footer()`

6. Run the **theme-reviewer agent** on the new theme to check code quality and security. Fix any Critical issues it finds before telling the user the theme is ready.

### Phase 5: Recommend next steps
7. Tell the user:
   > Theme scaffolded and reviewed. When you're ready to customize it for a client, run:
   > - **Theme Preflight agent** → `/client-preflight` to replace placeholder content
   > - **SEO Analyzer agent** → `/seo-improve` for SEO fixes
   > - **Accessibility Analyzer agent** → `/a11y-improve` for a11y fixes
   > - **Performance Analyzer agent** → `/perf-improve` for performance fixes

## Rules
- Themes reference kits via `kits_used` — NEVER duplicate kit code into the theme folder
- All customizable values must be in `theme.json` `variables` with label, type, and default
- PHP follows WordPress coding standards (tabs, snake_case)
- All output must be escaped (esc_html, esc_attr, esc_url)
- Do NOT consider the theme complete until the theme-reviewer agent finds no Critical issues
- If a referenced kit fails `/audit-kit`, warn the user and let them decide whether to proceed
