# Phase 1 Shared Packages and Build Boundaries

## Purpose

This note records the approved Prompt-03 baseline for shared package scaffolding and build-boundary validation in phase 1.

## Approved baseline

- `@hbc/brand-tokens` is scaffolded in `packages/brand-tokens` with stable root exports.
- `@hbc/sharepoint-core` is scaffolded in `packages/sharepoint-core` with stable root exports.
- `@hbc/ui-kit` remains the reusable visual owner for shared UI primitives.
- `apps/hb-central-homepage` resolves shared packages through workspace dependencies.
- Shared packages use explicit root export entries and package-local TypeScript build configuration.

## Guardrails

- Do not introduce deep wildcard exports or ambiguous barrel entrypoints for shared packages.
- Do not allow shared packages to depend on app-local host/runtime code.
- Do not create competing reusable visual ownership outside `@hbc/ui-kit`.
- Keep shared package seams minimal and purpose-specific; avoid generic dumping grounds.

## Closure conditions

This planning item is considered closed when:

- `@hbc/brand-tokens` and `@hbc/sharepoint-core` exist as real workspace packages with explicit root exports
- shared package type/build checks pass
- app host package resolves shared package exports in verification
- phase-1 and current-state governance docs reference this closure note
- root manifest version has been patch-bumped for this governance update

## Current status

Closure conditions are satisfied in current repo state:

- required shared package scaffolds and explicit exports are in place
- package-local checks and app-host resolution checks are verified in Prompt-03 validation
- phase-1 package and current-state docs reference this closure record
- root manifest patch version has been advanced for this governance update
