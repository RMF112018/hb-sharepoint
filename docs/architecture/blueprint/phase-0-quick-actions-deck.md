# Phase 0 Quick Actions Deck

## Purpose

This note records the approved Prompt-08 quick actions deck baseline for the repository.

## Approved baseline

- `apps/hb-central-homepage/` owns the quick actions deck implementation for the homepage `actions` slot.
- The source model is app-local and editorial-first, with grouped and ungrouped action support.
- Action cards support short label, optional description, destination metadata, optional priority treatment, and internal/external destination handling.
- Label and count constraints keep the surface scannable and maintainable for editors.
- Empty-state rendering is explicit so the section remains intentional when actions are not configured.

## Guardrails

- Do not convert the deck into an uncurated list of links or icon-only tiles.
- Do not replace semantic action links with click-only containers.
- Do not introduce ad hoc visual systems outside governed `@hbc/ui-kit` tokens/primitives.
- Keep the deck structured for future audience filtering without redesigning the section contract.

## Closure conditions

This planning item is considered closed when:

- Prompt-08 implementation exists in `apps/hb-central-homepage/`
- phase package and current-state docs record Prompt-08 as executed baseline
- root manifest version has been patch-bumped for the governance update

## Current status

Closure conditions are satisfied in current repo state:

- the quick actions deck is implemented and mounted in the `actions` slot
- phase package and current-state docs record Prompt-08 as executed baseline
- root manifest patch version has been advanced for this governance update
