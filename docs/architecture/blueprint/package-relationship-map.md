# Package Relationship Map

## Purpose

This document defines the approved ownership and dependency direction for the repository baseline created by Prompt-01.

## Ownership model

- Root workspace: owns repository-level configuration, orchestration, and the initial versioned manifest.
- `apps/`: owns deployable application hosts and future SPFx solution containers.
- `packages/`: owns non-visual shared logic, shared contracts, and platform helpers only when they have real consumers.
- `@hbc/ui-kit`: owns reusable visual UI, shared tokens, and reusable interface primitives.

### Prompt-02 phase-1 target ownership map

| Area | Primary owner |
| --- | --- |
| SPFx host/runtime integration and deployable packaging | `apps/hb-central-homepage` |
| Reusable visual UI primitives | `@hbc/ui-kit` (`packages/ui-kit`) |
| Shared brand/non-visual token contracts | `packages/brand-tokens` |
| Shared SharePoint/core adapters | `packages/sharepoint-core` |
| Homepage shell/hero feature logic | `packages/homepage-shell` |
| Featured projects feature logic | `packages/featured-projects` |
| Company pulse feature logic | `packages/company-pulse` |
| Quick actions feature logic | `packages/quick-actions` |

## Dependency direction

- `apps/` may depend on `packages/` and `@hbc/ui-kit`.
- `packages/` may depend on other shared packages only when the dependency direction remains clear and non-circular.
- `packages/` must not depend on app-local implementation code.
- Reusable visual UI must not be recreated inside app-local or feature-local packages when `@hbc/ui-kit` is the right owner.
- Feature packages may depend on `packages/sharepoint-core`, `packages/brand-tokens`, and `@hbc/ui-kit` when boundaries remain clear.
- Feature packages must not create direct circular dependencies on other feature packages.
- Shared packages should expose explicit root exports (`"."`) and avoid ambiguous deep-export patterns.
- Brand color/token contracts should be authored once in `@hbc/brand-tokens` and consumed by `@hbc/ui-kit` and app surfaces via shared exports.

## Guardrails

- Do not create speculative packages before Prompt-02 or later prompts justify them.
- Do not create a local visual primitives package that competes with `@hbc/ui-kit`.
- Keep SharePoint wiring and deployable composition in the app layer rather than in shared packages.
- Document any future ownership reversal or durable architectural exception before implementing it.
