# Phase 0 News, Recognition, and Spotlight Mosaic

## Purpose

This note records the approved Prompt-09 news, recognition, and spotlight mosaic baseline for the repository.

## Approved baseline

- `apps/hb-central-homepage/` owns the blended mosaic implementation for the homepage `newsRecognition` slot.
- The source model is app-local and supports native-news-like items plus editorial recognition and spotlight items.
- A normalized ranked mosaic contract establishes hierarchy so featured entries are visually clearer than standard entries.
- The surface gracefully degrades when one stream is empty and remains functional when only a single stream is available.
- The mosaic uses shared tokens/primitives with semantic links and responsive reflow from multi-card mosaic to stacked layouts.

## Guardrails

- Do not re-create publishing infrastructure that should remain native SharePoint behavior.
- Do not flatten all entry types into identical card density without hierarchy cues.
- Do not replace semantic links with click-only containers.
- Do not introduce ad hoc visual systems outside governed `@hbc/ui-kit` usage.

## Closure conditions

This planning item is considered closed when:

- Prompt-09 implementation exists in `apps/hb-central-homepage/`
- phase package and current-state docs record Prompt-09 as executed baseline
- root manifest version has been patch-bumped for the governance update

## Current status

Closure conditions are satisfied in current repo state:

- the news/recognition/spotlight mosaic is implemented and mounted in the `newsRecognition` slot
- phase package and current-state docs record Prompt-09 as executed baseline
- root manifest patch version has been advanced for this governance update
