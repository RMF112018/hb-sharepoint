# HB Central Homepage — Phase 1 Implementation Summary

## Objective

Phase 1 Prompt-01 is now treated as an executed baseline. The approved direction is to evolve the homepage from a single monolithic custom web part into a **hybrid model** that combines focused custom web parts with native SharePoint composition where native capability is already sufficient.

## Prompt-01 baseline freeze (approved)

### Current-state map (Prompt-01 baseline)
The current baseline for Prompt-01 decisions is:

- one deployable homepage app host at `apps/hb-central-homepage/`
- established homepage section ownership in the app layer (hero, projects, pulse, people, actions, news/recognition)
- shared reusable visual primitives in `@hbc/ui-kit`
- deterministic packaging through the existing SPFx `.sppkg` path
- governance-first docs that require architecture decisions before broad refactors

### Target hybrid model (Phase 1)
Use focused custom web parts for differentiated HB Central experiences:

- homepage shell / hero
- featured projects
- company pulse
- quick actions

Use native SharePoint for author-managed content where native capabilities are strong:

- News
- Quick Links (when native behavior is sufficient)
- Events and other standard editorial modules

Keep shared foundation extraction as a first-class Phase 1 activity:

- brand/theme tokens
- shared UI primitives
- shared homepage layout primitives
- shared SharePoint/context/data helpers

## Custom vs native decision matrix (Prompt-01)

| Homepage zone | Phase-1 classification | Notes |
| --- | --- | --- |
| Shell / Hero | Custom web part | Premium branded entry experience |
| Featured Projects | Custom web part | Differentiated editorial + interaction needs |
| Company Pulse | Custom web part | Purpose-built metrics/callout behavior |
| Quick Actions | Custom web part | App-specific action grouping behavior |
| News | Native SharePoint | Use native where configuration is sufficient |
| Quick Links (selected cases) | Native SharePoint | Prefer native for low-complexity link curation |
| Events / additional editorial modules | Native SharePoint | Preserve page-authoring flexibility |

## Deployment strategy decision (Prompt-01)

For Phase 1, keep **one deployable SPFx solution** while decomposing source ownership into focused packages/components. Do not split deployable `.sppkg` outputs unless a later prompt proves a concrete operational need.

## Approved execution order

1. `Prompt-01-Establish-Phase-1-Hybrid-Refactor-Baseline.md`
2. `Prompt-02-Create-Target-Package-Map-and-Directory-Structure.md`
3. `Prompt-03-Scaffold-Shared-Packages-and-Build-Boundaries.md`
4. `Prompt-04-Extract-Shared-Brand-Token-and-UI-Foundation.md`
5. `Prompt-05-Refactor-Homepage-Shell-and-Hero-into-Dedicated-Web-Part.md`
6. `Prompt-06-Refactor-Featured-Projects-and-Company-Pulse-into-Separate-Web-Parts.md`
7. `Prompt-07-Implement-Quick-Actions-and-Native-SharePoint-Composition-Seams.md`
8. `Prompt-08-Harden-Packaging-Validation-and-Phase-2-Handoff.md`

## In-scope/out-of-scope guardrails

- Do not preserve the monolithic single-web-part model as the default.
- Do not replace native SharePoint surfaces without clear product value.
- Do not over-split deployables before source ownership is clean.
- Do not duplicate shared visual or platform behavior across features.

## Prompt-02 status (executed baseline)

Prompt-02 is now treated as an executed first-stage structural closure for Phase 1.

### Target package map (Prompt-02)

- Shared packages:
  - `packages/brand-tokens`
  - `packages/sharepoint-core`
  - `packages/ui-kit` (`@hbc/ui-kit`, existing visual owner)
- Feature packages:
  - `packages/homepage-shell`
  - `packages/featured-projects`
  - `packages/company-pulse`
  - `packages/quick-actions`
- Host layer:
  - `apps/hb-central-homepage` (single deployable SPFx host for Phase 1)

### Ownership table (Prompt-02)

| Package/path | Owns | Must not own |
| --- | --- | --- |
| `apps/hb-central-homepage` | SPFx host wiring, toolbox/runtime integration, deployable packaging | Feature-domain implementation internals and reusable visual primitives |
| `packages/ui-kit` | Reusable visual primitives and shared UI tokens/primitives | App-local SPFx host behavior and feature-specific business logic |
| `packages/brand-tokens` | Brand/theme token constants and non-visual token contracts | SPFx host wiring and feature implementation logic |
| `packages/sharepoint-core` | Shared SharePoint/core adapters and integration helpers | UI rendering concerns and app-specific composition rules |
| `packages/homepage-shell` | Homepage shell/hero feature logic scoped to shell ownership | Shared generic UI primitives and host packaging concerns |
| `packages/featured-projects` | Featured projects feature logic and contracts | Generic cross-feature shared platform helpers |
| `packages/company-pulse` | Company pulse feature logic and contracts | Generic cross-feature shared platform helpers |
| `packages/quick-actions` | Quick actions feature logic and contracts | Generic cross-feature shared platform helpers |

### Dependency direction rules (Prompt-02)

- `apps/hb-central-homepage` may depend on `packages/*` and `@hbc/ui-kit`.
- Feature packages may depend on `packages/sharepoint-core`, `packages/brand-tokens`, and `@hbc/ui-kit`.
- Shared packages must not depend on app-local host code.
- Feature packages must not form circular cross-feature dependency chains.
- Reusable visual primitives remain owned by `@hbc/ui-kit` and must not be re-created in feature-local packages.

### Deferred restructuring notes

- Prompt-02 establishes structure and ownership boundaries only.
- Full package scaffolding (`package.json`, build/test wiring, exports, entrypoint contracts) is deferred to Prompt-03.

## Prompt-03 status (executed baseline)

Prompt-03 is now treated as an executed shared-seam scaffolding baseline for Phase 1.

### Shared package baseline (Prompt-03)

- `@hbc/brand-tokens` (`packages/brand-tokens`) provides stable token contracts.
- `@hbc/sharepoint-core` (`packages/sharepoint-core`) provides shared typed SharePoint/core adapter seams.
- `@hbc/ui-kit` (`packages/ui-kit`) remains the reusable visual UI owner.

### Public export rules (Prompt-03)

- Shared packages expose a single explicit root export (`"."`) in `exports`.
- Public entrypoints are `src/index.ts` for each shared package.
- Prompt-03 avoids deep wildcard exports and ambiguous barrels.

### Build and resolution boundaries

- `apps/hb-central-homepage` consumes shared packages through workspace dependencies.
- Shared packages remain app-agnostic and do not import app-layer code.
- A runtime smoke test verifies host resolution for new shared package exports.

### Unresolved tooling constraints

- No unresolved build/tooling constraints were identified in Prompt-03 closure scope.
