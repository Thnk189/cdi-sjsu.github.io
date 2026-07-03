# Chip Design Initiative Website

Static multi-page website for the SJSU Chip Design Initiative club.

## Pages

- `index.html` - Home page, sidebar links, calendar, and project display
- `join.html` - Membership and contact info
- `resources.html` - Learning resources
- `updates.html` - Simple updates page

## Main Files

- `styles/home-layout.css` - Home page layout and homepage boxes
- `styles/floppy-nav.css` - Floppy disk navigation styling
- `styles/project-gallery.css` - Oscilloscope project display
- `styles/pop-intro.css` - Opening pop animation
- `scripts/pop-intro.js` - Opening image wall logic
- `scripts/project-gallery.js` - Project switcher logic
- `public/images/` - Site images and hand-drawn assets

## Local Preview

```bash
deno run -A npm:vite@8.0.9 --host 127.0.0.1
```

Open:

```text
http://127.0.0.1:5173/
```

## Build

```bash
deno run -A npm:typescript@~6.0.2/tsc -b
deno run -A npm:vite@8.0.9 build
```

The built site is generated in `dist/`.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds the site and deploys `dist/` to GitHub Pages.
