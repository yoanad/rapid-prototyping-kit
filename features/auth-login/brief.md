# Auth Login

## How Might We

How might we get a returning user from landing on this page to their
dashboard in the fewest possible steps, without making the door itself feel
like part of the product they're trying to reach?

## Background

The sign-in screen for a web app with a mostly-returning user base — this
isn't a landing page trying to convert anyone, it's a door people who
already have an account walk through, often daily. It sits in front of
every other screen in the product, so it has to be fast to get through and
boring in the right way: no marketing copy, no upsell, nothing that makes an
already-annoyed user (wrong password, expired session, whatever brought
them back to this screen) wait longer than necessary.

## Audience

Returning users on both desktop and mobile, split roughly evenly. Most
logins are autofilled by a saved password manager or the browser, so the
form has to work cleanly with autofill (correct `autocomplete` attributes,
no JS that fights the browser's fill behavior) rather than assuming someone
is typing every character by hand. A smaller but real segment has a passkey
registered on this device and should never have to see a password field at
all if they don't want to.

## Requirements

- Email field, password field, both with correct autofill hints.
- A passkey/biometric sign-in option, available without requiring the
  password field to be filled or visible first.
- "Continue with SSO" as a single generic button — no third-party logos
  (Google/Apple/GitHub/Microsoft); text only, since we don't have signed
  agreements to display those marks and a wrong rendering is a worse look
  than a plain button.
- "Forgot password" link and a link to sign up, both visible without
  scrolling on a standard laptop viewport.
- Inline validation errors (wrong password, unknown email) that don't blank
  out what the user already typed.
- Brand: neutral (using the default tokens)
- Reference: none — no photography or stock imagery; use CSS gradients and
  inline SVG only. Do not draw any third-party logos.

## Success Metrics

- A returning user with a saved password gets from landing on the page to
  submitting the form in one glance, no hunting for the right field.
- A passkey user is never funneled through the password field first.

## Sprint Questions

What a Validate session with real users would need to answer before any of
these directions ships:

- Does surfacing the passkey option first actually get used, or do people
  reflexively scroll past it to the password field out of habit?
- Does a plain-text "Continue with SSO" button get recognized as an SSO
  entry point at all without a logo to anchor it?

## Out of Scope

- Account creation / signup flow itself (only the link to it).
- Multi-factor prompts beyond the passkey option (SMS/TOTP screens are a
  separate flow, shown after this one succeeds).
- "Remember this device" / session-length controls.

## Fidelity

Two tiers per direction, per this repo's convention: lofi (grayscale
wireframe, no brand color) and hifi (production-real, resolved token
values).
