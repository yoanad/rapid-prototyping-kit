# Pricing Page

## How Might We

How might we let two different kinds of buyer — a self-serve individual and
someone justifying spend to a team — each find their answer on the same
page, without either one feeling like the page was written for someone
else?

## Background

Standalone marketing pricing page for a B2B SaaS product with three tiers:
Starter, Growth, and Scale. Growth is the plan most customers should land
on; Scale exists mostly to make Growth look reasonably priced, and its real
job is closing the handful of larger accounts who'd otherwise churn to a
competitor over one missing feature (SSO, an SLA, a dedicated contact).
Visitors arrive from ads or the marketing nav with no other context, so the
page is the entire pitch — it has to explain what's actually different
between tiers without assuming any prior product knowledge, and it's the
single highest-traffic page for people actively comparing us to a
competitor's pricing tab open in another window.

## Audience

Two overlapping groups read this page differently: an individual evaluator
(often the eventual Starter or Growth buyer) who wants to self-serve without
talking to anyone, and a buyer evaluating on behalf of a team who needs
enough detail to justify the spend internally — seat counts, support level,
API access — without a sales call. The page has to answer both without
turning into two separate pages.

## Requirements

- Three tiers: Starter ($19/mo), Growth ($49/mo, marked "Most popular"),
  Scale ($149/mo).
- Monthly/annual toggle (annual = 2 months free), reflected live in the
  shown price — not a separate page or a modal.
- Per-tier feature list — at minimum: seats included, active projects
  limit, data retention window, support level (email / priority email /
  dedicated Slack), onboarding assistance, SLA guarantee, API access
  (none / read-only / full), SSO/SAML, audit logs.
- One CTA per tier: "Start free trial" for Starter/Growth, "Talk to sales"
  for Scale (Scale's CTA does not need a working form — a contact link is
  enough).
- Trust signals near the CTA area (certification badge, trial length,
  cancel-anytime language) — small, not a full testimonials section.
- FAQ is optional, not required.
- Brand: neutral (using the default tokens)
- Reference: none — no photography or stock imagery; CSS/inline SVG only.

## Success Metrics

- A visitor can tell which tier is "for people like me" within a few
  seconds, without reading every feature row.
- The price difference between tiers reads as justified by real
  capability differences, not arbitrary tiering.
- A team buyer can find the three or four rows that actually matter to
  their evaluation (SSO, support level, seats) without scanning the whole
  table.

## Sprint Questions

What a Validate session with real users would need to answer before any of
these directions ships:

- Does the team buyer actually find the SSO/audit-log/support rows without
  being told to look for them, or does the page need to point at them
  directly?
- Does hero-ing one recommended tier read as helpful guidance or as the
  page steering people away from the cheaper option they actually want?

## Out of Scope

- Actual checkout/payment flow.
- Enterprise custom-quote form (Scale's CTA is just a mailto/contact link).
- Usage calculators or ROI widgets.
- Per-seat add-ons or metered/usage-based pricing — flat tiers only.

## Fidelity

Two tiers per direction, per this repo's convention: lofi (grayscale
wireframe) and hifi (production-real, resolved token values).
