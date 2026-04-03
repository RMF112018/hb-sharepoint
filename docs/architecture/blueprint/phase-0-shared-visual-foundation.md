# Phase 0 Shared Visual Foundation

## Purpose

This note records the approved Prompt-03 shared visual baseline for the repository.

## Approved baseline

- `@hbc/ui-kit` is the owner of shared design tokens and reusable visual primitives.
- The shared token model should cover brand, neutral, interactive, surface, border, emphasis, spacing, radius, elevation, typography, and motion states.
- The first reusable primitive set should cover sections, editorial cards, media frames, badges, CTA treatments, skeleton/loading states, and empty-state composition.
- `apps/hb-central-homepage/` is a consumer of the shared visual layer, not an alternate owner.
- The executed Prompt-03 baseline includes a real workspace package at `packages/ui-kit/` with package-local `check-types`, `lint`, `build`, and `test` scripts.

## Guardrails

- Do not treat `packages/brand-tokens/` as the canonical target for Prompt-03.
- App-local code may add thin composition shells, but must not recreate design-system-grade components or token systems.
- Keep the shared visual layer generic enough to support multiple homepage surfaces without carrying feature business logic.
- Reduced-motion support, contrast intent, and hardcoded-color avoidance are part of the baseline quality bar.

## Closure conditions

This planning item is considered closed when:

- Prompt-03 clearly directs implementation to `@hbc/ui-kit`
- the phase package and ownership docs agree that shared tokens and reusable visual primitives belong together in `@hbc/ui-kit`
- the root manifest version has been patch-bumped for the execution/update
- the `packages/ui-kit/` package exists in repo truth and is consumed by the homepage app
