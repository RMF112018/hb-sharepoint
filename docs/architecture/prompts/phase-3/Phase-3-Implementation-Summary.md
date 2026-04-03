# Phase-3 Implementation Summary

## Executive summary
Phase 3 is justified and necessary.

The current HB Central homepage solution has already been split at the *toolbox registration* level into five separate web parts, but it has **not** been split at the **runtime bundle ownership** level. The shipped package still collapses all homepage surfaces back into one primary SPFx entry module and one shared primary JS asset. In parallel, the production packaging path remains hybrid: modern repo/workspace conventions on the outside, but a Vite-built shared runtime plus a custom gulp-driven SPFx packaging bridge on the inside.

The correct Phase 3 strategy is therefore:
1. retire the shared runtime-bundle bridge;
2. split each homepage surface into its own intentional web part bundle ownership boundary;
3. migrate the deployable homepage build/package workflow to the canonical Heft-native SPFx toolchain;
4. harden validation so future packages cannot regress into a single hidden runtime bundle.

## Current state summary

### Workspace / orchestration
- Root workspace uses `pnpm` and `turbo`.
- Root scripts include `build:sppkg` and homepage-specific packaging validation.

### Homepage package posture
- `apps/hb-central-homepage/package.json` is modern in general package shape, but deployable packaging is not Heft-native.
- Production packaging currently runs:
  - `pnpm build` for the homepage app
  - then `node ../../tools/run-spfx-package.mjs`
- The app depends on `@microsoft/sp-build-web@1.22.2` and `gulp@4.0.2`.

### Current deployable architecture
- Homepage app builds a Vite runtime with `src/index.tsx` as the single entry.
- `src/index.tsx` exports all mount functions from one shared runtime file.
- Each SPFx wrapper web part dynamically imports `../../../dist/homepage.js` and calls a surface-specific mount function.
- `apps/hb-central-homepage/config/config.json` defines **one** SPFx bundle key containing **all five** homepage web parts.

### Shipped `.sppkg` reality
The provided package proves the runtime coupling is still present:
- 5 web parts are registered;
- all 5 point to the same `entryModuleId`;
- all 5 point to the same primary asset file;
- only the `exportName` differs.

### Current validation posture
Current validation is useful but incomplete:
- it checks wrapper mount export references;
- it checks `.sppkg` structural validity and expected web part registrations;
- it does **not** prove that each surface has independent bundle ownership.

## Why Phase 3 is necessary
- The current shared runtime bundle creates unnecessary cross-loading.
- Any failure in the common runtime path can affect multiple surfaces at once.
- The current build chain has two ownership layers for production output: Vite runtime output and SPFx-gulp packaging output.
- Current Microsoft direction is Heft-native SPFx, with gulp moving toward unsupported status in the near-term roadmap.
- The repo is already modernized enough that the remaining hybrid packaging path is now the architectural outlier.

## Major decisions embedded in this package

### Decision 1 — keep one homepage solution package during Phase 3
Recommended unless implementation proves a strong operational need for multiple `.sppkg` packages.

Rationale:
- the user requested split web part bundle ownership, not necessarily solution-package fragmentation;
- one package reduces deployment/admin complexity while still enabling correct bundle separation.

### Decision 2 — remove the production dependency on `dist/homepage.js`
The current shared Vite runtime bridge is the main instability seam and should not remain authoritative for deployable output.

### Decision 3 — preserve shared UI at source/package level, not as a runtime-bundle contract
Common UI/components/tokens can remain shared through source modules and workspace packages. They should no longer require one monolithic exported runtime file to mount page surfaces.

### Decision 4 — migrate to canonical Heft-native SPFx structure before closing Phase 3
Do not create a custom pseudo-Heft system. Use the scaffolded/canonical SPFx Heft structure as the reference model, then port required customizations into supported Heft/SPFx extension points.

### Decision 5 — make bundle separation a tested, release-gated invariant
Phase 3 is not done until the package validation proves the shipped `.sppkg` no longer collapses all surfaces onto the same entry module / primary asset.

## Implementation sequencing summary
1. Freeze repo truth and create the evidence map.
2. Create a canonical Heft-native SPFx reference at the same baseline.
3. Lock runtime/React/version strategy.
4. Decompose the shared homepage runtime into per-surface source ownership.
5. Refactor wrappers so they no longer depend on one shared runtime artifact.
6. Split bundle ownership for each web part in the canonical Heft-native model.
7. Remove gulp-based packaging and replace it with Heft-native scripts/configuration.
8. Port any required customizations into supported Heft/SPFx extension points.
9. Replace validation so split bundle ownership is explicitly enforced.
10. Validate artifacts, deployability, and performance.
11. Update docs and close the phase with a go/no-go checklist.

## Confirmed findings
- Five homepage surfaces exist and are already registered as separate web parts.
- Current authoritative SPFx bundle config still places all surfaces in one bundle.
- Current wrappers still depend on one shared Vite runtime file.
- Current `.sppkg` still packages all surfaces behind one entry module / primary asset.
- Current package flow still depends on gulp.

## Strong inferences
- The current source manifests suggesting split path names do not reflect the actual deployed bundle ownership because the bundle config and shipped `.sppkg` still collapse to one shared entry.
- A Heft-native migration that does not also remove the shared runtime bridge would leave the core architectural problem unresolved.

## Open questions
- Keep or remove Vite entirely after Phase 3?
- Freeze on the current React/runtime posture or align to the selected SPFx-supported runtime before direct ownership refactor?
- Any nonstandard webpack behavior required, or can canonical Heft/SPFx scaffolding cover the final build path without ejection?
