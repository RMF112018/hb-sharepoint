# Phase 1 Shared Brand Token and UI Foundation

## Purpose

This note records the approved Prompt-04 baseline for shared brand-token governance and reusable UI-foundation normalization in phase 1.

## Approved baseline

- `@hbc/brand-tokens` is the canonical brand token source for shared visual values.
- Required brand colors are governed through tokens: primary `#225391` and secondary `#E57E46`.
- `@hbc/ui-kit` consumes canonical brand tokens and remains the owner for reusable visual primitives.
- Shared state primitives (loading, empty, error) are available in `@hbc/ui-kit`.
- Homepage runtime surfaces consume shared token/primitives rather than local ad hoc visual duplication.

## Guardrails

- Do not duplicate brand literals in app-layer styling where shared tokens exist.
- Do not move reusable visual primitives into feature-local packages.
- Keep `@hbc/ui-kit` exports explicit and stable via root entrypoint only.
- Maintain accessibility semantics for focus treatment and state presentation.

## Closure conditions

This planning item is considered closed when:

- canonical brand token source is established and consumed by `@hbc/ui-kit`
- shared UI primitives include governed loading/empty/error building blocks
- homepage runtime demonstrates shared primitive/token consumption in feature paths
- phase-1 and current-state governance docs reference this Prompt-04 closure note
- root manifest version has been patch-bumped for this governance update

## Current status

Closure conditions are satisfied in current repo state:

- brand-token governance is centralized in `@hbc/brand-tokens` and consumed by `@hbc/ui-kit`
- shared UI primitives and state primitives are available through `@hbc/ui-kit`
- homepage runtime uses shared token-driven focus styling and shared card primitives in feature rendering
- phase/governance docs include Prompt-04 closure references
- root manifest patch version has been advanced for this governance update
