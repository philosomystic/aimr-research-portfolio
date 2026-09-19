# HAIDR identity migration audit

Audit completed before product-source edits on 19 September 2026.

Baseline: `90ff49f`, the current `main` revision at the start of this migration. This is a controlled identity propagation and state repair aligned to frozen HAIDR Canon v0.14, not a redesign or substantive rewrite.

## Governing hierarchy

- Current scientific and public program identity: **Human–AI Developmental Research Program (HAIDR)**
- Subtitle: **Toward a Design Science of Human–AI Developmental Ecologies**
- Scientific domain: **Human–AI Developmental Research**
- Principal theoretical and design object: **developmental ecologies**
- Longitudinal object of explanation: **human–AI pathways**
- Boundary construct: **developmental horizon**
- Specific mode and historical lineage: **AI-mediated reflection (AIMR)**
- Superseded program identity retained for provenance: **The Human–AI Pathways Project (HAIP)**

Central research question:

> What configurations of human–AI participation cultivate durable human capacities—and how can we know when development has actually occurred?

Core empirical distinction:

> AI-supported performance does not by itself demonstrate human development.

## Semantic rulings

| Occurrence family | Classification | Migration ruling |
| --- | --- | --- |
| Home, Research index, current program overview, metadata, cards, and calls to action | Current program identity | Migrate to HAIDR and retain the subtitle, tagline, theoretical architecture, and current routes. |
| Study 0, Experimental Program, CDAVA, Landscape, project pages, About, and CV current-program references | Current program identity | Use HAIDR or the expanded program name according to context. |
| Human–AI pathways definitions and lower-case theoretical uses | Technical construct | Preserve as the longitudinal object of explanation; do not use it as the umbrella brand. |
| AIMR falsifiability quotation and original working-document titles | Historical | Preserve verbatim with explicit provenance and scope notes. |
| AIMR as AI-mediated reflection | Reflection-specific | Preserve as a mode within the broader HAIDR program. |
| About-page naming history | Historical | Preserve the sequence AIMR → HAIP → HAIDR and mark HAIDR as current. |
| `/research/human-ai-pathways/`, `/research/aimr/`, `aimr-*` CSS hooks, Landscape `aimr` data keys/hash facets/message types, and `*-pathways.svg` filenames | Nonsemantic compatibility identifiers | Preserve to avoid breaking inbound links, saved views, and integrations; migrate all user-visible labels independently. |
| Legacy migration audit and occurrence ledger | Archive/provenance | Preserve as records of the earlier AIMR → HAIP migration. |
| Original raster concept art beneath current SVG identity overlays | Historical source material | Preserve pixels and update only the visible vector identity layer. |

## State repair

Study 0P is no longer described as awaiting protocol finalization or launch. The current state is:

- Protocol v1.0 frozen;
- baseline captured;
- formal launch boundary established on 18 September 2026;
- 3 September Pilot 0P-01 remains pilot material and is excluded from the formal series;
- formal P01 awaits administration;
- six Research Reasoning Probe cycles remain planned across approximately twelve weeks, including delay, transfer, perturbation, scaffold reduction, and withdrawal.

The experimental logic is normalized as:

> hold task/system relatively constant → manipulate developmental ecology → observe supported performance → alter or withdraw scaffolding → test persistence, transfer, and human-capacity change

## Scope and priority

### P0

- Home
- Research index and program overview
- Study 0
- Experimental Program
- global navigation and compatibility redirect
- About
- CV

### P1

- four Prospective Research project pages and identity overlays
- CDAVA
- Human–AI Development Research Landscape shell and app
- Human–AI Scholarship Method
- diagrams, captions, metadata, and internal labels

## Intentionally unresolved theoretical questions

1. **Falsifiability scope.** The earlier AIMR formulation is retained as a historical quotation with its existing scope note; the migration does not silently create a replacement criterion.
2. **Capacity locus vocabulary.** Human-internalized, coupling-dependent, emergent co-intelligent, and AI capacities remain analytically distinct pending further theoretical refinement.
3. **Diagram causal wording.** The process diagram's interior causal wording remains explicitly flagged as stronger than current evidence; identity propagation does not settle that claim.

## Design constraints

- Preserve the existing typography, color system, layout, portrait, project art, and information architecture.
- Keep the faculty brief as the concise first-layer outreach artifact and this portfolio as the second-layer depth environment.
- Do not rename stable public routes or technical selectors during an identity-only migration.
- Preserve all 12 Landscape territories, 94 Level-2 records, nine fault lines, seven study families, and interactive behavior.

## Verification record

Static verification completed on 19 September 2026:

- all 20 HTML pages parsed by the route/reference checker;
- 239 local references resolved, including page fragments;
- all 19 HTML images retain `alt` attributes;
- non-redirect public pages have one H1 after repairing the Study 0 and full-screen Landscape heading structures;
- JavaScript syntax checks pass for the portfolio shell, Landscape app, and identity-overlay generator;
- `git diff --check` passes;
- the Landscape corpus remains intact at 12 territories, 94 Level-2 nodes, nine fault lines, seven study families, and 15 developmental constructs;
- visible stale-identity review found no unexplained current-program uses of AIMR, HAIP, or Human–AI Pathways Project;
- the two architecture SVGs and all three prospective-research identity layers expose HAIDR in their accessible titles and visible vector text;
- direct inspection confirmed that the source WebP concept art remains intact beneath the SVG identity overlays.

Preview and production browser verification remain to be recorded after the branch deployment is available.
