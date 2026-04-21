# Client Offboarding

Follow this checklist when a client ends their retainer.

## Step 1 — Confirm cancellation in writing

- Get written notice via email
- Confirm final billing date and last day of service
- Cancel the Stripe subscription effective on the final billing date

## Step 2 — Provide client deliverables

The client is entitled to the following on exit:

| Item | Action |
|------|--------|
| Domain | Already theirs — no action needed |
| Email | Already theirs — no action needed |
| GA4 / Search Console / GBP | Remove agency admin access |
| Content export | Export all posts, pages, and media from WordPress if requested |
| Final backup | Run a full UpdraftPlus backup and provide the archive file |
| Custom theme | NOT transferred — agency IP |
| Plugin licenses | NOT transferred — agency licenses |

## Step 3 — Remove agency access

- [ ] Remove agency from their Cloudflare account
- [ ] Remove agency from their Google Workspace admin
- [ ] Remove agency from GA4 as editor
- [ ] Remove agency from Search Console as manager
- [ ] Remove agency from Google Business Profile as manager
- [ ] Revoke POS API credentials (Square/Clover/Toast)

## Step 4 — Take site offline

- Wait until the final billing date has passed
- Take the Cloudways application offline (or delete it)
- Archive the GitHub repo — do not delete it
- Delete the database from Cloudways after 30 days

## Step 5 — Internal cleanup

- [ ] Remove site from MainWP dashboard
- [ ] Remove Wordfence license from their site
- [ ] Cancel any site-specific third-party accounts
- [ ] File the signed contract and any correspondence in Google Drive
- [ ] Mark client as inactive in your records
