# Plugins

Structured plugin registry for the agency. Each plugin has a `plugin.json` with metadata, costs, licensing, and install conditions.

## Directory Structure

```
plugins/
├── core/                    # Install on every client site
│   ├── rank-math.json       # SEO (day-1)
│   ├── wordfence.json       # Security (day-1)
│   ├── updraftplus.json     # Backups (day-1)
│   ├── woocommerce.json     # E-commerce engine (day-1)
│   ├── woocommerce-square.json  # Square POS sync (day-1)
│   ├── site-kit.json        # Google Analytics (day-1)
│   ├── redirection.json     # 301 redirects (day-1)
│   ├── fluent-forms.json    # Forms (buy later)
│   ├── complianz.json       # GDPR/privacy (buy later)
│   └── smash-balloon.json   # Social feeds + reviews (buy later)
├── restaurant/              # Restaurant POS integrations
│   ├── zaytech.json         # Clover POS ordering
│   └── toast.json           # Toast POS integration (custom-built)
├── service/                 # Service business (salons, repair shops)
│   └── latepoint.json       # Appointment booking
└── tools/                   # External tools (not WordPress plugins)
    ├── uptimerobot.json     # Uptime monitoring (day-1, free)
    ├── stripe.json          # Client billing (day-1, free tier)
    └── shutterstock.json    # Stock image licensing (day-1)
```

## Buy When

- **day-1** — Purchase before launching your first client site
- **later** — Buy when you have enough clients to justify the cost

Tools in `plugins/tools/` are external services, not WordPress plugins. They follow the same day-1/later convention.

## plugin.json Schema

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Display name |
| `slug` | string | Unique identifier |
| `composer` | string/null | Composer package name (null if premium-only download) |
| `tier` | string | `free`, `freemium`, `premium`, or `custom` |
| `license` | string | `free`, `per-site`, `agency`, `lifetime`, `custom-built` |
| `cost` | string | Human-readable cost |
| `covers` | string | How many sites the license covers |
| `cost_per_site` | string | Effective per-site cost |
| `category` | string | Functional category |
| `buy_when` | string | `day-1` or `later` |
| `install_on` | array | Where to install: `every-site`, `restaurant`, `retail`, `service`, `optional` |
| `description` | string | What it does |
| `tags` | array | Searchable keywords |
| `requires` | array | Plugin slugs this depends on |
| `condition` | string | When to use/skip this plugin |
| `config_notes` | string | Setup instructions |
