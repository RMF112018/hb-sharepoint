# Phase 2 News, Recognition, and Spotlight Zone

## Purpose

This note records the approved Prompt-03 baseline for the final news/recognition/spotlight zone architecture, curation model, and fallback behavior.

## Approved baseline

- Prompt-03 is treated as an executed closure artifact for Phase 2.
- The blended news/recognition/spotlight surface remains a dedicated custom zone in the homepage sections host.
- Native SharePoint News remains approved as a separate editorial module where native feed behavior is preferred.
- Content source ownership, curation responsibility, and sparse-content fallback behavior are explicitly documented and governed.

## Guardrails

- Do not collapse the blended custom mosaic into ad hoc static content.
- Do not remove explicit loading/empty/error/editorial fallback behavior.
- Do not allow content source ownership to drift outside centralized seam/config governance.
- Do not duplicate native-news and blended-custom intent in the same page region without explicit rationale.

## Closure conditions

This planning item is considered closed when:

- phase-2 prompt package docs treat Prompt-03 as executed baseline
- implementation summary, source/curation model, validation evidence, and deferred gaps are explicitly documented
- current-state and docs-routing records reference this closure note
- root manifest version has been patch-bumped for the governance update

## Current status

Closure conditions are satisfied in current repo state:

- phase-2 prompt summary and README now treat Prompt-03 as executed baseline
- zone architecture and curation/fallback posture are explicitly documented
- governance maps reference this closure authority
- root manifest patch version has been advanced for this governance update
