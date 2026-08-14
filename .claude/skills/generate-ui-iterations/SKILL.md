---
name: generate-ui-iterations
description: Use when given a PRD or brief and asked to generate a few UI/UX mockup directions or iterations for a feature.
---

# Generate UI Iterations

Turn a PRD/brief into a few genuinely distinct, self-contained static HTML
mockups — one per creative direction, each at two fidelity tiers — written
straight to disk, no build step.

## Steps

1. **Slug + brief.** Derive a kebab-case feature slug from the brief. Create
   `features/<slug>/` if it doesn't exist. Write `brief.md` there from
   whatever was given (pasted text verbatim, or the pointed-to file's
   content).

2. **Defaults, overridable in the brief's own words:**
   - Variant count: **3**
   - Fidelity: **two tiers per angle, by default** — no single-tier
     "branded-simplified" middle ground unless the brief explicitly asks for
     just one fidelity level:
     - **lofi** — grayscale wireframe: no brand color, greys/black/white
       only, icons reduced to plain labeled boxes/glyphs, terser
       placeholder-style copy is fine. Structure/hierarchy must still be
       real (heading sizes bigger than body, etc.) — undressed, not
       unstructured.
     - **hifi** — production-real: full brand colors/type/copy from step 3,
       real polish (shadows, depth, realistic site chrome). Use real photos
       via relative `<img>` path as if they exist in this feature's own
       `reference/` dir — e.g. `../reference/<file>.jpg`. Do not hardcode
       absolute filesystem paths or cross-feature relative escapes
       (`../../<other-slug>/…`). If photos only exist in another feature's
       `reference/`, the export script will copy them locally in
       post-processing. If no reference photos exist anywhere, use richer CSS
       (gradients/shadows) instead of a dead `<img>` link — never invent an
       external image URL, and never pull one from an external service
       (`unsplash.com`, `placehold.co`, etc.) — those requests rot and break
       offline viewing.

3. **Pull real tokens.** Always run the `design-system-tokens` skill before
   dispatching — it discovers whatever token sheets exist in `tokens/`. If
   the brief names a brand, pass it through so the right sheet gets picked;
   if it doesn't, the skill picks or falls back on its own. Hand each
   subagent the **resolved literal values** (hex, rem, font stack) — never a
   token name or a file path, since subagents write standalone HTML with no
   build step. Don't block on this: if `tokens/` is empty the skill returns
   neutral defaults and generation continues.

4. **Pick N distinct angles yourself, here, before dispatching anything.**
   This is the one judgment call that determines whether the outputs are
   actually different or just recolored copies of each other — don't punt it
   to the subagents, they can't see each other's work. Ground each angle in
   the brief's real subject matter, not a generic template:
   - Reject the default AI-design instinct (same layout, swap a headline) —
     each angle needs its own information hierarchy, its own idea of what
     goes above the fold, and one deliberate signature element that embodies
     it — structure should encode something true about the content, not
     decorate it.
   - Example angles for a conversion-focused page: "trust/minimal" (one
     clear CTA, no clutter), "comparison-forward" (leads with a
     before/after or option grid), "conversational" (leads with a
     question/dialogue framing). Don't reuse these verbatim — derive angles
     from *this* brief's actual content.

5. **Dispatch 2N `Agent` tool calls in parallel** — one `Agent` tool_use
   block per angle × tier, all in a single assistant message, so they run
   concurrently rather than sequentially. Build the hifi
   variant's agent to read the lofi variant's *angle description* (not file —
   they run concurrently) so both land on the same structure independently;
   consistency comes from giving both agents the identical angle brief, not
   from one waiting on the other. Give each agent, self-contained:
   - The full brief text
   - The resolved token values from step 3 (or the fallback brand colors)
   - Its one angle from step 4, stated as a concrete design brief, not a
     one-word label
   - Its fidelity tier's rules from step 2
   - Its exact output path: `features/<slug>/iterations/v{n}-<angle-slug>-lofi.html`
     or `features/<slug>/iterations/v{n}-<angle-slug>-hifi.html`
   - Instruction: write ONE self-contained HTML file (inline `<style>`, Font
     Awesome CDN link only if icons are actually needed, no build step, no
     external image references beyond real local `reference/` photos)
     directly to that path. Aim for: a real type scale, one signature
     element, restraint everywhere else — not a generic template.

6. **Index page.** After all variants return, write
   `features/<slug>/iterations/index.html` from the canonical template at
   `.claude/skills/generate-ui-iterations/templates/index-template.html` —
   copy it verbatim and only fill in `__FEATURE_TITLE__`, `__FEATURE_SUBTITLE__`,
   and the `ANGLES` array (one entry per angle, `tiers` listing its lofi/hifi
   files — see the template's own comment for the exact shape). Don't
   hand-roll a new index layout per feature; the tabs + iframe + tier-toggle
   UI must look identical across every feature so re-running this skill
   later produces something the user already recognizes. If the template
   itself needs a real change (not just data), edit the template file, not
   just this feature's copy, so every feature stays in sync.

7. **Report** the resulting file paths and a one-line description of each
   angle back to the user.

## Retrofitting an existing single-tier set to two tiers

When asked to add lofi/hifi to iterations that already exist as a single
untiered file per angle (`v{n}-<angle-slug>.html`, no suffix):

- Treat each existing file as the structural baseline, not something to
  regenerate from the brief. Dispatch one agent per (angle × missing tier),
  each told to **read the existing file first** and copy its exact section
  order, copy, and information hierarchy — only the rendering fidelity
  changes (grayscale-and-undress for lofi, real-photos-and-polish for hifi).
- Don't delete or overwrite the original untiered file unless the user
  explicitly asks to — ask first if it's ambiguous, since removing files is
  harder to undo than adding them. Default to leaving it as a legacy file on
  disk even after lofi/hifi exist, and just stop linking it as the primary
  tier in the regenerated index.
- Skip angles the brief itself scoped as single-fidelity-only (e.g. a
  direction explicitly written as "high-fidelity, production-real" with no
  lower tier called for) — don't force a lofi wireframe onto a direction
  whose whole point was skipping that tier.
- Regenerate `index.html` grouped by angle with the new tier links; keep (or
  relabel, e.g. "legacy") the old untiered link rather than silently
  dropping it if it still exists on disk.

## Notes

- This is fan-out via the `Agent` tool, not the `Workflow` tool — no
  orchestration script is warranted unless the user explicitly asks for
  multi-agent orchestration.
- Re-running this for the same feature slug (e.g. "give me 2 more
  directions") should add `v{n+1}-...`, `v{n+2}-...` files and regenerate
  `index.html` to include everything — don't overwrite prior variants.
- If a `dataviz` skill is available in this environment, use it for any
  chart/dashboard brief before writing chart markup.
