# New Client Setup

Generates starter instructions for spinning up a new Bedrock client project from the vault, ending with a handoff to `/deploy-checklist` when the client is ready to go live.

## Usage
`/new-client <client-name>`

## Steps

1. Read the vault's `themes/` and `kits/` directories to list what's actually available.
2. Read `plugins/core/` to list the current core plugin stack.
3. Output the following setup guide with `$ARGUMENTS` filled in:

---

## New Client: $ARGUMENTS

### Step 1 — Create the Bedrock project

```bash
composer create-project roots/bedrock client-$ARGUMENTS
cd client-$ARGUMENTS
git init
```

### Step 2 — Configure .env

Copy `.env.example` to `.env` and set:
```
DB_NAME=client_$ARGUMENTS
DB_USER=root
DB_PASSWORD=root
WP_HOME=http://$ARGUMENTS.local
WP_SITEURL=${WP_HOME}/wp
```

### Step 3 — Create the theme directory

```bash
mkdir -p web/app/themes/$ARGUMENTS
```

### Step 4 — Choose a base theme and kits

From the agency vault, pick a starting point:

**Themes available:**
<list actual themes from themes/ with descriptions from theme.json>

**Kits available:**
<list actual kits from kits/ with descriptions from kit.json>

Copy the base theme into your client theme directory and customize. Reference kits — don't duplicate them.

### Step 5 — Set up LocalWP

1. Open LocalWP
2. Import or create site: `$ARGUMENTS.local`
3. Point to the Bedrock project root
4. Confirm site loads at `http://$ARGUMENTS.local`

### Step 6 — Create GitHub repo

```bash
gh repo create client-$ARGUMENTS --private
git add composer.json composer.lock .env.example config/ web/app/themes/$ARGUMENTS/ wp-cli.yml
git commit -m "Initial Bedrock setup for $ARGUMENTS"
git push -u origin main
```

### Step 7 — Install core plugins via Composer

<list actual composer require commands from plugins/core/ JSON files>

### Step 8 — Build & customize the theme

Build out the client's theme locally. Use these vault tools as you go:
- `/new-page <page-name>` — scaffold new page templates
- `/new-post-type <post-type-name>` — scaffold custom post types with meta boxes
- `/audit-kit` — validate any kits you modify or create
- **theme-reviewer agent** — quick code quality check during development

### Step 9 — When ready to deploy

Run `/deploy-checklist $ARGUMENTS` to get the full pre-launch checklist. This includes:
1. Kit validation (`/audit-kit`)
2. Code review (theme-reviewer agent)
3. Client content replacement (theme-preflight agent → `/client-preflight`)
4. SEO audit (seo-analyzer → `/seo-improve`)
5. Accessibility audit (a11y-analyzer → `/a11y-improve`)
6. Performance audit (perf-analyzer → `/perf-improve`)
7. Server setup, plugin config, DNS, and go-live verification

---

## Rules
- This generates instructions — do not actually create the Bedrock project or run commands
- Always use the client name from $ARGUMENTS throughout
- If no $ARGUMENTS provided, use `<client-name>` as placeholder
- List real themes, kits, and plugins from the vault — read the actual directories, don't hardcode
- Always end with the handoff to `/deploy-checklist`
