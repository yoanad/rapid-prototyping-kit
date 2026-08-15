---
name: generate-brief
description: Use when the user wants to start a new feature but doesn't have a written brief/PRD yet — interview them to produce features/<slug>/brief.md.
---

# Generate Brief

Turns a loose idea ("I need a new checkout page", "let's brief a store locator
empty state") into a `brief.md` that `generate-ui-iterations` can run with
directly, via a short interview instead of handing back a blank template.

## Steps

1. **Check what's already been said.** If the user's message already answers
   some of the fields below, don't re-ask them — only ask for what's missing.

2. **Read an existing richer brief under `features/*/brief.md`** before
   interviewing (any one that uses `##` sections rather than the flat
   template), as a depth/shape reference for richer input — not to copy its
   content, but so the questions you ask and the brief you write aim at that
   level of substance instead of a bare five-liner when the interview
   actually surfaces that much. For thin input, the flat template in step 5
   below is the reference — don't pad it out just because the example you
   read is longer. Don't reference the example features' content in the new
   brief — they're illustrations of depth, not a shared product context.

3. **Ask for the missing fields**, plain conversational questions, not a
   form dump — a couple at a time reads better than six at once. Core fields
   (always get these):
   - What is it (the page/feature, one line)
   - Who uses it
   - What it must include (key content/actions)
   - Tone/style
   - Brand — check `tokens/` first: if there's exactly one non-default
     sheet, assume that; if there are several, use `AskUserQuestion` with one
     option per filename stem plus "Neutral / default tokens"; if there's
     only `default.css`, don't ask at all, just write `neutral`
   - Reference — do they have screenshots/links to riff on? Optional; if
     yes, tell them to drop files in `features/<slug>/reference/` (create the
     folder for them if they hand you something to save)

   Depth fields (ask if not obviously overkill for the ask — a one-off empty
   state doesn't need all of these, a landing page redesign does):
   - Why now / what's broken today (the problem this is solving, not just
     the solution)
   - How success gets judged, if they have a metric in mind (CTR, bounce
     rate, completion rate...) — skip if they clearly don't have one yet,
     don't make them invent a KPI
   - Any seed ideas or directions they already have in mind, even half-formed

   Skip asking about variant count or fidelity tiers unless the user brings
   it up — `generate-ui-iterations` already has sane defaults (3 variants,
   lofi+hifi each); don't make them make decisions they don't need to make.

4. **Derive a kebab-case slug** from the feature name (e.g. "Checkout
   Confirmation Page" → `checkout-confirmation`). If `features/<slug>/`
   already exists, say so and ask whether they mean to add to that feature
   or need a different slug — don't silently overwrite an existing brief.

5. **Write `features/<slug>/brief.md`.** Match depth to what the interview
   actually surfaced — don't invent substance that wasn't given, but don't
   flatten real substance into one-liners either:

   - **Thin input** (only the core fields, nothing more offered): the flat
     template, same as `GUIDE_FOR_NON_TECHNICAL_USERS.md` uses, so what
     non-technical users see there matches what gets written here:

     ```
     # <Page/feature name>

     What is it: <one line>
     Who uses it: <one line>
     Must include: <comma-separated list>
     Tone/style: <one line>
     Brand: <token sheet name in tokens/, or "neutral">
     Reference: <"none" or a note pointing at reference/>
     ```

   - **Richer input** (a background/problem, a metric, seed ideas): use this
     fixed section order every time, not an ad hoc pick — a design-sprint
     "Understand" writeup, not a free-form doc. Look at any richer
     `features/*/brief.md` for what it looks like filled in. Omit a section
     entirely (don't leave it empty) only if genuinely nothing was gathered
     for it — `Seed Ideas` is the one most often skipped:

     ```
     # <Page/feature name>

     ## How Might We

     How might we <the real design tension this feature has to resolve,
     framed as a question — not "how might we build X">?

     ## Background

     <Why this exists, who's affected today, what's actually at stake.>

     ## Audience

     <Who uses it, on what device/context, what they already know coming in.>

     ## Requirements

     - <Concrete must-haves, as a list — content, actions, states.>
     - Brand: <token sheet name in tokens/, or "neutral">
     - Reference: <"none" or a note pointing at reference/>

     ## Seed Ideas

     <Any half-formed directions they already mentioned — omit if none given.>

     ## Success Metrics

     <How success gets judged, if they have something in mind.>

     ## Sprint Questions

     <The real assumptions a Validate session with users would need to
     test before any direction ships — not a restatement of Success Metrics.>

     ## Out of Scope

     <What this explicitly does not cover, so a direction doesn't sprawl.>

     ## Fidelity

     <Usually just "two tiers per direction, per this repo's convention" —
     only worth a real paragraph if the brief wants something non-default.>
     ```

6. **Confirm and offer the next step.** Show them the written brief.md path
   and ask if they want mockups generated now (hands off to
   `generate-ui-iterations`) or if they'd rather review/edit the brief
   first — don't auto-chain into generation without asking, since they may
   want to add reference images first.

## Notes

- This skill only writes `brief.md` (and creates `reference/` if asked to
  save files there) — it never touches `iterations/`, that's
  `generate-ui-iterations`'s job.
- If the user pastes something that's already a complete brief (not a vague
  idea), skip the interview — just confirm the slug and write it as given,
  same as `generate-ui-iterations` step 1 already does. This skill exists
  for the "I don't know where to start" case, not to gate briefs that are
  already written.
