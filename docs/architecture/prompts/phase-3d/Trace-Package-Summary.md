# Trace Package Summary

## Objective

Generate a narrowly targeted implementation sequence that forces the code agent to stop treating the problem as a generic packaging issue and instead prove, with repo-truth and emitted-chunk evidence, exactly what each homepage surface is mounting.

## Why this package is needed

The current artifact has moved past the original runtime-bundle crash, but the deployed surfaces still render placeholder/stub content instead of the intended HB Central experience.

That means the current defect is now:

- **not** "the chunk cannot load,"
- **not** "the app cannot be added to the site,"
- **not** "the wrapper cannot dynamically import an owner,"

but instead:

- **the imported owner path is still resolving to non-production surface content**.

## Current defect model

For each homepage surface, one of these is almost certainly true:

1. the owner file itself was replaced with a stub,
2. the owner now imports a stub/demo component instead of the intended real component,
3. an alias / barrel / fallback index path resolves to stub content,
4. the emitted chunk includes a different component than the source appears to imply,
5. or the real component is missing required data/providers and the agent replaced it with a static fallback to avoid runtime failure.

This package is designed to force that distinction to be proven instead of guessed.

## Required output from the agent

By the end of this package, the agent must produce:

- a five-surface trace table from wrapper to emitted chunk,
- a root-cause statement per surface,
- corrected owner/mount wiring,
- validator coverage that blocks placeholder/stub surface text or equivalent fallback owners,
- and a rebuilt/deployed artifact with live proof of real UI.

## Prompt-01 closure status (2026-04-04)

- Prompt-01 baseline outputs are frozen at `docs/architecture/prompts/phase-3d/evidence/2026-04-04-prompt-01/`.
- Canonical closure authority is now `docs/architecture/blueprint/phase-3d-repo-truth-and-artifact-baseline-and-prompt-01-closure.md`.
- Prompt-01 confirms in current repo/artifact truth:
  - wrappers import browser-safe owner entrypoints under `src/runtime/owners-browser/mountHomepage*.js`,
  - those owner entrypoints render placeholder success-path copy for all five surfaces,
  - emitted lazy chunks preserve the same placeholder mount behavior and phrase family,
  - real owner mounts exist under `src/runtime/owners/mountHomepage*.tsx` but are not the active wrapper-resolved path.
- Prompt-02 remains the implementation restoration boundary; Prompt-03 and Prompt-04 remain hardening/live-proof scope.

## Non-goals

This package is not permission to:

- split the solution into multiple `.sppkg` files,
- redesign the homepage,
- reintroduce the old shared runtime bridge,
- or ship another placeholder build under a different phrase.

## Release rule

The outcome is still **No-Go** unless the live web parts render the intended surface UI and the emitted chunks can be shown to carry the correct implementations.
