# HB Central Homepage Deployment Readiness

## Purpose

Provide the canonical Phase-1 deployment-readiness workflow for `apps/hb-central-homepage`, including verification, build/package expectations, toolbox/render evidence checks, rollout checks, and rollback posture.

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
5. `pnpm --filter @hbc/hb-central-homepage spfx:package`
6. `pnpm validate:homepage:package`

Expected build output:

- App build artifacts in `apps/hb-central-homepage/dist/`
- Split chunks may include homepage main bundle plus lazy-loaded section chunks
- SharePoint package artifact at `dist/sppkg/hb-central-homepage.sppkg`
- Staged package contents are produced by the Heft-native SPFx package pipeline (`heft build --production` + `heft package-solution --production`)
- Packaged focused web part manifest IDs present for:
  - homepage sections
  - hero
  - featured projects
  - company pulse
  - quick actions

## Installation and Configuration Expectations

- The homepage app is currently packaged as a Vite-based SPFx-compatible runtime baseline.
- `.sppkg` generation is handled by Heft-native SPFx tooling using app-local metadata in `apps/hb-central-homepage/config/` and `apps/hb-central-homepage/src/webparts/`.
- Package structure is validated by `tools/validate-sppkg.mjs` to enforce OPC parts, the single required `package-manifest` relationship, no localhost production manifest references, and no unsupported `ClientSideComponentInstance` feature registration.
- Composition and feature surfaces are configured app-locally via runtime manifest/config seams in `apps/hb-central-homepage/src/runtime`.
- Runtime-to-host mount wiring is validated by `tools/validate-homepage-webpart-wiring.mjs` to guard against stale bundle/export mismatches.
- Deployment consumers should treat configuration guidance in `apps/hb-central-homepage/README.md` as authoritative for current phase behavior.

## Toolbox and Page Render Evidence

Capture and retain the following evidence before release approval:

- Toolbox visibility evidence:
  - HB Central Homepage Sections
  - HB Central Homepage Hero
  - HB Central Featured Projects
  - HB Central Company Pulse
  - HB Central Quick Actions
- Page render evidence:
  - each focused custom web part renders independently in page context
  - non-hero sections host does not render hero/projects/pulse/actions surfaces
- Local command evidence:
  - `pnpm --filter @hbc/hb-central-homepage spfx:package`
  - `pnpm validate:homepage:package`

Tenant/App Catalog upload and live page render verification remain downstream release responsibilities.

## Rollout Checks

- Confirm all four homepage verification commands pass before rollout.
- Confirm `pnpm validate:homepage:package` passes and reports all expected focused web part manifest IDs.
- Confirm runtime docs (root README, app README, phase blueprint notes) align with actual commands and artifact paths.
- Confirm no token/style ownership drift from `@hbc/ui-kit` in recent changes.
- Confirm known deferred decisions (for example personalization scope and production pipeline automation) are acknowledged in rollout notes.
- Confirm no hidden dependency on monolithic homepage rendering for hero/projects/pulse/quick-actions surfaces.

## Rollback Posture

- Roll back to the previous known-good commit/tag if verification fails after deployment preparation.
- Re-run the full homepage verification stack after rollback confirmation.
- Update closure/readiness notes if rollback changes phase status or known constraints.

## Known Phase-1 Constraints

- Automated production deployment pipeline steps are not part of current Phase-1 implementation.
- Environment/tenant-specific release approvals and host-runtime validation remain downstream release responsibilities.

## Failure Mode Note

- A prior custom zip package path and feature-manifest misuse allowed invalid package metadata to reach App Catalog, including missing/invalid relationship envelope behavior and unsupported feature registration.
- The current packaging path uses Heft-native SPFx package generation and blocks release if relationship validation, localhost checks, or unsupported feature-registration checks fail.
