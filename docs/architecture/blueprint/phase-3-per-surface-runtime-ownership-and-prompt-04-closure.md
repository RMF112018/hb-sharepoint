# Phase 3 Per-Surface Runtime Ownership and Prompt-04 Closure

## Purpose

This note records the approved Prompt-04 baseline for per-surface homepage runtime source ownership and serves as the formal closure artifact for the Phase-3 Prompt-04 open item.

## Prompt-04 refactor summary

### Decision

Refactor source ownership so each homepage surface has an explicit mount owner module, while preserving stable mount export contracts at the app entry boundary.

### What changed

Confirmed findings:

- Runtime source ownership is now expressed through one mount owner per homepage surface:
  - sections,
  - hero,
  - featured projects,
  - company pulse,
  - quick actions.
- `apps/hb-central-homepage/src/index.tsx` is reduced to a thin aggregator/bootstrap layer that delegates to per-surface owners.
- Existing exported mount function names and signatures remain stable (`mountHbCentralHomepage*`).
- Wrapper code is intentionally unchanged in Prompt-04 and still imports `../../../dist/homepage.js`.

Strong inferences:

- Source ownership is now explicit without introducing a hidden global runtime registry.
- This prepares Prompt-05 to rewire wrappers without requiring another ownership decomposition pass.

Open questions:

- Wrapper import-path migration away from `dist/homepage.js` is deferred to Prompt-05 by design.
- Packaging/bundle-boundary finalization remains deferred until later prompts aligned with Heft target-shape and validation gates.

## Why this strategy is safest now

- Separates source-ownership refactor from wrapper wiring migration to reduce blended-change risk.
- Preserves existing behavior and mount contracts while reducing runtime authority concentration.
- Keeps Prompt-04 focused on source structure and avoids premature packaging-config changes.

## Guardrail alignment

Confirmed findings:

- Shared UI and runtime component reuse remain intact at source/package level.
- No homepage redesign or visual behavior rework is introduced.
- Packaging-config and wrapper-path finalization are intentionally deferred.

## Closure conditions

This planning item is considered closed when:

- source structure expresses one explicit mount owner per homepage surface;
- `src/index.tsx` is no longer the monolithic runtime authority and functions as aggregator/bootstrap;
- stable mount export contracts are preserved for downstream wrapper/validation compatibility;
- Prompt-04 status is propagated into Phase-3 planning and governance routing docs;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- per-surface source ownership modules now exist and are the active mount owners;
- app entrypoint now delegates to per-surface owners while preserving stable exports;
- Prompt-04 baseline status is propagated across Phase-3 planning and governance routing docs;
- root manifest patch version is advanced for this governance update.
