# Prompt 07 — Migrate the Homepage Package Path to Heft-Native SPFx

## Objective
Replace the homepage’s authoritative gulp-based package path with the canonical Heft-native SPFx toolchain.

## Scope
Package scripts, config files, packaging flow, and retirement of legacy authority path.

## Repo-truth files to inspect first
- Prompt 02 canonical Heft delta map
- `apps/hb-central-homepage/package.json`
- `apps/hb-central-homepage/gulpfile.cjs`
- `tools/run-spfx-package.mjs`
- any current config/build files identified as legacy in Prompt 02

## Instructions
1. Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.
2. Introduce the canonical Heft-native SPFx config/scripts for the homepage package.
3. Port only the custom behaviors that are still truly required.
4. Remove `gulpfile.cjs` from the authoritative packaging path.
5. Retire or shrink `tools/run-spfx-package.mjs` so it no longer shells into gulp for production packaging.
6. Update package scripts so the deployable path is clearly Heft-native.
7. Document the final build/package commands.

## Constraints / guardrails
- No false-Heft migration.
- No hidden gulp dependency in the final package path.
- Avoid webpack ejection unless standard Heft/SPFx extension points are insufficient and the reason is documented.

## Acceptance criteria
- Homepage build/package commands are Heft-native.
- The old gulp authority path is removed or explicitly non-authoritative.
- Required Heft config files exist and are wired correctly.

## Required outputs
- Updated package scripts/config
- Removed or downgraded legacy packaging artifacts
- Packaging-path documentation update
