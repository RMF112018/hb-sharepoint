# Phase 0 Company Pulse and People Moments

## Purpose

This note records the approved Prompt-07 company pulse and people moments baseline for the repository.

## Approved baseline

- `apps/hb-central-homepage/` owns the company pulse and people moments implementations for the homepage `pulse` and `people` slots.
- Both surfaces use app-local editorial-first source contracts that can map to future operational sources without shell restructuring.
- Company Pulse is a compact, scannable band of bounded metric/callout items with optional destinations.
- People Moments is a coordinated culture surface that supports birthdays, anniversaries, promotions, and recognition with restrained celebration emphasis.
- Both surfaces provide graceful empty-state rendering so zero-item states remain intentional and readable.

## Guardrails

- Do not move pulse/people composition ownership into shared packages.
- Do not replace semantic links with click-only containers.
- Do not introduce ad hoc color systems; use governed `@hbc/ui-kit` tokens/primitives.
- Keep counts bounded so these sections remain scannable and avoid dashboard sprawl.

## Closure conditions

This planning item is considered closed when:

- Prompt-07 implementations exist in `apps/hb-central-homepage/`
- phase package and current-state docs record Prompt-07 as executed baseline
- root manifest version has been patch-bumped for the governance update

## Current status

Closure conditions are satisfied in current repo state:

- company pulse and people moments are implemented in runtime and mounted in `pulse` and `people` section slots
- phase package and current-state docs record Prompt-07 as executed baseline
- root manifest patch version has been advanced for this governance update
