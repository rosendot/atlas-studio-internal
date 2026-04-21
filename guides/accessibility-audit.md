# Accessibility Audit

Run before every site launch. Accessibility is a legal consideration (ADA) and a quality standard.

## Tools

**axe DevTools** (free Chrome extension)
- Install from Chrome Web Store
- Open the site, open DevTools, go to the axe tab
- Run the scan — it flags violations with explanations and fix suggestions
- Focus on Critical and Serious violations before launch

**WAVE** (free Chrome extension — secondary check)
- Run as a second pass after axe
- Catches some issues axe misses, especially contrast and structural issues

**Note:** Automated tools catch approximately 30–40% of accessibility issues. The rest require manual review. For clients who specifically need WCAG 2.1 AA compliance, use axe DevTools Pro (~$40/mo) for guided manual testing.

## What to check manually

- [ ] All images have meaningful alt text (or empty alt="" if decorative)
- [ ] All form fields have visible labels
- [ ] Color contrast meets 4.5:1 ratio for normal text, 3:1 for large text
- [ ] Site is fully navigable by keyboard (Tab, Enter, Escape)
- [ ] Focus indicators are visible when tabbing through the page
- [ ] No content flashes more than 3 times per second
- [ ] Page has a logical heading structure (H1 → H2 → H3)
- [ ] Skip navigation link present for screen readers

## Deploy checklist integration

Accessibility audit is required at Stage 6 of the deploy checklist. Do not go live with Critical violations unresolved.
