# Prompt 05 — Refactor the SPFx Wrappers to Own Their Surfaces Directly

## Objective
Remove the production wrapper dependency on `../../../dist/homepage.js` and make each web part wrapper directly own its intended runtime path.

## Scope
Wrapper-level implementation refactor.

## Repo-truth files to inspect first
- Prompt 04 refactor outputs
- homepage wrapper JS/TS files
- wrapper manifests

## Instructions
1. Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.
2. Refactor each homepage wrapper so it no longer dynamically imports the retired shared runtime bridge for the production path.
3. Preserve:
   - explicit container creation
   - explicit unmount handling
   - explicit failure-state UX
4. Ensure each wrapper aligns with its own surface owner from Prompt 04.
5. Update any related tests and wrapper-level validation as needed.

## Constraints / guardrails
- Do not keep a hidden fallback to the old `dist/homepage.js` bridge.
- Do not merge surfaces back together through helper indirection.

## Acceptance criteria
- No homepage wrapper depends on `../../../dist/homepage.js` in the production path.
- Each wrapper clearly maps to one surface owner.
- Wrapper lifecycle behavior remains correct.

## Required outputs
- Updated wrapper files
- Updated tests if applicable
