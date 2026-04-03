# Phase 3 Repo-Truth Evidence Map and Prompt-01 Closure

## Purpose

This note records the approved Prompt-01 baseline for Phase-3 repo truth and serves as the formal closure artifact for the Prompt-01 open item.

## Prompt-01 evidence map

### Current homepage surfaces

Confirmed findings:

- Homepage Sections
- Homepage Hero
- Featured Projects
- Company Pulse
- Quick Actions

Source basis:

- `apps/hb-central-homepage/src/webparts/*/*.manifest.json`
- `apps/hb-central-homepage/config/config.json`

### Current bundle ownership model

Confirmed findings:

- `apps/hb-central-homepage/config/config.json` defines a single bundle key: `hb-central-homepage-web-part`.
- That bundle key contains all five homepage web part components.
- The shipped `.sppkg` behavior in repository artifacts shows all five surfaces sharing one primary entry module and one primary asset path, varying only by `exportName`.

Strong inferences:

- Current deployable output reflects shared-bundle ownership rather than per-surface bundle ownership.

Open questions:

- None required for Prompt-01 closure. Any future per-surface split mechanics are Phase-3 implementation scope, not evidence-baseline scope.

### Current runtime ownership model

Confirmed findings:

- Each homepage wrapper web part dynamically imports `../../../dist/homepage.js`.
- Each wrapper expects a surface-specific mount function from that shared runtime bundle.
- Each wrapper keeps an optional unmount callback and disposes it in `onDispose`.

Source basis:

- `apps/hb-central-homepage/src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js`

Strong inferences:

- Wrapper-level ownership seams exist, but runtime ownership is still centralized through one shared bundle bridge.

Open questions:

- Whether any non-production Vite preview path is retained after the authoritative deployable path becomes Heft-native.

### Current packaging path

Confirmed findings:

- `@hbc/hb-central-homepage` script `spfx:package` runs `pnpm build` followed by `node ../../tools/run-spfx-package.mjs`.
- `tools/run-spfx-package.mjs` runs `gulp --gulpfile gulpfile.cjs bundle --ship` and `gulp --gulpfile gulpfile.cjs package-solution --ship`.
- `apps/hb-central-homepage/gulpfile.cjs` initializes `@microsoft/sp-build-web`.
- The current deployable path is hybrid and gulp-backed, not Heft-native.

Strong inferences:

- The current path depends on both Vite runtime output (`dist/homepage.js`) and gulp-based SPFx packaging.

Open questions:

- Whether any currently custom packaging behavior requires Heft extension points in later prompts.

### Current validation coverage

Confirmed findings:

- `tools/validate-homepage-webpart-wiring.mjs` verifies wrapper-to-mount-export wiring for all five wrappers.
- `tools/validate-sppkg.mjs` verifies `.sppkg` structural integrity, expected web part registrations, localhost exclusion, and unsupported registration exclusion.

Strong inferences:

- Current validation is useful for packaging integrity and registration correctness.

Open questions:

- Additional release gates are still needed in later prompts to enforce bundle-separation invariants (for example, fail if all five surfaces collapse to one unintended primary entry/asset).

## Closure conditions

This planning item is considered closed when:

- an authoritative Phase-3 Prompt-01 evidence-map document exists in canonical blueprint governance docs;
- current homepage surfaces, bundle ownership model, runtime ownership model, packaging path, and validation coverage are explicitly frozen as repo truth;
- Prompt-01 status is propagated into Phase-3 prompt package guidance and repository-level governance routing;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- this canonical Phase-3 Prompt-01 evidence map now exists and freezes the required repo-truth baseline;
- Phase-3 prompt package docs now treat Prompt-01 as executed baseline with this note as authority;
- governance routing docs now reference this closure baseline;
- root manifest patch version is advanced for the governance update.
