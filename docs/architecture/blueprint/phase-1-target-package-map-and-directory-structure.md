# Phase 1 Target Package Map and Directory Structure

## Purpose

This note records the approved Prompt-02 baseline for phase-1 package mapping, directory structure, ownership boundaries, and dependency direction.

## Approved baseline

- Phase 1 keeps one deployable SPFx host at `apps/hb-central-homepage`.
- First-stage structural directories are established for:
  - `packages/brand-tokens`
  - `packages/sharepoint-core`
  - `packages/homepage-shell`
  - `packages/featured-projects`
  - `packages/company-pulse`
  - `packages/quick-actions`
- Reusable visual primitives remain governed by `@hbc/ui-kit` (`packages/ui-kit`).
- Prompt-02 establishes structure and ownership only; full package scaffolding is deferred to Prompt-03.

## Guardrails

- Do not move deployable SPFx host ownership out of `apps/hb-central-homepage`.
- Do not create competing visual-primitive ownership outside `@hbc/ui-kit`.
- Do not introduce app-local to shared-layer dependency inversion.
- Do not create circular dependencies across feature packages.
- Do not treat Prompt-02 as the phase for full package runtime/build wiring.

## Closure conditions

This planning item is considered closed when:

- target Prompt-02 directories exist for shared and feature ownership areas
- ownership and dependency-direction rules are explicitly documented in phase-1 governance records
- current-state and docs routing records reference this Prompt-02 closure note
- root manifest version has been patch-bumped for the governance update

## Current status

Closure conditions are satisfied in current repo state:

- first-stage Prompt-02 target directories exist under `packages/`
- phase-1 package docs define ownership and dependency-direction rules
- current-state and docs routing records include this closure authority
- root manifest patch version has been advanced for this governance update
