# Human–AI Pathways semantic migration audit

Audit completed before product-source edits on 16 September 2026.
Baseline: `096d62fbdaa664ed747c1dc2830de7713014161a`, the current GitHub main branch and successfully deployed Vercel revision. Today's prospective-project pages, overview bridge, and Developmental Process Architecture are included. The older September 10 ZIP is not used as the editing baseline.

## Governing hierarchy

- Signature identity: **THE HUMAN–AI PATHWAYS PROJECT**
- Direction: **Toward a Design Science of Human–AI Developmental Ecologies**
- Program descriptor: **Human–AI Developmental Research Program**
- Tagline: **Studying development through the ecologies of participation that shape human capacities.**
- Domain: human–AI developmental research.
- Theoretical object: developmental ecologies; recursive participation and other mechanisms operate within them.
- Pathways: “Human–AI pathways are longitudinal patterns of developmental possibility generated through sustained participation in human–AI developmental ecologies.”
- Empirical scope: “sustained participation in differently configured human–AI developmental ecologies can produce divergent longitudinal patterns of capacity formation, displacement, agency, dependency, coherence and fragmentation”.

## Semantic decisions

| Surface / occurrence family | Classification | Action |
| --- | --- | --- |
| Home masthead, introductory program definition, overview card, doctoral-program statement | Program-level | Introduce the full hierarchy; retain Andrew Nixon's portfolio identity, research question, and empirical distinction. |
| Research index and overview title, metadata, breadcrumbs, program-level prose | Program-level | Use Human–AI Pathways for the project and Human–AI Developmental Research Program for the program. Use “the program” in repeated prose. |
| Study 0's program references and onward links | Program-level | Situate Study 0 within the project; retain methods, evidence qualifications, limitations, and preliminary signals. |
| Experimental Program and four prospective project pages | Program-level | Preserve the experimental structure and all four projects; migrate their parent-program references. |
| Landscape shell, full-screen app, cards, labels, announcements, and unused root copy | Program-level or theoretical/mislabeled | Use Human–AI Pathways for ownership; “developmental constructs” and “research bridge cards” for the theoretical functions. Keep 12 territories, 94 nodes, all card content, and interactions. |
| “Reflective pathway” and “Practical pathway” in the Landscape | Theoretical/mislabeled | Relabel as illustrative reflective/practical participation processes, avoiding an implied exhaustive taxonomy of longitudinal Human–AI pathways. |
| “AIMR Developmental Process Architecture” | Theoretical/mislabeled | “Human–AI Developmental Process Architecture”; update figure identity, title, alt text, caption and explanatory-note label; retain diagram mechanisms. |
| “AIMR Experimental Configurations”, experimental ontology, design-science cycle, AIMR constructs | Theoretical/mislabeled | Use descriptive names: “Developmental Ecology: Experimental Configurations”, “Developmental research ontology”, “Developmental ecology design cycle”, “developmental constructs”. |
| About's current research identity and future plans | Program-level | Introduce the project and program; retain the full intellectual and professional narrative. |
| About's account of how AIMR arose | Historical | Preserve AIMR, explicitly marking it as the project's earlier reflection-centered framing. |
| CV current identity, research interests, program, Landscape and experimental entries | Program-level | Migrate current identity without changing dates, credentials, work history, or authorship. |
| AIMR Research Statement; AIMR Précis; AIMR — Living Framework | Historical | Preserve original working-paper titles; add a historical-title note. No claim that unseen documents have themselves been revised. |
| “Recognition Precedes Agency: How AI-Mediated Reflection Compresses the Path from Insight to Action” | Reflection-specific + historical | Retain the exact essay title and link. Retain ordinary reflection language throughout the portfolio. |
| Current broad falsifiability statement | Theoretical/mislabeled; unresolved | Preserve verbatim, flag A1 below rather than silently rewriting its theoretical scope. |
| Old raster assets not referenced by current pages | Historical | Preserve unchanged. Do not silently update or delete archived figures. |
| `/research/aimr/` internal destination | Program-level route | Move current overview to `/research/human-ai-pathways/`; redirect the old route, preserving fragments and query strings. Keep old asset URLs and historical source access. |
| Lowercase `aimr` JSON keys, element IDs, CSS names, postMessage types, hash facets | Nonsemantic compatibility identifiers | Retain them where changing them would break integrations or saved Landscape links. All visible labels migrate independently. |

The audit enumerated **191 semantic occurrences in 17 files**: 114 program-level, 69 theoretical/mislabeled, 7 historical, and 1 reflection-specific (with some historical overlap). The accompanying occurrence ledger records case-sensitive AIMR and expanded-name matches with file, baseline line, classification, context and action. Repeated metadata and navigation inherit their surface's semantic decision. Lowercase compatibility identifiers are not program language.

## Explicit theoretical flags

**A1 — Falsifiability scope.** Overview and Study 0 say that no persistent, transferable human gains after scaffold withdrawal would undermine the claim that AI systems can function as developmental ecologies. That conflates a human-internalization claim with the broader possibility of durable coupled development, dependency, displacement, or fragmentation. Keep the original proposition visibly identified as an earlier AIMR formulation and add a scope note. Do not invent a replacement falsification criterion in this migration.

**A2 — Capacity vocabulary and locus.** “Functional capacity”, “coupled capacity”, “emergent co-intelligent capacity”, “AI capacities”, and “human capacity” occur in distinct analytic roles. Do not mechanically substitute “capability”, collapse those roles, or introduce an invariant capacities → competencies → capabilities → mastery → wisdom staircase. Preserve the H/C/E locus distinctions and flag that their precise relation to that broader vocabulary remains for theoretical review.

**A3 — Diagram's causal wording.** The process figure's center reads “Recursive Participation Produces Developmental Change”; elsewhere the figure and accompanying text treat development as candidate and empirically tested. Preserve its substantive interior and flag that the central wording is stronger than the evidence. Its “AI Capacities” node also belongs to A2. Identity corrections do not settle either claim.

## Authorized architecture reconciliation

Study 0 currently says prospective probes are running, which conflicts with the agreed 14 September revision. Correct to pilot / pre-launch protocol development; formal 0P awaits the refreshed retrospective archive, protocol and exposure ledger, and a fresh baseline. Include LDSI (Longitudinal Developmental Sequence Inference), LPTA (Longitudinal Prompt-Trace Analysis), and 0R-X nested within 0R. Do not represent the archive refresh or formal launch as already completed. Preserve the original empirical material alongside these clarifications.

## Design and verification constraints

Preserve the established serif/sans typography, green accent, spacing, cards, portrait, prospective artwork, and all substantive sections. Use a compact responsive treatment for the longer naming hierarchy. Precise diagrams need exact text and preserved relationships; identity layers may be rendered as vector text while original diagram content remains intact. Keep historical originals.

Verify all internal routes and fragments, Landscape search/filter/card behavior, the overview note, responsive layout, figure titles/captions, image loading, and preservation of all 94 corpus records. Publish through the existing GitHub → Vercel workflow and retain the existing audience and domain.
