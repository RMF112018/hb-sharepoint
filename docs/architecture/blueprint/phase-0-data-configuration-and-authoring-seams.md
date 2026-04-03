# Phase 0 Data Configuration and Authoring Seams

## Purpose

This note records the approved Prompt-11 baseline for homepage source/configuration seams and authoring defaults.

## Approved baseline

- `apps/hb-central-homepage/` owns the central authoring/configuration seam module for homepage runtime surfaces.
- Per-surface source modes are explicit (`editorial-seed`, `native-news-like`, `deferred`) and used by runtime adapters.
- Adapter helpers normalize source contracts into render-ready data with consistent empty-state behavior and bounded defaults.
- Dynamic cross-component data remains disabled until a concrete supported scenario exists.
- Guardrails and required fields are documented so site owners can configure surfaces without treating property panes as a CMS replacement.

## Property-pane stance

- Prompt-11 introduces app-local configuration seams and authoring contracts that prepare for property-pane wiring.
- Full SPFx property-pane implementation is intentionally deferred to later scope where host/runtime integration justifies it.

## Authoring conventions

- Use concise labels and bounded card counts for all editorial surfaces.
- Keep featured ordering intentional and refresh stale content regularly.
- Use explicit fallbacks for incomplete source fields rather than allowing render-time breakage.

## Closure conditions

This planning item is considered closed when:

- central source/configuration seam adapters exist in `apps/hb-central-homepage/`
- implemented surfaces consume seam-driven defaults instead of scattered source normalization
- phase package and current-state docs record Prompt-11 as executed baseline
- root manifest version has been patch-bumped for the governance update

## Current status

Closure conditions are satisfied in current repo state:

- a central app-local source/configuration seam module and adapter contracts are implemented
- runtime surfaces consume seam-driven adapter outputs and defaults
- phase/governance docs record Prompt-11 as executed baseline
- root manifest patch version has been advanced for this governance update
