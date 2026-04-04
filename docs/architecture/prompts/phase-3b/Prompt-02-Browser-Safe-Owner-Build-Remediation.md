# Prompt-02 — Browser-Safe Owner Build Remediation

## Objective

Implement the smallest correct code/build fix that stops the homepage lazy-loaded runtime owner chunks from emitting browser-incompatible CommonJS-style code and restores successful SharePoint page rendering for all five homepage surfaces.

This prompt begins only after Prompt-01 has proven the remediation point.

## Scope

In scope:
- the focused homepage wrapper import path
- the focused owner module source / entrypoint selection
- the build or transpilation settings that determine how those owner modules are emitted into lazy-loaded chunks
- any minimal adapter or entrypoint changes required to ensure browser-safe chunk output

Out of scope:
- surface redesign
- new packaging topology
- replacing the five-bundle structure
- unrelated refactors in shared UI packages
- changing tenant deployment model

## Files to inspect first

1. Prompt-01 outputs
2. affected homepage wrapper files
3. affected owner module files and any intermediate entrypoints
4. relevant tsconfig / build config controlling module format
5. relevant package metadata controlling browser/module/main export resolution
6. homepage app build config under `apps/hb-central-homepage/`
7. any repo package that publishes the owner modules consumed by homepage wrappers

Do **not** reread files still in current context or memory unless the file changed or the task scope expanded.

## Required work

1. Apply the **smallest correct fix** identified in Prompt-01.
2. Ensure the homepage wrapper dynamic imports resolve to a browser-safe module path and output format.
3. Ensure the emitted lazy-loaded homepage owner chunks execute in the browser without requiring CommonJS globals.
4. Preserve the following invariants unless repo truth proves one must change:
   - one homepage `.sppkg`
   - five focused homepage surfaces
   - five separate primary ownership bundles
   - Heft-native packaging path
   - validator-gated packaging flow
5. Rebuild locally and inspect emitted output to confirm the affected secondary chunks no longer contain browser-incompatible module-format patterns.
6. Test each homepage surface locally in the closest supported validation mode available before packaging.

## Constraints / guardrails

- Do not reintroduce any shared `dist/homepage.js` bridge.
- Do not collapse the five focused bundles back into one primary owner.
- Do not solve the issue by disabling lazy loading unless repo truth proves there is no correct browser-safe lazy-loaded path.
- Do not create a large compatibility layer if a cleaner import/build correction is available.
- Do not weaken package validation.

## Acceptance criteria

This prompt is complete only when all of the following are true:
- the build succeeds from a clean state
- the affected emitted secondary chunks are browser-safe on inspection
- no emitted affected chunk contains live-breaking CommonJS browser patterns such as bare `exports` or unsupported runtime `require(...)`
- the homepage `.sppkg` still packages the five focused surfaces correctly
- the implementation notes clearly explain what changed and why it fixed the issue

## Required outputs

Create or update the following markdown artifacts:
- `02-remediation-implementation.md`
- `02-emitted-chunk-verification.md`
- `02-impact-on-architecture-and-packaging.md`

Your verification artifact must include:
- the exact files changed
- the exact build command used
- the exact emitted asset names inspected
- before/after module-format observations for the affected secondary chunks
- any known remaining uncertainty to be closed in Prompt-03 or Prompt-04
