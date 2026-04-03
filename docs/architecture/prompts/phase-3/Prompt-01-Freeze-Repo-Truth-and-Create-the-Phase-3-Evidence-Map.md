# Prompt 01 — Freeze Repo Truth and Create the Phase 3 Evidence Map

## Objective
Create the authoritative repo-truth baseline for Phase 3 before any implementation changes occur.

## Scope
Only establish evidence. Do not refactor code yet.

## Repo-truth files to inspect first
- `package.json`
- `pnpm-workspace.yaml`
- `apps/hb-central-homepage/package.json`
- `apps/hb-central-homepage/config/config.json`
- `apps/hb-central-homepage/config/package-solution.json`
- `apps/hb-central-homepage/config/write-manifests.json`
- `apps/hb-central-homepage/gulpfile.cjs`
- `apps/hb-central-homepage/src/index.tsx`
- homepage web part wrappers + manifests
- `tools/run-spfx-package.mjs`
- `tools/validate-homepage-webpart-wiring.mjs`
- `tools/validate-sppkg.mjs`

## Instructions
1. Audit the smallest authoritative file set first.
2. Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.
3. Create a concise Phase 3 evidence map document in the repo that records:
   - current homepage surfaces;
   - current bundle ownership model;
   - current runtime ownership model;
   - current packaging path;
   - current validation coverage;
   - confirmed findings vs strong inferences vs open questions.
4. Explicitly record that the current authoritative bundle config places all five homepage surfaces under one bundle key unless repo truth proves otherwise.
5. Explicitly record any production-path dependency on `dist/homepage.js`.

## Constraints / guardrails
- No code changes beyond documentation/evidence capture.
- No speculative future architecture yet.
- No repository-wide reading spree.

## Acceptance criteria
- A repo document exists that any later Phase 3 prompt can treat as the frozen baseline.
- The document clearly states whether the current deployable path is hybrid, gulp-based, or Heft-native.
- The document names every homepage surface and current ownership seam.

## Required outputs
- Phase 3 evidence map markdown file committed in the appropriate docs/reviews location.
