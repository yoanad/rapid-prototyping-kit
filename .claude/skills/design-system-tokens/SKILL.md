---
name: design-system-tokens
description: Use when generating or reviewing a UI mockup and you need real design-token values (colors, spacing, radii, font sizes, font stacks) to bake into inline CSS. Reads whatever CSS custom-property sheets exist in the repo's tokens/ directory.
---

# Design System Tokens

Mockups read literal token values from `tokens/*.css` at the repo root —
brand-neutral fallback plus whatever design system a user drops in.
Scope: **CSS custom properties only.** `tailwind.config.js`, DTCG `tokens.json`,
and Figma JSON exports are not parsed. If a user only has one of those, read it
as reference and offer to transcribe it once into `tokens/<name>.css` in
conversation — don't grow a parser here. (Tailwind v4's `@theme` block already
*is* CSS custom properties, so those work unchanged.)

## 1. Discover

```bash
ls tokens/*.css
```

That's the whole discovery mechanism — no registry file, no config.

## 2. Select

- One file → use it.
- Several → if the brief names a brand, match it against filename stems
  case-insensitively (`acme` → `tokens/acme.css`). If it doesn't match anything,
  or no brand was named, `AskUserQuestion` listing the stems plus
  "Neutral / default tokens".
- `default.css` auto-selects only when it's the only file present, or the user
  explicitly picks it.

## 3. Infer the prefix — never assume one

```bash
grep -ohE -- '--[a-zA-Z0-9_-]+' tokens/<file>.css | sed -E 's/[-_][^-_]*$//' \
  | sort | uniq -c | sort -rn | head -20
```

The most frequent stems are the prefix + category. State what you inferred in
one line before quoting values (e.g. "reading tokens/acme.css, prefix
`--acme-color-`", or `--acme_c_` for an underscore-delimited file). If the
command's output isn't a usable prefix (too few properties for a stem to
dominate), read the file directly and infer by eye instead of trusting the
count blindly. If the file has no custom properties at all, treat it as
unusable and fall through to rule 6.

## 4. Map categories by meaning, not by exact key

Search case-insensitively for substrings — don't require the fallback's own
naming:

- background: `bg|background|surface|canvas|base`
- foreground: `fg|text|foreground|ink|content`
- accent: `accent|primary|brand|action|interactive`
- border: `border|outline|stroke`
- radius: `radi|radius|rounded|corner`
- spacing: `space|spacing|gap`
- type size: `font-size|fontsize|text-|type-`
- font family: `font-family|fonts-|font-stack`

State which categories you found and which you didn't. **A missing category
falls back to the corresponding value in `tokens/default.css` and is reported —
never invented, never recalled from memory or a prior conversation.**

## 5. Resolve `var()` — generically, with a hop limit

If a value is `var(--x)`, re-grep `--x:` in the *same file* and take its value.
Repeat up to **3 hops**, then stop and report the unresolved chain instead of
guessing. Two gotchas: token names can contain escaped characters (e.g.
`--radii-0\.125`) — match the literal string including the backslash — and
`var(--x, fallback)` means take `--x` if it resolves, else the fallback.

Hand off **literal values only** (hex, rem, font stack) to anything generating
HTML — a semantic token name is meaningless in a standalone file with no build
step.

## 6. Empty or absent `tokens/`

Say so in one line ("no token sheets found in tokens/, using neutral system
defaults") and use: `#ffffff` bg, `#111827` text, `#6b7280` muted, `#e5e7eb`
border, `#4f46e5` accent, 4/8/12/16/24/40px spacing, system font stack. List
what you used. **Never block generation on missing tokens, and never
substitute a remembered brand palette.**
