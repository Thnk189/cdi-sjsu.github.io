Chip Design Initiative Website

Static website for the SJSU Chip Design Initiative club.

This is mostly hand-built HTML, CSS, JavaScript, and a bunch of CDI-flavored images. It is meant to be easy to mess with, easy to open locally, and easy to keep alive even while the club site is being rebuilt in public. 

## Pages

- `index.html` - Home page, sidebar links, calendar, banner, and projects section

## Local Preview

```bash
open index.html
```

Or run a local server from the repo root:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://127.0.0.1:5173/
```

If the Node/Vite setup is still in the repo, this also works:

```bash
npm install
npm run dev -- --host 127.0.0.1
```

## Deploying

This repo is for GitHub Pages.

If the site is served directly from the repo root, the important files are the root `.html` pages plus `styles/`, `scripts/`, and `public/`.

If the GitHub Actions build workflow is still being used, make sure the build outputs every page that should go live, not just `index.html`.

## Notes

The homepage is actively being changed, so some text, links, and art are intentionally still rough. The site should stay lightweight and editable: plain files first, fancy tooling only when it actually helps. The original was built off of an AI prompt however that was only to get the project started the rest has been hand typed by me or assisted in some tutorial/guide/template. 
