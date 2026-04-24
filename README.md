# Happy Lobster Truck — Landing Page

Static landing page for **Chicago's Premier Food Truck**. No build step. Plain HTML + CSS + JSX (compiled in the browser by Babel Standalone).

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. In Vercel, click **New Project → Import** and pick the repo.
3. **Framework Preset:** `Other` (it's just static files).
4. **Build Command:** leave blank.
5. **Output Directory:** leave blank (Vercel will serve the repo root).
6. Deploy.

That's it — `index.html` at the root is the entry point.

## Local preview

Any static server works. From this folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

> **Note:** opening `index.html` directly with `file://` won't work — the JSX files are loaded via `<script src>` and browsers block that over `file://`. You need a local server.

## Files

```
index.html                   Entry point — renders <TruckDirectionB /> at root
colors_and_type.css          Brand tokens: colors, type scale, @font-face
bar.css                      Shared layout (nav, footer, inquiry form, buttons)
truck.css                    Truck-page sections (hero, marquee, offerings, quote, steps)
components-shared.jsx        <BarNav />, <BarFooter />
components-truck.jsx         <TruckInquiryForm />
direction-tb.jsx             <TruckDirectionB /> — the full page composition
assets/                      Photos + logos
fonts/                       Hammersmith One, Cormorant, Wonderful Sunset
```

## Editing content

Copy, CTAs, and section order all live in **`direction-tb.jsx`**. Open it and edit — no compile step, just refresh the browser.

Common edits:

| What | Where |
|---|---|
| Headline / hero copy | `direction-tb.jsx` → `<section className="hero">` |
| Nav links | `components-shared.jsx` → `<BarNav />` |
| Form fields | `components-truck.jsx` → `<TruckInquiryForm />` |
| Phone / email | `direction-tb.jsx` → `.contact-card` rows |
| Brand colors | `colors_and_type.css` → `:root` CSS variables |
| Section spacing | `bar.css` / `truck.css` |

## Form submissions

The inquiry form is currently a **client-side stub** — it shows a success state but doesn't actually send anything. To wire it up:

- **Quickest:** point the `<form>` at [Formspree](https://formspree.io/) or [Web3Forms](https://web3forms.com/) — swap `onSubmit` for an `action="https://..."`.
- **On Vercel:** add a serverless function at `/api/inquiry.js` and POST to it.

## Production note

This page uses **Babel Standalone** to transpile JSX in the browser. That's fine for a small landing page (~15KB of JSX) but adds ~300KB of Babel. If you want to pre-compile for a cleaner production build, convert to Vite in ~30 min:

```bash
npm create vite@latest . -- --template react
# then move components into src/, import CSS, and point main.jsx at TruckDirectionB
```

Not required — it works as-is.
