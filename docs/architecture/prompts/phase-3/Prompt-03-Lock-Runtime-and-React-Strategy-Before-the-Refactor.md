# Prompt 03 — Lock Runtime and React Strategy Before the Refactor

## Objective
Resolve runtime-version and ownership assumptions before touching bundle boundaries.

## Scope
Decision document + minimal preparatory changes only if required.

## Repo-truth files to inspect first
- Prompt 01 evidence map
- Prompt 02 delta map
- `apps/hb-central-homepage/package.json`
- `apps/hb-central-homepage/src/index.tsx`
- homepage wrapper files/manifests

## Instructions
1. Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.
2. Determine the supported runtime strategy for the selected SPFx baseline and the homepage implementation.
3. Decide and document:
   - whether React/runtime versions need alignment as part of Phase 3;
   - whether any Vite-based workflow survives only as a non-production preview path;
   - whether Vite is fully removed from the deployable homepage path.
4. If runtime alignment changes are required before architectural refactor, make only those prerequisite changes now.
5. Document why the chosen strategy is safest for the Heft-native migration.

## Constraints / guardrails
- Do not mix a runtime-version experiment into the broader bundle-splitting refactor.
- Do not leave this ambiguous.

## Acceptance criteria
- A written decision exists for React/runtime posture.
- The repo has a clearly defined rule for Vite’s future role (none / preview-only / other documented exception).
- Phase 3 can proceed without unresolved runtime-version ambiguity.

## Required outputs
- Runtime strategy decision record markdown file
- Any minimal prerequisite package/config updates if required
