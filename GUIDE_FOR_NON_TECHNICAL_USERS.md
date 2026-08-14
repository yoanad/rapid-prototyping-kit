# Guide for Non-Technical Users

This is a UX/UI design tool that generates mockup variations for you. No coding required.

## What This Does

You give it a brief (what you want to design) and some design direction (color scheme, style, inspiration). It creates 3 different mockup directions, each shown at **two stages**:
- **lofi** — a rough grayscale wireframe, for checking layout and flow before anything looks "finished"
- **hifi** — the same layout with real brand colors, type, and polish, close to production-ready

So a typical batch is 6 web pages you can click through and view (3 directions × 2 stages).

## Folder Structure Explained

```
ux-explorations/
├── features/                    ← Your design projects go here
│   ├── auth-login/               ← Example project
│   ├── pricing-page/              ← Example project
│   └── analytics-dashboard/       ← Example project
└── tokens/                       ← Your brand's colors/fonts (optional)
```

Each project folder contains:
- **brief.md** — your notes about what to design
- **reference/** — optional: screenshots, inspiration, existing designs
- **iterations/** — the mockups generated (HTML files you open in your browser)

## How to Use

**Easiest path:** just tell Claude your brief in chat (copy the template
below into your message) and ask for mockups — it creates the project
folder and `brief.md` for you. Steps 1–2 below are only if you'd rather
write the file yourself first.

### Step 1: Create a New Project (optional)

1. Open Finder, go to `features/`
2. Create a new folder with a simple name (use hyphens, no spaces)
   - Example: `checkout-flow` or `product-hero`

### Step 2: Write Your Brief

Copy this template and fill in the blanks — in a `brief.md` file, or
straight into your message to Claude:

```
# <Page/feature name>

What is it:
Who uses it:
Must include:
Tone/style:
Brand: <your brand name, or "neutral">
Reference: (optional — screenshots or links in reference/)
```

**Example — filled in:**
```
# Checkout Confirmation Page

What is it: Confirmation page shown after someone completes a purchase.
Who uses it: Customers who just checked out, on mobile and desktop.
Must include: Order number, total price, estimated delivery, "Download receipt" button.
Tone/style: Friendly and reassuring.
Brand: neutral (using the default tokens)
Reference: none
```

**Another example — different shape of brief:**
```
# Store Locator Empty State

What is it: What shows when a customer searches a location with no nearby stores.
Who uses it: Shoppers on the store-finder page, mostly mobile.
Must include: Apology message, "widen search radius" button, link to online shop instead.
Tone/style: Helpful, not apologetic-sounding; light and quick to scan.
Brand: Acme (tokens in tokens/acme.css)
Reference: screenshot of current empty state in reference/
```

### Using your own brand colors

Have a design system? Drop a `.css` file with your brand's colors into
`tokens/`, name it after your brand (e.g. `tokens/acme.css`), and put that
same name on the `Brand:` line of your brief. See `tokens/README.md` for the
exact format. No file there yet? Mockups just use the neutral default look.

### Step 3: Add Reference (Optional)

Create a folder called `reference/` inside your project and:
- Paste screenshots of existing designs you like
- Save images of competitors' designs
- Add links to inspiration

**Note:** Not required — the tool will work without this.

### Step 4: Request Mockups

Tell Claude Code what you want — paste your filled-in brief, or say something like:

> "Generate 3 design variations for the checkout-confirmation project. Make one minimal and clean, one with illustrations, and one with a card-based layout."

The tool will create HTML mockups (lofi + hifi for each direction) in the `iterations/` folder.

### Step 5: View Your Mockups

1. In Finder, go to `features/your-project/iterations/`
2. Open `index.html` (double-click it)
3. Your browser opens showing all mockup versions side by side, with lofi/hifi tabs per direction
4. Click any version to see it full-screen

You can also open individual files like `v1-minimal-lofi.html` or `v1-minimal-hifi.html` to see just one design at one stage.

## Tips

- **Keep briefs simple** — use conversational language, not design jargon
- **Use reference images** — if you have examples you like, include them
- **Be specific about tone** — "friendly and playful" vs. "professional and minimal" makes a big difference
- **Request variations** — ask for different angles: "one with dark mode, one with light mode, one with a sidebar"
- **Iterate** — if you don't like the first batch, refine the brief and ask again

## Sharing Your Mockups

Zip up the project's `iterations/` folder in Finder, or just send the
`index.html` file plus its folder — anyone can open it in a browser, no
special software needed.

## What You're Looking At

When you open `index.html` or a `.html` file:
- **These are mockups, not real code** — they show what the design looks like
- **No interactivity yet** — buttons don't click, forms don't submit
- **Static images and text** — it's a visual preview only
- **Mostly works offline** — mockups may load an icon font from a CDN; text and layout render either way

## Can I Edit the Mockups?

Not easily, but you can:
- Take screenshots to share with developers
- Use these as a starting point for a designer to build on
- Ask for new variations with different directions in the brief

## Troubleshooting

**"I can't find the index.html file"**
- Make sure you're in the right folder: `features/your-project/iterations/`
- Refresh the folder view (press Cmd+R on Mac)

**"The mockups don't look right"**
- Check that your brief is clear and specific
- Add reference images if you haven't already
- Ask Claude to regenerate with more detail in your request

**"I want to change the design"**
- Edit your `brief.md` with new details
- Ask Claude to generate new variations
- Don't edit the `.html` files directly unless you know HTML

## Next Steps

1. Create a folder for your first project
2. Write a brief
3. Ask Claude to generate mockups
4. Open and review in your browser

Questions? Just ask — Claude can explain anything about this tool.
