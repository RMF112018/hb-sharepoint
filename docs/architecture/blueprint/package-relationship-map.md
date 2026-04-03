# Package Relationship Map

## Purpose

This document defines the approved ownership and dependency direction for the repository baseline created by Prompt-01.

## Ownership model

- Root workspace: owns repository-level configuration, orchestration, and the initial versioned manifest.
- `apps/`: owns deployable application hosts and future SPFx solution containers.
- `packages/`: owns non-visual shared logic, shared contracts, and platform helpers only when they have real consumers.
- `@hbc/ui-kit`: owns reusable visual UI, shared tokens, and reusable interface primitives.

## Dependency direction

- `apps/` may depend on `packages/` and `@hbc/ui-kit`.
- `packages/` may depend on other shared packages only when the dependency direction remains clear and non-circular.
- `packages/` must not depend on app-local implementation code.
- Reusable visual UI must not be recreated inside app-local or feature-local packages when `@hbc/ui-kit` is the right owner.

## Guardrails

- Do not create speculative packages before Prompt-02 or later prompts justify them.
- Do not create a local visual primitives package that competes with `@hbc/ui-kit`.
- Keep SharePoint wiring and deployable composition in the app layer rather than in shared packages.
- Document any future ownership reversal or durable architectural exception before implementing it.
