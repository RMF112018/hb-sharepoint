# Phase 0 Workspace and SPFx Baseline

## Purpose

This note records the approved Prompt-02 runtime baseline for the repository.

## Approved baseline

- The first runtime scaffold belongs at `apps/hb-central-homepage/`.
- Root workspace configuration owns package-manager setup, workspace scripts, and shared orchestration.
- The homepage runtime baseline should follow the Vite-based SPFx guidance in `docs/reference/developer/spfx-baseline.md`.
- Reusable visual UI should be consumed from `@hbc/ui-kit`, not recreated inside the app scaffold.
- The executed Prompt-02 baseline includes root `pnpm` + Turbo orchestration and a minimal Vite-based homepage host package with package-local `check-types`, `lint`, `build`, and `test` scripts.

## Guardrails

- Do not treat `spfx/solutions/hb-central-homepage/` as the canonical path.
- Do not create more than one deployable homepage app unless a later architecture decision explicitly requires it.
- Remove scaffold/sample clutter once the app baseline is generated so later prompts build on intentional structure.
- Keep the app scaffold ready for future shared-package consumption without collapsing ownership boundaries.

## Closure conditions

This planning item is considered closed when:

- Prompt-02 clearly directs implementation to `apps/hb-central-homepage/`
- the phase package and current-state docs agree on the apps-first model
- the root manifest version has been patch-bumped for the execution/update
- the first runtime scaffold and root workspace commands exist in repo truth
