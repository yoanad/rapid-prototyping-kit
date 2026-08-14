# tokens/

`default.css` is a small brand-neutral fallback — enough that mockups don't look
unstyled, not a design system.

## Bring your own design system

Drop one `.css` file per brand in this directory. Rules:

- **Filename stem = the name you type on a brief's `Brand:` line.** `acme.css` →
  `Brand: acme`.
- File must contain plain **CSS custom properties** in a `:root` (or
  `:where(:root, :host)`) block. Any prefix, any naming — the
  `design-system-tokens` skill infers it from the file, it doesn't assume one.
- `var(...)` references inside the file are resolved automatically (a few hops deep).

Only have a Tailwind v3 config, a Figma export, or a DTCG `tokens.json`? Paste it
into chat once and ask Claude to write `tokens/<name>.css` from it — the skill reads
CSS custom properties only, on purpose, so it doesn't grow a parser for every export
format. Tailwind v4's `@theme` block is already CSS custom properties, so those work
unchanged.

If this directory has nothing but `default.css`, generation still works — mockups
just use the neutral fallback.
