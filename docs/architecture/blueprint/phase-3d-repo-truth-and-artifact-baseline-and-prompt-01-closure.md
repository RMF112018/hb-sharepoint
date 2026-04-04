# Phase 3d Repo-Truth and Artifact Baseline and Prompt-01 Closure

## Purpose

This note records the approved Prompt-01 baseline for phase-3d repo-truth and emitted-artifact tracing. It serves as the formal closure artifact for the phase-3d Prompt-01 open item.

## Prompt-01 baseline findings

Confirmed findings:

- Phase-3d Prompt-01 evidence artifacts are frozen at `docs/architecture/prompts/phase-3d/evidence/2026-04-04-prompt-01/`.
- All five homepage wrappers dynamically import browser-safe owner entrypoints under `src/runtime/owners-browser/mountHomepage*.js`.
- Those owner entrypoints currently render placeholder success-path copy (`...surface is available`, `...content is available`, `...updates are available`, `...shortcuts are available`, `...highlights are available`) instead of mounting real surface owners.
- Dist emitted primary bundles and lazy chunks preserve this same chain and wording:
  - sections: `hb-central-homepage-sections-web-part_9c9c07b55acd9bfb8d5d.js` -> `chunk.88_5b3113cfd8258bab274f.js`
  - hero: `hb-central-homepage-hero-web-part_6dc4c352c10bc6803b91.js` -> `chunk.921_0af80efb9abe1a4e1f50.js`
  - featured projects: `hb-central-homepage-featured-projects-web-part_2671f8877c3d645901c2.js` -> `chunk.763_6865db265c0b9512f796.js`
  - company pulse: `hb-central-homepage-company-pulse-web-part_caa97484d972ab9a0346.js` -> `chunk.678_77ffaf1b55c80a8dbb6c.js`
  - quick actions: `hb-central-homepage-quick-actions-web-part_c5716ad01ec6875975a6.js` -> `chunk.462_eadda890a8478f26dcd9.js`
- Packaged `.sppkg` contents at `dist/sppkg/hb-central-homepage.sppkg` include the same five primary bundles and five lazy chunks under `ClientSideAssets/`.

Strong inferences:

- Current defect class is not chunk-load failure; it is active runtime path resolution to placeholder owner behavior.
- The substitution boundary is the browser-safe owner layer (`src/runtime/owners-browser/*`) rather than package-assembly-only divergence.
- Prompt-02 should target owner-path restoration while preserving wrapper topology and browser-safe loading posture.

Open questions:

- Prompt-02 owns restoration to real mounts.
- Prompt-03 owns placeholder-regression hardening.
- Prompt-04 owns rebuild/deploy/live-proof closure.

## Evidence outputs

Prompt-01 required artifacts are present:

- `docs/architecture/prompts/phase-3d/evidence/2026-04-04-prompt-01/01-baseline-trace-report.md`
- `docs/architecture/prompts/phase-3d/evidence/2026-04-04-prompt-01/01-emitted-chunk-evidence.md`
- `docs/architecture/prompts/phase-3d/evidence/2026-04-04-prompt-01/01-surface-root-cause-matrix.md`

## Closure conditions

This Prompt-01 item is considered closed when:

- five-surface wrapper-to-owner and owner-to-mounted-component traces are documented from current repo truth;
- five-surface emitted-chunk trace and source-vs-emitted evidence are documented from current artifact truth;
- placeholder/stub phrase-family and fallback semantics inventory is documented with per-surface defect classification;
- phase-3d prompt-package docs and repository routing docs reference Prompt-01 closure authority;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- phase-3d Prompt-01 evidence artifacts are frozen in `docs/architecture/prompts/phase-3d/evidence/2026-04-04-prompt-01/`;
- this canonical phase-3d Prompt-01 closure authority note now exists;
- phase-3d prompt-package docs and repository routing docs reference this closure baseline;
- root manifest patch version is advanced for this governance update.
