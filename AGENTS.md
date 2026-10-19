<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md

- This project is a plain static website: root `index.html`, `css/`, `js/`, `assets/`. No build step, no dependencies, no framework — do not reintroduce one.
- Deploy via GitHub Pages from branch `main`, folder `/(root)`. The `CNAME` file sets the custom domain `metrochempvt.works`; keep it.
- All styles live in `css/style.css` using CSS custom properties defined in `:root` (navy `#102A43`, brand `#1769AA`, accent `#00A6A6`); reuse these variables instead of adding new hardcoded colors.
- `js/main.js` is vanilla JS (no libraries): sticky header, mobile menu, IntersectionObserver scroll reveals, demo contact form.
- The contact form is intentionally a demo with no submission backend; do not wire it to a service unless asked.
