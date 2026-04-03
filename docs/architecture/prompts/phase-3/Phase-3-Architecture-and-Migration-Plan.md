# Phase-3 Architecture and Migration Plan

## Objective

Move the HB Central homepage solution from its current hybrid deployment architecture to a Heft-native SPFx packaging model while establishing real, independent web part bundle ownership for each homepage surface.

## Prompt-01 baseline governance status

- Prompt-01 is treated as executed baseline work for this phase.
- Canonical Prompt-01 closure authority: `docs/architecture/blueprint/phase-3-repo-truth-evidence-map-and-prompt-01-closure.md`.
- Migration and implementation sequencing in this plan should consume that frozen evidence map as repo-truth baseline input.

## Prompt-02 baseline governance status

- Prompt-02 is treated as executed baseline work for this phase.
- Canonical Prompt-02 closure authority: `docs/architecture/blueprint/phase-3-canonical-heft-reference-and-prompt-02-delta-map.md`.
- Downstream migration prompts should consume this canonical Heft reference and delta map as the target-shape authority.

## Prompt-03 baseline governance status

- Prompt-03 is treated as executed baseline work for this phase.
- Canonical Prompt-03 closure authority: `docs/architecture/blueprint/phase-3-runtime-react-strategy-and-prompt-03-closure.md`.
- Downstream runtime/ownership prompts should consume this locked React/runtime strategy and Vite-role rule before refactor work.

## Prompt-04 baseline governance status

- Prompt-04 is treated as executed baseline work for this phase.
- Canonical Prompt-04 closure authority: `docs/architecture/blueprint/phase-3-per-surface-runtime-ownership-and-prompt-04-closure.md`.
- Downstream wrapper and bundle-boundary prompts should consume this per-surface source ownership baseline and preserve its stable mount export contracts.

## Prompt-05 baseline governance status

- Prompt-05 is treated as executed baseline work for this phase.
- Canonical Prompt-05 closure authority: `docs/architecture/blueprint/phase-3-wrapper-direct-ownership-and-prompt-05-closure.md`.
- Downstream bundle-boundary and packaging prompts should consume this direct wrapper-surface ownership baseline and preserve no-bridge wrapper posture.

## Prompt-06 baseline governance status

- Prompt-06 is treated as executed baseline work for this phase.
- Canonical Prompt-06 closure authority: `docs/architecture/blueprint/phase-3-split-bundle-ownership-and-prompt-06-closure.md`.
- Downstream packaging-authority migration prompts should consume this split-bundle ownership baseline and preserve artifact-proven per-surface ownership.

## Prompt-07 baseline governance status

- Prompt-07 is treated as executed baseline work for this phase.
- Canonical Prompt-07 closure authority: `docs/architecture/blueprint/phase-3-heft-native-packaging-and-prompt-07-closure.md`.
- Downstream extension-point and release-hardening prompts should consume this Heft-native packaging authority baseline and preserve no-gulp deployable-path governance.

## Prompt-08 baseline governance status

- Prompt-08 is treated as executed baseline work for this phase.
- Canonical Prompt-08 closure authority: `docs/architecture/blueprint/phase-3-heft-customization-inventory-and-prompt-08-closure.md`.
- Downstream release-hardening and artifact-proof prompts should consume this customization inventory baseline and preserve the no-ejection/no-extra-plugin default unless new repo-truth evidence requires change.

---

## 1. Current architecture

### 1.1 Workspace posture

- Monorepo workspace with `apps/*` and `packages/*`.
- Root orchestration is modern (`pnpm`, `turbo`).
- Homepage packaging is still custom-scripted and gulp-backed.

### 1.2 Homepage app structure

The homepage app currently has two distinct build layers:

#### Layer A — application runtime build

- Vite builds `src/index.tsx` into `dist/homepage.js`.
- `src/index.tsx` exports all homepage surface mount functions from one file.

#### Layer B — SPFx package build

- A custom Node script (`tools/run-spfx-package.mjs`) discovers a supported Node binary.
- That script executes `gulp --gulpfile gulpfile.cjs bundle --ship` and `package-solution --ship`.
- `gulpfile.cjs` initializes `@microsoft/sp-build-web`.

### 1.3 Current surface inventory

Confirmed homepage surfaces:

