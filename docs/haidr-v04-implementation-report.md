# HAIDR v0.4 portfolio reconciliation — implementation checkpoint

Date: September 26, 2026. Status: implementation saved to `reconcile-haidr-v04`; Vercel preview created. **Not yet released or cleared for outreach.** Authenticated preview inspection and deployment identity changes remain blocked by Vercel/Google sign-in.

1. **State found.** Repository `philosomystic/aimr-research-portfolio`, production source commit `c96dedad27e71f09e157473cc451b6707e15ca96`. The deployed application is a static site rooted at `aimr-portfolio-v2.0-post-qa/portfolio-web-shell-v0.1-v2.0`. Audited all 21 existing HTML destinations, their live responses, assets, and the 94-card atlas. The older hub lived at `/research/human-ai-pathways/`; AIMR redirected there. Experimental Program and CDAVA remained current destinations.

2. **Page dispositions implemented.** The table below records the actual implementation, including concise new research-site pages. Existing visual language is retained: serif headings, neutral background, green accents, restrained cards, and the existing portrait.

| Existing destination | Disposition and current destination |
| --- | --- |
| `/` | REBUILD — current HAIDR introduction and faculty reading path |
| `/research/` | REBUILD — overview, paper, and Research Sites & Studies |
| `/research/5-minute-overview/` | REBUILD — complete frozen DOCX text and its three supplied graphics |
| `/research/human-ai-pathways/` | REDIRECT — `/research/haidr/` |
| `/research/aimr/` | REBUILD — substantive AIMR research-site page; redirect removed |
| `/research/study-0/` | REFRAME — AIMR empirical anchor; preserve 0R, 0R-X, 0P and frozen protocol boundary |
| `/research/cdava/` | DEPRECATE — unlisted, noindex provenance pointer explaining absorption |
| `/research/experimental-program/` | REDIRECT — `/research/sites/` |
| `/research/experimental-program/developmental-dashboard/` | MOVE + REFRAME — `/research/developmental-measurement-inference/` |
| `/research/experimental-program/wunderhorn/` | MOVE + REFRAME — `/research/wunderhorn/` |
| `/research/experimental-program/research-methodology-acquisition/` | MOVE — `/research/prospective/research-methodology-acquisition/` |
| `/research/experimental-program/wayfinder/` | MOVE + REFRAME — `/research/prospective/wayfinder/` |
| `/research/human-ai-development-research-landscape/` | REFRAME — v0.4 ancestry and inferential interfaces; retain atlas |
| `/research/human-ai-development-research-landscape/app/` | REFRAME — qualify hub/bridge language; retain all 94 nodes and existing IDs |
| `/research/human-ai-scholarship-method/` | KEEP + explicit reflexive-method boundary; retain substantive argument |
| `/about/` | REFRAME — current scholarly identity; preserve intellectual trajectory |
| `/cv/` | REFRAME — current program structure and v0.4 paper; preserve education, employment, and historical publications |
| `/teaching/`, `/scholarship/`, `/practice/` | KEEP continuity to existing CV section anchors; add provider redirects |
| `/404.html` | KEEP + current navigation and recovery links |

3. **New destinations.** Added `/research/haidr/`, `/research/scholarly-paper/`, `/research/sites/`, `/research/organizational-systems/`, `/research/developmental-measurement-inference/`, `/research/neuroscience-passive-sensing/`, `/research/collective-intelligence/`, `/research/wunderhorn/`, both `/research/prospective/…/` routes, and `/context-method/`. There are 21 canonical public HTML destinations, plus redirects, provenance, and the error page. A temporary noindex `/__qa__/` responsive inspection harness is preview-only and must be removed before production.

4. **Continuity and archives.** Nine redirect mappings are configured in `vercel.json`, with static forward-pointer fallbacks. The three non-deployed root atlas files were moved to `docs/archive/legacy-landscape/`. Earlier migration audits remain historical records. Redirect behavior still needs deployment-level verification.

