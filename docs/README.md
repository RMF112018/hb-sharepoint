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
- Prompt-01 should now be treated as a confirmed historical foundation rather than pending structural work.

## Usage rules

- Update the nearest canonical document instead of duplicating policy text across multiple files.
- Treat `docs/architecture/blueprint/current-state-map.md` as the present-truth authority for what currently exists in the repo.
- Treat `docs/architecture/blueprint/package-relationship-map.md` as the authority for package placement and dependency direction.
- Use prompt-package files for scoped implementation sequencing, not for long-lived repository governance.