- Homepage Sections
- Homepage Hero
- Featured Projects
- Company Pulse
- Quick Actions

### 1.4 Current runtime ownership pattern

Each SPFx wrapper:

- inherits from `BaseClientSideWebPart`;
- creates a container element;
- dynamically imports `../../../dist/homepage.js`;
- expects a named mount function;
- stores an optional unmount callback.

This means the wrappers are separate, but the runtime ownership is not.

### 1.5 Current SPFx bundle boundary

`apps/hb-central-homepage/config/config.json` currently defines one bundle key containing all five components.

Implication:

- all five web parts are packaged as one SPFx bundle family;
- the shipped package confirms that this becomes one shared primary asset in the `.sppkg`.

### 1.6 Current shipped artifact behavior

The provided `.sppkg` contains:

- five component registrations;
- one primary entry module id for all five;
- one primary asset file for all five;
- per-surface `exportName` variance only.

### 1.7 Current validation posture

Existing validations prove:

- expected wrapper export references exist;
- `.sppkg` structure is valid enough for packaging/deployment;
- expected web part registrations exist.

Existing validations do **not** prove:

- unique bundle ownership per surface;
- manifest-to-bundle uniqueness;
- absence of a shared runtime bridge;
- alignment between repo target architecture and shipped artifact semantics.

---

## 2. Target architecture

## 2.1 Phase 3 target state

The deployable homepage solution should have:

- one intentional owner per homepage surface;
- one authoritative deployable build system (Heft-native SPFx);
- shared source modules/packages where appropriate;
- no production dependency on `dist/homepage.js`;
- validation that enforces split bundle ownership.

## 2.2 Recommended packaging shape

### Recommended

- Keep one homepage solution package (`.sppkg`) in Phase 3.
- Split web part bundle ownership inside that solution package.

### Defer unless required

- Multiple `.sppkg` packages for each homepage surface.

Reason:

- The objective is bundle ownership separation, not necessarily package fragmentation.
- One package minimizes deployment/admin overhead while still solving the current coupling problem.

## 2.3 Recommended source/runtime ownership model

### Per-surface ownership

Each surface should have its own first-class render ownership path.

That means:

- one surface-specific SPFx entry wrapper;
- one surface-specific source render module or equivalent entry;
- one manifest-to-bundle mapping that does not collapse back into a common runtime bundle.

### Shared code that may remain shared

The following may remain shared at source/package level:

- brand tokens
- UI kit components
- layout primitives
- homepage data contracts
- utilities/hooks
- cross-surface presentational components when justified

### Shared code that should **not** remain shared in the current form

- the one exported `dist/homepage.js` runtime bridge
- the one-bundle-for-all-surfaces SPFx bundle key
- any release logic that only proves registration but not ownership separation

## 2.4 Heft-native target posture

The deployable homepage package should align to the canonical SPFx Heft structure for the selected SPFx baseline.

Expected characteristics:

- Heft scripts in `package.json`
- `config/rig.json`
- Heft TypeScript/Sass config files as required by the SPFx rig
- removal of gulp from the authoritative package path
- no authoritative dependence on legacy `config.json` concepts where the Heft toolchain has replaced them with webpack-native / rig-native structures

Important:

- Do **not** assume the legacy `config/config.json` model simply carries forward unchanged.
- First create a canonical Heft-native reference and use that to determine the exact target structure.

---

## 3. Migration strategy

## 3.1 Guiding principles

- Repo truth first.
- Canonical Microsoft/SPFx structure first.
- Remove the shared runtime bridge, not just the outer gulp shell.
- Preserve behavior before optimizing secondary concerns.
- Make split bundle ownership a release-gated invariant.

## 3.2 Recommended migration sequence

### Sequence A — lock the canonical target structure

1. Freeze current repo truth.
2. Scaffold or otherwise establish a canonical Heft-native SPFx reference at the same baseline.
3. Document exact file/config differences between current homepage package and canonical Heft-native structure.

### Sequence B — lock runtime/version strategy

Before deep refactor, explicitly resolve:

- React/runtime alignment for the selected SPFx baseline;
- whether any Vite-only preview workflow survives post-Phase 3;
- whether any new repo-truth evidence requires deviation from the Prompt-08 no-ejection/no-extra-plugin baseline.

### Sequence C — decompose the shared runtime