5. **Content migrations.** Installed the complete frozen short overview; copied the unchanged 34-page v0.4 PDF to `/documents/HAIDR-Scholarly-Positioning-Paper-v0.4.pdf`. AIMR preserves the recognition subcycle, timescales, and 18 participation-protocol dimensions. Study 0 retains the September 18 formal launch boundary, September 3 Pilot 0P-01 exclusion, and Protocol v1.0. Dashboard material now follows measurement science → inference architecture → validation → possible feedback instrument. Prospective studies have explicit statuses. Wunderhorn uses the bounded hypothesis-generation sequence and independent-test requirement.

6. **Figures.** Installed all seven supplied images unchanged: Figures 1–6 and the bounded Wunderhorn graphic. The overview uses Figures 1 and 2 plus Wunderhorn; HAIDR uses Figures 1, 2, and 6; AIMR uses Figures 3 and 4; Sites uses Figure 5. All embedded PDF figures remain intact. Retained the portrait and two method-specific Scholarship Method figures. Older AIMR/HAIP/CDAVA architecture, experimental-configuration, dashboard, Wayfinder, and apprenticeship graphics are no longer displayed on current pages; original assets remain available for historical link continuity.

7. **Stale terminology.** Removed CDAVA dependencies, Experimental Program as umbrella, AIMR-as-program, HAIP-as-program, and the four-project hierarchy from current public content. Reconciled the atlas's earlier reflective/practical central chain and its co-intelligent/corrigibility labels with v0.4. Retained internal atlas compatibility keys so existing shared node/filter URLs continue to work.

8. **Intentional history.** Original AIMR Research Statement, AIMR Précis, AIMR — Living Framework, earlier Coherence paper, and published essay titles remain under clearly historical CV entries. CDAVA occurs only in its provenance pointer. Developmental Dashboard occurs once as the possible later instrument. Old terminology in unserved audits and original legacy asset filenames is provenance, not current program ontology.

9. **Vercel identity.** No project rename or domain assignment has yet been made. The target is exactly `andrew-nixon-research-portfolio.vercel.app`; no substitute was selected. Canonical, OpenGraph, Twitter, CV, sitemap, and robots references are prepared for that target and must not be promoted until domain assignment is verified.

10. **Old-domain status.** Existing production remains on `aimr-research-portfolio.vercel.app`. Its continued alias/redirect behavior after the requested rename is not yet configured or verified. The GitHub repository name was deliberately left unchanged; the user requested deployment identity changes.

11. **Automated QA.** All installed internal links, fragment targets, stylesheet/script/image paths passed the filesystem integrity check. All 121 nonempty frozen overview text blocks matched the DOCX in order; the PDF and seven uploaded figure blobs matched their source hashes. JavaScript syntax and whitespace checks passed. Heading hierarchy has no skipped levels; current images have descriptive alt text. Navigation uses native disclosures, keyboard focus outlines, and Escape handling. Ten external links returned HTTP 200; the historical ULSF article returned HTTP 406 and remains unverified. Live canonicals, provider redirects, downloads, atlas interactions, and keyboard behavior still require preview QA.

12. **Visual QA.** Inspected the original live Home to preserve the visual language. **Rebuilt desktop/mobile visual QA is not complete.** The preview is READY, but its protected page access is unavailable through the connected Vercel tools. The local browser runner also failed because its daemon could not bind a socket and no local Chromium was installed. A preview-only harness supports 1180, 390, and 320 CSS-pixel viewport inspection after browser sign-in.

13. **Substantive decisions not invented.** No new program constructs, studies, results, or revised canonical claims were added. The former broad Study 0 internalization falsifier was reconciled with v0.4's explicit distinction between human retention, coupled capability, specialization, displacement, and higher-order reorganization. The existing statement that formal P01 awaits administration is preserved; no later administration was inferred. No unresolved source contradiction prevented implementation.

14. **Remaining technical work.** Complete Vercel authentication; inspect all changed major pages at desktop/mobile widths; test menus, atlas filters/dialogs, links, downloads, redirect behavior, canonical/metadata delivery, and accessibility basics; resolve any discovered defects; establish the preferred domain and old-domain continuity; remove the temporary QA harness; recheck the final preview; then promote to production. No production deployment has been triggered.

15. **Outreach assessment.** The content and route implementation is ready for the remaining QA and release work. **The live portfolio is not yet outreach-ready under the acceptance criterion**, because it still serves the prior architecture and the rebuilt version has not passed visual QA or the deployment-identity gate.
