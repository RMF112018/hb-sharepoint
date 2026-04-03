# Phase 3 Split Bundle Ownership and Prompt-06 Closure

## Purpose

This note records the approved Prompt-06 baseline for real per-surface bundle ownership and serves as the formal closure artifact for the Phase-3 Prompt-06 open item.

## Prompt-06 implementation summary

### Decision

Implement real split bundle ownership so each homepage surface web part resolves to its own deployable bundle boundary in the packaged artifact.

### What changed

Confirmed findings:

- Homepage SPFx bundle authority no longer uses one shared bundle key for all surfaces.
- Bundle ownership is now explicitly split across five surface-specific bundle keys:
  - sections,
  - hero,
  - featured projects,
  - company pulse,
  - quick actions.
- Wrapper/runtime ownership from Prompt-05 remains intact with no production fallback to `dist/homepage.js`.
- Packaged artifact validation now includes ownership-aware assertions that fail if:
  - packaged web part `entryModuleId` ownership collapses across surfaces,
  - primary script-resource key/path ownership collapses across surfaces.
- Existing `.sppkg` safety checks remain active (registrations, localhost leakage, unsupported feature registration checks).

Strong inferences:

- Enforcing ownership at artifact level reduces false confidence from source-only configuration checks.
- Split bundle ownership reduces cross-surface blast radius for future runtime and packaging changes.

Open questions:

- Full Heft-native packaging-path migration remains Prompt-07 scope.
- Additional Heft extension-point customization remains downstream scope.

## Why this strategy is safest now

- Preserves one-solution package shape while removing hidden shared bundle coupling.
- Separates bundle-boundary closure from later packaging-authority migration to limit blended risk.
- Converts split ownership from intent to release-gated, artifact-proven behavior.

## Guardrail alignment

Confirmed findings:

- Existing web part IDs and aliases remain stable.
- No public API/type/export contract changes are introduced.
- Shared code reuse remains source/package-level and does not require ownership collapse.

## Closure conditions

This planning item is considered closed when:

- per-surface bundle keys are authoritative for all five homepage web parts;
- packaged artifact ownership validation proves non-collapsed per-surface entry-module and script-resource ownership;
- Prompt-06 status is propagated into Phase-3 planning and governance routing docs;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- bundle ownership is explicitly split per homepage surface in SPFx configuration;
- `.sppkg` validation now enforces ownership separation at artifact level;
- Prompt-06 baseline status is propagated across Phase-3 planning and governance routing docs;
- root manifest patch version is advanced for this governance update.
