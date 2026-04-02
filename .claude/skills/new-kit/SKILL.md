# Create New Kit

Scaffolds a complete kit folder with all required files and a dashboard preview component, then validates with `/audit-kit`.

## Usage
`/new-kit <kit-name>`

## Steps

1. Create directory `kits/$ARGUMENTS/`
2. Ask the user for:
   - Description (one sentence)
   - Category: one of `section`, `interactive`, `navigation`, `data`
   - Tags (searchable keywords)
   - Variables (content/behavior only — NOT colors, fonts, or sizes)
3. Create the following files:

### kit.json
```json
{
  "name": "<Kit Name>",
  "slug": "$ARGUMENTS",
  "description": "<description>",
  "category": "<category>",
  "tags": [],
  "files": {
    "css": ["$ARGUMENTS.css"],
    "js": ["$ARGUMENTS.js"],
    "php": ["$ARGUMENTS.php"]
  },
  "variables": {},
  "variants": {},
  "dependencies": []
}
```
Only include file types that are actually needed (e.g., omit `js` if the kit is CSS-only).
Variables should be content/behavior only (titles, column counts, etc.) — NOT colors, fonts, or sizes.

### preview.html
Self-contained HTML file that demonstrates the kit. Must:
- Reference the kit's own CSS/JS via relative paths
- Include enough placeholder content to show the kit working
- Be viewable standalone in a browser

### README.md
Integration instructions including:
- What the kit does
- Required HTML structure
- How to enqueue in WordPress (wp_enqueue_style/wp_enqueue_script)
- Available variables and how to override them

### Source files
- `$ARGUMENTS.css` — kit styles using CSS custom properties for colors/fonts
- `$ARGUMENTS.js` — kit JavaScript (if interactive)
- `$ARGUMENTS.php` — WordPress template partial

### TSX Preview Component
Create `app/components/kit-previews/<PascalName>.tsx`:
- React component that renders the kit for the dashboard
- Must follow the **standard kit preview pattern**:
  - Root div: `padding: "var(--space-16) var(--space-6)"` — no background, no fontFamily, no color
  - Standard section header: centered h2 (`var(--font-heading)`, `var(--text-4xl)`, weight 700, `var(--color-dark)`, `var(--leading-snug)`) + subtitle (`var(--text-xl)`, `var(--color-text-light)`)
  - Kit content in a max-width container below the header
- Use `var(--token)` for ALL visual values — import nothing from `shared.ts`, just use the CSS variable names directly
- Props should be content/behavior only — NO color, font, or size props
- Register the component in `KIT_PREVIEWS` in `app/components/KitDetail.tsx`

## Post-creation: Run /audit-kit

After all files are created, run `/audit-kit $ARGUMENTS` to validate the new kit.

If the audit finds errors, fix them immediately before telling the user the kit is ready.

## Rules
- Every kit MUST have `kit.json`, `preview.html`, `README.md`, and a TSX preview component
- Kit must be self-contained — all files for one feature in one folder
- ALL visual values in the TSX preview must use `var(--token)` design tokens
- Kit preview variables are content/behavior only — colors/fonts/sizes come from the design token system
- Follow the standard header pattern — every kit looks the same structurally
- Never duplicate code from other kits — use `dependencies` to reference them
- Do NOT consider the kit complete until `/audit-kit` passes with no errors
