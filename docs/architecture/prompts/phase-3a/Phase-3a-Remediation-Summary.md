# Phase 3a Remediation Summary

## Objective
Phase 3a exists to close the gap between **authored repo truth** and the **shipped homepage package artifact**.

The currently observed condition is:
- the repo appears to have moved toward a correct target state:
  - Heft-based packaging commands,
  - separate homepage bundle declarations,
  - per-surface owner wrappers;
- but the uploaded `.sppkg` still appears to package all five homepage web parts back to a single primary SPFx entry module / primary JS asset.

That means the current issue is no longer primarily an architecture-definition problem.  
It is now a **packaging-chain integrity problem**.

## Current Working Theory
The most likely failure classes are:
1. the wrong generated outputs are being packaged;
2. Heft is not consuming the intended homepage SPFx config/manifests;
3. generated manifests are being rewritten or normalized during package assembly;
4. the uploaded package is not actually from the current repo state.

## Phase 3a Success Definition
Phase 3a is successful only when all of the following are true:
- the homepage still ships as **one `.sppkg`**;
- the final packaged artifact contains **five distinct packaged homepage web part ownership records**;
- each homepage surface has:
  - its own packaged `entryModuleId`,
  - its own primary script-resource key,
  - its own primary script-resource path;
- any shared chunks that remain are clearly secondary shared assets, not proof of runtime ownership collapse;
- the repo validation gates catch the previously observed collapsed-package failure pattern.

## Embedded Decisions
- Do **not** split the solution into multiple `.sppkg` files in Phase 3a.
- Do **not** redesign the homepage architecture again unless repo-truth evidence proves the prior split strategy is invalid.
- Do **not** skip direct inspection of the generated manifests/assets that exist immediately before `.sppkg` assembly.
- Do **not** accept source-config correctness as proof of package correctness.

## Implementation Shape
Phase 3a is organized into eight prompts:
1. freeze evidence and prove the current failure,
2. reconcile current repo truth,
3. reproduce from current `main`,
4. inspect generated manifests/assets before packaging,
5. isolate the exact collapse boundary,
6. implement the minimum correct fix,
7. harden validation against recurrence,
8. rebuild, validate, and close.

## Required End Product
At the end of Phase 3a there must be:
- one rebuilt homepage `.sppkg`,
- a written root-cause summary,
- an ownership map of generated outputs,
- an ownership map of the final packaged artifact,
- updated validation/documentation proving the issue is closed.
