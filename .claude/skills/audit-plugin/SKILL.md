# Audit Plugin

Validates plugin JSON files in the registry for completeness and consistency.

## Usage
`/audit-plugin <plugin-slug>`
`/audit-plugin` — audits all plugins across all subdirectories

## Steps

1. If $ARGUMENTS is provided, find and audit the matching `<slug>.json` file in `plugins/`. Otherwise, audit every `.json` file across `plugins/core/`, `plugins/restaurant/`, and `plugins/service/`.

2. For each plugin JSON, check:

### Required fields present
- [ ] `name` — non-empty string
- [ ] `slug` — non-empty string, matches the filename (without `.json`)
- [ ] `composer` — non-empty string, looks like a valid package name (`vendor/package`)
- [ ] `tier` — one of: `free`, `premium`
- [ ] `license` — one of: `free`, `per-site`, `agency`
- [ ] `cost` — present (e.g., `"free"`, `"$99/yr"`, `"$252/yr"`)
- [ ] `category` — non-empty string
- [ ] `install_on` — non-empty array
- [ ] `description` — non-empty string
- [ ] `tags` — non-empty array
- [ ] `config_notes` — non-empty string

### Conditional fields
- [ ] If `license` is `agency`: `covers` and `cost_per_site` must be present
- [ ] If `tier` is `free`: `cost` should be `"free"` or `"$0"`
- [ ] `replaces` — should be an array (can be empty)
- [ ] `requires` — should be an array (can be empty)

### Consistency checks
- [ ] No two plugin files have the same `slug`
- [ ] No two plugin files have the same `composer` package name
- [ ] `slug` matches the filename (e.g., `rank-math.json` should have `"slug": "rank-math"`)
- [ ] Plugin is in the right subdirectory:
  - `core/` — `install_on` includes `"every-site"`
  - `restaurant/` — restaurant-specific plugins
  - `service/` — service business plugins

### Data quality
- [ ] `composer` name follows the pattern `wpackagist-plugin/<slug>` for WordPress.org plugins or `vendor/package` for premium
- [ ] `cost` follows a consistent format (e.g., `"$99/yr"`, `"free"`)
- [ ] `tags` are lowercase, hyphenated keywords
- [ ] `buy_when` is `"day-1"` or `"later"` (if present)

3. Report results:
   - **Pass** — everything checks out
   - **Warnings** — non-critical issues (e.g., missing optional field like `buy_when`, sparse description)
   - **Errors** — missing required fields, duplicate slugs, wrong subdirectory, filename mismatch

## Rules
- Read files, never modify them — this is a read-only audit
- Report all issues found, don't stop at the first error
- Show a summary table at the end with: plugin name, subdirectory, tier, license, status (pass/warn/error)
- Flag any plugins that might be duplicates or serve overlapping purposes (same `category` + similar `tags`)
