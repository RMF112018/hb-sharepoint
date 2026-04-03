# Phase 0 Homepage Shell and Composition

## Purpose

This note records the approved Prompt-04 composition baseline for the repository.

## Approved baseline

- `apps/hb-central-homepage/` owns the homepage shell and composition contract.
- The composition contract should be expressed as a static app-local manifest/config, not as a dynamic registration framework.
- The manifest should explicitly define the ordered homepage sections: hero, projects, pulse, people, actions, news/recognition, optional personalized lower zone, and footer/global utility.
- The shell should own layout-zone handling for full-width, banded, and mosaic sections plus shell-level loading, empty, and error-slot behavior.
- `@hbc/ui-kit` remains the source of shared visual primitives, but not the owner of page composition.

## Guardrails

- Do not move homepage composition into a shared package.
- Do not introduce a dynamic plugin/registry pattern as the canonical surface-integration model.
- Do not hardwire data-fetching concerns into the shell.
- Keep the shell ready for later surface implementations without forcing structural rewrites.

## Closure conditions

This planning item is considered closed when:

- Prompt-04 clearly directs implementation to `apps/hb-central-homepage/`
- the phase package and ownership docs agree on a static app-local composition manifest
- the root manifest version has been patch-bumped for the governance update

## Current status

Closure conditions are satisfied in current repo state:

- `apps/hb-central-homepage/` contains the Prompt-04 shell and static composition manifest
- phase prompt package and current-state governance docs record Prompt-04 as executed baseline
- root manifest patch version has been advanced for this governance update
