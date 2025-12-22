# CDOSI Book — Website

Static site for "Computational Design and Optimization of Supersonic Intakes".

This repository is intended to be published as a GitHub Pages site at:

- https://cdosi-book.github.io

## Purpose

This repo contains the static HTML/CSS/JS assets for the book website (chapters, appendices, images, and downloads). It's designed to be served directly from the repository root using GitHub Pages (user/organization page repository: `cdosi-book.github.io`).

## Repo layout (important files)

- `index.html` — Home / landing page
- `pages/` — Chapter/appendix pages (e.g., `boundary-layer.html`, `thrust-drag.html`)
- `css/` — Stylesheets (`styles.css`, `page.css`)
- `js/` — Site JavaScript (`main.js`)
- `images/` — All image assets (book cover, figures, authors)
- `data/` — JSON / JS data used by the site (`chapters.js`)
- `downloads/` — PDFs or other downloadable files

If you add new pages, place them under `pages/` and link from `index.html` or the navigation.