1. Replace the single `src/index.tsx` shared-mount-authority model with per-surface entry ownership.
2. Move reusable UI into shared modules/packages.
3. Keep each surface mount path explicit and locally owned.

### Sequence D — refactor SPFx wrappers

1. Remove wrapper dependency on `../../../dist/homepage.js`.
2. Make each wrapper consume its own source-level runtime ownership path.
3. Preserve explicit unmount semantics and failure messaging.

### Sequence E — split bundle ownership

In the Heft-native model, configure each web part to resolve to its own intended bundle boundary.

Required outcome:

- no more “all surfaces point to the same entry module and same primary asset” in the shipped `.sppkg`.

### Sequence F — migrate packaging/build to Heft

1. Replace gulp scripts with Heft scripts.
2. Add SPFx Heft rig config.
3. Remove authoritative gulpfile packaging dependency.
4. Port required customizations into supported Heft extension points.

### Sequence G — harden validation

Add release gates that explicitly fail if:

- multiple surface manifests collapse back to one primary entry module without explicit documented intent;
- multiple surface manifests collapse back to one primary shipped JS asset without explicit documented intent;
- wrappers reintroduce `dist/homepage.js` runtime imports;
- local-only/debug paths leak into production package artifacts.

### Sequence H — prove deployability and performance

1. Build/package in ship/production mode.
2. Inspect raw package/debug output.
3. Inspect final `.sppkg` internals.
4. Validate app catalog deployment readiness.
5. Validate communication-site placement and full-width support where intended.
6. Run Page Diagnostics after deployment.

---

## 4. Detailed target-state decisions

## 4.1 Web part splitting strategy

### Recommended end state

Each of the five homepage surfaces owns:

- its own entry wrapper;
- its own manifest identity;
- its own bundle boundary in the deployable SPFx output.

### Why

These surfaces are independently placeable and independently named in the toolbox. They should not require each other’s full runtime to function.

## 4.2 Runtime mount/unmount strategy

### Required

- explicit mount per surface;
- explicit unmount per surface;
- no hidden shared global runtime registry.

### Preferred

- direct source imports or supported lazy boundaries inside the surface owner;
- shared helper abstractions are acceptable if they do not collapse deployable ownership.

## 4.3 Shared package ownership

Keep shared design/system code in workspace packages or shared source modules.

Do not use one monolithic runtime artifact as the mechanism for sharing.

## 4.4 Heft-native packaging transition strategy

### Must happen

- `gulpfile.cjs` removed from authoritative path
- `tools/run-spfx-package.mjs` either retired or reduced to a thin wrapper around canonical Heft commands only if still justified
- package/build scripts updated to canonical Heft commands
- rig/config files added per Microsoft guidance

### Avoid

- inventing a custom pseudo-Heft pipeline that still depends on gulp internally
- preserving legacy config only because it currently works
- mixing old and new packaging authorities indefinitely

---

## 5. Validation requirements

## 5.1 Artifact-level validation

The final shipped `.sppkg` must be inspected programmatically.

Required checks:

- expected 5 web part registrations present;
- no localhost references;
- no unsupported feature registrations;
- no hidden collapse back to one unintended primary bundle;
- manifest-to-bundle mapping aligns with documented target architecture.

## 5.2 Repo-level validation

The repo must prove:

- no wrapper imports `../../../dist/homepage.js` for production path;
- no legacy gulp packaging command remains authoritative;
- Heft config structure matches canonical SPFx Heft guidance;
- docs describe the actual packaging path.

## 5.3 Deployment/readiness validation

- app catalog upload succeeds;
- no package validation issues in the app catalog;
- toolbox entries remain correct;
- surfaces render independently on target page layouts;
- full-width behavior works where manifests advertise support;
- performance is reviewed with Page Diagnostics.

---

## 6. Completion criteria

Phase 3 is complete only when all of the following are true:

1. The deployable homepage build/package workflow is Heft-native.
2. The shared Vite runtime bridge is no longer authoritative for production deployment.
3. Each homepage surface has documented and validated bundle ownership.
4. The shipped `.sppkg` no longer disguises one runtime bundle as five separate surfaces.
5. Validation scripts fail on ownership-regression conditions.
6. Documentation accurately describes the real build/package/deploy path.
7. A go/no-go audit can confirm readiness without hand-waving or assumptions.
