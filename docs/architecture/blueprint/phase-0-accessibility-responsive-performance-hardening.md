# Phase 0 Accessibility, Responsive Behavior, and Performance Hardening

## Purpose

This note records the approved Prompt-12 baseline for hardening accessibility semantics, responsive layout behavior, and runtime performance for the HB Central homepage app layer.

## Approved baseline

- `apps/hb-central-homepage/` owns app-local hardening utilities for consistent link semantics, focus-visible behavior, and landmark clarity.
- Implemented homepage surfaces use stable responsive grid-to-stack contracts that hold across narrow, medium, wide, and extra-wide viewport ranges.
- Lower-priority homepage surfaces can use section-level lazy loading with non-jarring fallbacks while preserving composition order.
- Empty/loading/error seam quality is treated as release behavior, not placeholder output.
- Visual updates remain token-governed through `@hbc/ui-kit`; ad hoc palette values are not introduced.

## Guardrails

- Do not regress keyboard accessibility, heading hierarchy, or link purpose semantics as later prompts add richer data sources.
- Do not reintroduce brittle DOM-width detection for responsive behavior when CSS-driven contracts are sufficient.
- Do not trade away section-order predictability for performance experiments.
- Keep reduced-motion support intact for loading/transition behavior.

## Closure conditions

This planning item is considered closed when:

- app-local link/focus/landmark hardening seams are implemented and consumed by runtime surfaces
- responsive behavior is represented by explicit runtime contracts instead of ad hoc per-component assumptions
- section-level lazy loading is applied only where beneficial and does not alter shell composition order
- phase package and current-state docs record Prompt-12 as executed baseline
- root manifest version is patch-bumped for the governance update

## Known constraints

- Full automated contrast and assistive-tech audits are still expected as part of later end-to-end release validation.
- Native SharePoint page-level responsive and host-chrome interactions can still require downstream scenario validation beyond app-local unit tests.

## Current status

Closure conditions are satisfied in current repo state:

- runtime hardening utilities and semantics are integrated across implemented surfaces
- responsive grid/stack contracts are explicit and test-covered in runtime modules
- lower-priority section lazy loading is implemented with stable shell behavior
- governance docs reflect Prompt-12 execution and baseline expectations
- root manifest patch version has been advanced for this closure
