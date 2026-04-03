# HB Central Homepage Deployment Readiness

## Purpose

Provide the canonical phase-0 deployment-readiness workflow for `apps/hb-central-homepage`, including verification, build/package expectations, rollout checks, and rollback posture.

## Prerequisites

- `pnpm install` has been run at repository root.
- Node and package manager versions are compatible with root workspace configuration.
- `@hbc/ui-kit` workspace dependency is resolvable from the homepage app.

## Verification and Build Workflow

Run from repository root:

1. `pnpm --filter @hbc/hb-central-homepage check-types`
2. `pnpm --filter @hbc/hb-central-homepage lint`
3. `pnpm --filter @hbc/hb-central-homepage build`
4. `pnpm --filter @hbc/hb-central-homepage test`
5. `pnpm build:sppkg`
6. `node tools/validate-sppkg.mjs`

Expected build output:

- App build artifacts in `apps/hb-central-homepage/dist/`
- Split chunks may include homepage main bundle plus lazy-loaded section chunks
- SharePoint package artifact at `dist/sppkg/hb-central-homepage.sppkg`
- Staged package contents are produced by the native SPFx package pipeline (`gulp bundle --ship` + `gulp package-solution --ship`)

## Installation and Configuration Expectations

- The homepage app is currently packaged as a Vite-based SPFx-compatible runtime baseline.
- `.sppkg` generation is handled by native SPFx tooling from `apps/hb-central-homepage/gulpfile.cjs` using app-local metadata in `apps/hb-central-homepage/config/` and `apps/hb-central-homepage/src/webparts/`.
- Package structure is validated by `tools/validate-sppkg.mjs` to enforce OPC parts, the single required `package-manifest` relationship, no localhost production manifest references, and no unsupported `ClientSideComponentInstance` feature registration.
- Composition and feature surfaces are configured app-locally via runtime manifest/config seams in `apps/hb-central-homepage/src/runtime`.
- Deployment consumers should treat configuration guidance in `apps/hb-central-homepage/README.md` as authoritative for current phase behavior.

## Rollout Checks

- Confirm all four homepage verification commands pass before rollout.
- Confirm runtime docs (root README, app README, phase blueprint notes) align with actual commands and artifact paths.
- Confirm no token/style ownership drift from `@hbc/ui-kit` in recent changes.
- Confirm known deferred decisions (for example personalization scope and production pipeline automation) are acknowledged in rollout notes.

## Rollback Posture

- Roll back to the previous known-good commit/tag if verification fails after deployment preparation.
- Re-run the full homepage verification stack after rollback confirmation.
- Update closure/readiness notes if rollback changes phase status or known constraints.

## Known Phase-0 Constraints

- Automated production deployment pipeline steps are not part of current phase-0 implementation.
- Environment/tenant-specific release approvals and host-runtime validation remain downstream release responsibilities.

## Failure Mode Note

- A prior custom zip package path and feature-manifest misuse allowed invalid package metadata to reach App Catalog, including missing/invalid relationship envelope behavior and unsupported feature registration.
- The current packaging path uses native SPFx package generation and blocks release if relationship validation, localhost checks, or unsupported feature-registration checks fail.
