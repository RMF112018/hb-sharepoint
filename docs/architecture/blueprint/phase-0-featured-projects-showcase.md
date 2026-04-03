# Phase 0 Featured Projects Showcase

## Purpose

This note records the approved Prompt-06 featured projects baseline for the repository.

## Approved baseline

- `apps/hb-central-homepage/` owns the featured projects showcase implementation for the homepage `projects` slot.
- The source model is editorial-first and app-local, with durable typing so future operational project sources can map cleanly.
- Each project card supports image, title, optional sublabel, short support line, and a primary destination link.
- Missing image data renders an explicit fallback frame rather than collapsing layout.
- The layout contract remains scannable and responsive, with grid-to-stack behavior derived from a stable card-grid definition.

## Guardrails

- Do not move this surface into a shared package while it is still app-specific composition.
- Do not replace semantic links with click-only card containers.
- Do not introduce ad hoc color systems outside governed `@hbc/ui-kit` token usage.
- Keep the source contract compatible with later Prompt-11 source/configuration upgrades.

## Closure conditions

This planning item is considered closed when:

- Prompt-06 implementation exists in `apps/hb-central-homepage/`
- docs record featured projects as executed baseline in the phase package and current-state map
- root manifest version has been patch-bumped for the governance update

## Current status

Closure conditions are satisfied in current repo state:

- the featured projects surface is implemented in the app runtime and mounted in the `projects` section slot
- the phase package and current-state docs record Prompt-06 as executed baseline
- root manifest patch version has been advanced for this governance update
