# Documentation Map

This repository currently uses `docs/` for canonical architecture prompts, blueprint records, and developer reference material related to the HB Central homepage workstream.

## Routing

- `docs/architecture/prompts/` - scoped prompt packages and implementation sequencing
- `docs/architecture/blueprint/` - current-state and governance authority for repository structure, ownership, and architecture baseline
- `docs/reference/developer/` - developer reference material such as authority routing, verification guidance, and implementation constraints

## Current phase notes

- Prompt-01 established the repo structure and governance baseline.
- Prompt-02 has now established the canonical runtime/tooling baseline for `apps/hb-central-homepage/`.
- Prompt-03 has now established the canonical shared visual-system baseline in `packages/ui-kit/` with the package name `@hbc/ui-kit`.
- Prompt-04 has established the canonical homepage composition contract and keeps shell ownership app-local in `apps/hb-central-homepage/`.
- Prompt-06 has established the featured projects showcase baseline in the app layer with an editorial-first source model.
- Prompt-07 has established company pulse and people moments surfaces in the app layer with bounded list behavior and explicit empty states.
- Prompt-08 has established the quick actions deck surface in the app layer with grouped/ungrouped support and explicit empty-state behavior.
- Prompt-09 has established the news, recognition, and spotlight mosaic surface in the app layer with blended-stream ranking and graceful degradation.
- Prompt-10 has established a deferred personalization seam and a page-local global utility/footer decision in the app layer.
- Prompt-11 has established centralized data/configuration and authoring seam adapters for implemented homepage surfaces.
- Prompt-12 has hardened accessibility semantics, responsive layout behavior, and runtime performance seams for implemented homepage surfaces.
- Prompt-13 has finalized verification, documentation convergence, and deployment-readiness guidance for the phase-0 homepage baseline.
- Phase-1 Prompt-01 has now established the hybrid refactor baseline (current-state map, target model, custom-vs-native decision matrix, and deployment strategy direction).
- Phase-1 Prompt-02 has now established the target package map and first-stage directory ownership baseline for shared layers, feature packages, and the SPFx host boundary.
- Phase-1 Prompt-03 has now established shared package scaffolding and build-boundary baselines for `@hbc/brand-tokens` and `@hbc/sharepoint-core`.
- Phase-1 Prompt-04 has now established shared brand-token governance and shared UI-foundation baselines across `@hbc/brand-tokens`, `@hbc/ui-kit`, and homepage runtime consumption.
- Phase-1 Prompt-05 has now established dedicated shell/hero web part ownership and removed hero ownership from the non-hero composition host path.
- Phase-1 Prompt-06 has now established dedicated featured-projects and company-pulse web part ownership and removed projects/pulse ownership from the non-hero composition host path.
- Phase-1 Prompt-07 has now established dedicated quick-actions web part ownership and explicit native SharePoint composition seams with a canonical hybrid assembly playbook.
- Phase-1 Prompt-08 has now established packaging/validation hardening baselines and canonical Phase-2 homepage handoff backlog documentation.
- Phase-2 Prompt-01 has now established the executable scope baseline and open-decision closure record for the Phase-2 prompt series.
- Phase-2 Prompt-02 has now established the final composition model, page assembly rules, and authoring boundary closure record for the Phase-2 prompt series.
- Phase-2 Prompt-03 has now established the finalized news/recognition/spotlight zone governance record, including curation and fallback expectations.
- Phase-2 Prompt-04 has now established the finalized people-and-culture zone governance record, including curation ownership and sparse-content fallback expectations.
- Prompt-01 should now be treated as a confirmed historical foundation rather than pending structural work.

## Usage rules

- Update the nearest canonical document instead of duplicating policy text across multiple files.
- Treat `docs/architecture/blueprint/current-state-map.md` as the present-truth authority for what currently exists in the repo.
- Treat `docs/architecture/blueprint/package-relationship-map.md` as the authority for package placement and dependency direction.
- Use prompt-package files for scoped implementation sequencing, not for long-lived repository governance.
