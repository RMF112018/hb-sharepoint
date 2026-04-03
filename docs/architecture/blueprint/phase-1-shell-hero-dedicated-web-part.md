# Phase 1 Shell/Hero Dedicated Web Part

## Purpose

This note records the approved Prompt-05 baseline for extracting shell/hero into a dedicated custom web part path while preserving one deployable phase-1 solution.

## Approved baseline

- Shell/hero rendering is owned by a dedicated web part host and runtime path.
- Existing homepage composition host ownership excludes the `hero` section and remains responsible for non-hero sections.
- Both web parts are represented in SPFx config/manifests for toolbox discovery.
- Shared visual contracts for shell/hero continue to come from `@hbc/ui-kit` and governed brand tokens.
- Deployment remains one `.sppkg` solution for phase-1.

## Guardrails

- Do not reintroduce hero rendering into the non-hero composition host path.
- Keep web part host classes thin and runtime-focused.
- Do not split deployable solutions for this extraction step.
- Preserve accessible and production-appropriate shared-token UI usage.

## Closure conditions

This planning item is considered closed when:

- dedicated shell/hero web part runtime path is implemented and mounted through SPFx host wiring
- non-hero composition host no longer owns hero rendering
- toolbox/manifest wiring includes both web parts within the same solution
- phase-1 and current-state governance docs reference this Prompt-05 closure note
- root manifest version has been patch-bumped for this governance update

## Current status

Closure conditions are satisfied in current repo state:

- shell/hero is mounted via dedicated runtime and web part host path
- non-hero composition host manifest/order excludes hero ownership
- SPFx config/manifests include both web part entries in a single solution
- phase/governance docs include Prompt-05 closure references
- root manifest patch version has been advanced for this governance update
