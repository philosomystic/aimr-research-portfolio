# Portfolio Web Shell v0.1 + Human–AI Development Research Landscape V2.0

Static, deployable research portfolio.

The canonical V2.0 landscape is integrated at:
`/research/human-ai-development-research-landscape/app/`

Production assets:
- `app/index.html`
- `app/app.css`
- `app/app.js`
- `app/corpus.json` — canonical 12-territory / 94-card bridge corpus

No build command is required for Vercel.


## Production QA

Browser QA is performed against the exact static production build in Chromium at desktop and mobile viewport sizes. The landscape app uses direct JSON loading (with CDN compression), keyboard territory navigation, focus-managed dialog behavior, responsive touch targets, and a full-screen route in addition to the portfolio embed.
