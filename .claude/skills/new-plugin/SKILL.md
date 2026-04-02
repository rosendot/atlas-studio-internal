# Register New Plugin

Creates a plugin.json entry in the correct plugin registry subdirectory.

## Usage
`/new-plugin <plugin-name>`

## Steps

1. Ask the user for:
   - Plugin name and slug
   - Composer package name (e.g., `wpackagist-plugin/plugin-slug`)
   - Category: one of `seo`, `security`, `backup`, `ecommerce`, `forms`, `social`, `analytics`, `pos`, `appointments`, `compliance`, `email`, `monitoring`
   - Tier: `free` or `premium`
   - License type: `free`, `per-site`, or `agency`
   - Cost (e.g., `$99/yr`, `free`)
   - If agency license: how many sites it covers and cost per site
   - Install on: `every-site`, `restaurant`, `service`, `ecommerce`, or specific conditions
   - Description (what it does in one sentence)
   - Tags (searchable keywords)
   - What it replaces (if any)
   - Buy when: `day-1` (buy before first client) or `later` (buy when enough clients)
   - Config notes (setup steps after activation)

2. Determine the correct subdirectory:
   - `plugins/core/` — installed on every client site
   - `plugins/restaurant/` — restaurant-specific (POS, ordering, menus)
   - `plugins/service/` — service business (appointments, booking)

3. Create `plugins/<subdirectory>/$ARGUMENTS.json`:
```json
{
  "name": "<Plugin Name>",
  "slug": "$ARGUMENTS",
  "composer": "<composer-package>",
  "tier": "<free|premium>",
  "license": "<free|per-site|agency>",
  "cost": "<cost>",
  "covers": "<N sites>",
  "cost_per_site": "<cost/site>",
  "category": "<category>",
  "install_on": [],
  "buy_when": "<day-1|later>",
  "description": "<description>",
  "tags": [],
  "replaces": [],
  "requires": [],
  "config_notes": "<setup instructions>"
}
```
Omit `covers` and `cost_per_site` for free or per-site licensed plugins.

## Rules
- One JSON file per plugin — never combine multiple plugins into one file
- Composer name must be valid (check wpackagist or the plugin's docs)
- If the plugin replaces another, list the replaced plugin's slug in `replaces`
