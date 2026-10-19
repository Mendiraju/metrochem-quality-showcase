# Metrochem Pvt Ltd — Company Website

A static company showcase website for **Metrochem Pvt Ltd**, a pharmaceutical and API manufacturing company based in Visakhapatnam, Andhra Pradesh, India.

## Overview

This is a plain HTML/CSS/JavaScript website. There is no build step, no dependencies, and no server-side code — the site works by simply serving its files.

## Structure

```
index.html      — the complete single-page website
css/style.css   — all styles
js/main.js      — mobile menu, scroll animations, demo form
assets/         — images and favicon
CNAME           — custom domain (metrochempvt.works) for GitHub Pages
robots.txt      — search engine rules
```

## Running locally

Open `index.html` directly in a browser, or serve the folder with any static file server, for example:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment (GitHub Pages)

1. Push this repository to GitHub.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then save.

The `CNAME` file configures the custom domain `metrochempvt.works`. Point the domain's DNS records at GitHub Pages as described in GitHub's custom-domain documentation.

## Notes

- The contact form is a demonstration and is not connected to a submission service.
- Photographs are illustrative and do not depict Metrochem facilities.
