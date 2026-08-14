# Pricing Page

## Background

Standalone marketing pricing page for a B2B SaaS product with three tiers:
Starter, Growth, and Scale. Growth is the plan most customers should land
on; Scale exists mostly to make Growth look reasonably priced. Visitors
arrive from ads or the nav bar with no other context, so the page has to
explain what's actually different between tiers without assuming prior
product knowledge.

## Requirements

- Three tiers: Starter ($19/mo), Growth ($49/mo, marked "Most popular"),
  Scale ($149/mo).
- Monthly/annual toggle (annual = 2 months free), reflected in the shown price.
- Per-tier feature list — at minimum: seats included, projects limit,
  support level (email / priority email / dedicated Slack), API access
  (none / read-only / full).
- One CTA per tier ("Start free trial" or "Talk to sales" for Scale).
- FAQ or trust strip is optional, not required.
- Brand: neutral (using the default tokens)
- Reference: none — no photography or stock imagery; CSS/inline SVG only.

## Success Metrics

- A visitor can tell which tier is "for people like me" within a few
  seconds, without reading every feature row.
- The price difference between tiers reads as justified, not arbitrary.

## Out of Scope

- Actual checkout/payment flow.
- Enterprise custom-quote form (Scale's CTA is just a mailto/contact link).
- Usage calculators or ROI widgets.
