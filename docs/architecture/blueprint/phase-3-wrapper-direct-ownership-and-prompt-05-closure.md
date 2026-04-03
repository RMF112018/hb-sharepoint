# Phase 3 Wrapper Direct Ownership and Prompt-05 Closure

## Purpose

This note records the approved Prompt-05 baseline for direct SPFx wrapper surface ownership and serves as the formal closure artifact for the Phase-3 Prompt-05 open item.

## Prompt-05 refactor summary

### Decision

Remove production wrapper reliance on `../../../dist/homepage.js` and bind each homepage wrapper directly to its per-surface runtime owner module.

### What changed

Confirmed findings:

- All five homepage wrappers now import one explicit per-surface owner module from `src/runtime/owners/*`.
- No homepage wrapper now uses a production dynamic import of `../../../dist/homepage.js`.
- Wrapper lifecycle behavior remains explicit:
  - container creation in `render()`,
  - persisted unmount callback storage,
  - explicit `onDispose()` unmount and container cleanup,
  - explicit failure-state UX in wrapper-level `catch` paths.
- Wrapper-to-owner mapping is now one-to-one:
  - homepage sections wrapper -> `mountHomepageSections`,
  - hero wrapper -> `mountHomepageHero`,
  - featured projects wrapper -> `mountHomepageFeaturedProjects`,
  - company pulse wrapper -> `mountHomepageCompanyPulse`,
  - quick actions wrapper -> `mountHomepageQuickActions`.
- `tools/validate-homepage-webpart-wiring.mjs` now enforces direct-owner import/call posture and fails if any wrapper reintroduces `../../../dist/homepage.js`.

Strong inferences:

- Removing shared bridge imports at the wrapper boundary reduces accidental cross-surface runtime coupling risk.
- The direct wrapper-to-owner mapping improves maintainability and makes ownership regressions easier to catch in release-gate validation.

Open questions:

- Final Heft-native packaging/bundle-boundary governance remains downstream scope in later phase prompts.
- Additional ownership-aware release-gate hardening beyond wrapper wiring checks remains downstream scope.

## Why this strategy is safest now

- Preserves stable runtime behavior while removing a known production coupling seam.
- Keeps scope narrow to wrapper ownership migration and governance closure, avoiding premature packaging redesign.
- Aligns wrapper posture with Prompt-04 per-surface source ownership so implementation and governance are now consistent.

## Guardrail alignment

Confirmed findings:

- No public API/type/export shape is changed by this refactor.
- Per-surface runtime ownership remains explicit and bounded.
- Shared source reuse remains at source/package level, not through a shared production runtime bridge.

## Closure conditions

This planning item is considered closed when:

- every homepage wrapper directly binds to one intended surface owner module;
- no wrapper relies on `../../../dist/homepage.js` in production path;
- wrapper lifecycle semantics remain explicit and stable;
- Prompt-05 closure status is propagated into Phase-3 planning and governance routing docs;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- wrapper runtime ownership is now direct per-surface and no longer bridge-based;
- wiring validation now enforces direct-owner posture and blocks bridge regressions;
- Prompt-05 baseline status is propagated across Phase-3 planning and governance routing docs;
- root manifest patch version is advanced for this governance update.
