# Prompt 04 — Decompose the Shared Homepage Runtime Into Per-Surface Source Owners

## Objective
Replace the single shared mount-authority runtime with source-level ownership per homepage surface.

## Scope
Source structure refactor for runtime ownership.

## Repo-truth files to inspect first
- Prompt 01 evidence map
- Prompt 03 runtime strategy decision
- `apps/hb-central-homepage/src/index.tsx`
- current runtime/source component tree
- homepage wrappers and shared UI packages used by the homepage app

## Instructions
1. Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.
2. Refactor the current shared `src/index.tsx` authority model so each homepage surface has an explicit source owner.
3. Preserve shared UI/components at source/package level where appropriate.
4. Remove the pattern where all surfaces depend on one exported runtime file to discover their mount function.
5. Keep mount/unmount semantics explicit and per surface.
6. Keep visual behavior stable unless a change is strictly required for architecture.

## Constraints / guardrails
- Do not yet finalize packaging config if that depends on the Heft target shape from Prompt 02.
- Do not regress shared UI reuse.
- Do not redesign the homepage.

## Acceptance criteria
- Source structure now expresses one mount/render ownership path per homepage surface.
- Shared UI remains reusable without one monolithic runtime bridge.
- No new hidden global registry or indirect runtime coupling is introduced.

## Required outputs
- Refactored source ownership structure
- Updated internal docs/comments if needed
