# HAIDR v0.4 portfolio reconciliation — implementation checkpoint

Date: September 26, 2026. Status: implementation saved to `reconcile-haidr-v04`; Vercel preview created. **Not yet released or cleared for outreach.** Authenticated preview access is established; all major public pages have been visually inspected. Final preview and production release are in progress.

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

3. **New destinations.** Added `/research/haidr/`, `/research/scholarly-paper/`, `/research/sites/`, `/research/organizational-systems/`, `/research/developmental-measurement-inference/`, `/research/neuroscience-passive-sensing/`, `/research/collective-intelligence/`, `/research/wunderhorn/`, both `/research/prospective/…/` routes, and `/context-method/`. There are 21 canonical public HTML destinations, plus redirects, provenance, and the error page. The temporary noindex `/__qa__/` responsive inspection harness was removed from the release candidate after inspection.

4. **Continuity and archives.** Nine redirect mappings are configured in `vercel.json`, with static forward-pointer fallbacks. The three non-deployed root atlas files were moved to `docs/archive/legacy-landscape/`. Earlier migration audits remain historical records. Preview testing confirmed the static fallbacks. Redirect sources were corrected to include trailing slashes so the provider rules match the canonical path format; the final preview will verify these rules.

5. **Content migrations.** Installed the complete frozen short overview; copied the unchanged 34-page v0.4 PDF to `/documents/HAIDR-Scholarly-Positioning-Paper-v0.4.pdf`. AIMR preserves the recognition subcycle, timescales, and 18 participation-protocol dimensions. Study 0 retains the September 18 formal launch boundary, September 3 Pilot 0P-01 exclusion, and Protocol v1.0. Dashboard material now follows measurement science → inference architecture → validation → possible feedback instrument. Prospective studies have explicit statuses. Wunderhorn uses the bounded hypothesis-generation sequence and independent-test requirement.

6. **Figures.** Installed all seven supplied images unchanged: Figures 1–6 and the bounded Wunderhorn graphic. The overview uses Figures 1 and 2 plus Wunderhorn; HAIDR uses Figures 1, 2, and 6; AIMR uses Figures 3 and 4; Sites uses Figure 5. All embedded PDF figures remain intact. Retained the portrait and two method-specific Scholarship Method figures. Older AIMR/HAIP/CDAVA architecture, experimental-configuration, dashboard, Wayfinder, and apprenticeship graphics are no longer displayed on current pages; original assets remain available for historical link continuity.

7. **Stale terminology.** Removed CDAVA dependencies, Experimental Program as umbrella, AIMR-as-program, HAIP-as-program, and the four-project hierarchy from current public content. Reconciled the atlas's earlier reflective/practical central chain and its co-intelligent/corrigibility labels with v0.4. Retained internal atlas compatibility keys so existing shared node/filter URLs continue to work.

8. **Intentional history.** Original AIMR Research Statement, AIMR Précis, AIMR — Living Framework, earlier Coherence paper, and published essay titles remain under clearly historical CV entries. CDAVA occurs only in its provenance pointer. Developmental Dashboard occurs once as the possible later instrument. Old terminology in unserved audits and original legacy asset filenames is provenance, not current program ontology.

9. **Vercel identity.** The project is now named `andrew-nixon-research-portfolio` (confirmed after browser sign-in; the rename was already present). Added the exact requested `andrew-nixon-research-portfolio.vercel.app` domain to Production; Vercel reports Valid Configuration and anonymous HTTP access returns 200. Canonical, OpenGraph, Twitter, CV, sitemap, and robots references use the new domain. The GitHub repository name is unchanged.

10. **Old-domain status.** Configured `aimr-research-portfolio.vercel.app` as a permanent 308 redirect to the new domain. Anonymous HTTP verification confirms that paths and query strings are retained. Existing production content has not yet been replaced with the reconciled branch.

11. **Automated QA.** All installed internal links, fragment targets, stylesheet/script/image paths passed the filesystem integrity check. All 121 nonempty frozen overview text blocks matched the DOCX in order; the PDF and seven uploaded figure blobs matched their source hashes. JavaScript syntax and whitespace checks passed. Heading hierarchy has no skipped levels; current images have descriptive alt text. Navigation uses native disclosures, keyboard focus outlines, and Escape handling. Ten external links returned HTTP 200; the historical ULSF article returned HTTP 406 and remains unverified. Live canonicals, provider redirects, downloads, atlas interactions, and keyboard behavior still require preview QA.

12. **Visual QA.** Inspected every one of the 21 canonical public destinations at 1180 and 390 CSS-pixel frame widths, including the atlas, using the authenticated Vercel preview. Reviewed long-page typography, figure sizing, cards, table wrapping, the portrait, and CV link wrapping. All observed layouts fit their viewport. Also inspected Home navigation at 320 pixels: menus remain within the viewport and Escape closes them and returns focus. Atlas search returned 10 matching offloading results; a detail card opened correctly on mobile and dismissed with Escape. No site-origin console errors were captured (browser-extension errors were excluded). Fixed duplicate/misplaced landing-page breadcrumbs. These are responsive browser-frame checks, not claims of physical-device testing.

13. **Substantive decisions not invented.** No new program constructs, studies, results, or revised canonical claims were added. The former broad Study 0 internalization falsifier was reconciled with v0.4's explicit distinction between human retention, coupled capability, specialization, displacement, and higher-order reorganization. The existing statement that formal P01 awaits administration is preserved; no later administration was inferred. No unresolved source contradiction prevented implementation.

14. **Remaining technical work.** Verify the final preview after breadcrumb/routing corrections and removal of the QA harness; publish to production; check all public URLs, metadata, assets, redirects, and the faculty reading path against the live domain. The historical external ULSF article remains unverified (HTTP 406). No production deployment has yet been triggered.

15. **Outreach assessment.** The content and route implementation is ready for the remaining QA and release work. **The live portfolio is not yet outreach-ready under the acceptance criterion**, because it still serves the prior architecture and the rebuilt version has not passed visual QA or the deployment-identity gate.
