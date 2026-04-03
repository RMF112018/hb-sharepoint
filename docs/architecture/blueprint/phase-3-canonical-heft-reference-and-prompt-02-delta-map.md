# Phase 3 Canonical Heft Reference and Prompt-02 Delta Map

## Purpose

This note records the approved Prompt-02 baseline for the canonical Heft-native SPFx reference and current-vs-target delta map. It is the formal closure artifact for the Phase-3 Prompt-02 open item.

## Canonical Heft-native reference summary

### Baseline anchor

Confirmed findings:

- Current homepage package uses SPFx build dependency `@microsoft/sp-build-web` at `1.22.2`.
- Current homepage packaging path is still gulp-backed and script-bridged from `spfx:package`.
- Prompt-02 uses an equivalent canonical-reference approach in this repository context (no scaffold tool output committed to repo).

Source basis:

- `apps/hb-central-homepage/package.json`
- `apps/hb-central-homepage/gulpfile.cjs`
- `tools/run-spfx-package.mjs`
- `docs/architecture/blueprint/phase-3-repo-truth-evidence-map-and-prompt-01-closure.md`

### Canonical Heft-native target shape (same-version reference model)

Confirmed findings:

- Canonical target should include `config/rig.json`.
- Canonical target should include Heft-native TypeScript/Sass configuration owned by the SPFx rig path rather than the legacy gulp-only authority path.
- Canonical target should move authoritative package lifecycle commands to Heft-native command flow.

Strong inferences:

- For this homepage package, canonical command ownership should be expressed as Heft-native `build`, `start/serve`, and `package-solution` flows, with any custom scripting reduced to optional wrappers rather than authoritative build logic.
- Legacy `gulpfile.cjs` and custom packaging bridge scripts should no longer be authoritative once migration is complete.

Open questions:

- Exact final script naming conventions in `apps/hb-central-homepage/package.json` are implementation details for later prompts, but they must resolve to Heft-native SPFx behavior rather than custom gulp orchestration.
- Any nonstandard bundling behavior required by current homepage runtime integration remains to be validated in later prompts for possible Heft extension usage.

### Multi-web-part guidance for this app

Confirmed findings:

- Current homepage app exposes five web parts and must preserve those five manifest identities through migration unless a separately documented migration says otherwise.

Strong inferences:

- Canonical Heft-native structure should preserve one-solution packaging while enabling independent per-surface bundle ownership boundaries and explicit manifest-to-bundle mapping.

Open questions:

- Final split-bundle implementation details are resolved by later Phase-3 prompts and validation gates, not by Prompt-02 closure.

## Prompt-02 current-vs-target delta map

### Delta table

| Area                                | Current posture                                                                           | Canonical Heft-native target posture                                               | Disposition    | Notes                                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------- |
| Packaging authority                 | `spfx:package` runs `pnpm build` then `node ../../tools/run-spfx-package.mjs`             | Heft-native SPFx command authority in package scripts                              | `replace`      | Remove custom orchestration as authoritative path                                             |
| Gulp bootstrap                      | `apps/hb-central-homepage/gulpfile.cjs` initializes `@microsoft/sp-build-web`             | Heft rig/config files own packaging orchestration                                  | `retire-later` | Keep until migration sequence replaces it                                                     |
| Custom packaging bridge             | `tools/run-spfx-package.mjs` selects node and executes gulp tasks                         | Optional thin wrapper only if still justified; otherwise direct Heft scripts       | `translate`    | Transitional helper at most, not authority                                                    |
| Legacy SPFx bundle config authority | `apps/hb-central-homepage/config/config.json` currently central for one-bundle components | Heft-native configuration/webpack ownership model aligned to rig structure         | `translate`    | Do not assume legacy config remains canonical unchanged                                       |
| Rig config                          | No `config/rig.json` currently present                                                    | `config/rig.json` present and authoritative                                        | `replace`      | Required target-shape addition                                                                |
| TS/Sass config ownership            | App uses local TS configs and Vite runtime config path                                    | Heft-native TS/Sass config expectations aligned to SPFx rig                        | `translate`    | Preserve needed behavior while relocating authority                                           |
| Runtime bridge                      | Wrappers import `../../../dist/homepage.js` built by Vite                                 | Per-surface ownership path without shared `dist/homepage.js` production dependency | `retire-later` | Prompt-03 locks Vite as preview-only; removal proceeds in subsequent runtime refactor prompts |
| Validation gates                    | Current validation confirms wiring/structure only                                         | Ownership-aware checks for split bundles and anti-regression guards                | `replace`      | Expanded in later prompts                                                                     |

### Legacy-only artifacts to retire from authoritative path

Confirmed findings:

- `apps/hb-central-homepage/gulpfile.cjs`
- `tools/run-spfx-package.mjs`
- shared production bridge dependency on `dist/homepage.js`

Strong inferences:

- These artifacts may remain temporarily during migration sequencing but must be demoted from authoritative package path and eventually retired.

### Files/configs to add or promote as canonical

Confirmed findings:

- `config/rig.json` is required as explicit canonical Heft-native target configuration.

Strong inferences:

- Heft-native SPFx TypeScript/Sass config files and command scripts must be present and become authoritative in `apps/hb-central-homepage`.

Open questions:

- Exact final file list for Heft-native configs should be validated against same-version SPFx Heft guidance during implementation prompts, then frozen in final closure docs.

## Closure conditions

This planning item is considered closed when:

- a canonical Prompt-02 closure note exists that documents the equivalent canonical Heft reference for the repo's SPFx baseline;
- a current-vs-target delta map explicitly identifies replaced/retained/translated/retired-later artifacts;
- Phase-3 prompt package docs treat Prompt-02 as executed baseline and consume this delta map;
- repository-level routing docs reference this closure note;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- this canonical Prompt-02 closure and delta-map authority note now exists;
- Phase-3 prompt package docs now treat Prompt-02 as executed baseline with this note as authority;
- governance routing docs now reference this Prompt-02 closure artifact;
- root manifest patch version is advanced for this governance update.
