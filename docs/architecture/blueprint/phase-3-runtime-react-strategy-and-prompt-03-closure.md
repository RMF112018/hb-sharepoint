# Phase 3 Runtime/React Strategy and Prompt-03 Closure

## Purpose

This note records the approved Prompt-03 baseline for runtime/version strategy and Vite-role governance before Phase-3 architectural refactor work. It is the formal closure artifact for the Phase-3 Prompt-03 open item.

## Runtime strategy decision record

### React/runtime posture

Confirmed findings:

- The homepage package currently targets SPFx build baseline `@microsoft/sp-build-web` `1.22.2`.
- Homepage runtime code currently mounts through React 18 `createRoot` from `react-dom/client`.
- Homepage web part manifests declare `react` and `react-dom` runtime dependencies at `17.0.1` in SPFx `loaderConfig`.
- SPFx `1.22.2` compatibility references indicate React `17.0.1` as the supported runtime posture.

Decision:

- Align homepage runtime posture to React `17.0.1` now, before bundle-boundary refactor work.
- Keep exported mount/unmount contract stable while switching to React 17-compatible mount/unmount APIs.

Why this is the safest migration sequence:

- Removes runtime-version ambiguity before ownership and bundle decomposition.
- Avoids mixing runtime experiments into split-bundle refactor risk.
- Aligns app-layer runtime behavior with declared SPFx host-runtime expectations.

### Vite role decision

Confirmed findings:

- Vite currently builds the shared runtime artifact used by wrapper imports in the current deployable path.
- Prompt-01 and Prompt-02 closure records already freeze that this shared runtime bridge is transitional and must be retired from production authority.

Decision:

- Vite remains allowed as a non-production preview/dev workflow only.
- Vite is not authoritative for the deployable homepage packaging path after Heft-native migration.

Why this is the safest migration sequence:

- Preserves local preview velocity while removing deployable-path ambiguity.
- Keeps production packaging authority centralized in Heft-native SPFx workflow.

## Classification: findings vs inference vs open questions

### Confirmed findings

- Current homepage package dependency posture mixes React 18 app dependencies with SPFx manifests that declare React 17 runtime contracts.
- Current runtime mounting in `src/index.tsx` uses React 18 root API.
- Current wrapper production path still imports shared `dist/homepage.js`.

### Strong inferences

- Resolving React/runtime alignment first reduces downstream migration risk in Prompt-04 and Prompt-05.
- Treating Vite as preview-only avoids accidental reintroduction of deployable shared-runtime authority.

### Open questions

- Exact final Heft-native script naming and config surface remains implementation detail for later migration prompts.
- Any required Heft extension behavior remains subject to later prompt validation.

## Minimal prerequisite implementation changes required now

Prompt-03 scope permits minimal preparatory runtime alignment changes prior to refactor:

- align homepage React runtime and type dependencies to React 17 posture;
- switch mount/unmount implementation to React 17-compatible APIs while preserving exported mount function names and signatures;
- update affected tests for revised mount implementation.

No bundle-splitting or wrapper-ownership refactor is included in this prompt closure.

## Closure conditions

This planning item is considered closed when:

- a canonical Prompt-03 runtime strategy decision record exists in blueprint governance docs;
- React/runtime posture is explicitly locked for the selected SPFx baseline;
- Vite future role is explicitly locked (preview-only non-production);
- Prompt-03 baseline status is propagated into Phase-3 planning and repo-routing governance docs;
- root manifest version is patch-bumped for this governance update.

## Current status

Closure conditions are satisfied in current repo state:

- this canonical Prompt-03 runtime strategy closure note now exists;
- Prompt-03 status is propagated to Phase-3 planning and governance routing documents;
- runtime prerequisite changes are applied in the homepage app while preserving mount export contracts;
- root manifest patch version is advanced for this governance revision.
