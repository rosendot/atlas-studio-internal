# Create New Kit

Scaffolds a complete kit folder with all required files matching the vault's kit structure, then validates it with `/audit-kit`.

## Usage
`/new-kit <kit-name>`

## Steps

1. Create directory `kits/$ARGUMENTS/`
2. Ask the user for:
   - Description (one sentence)
   - Category: one of `section`, `interactive`, `navigation`, `data`
   - Tags (searchable keywords)
   - Variables (customizable values with label, type, default)
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

### preview.html
Self-contained HTML file that demonstrates the kit. Must:
- Reference the kit's own CSS/JS via relative paths (`$ARGUMENTS.css`, `$ARGUMENTS.js`)
- Include enough placeholder content to show the kit working
- Be viewable standalone in a browser
- Use the API routes for assets: `/api/kit-file?kit=$ARGUMENTS&file=<filename>`

### README.md
Integration instructions including:
- What the kit does
- Required HTML structure
- How to enqueue in WordPress (wp_enqueue_style/wp_enqueue_script)
- Available variables and how to override them
- Any PHP hooks or filters

### Source files
- `$ARGUMENTS.css` — kit styles using CSS custom properties for variables
- `$ARGUMENTS.js` — kit JavaScript (if interactive)
- `$ARGUMENTS.php` — WordPress integration (enqueue, shortcode, or template part)

## Post-creation: Run /audit-kit

After all files are created, run `/audit-kit $ARGUMENTS` to validate the new kit. This catches:
- Missing or mismatched files in `kit.json`
- Missing required fields
- Variables without defaults
- Broken preview references

If the audit finds errors, fix them immediately before telling the user the kit is ready.

## Rules
- Every kit MUST have `kit.json`, `preview.html`, and `README.md`
- Kit must be self-contained — all files for one feature in one folder
- Use CSS custom properties for any customizable values
- Never duplicate code from other kits — use `dependencies` to reference them
- Do NOT consider the kit complete until `/audit-kit` passes with no errors
