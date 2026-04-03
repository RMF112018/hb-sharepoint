# Current State Map

## Purpose

This document records the current, verified repository baseline for the HB SharePoint workstream.

## Current repository state

The repository currently contains:

- root guidance in `README.md`, `AGENTS.md`, and `CLAUDE.md`
- baseline top-level directories in `apps/`, `packages/`, and `tools/`
- root workspace config for `pnpm` + Turbo orchestration
- a phase-0 prompt package under `docs/architecture/prompts/phase-0/`
- developer reference material under `docs/reference/developer/`
- a root `package.json` that currently serves as the first versioned manifest and repository version authority
- an `apps/hb-central-homepage/` app scaffold with runnable typecheck, lint, build, and test scripts
- an app-local homepage shell/composition manifest in `apps/hb-central-homepage/` with explicit Prompt-04 section ordering and zone contracts
- an app-local featured projects showcase implementation in the homepage `projects` slot with editorial-first source modeling and image fallbacks
- app-local company pulse and people moments implementations in the homepage `pulse` and `people` slots with bounded rendering and graceful empty states
- an app-local quick actions deck implementation in the homepage `actions` slot with grouped/ungrouped handling and explicit empty-state behavior
- an app-local news, recognition, and spotlight mosaic implementation in the homepage `newsRecognition` slot with blended stream ranking and graceful degradation
- a deferred personalized lower zone seam and page-local global utility/footer implementation decision in `apps/hb-central-homepage/`
- app-local data/configuration/authoring seam adapters in `apps/hb-central-homepage/` that centralize source modes, defaults, and surface guardrails
- Prompt-12 hardening updates in `apps/hb-central-homepage/` for section/link semantics, responsive layout contracts, and performance-minded lazy loading for lower-priority sections
- Prompt-13 closure artifacts covering final verification outcomes, deployment-readiness guidance, and residual risk/go-no-go framing
- phase-1 Prompt-01 hybrid baseline governance records that freeze custom-vs-native composition and deployment strategy direction
- phase-1 Prompt-02 structural baseline records and first-stage directory ownership under `packages/` for shared and feature boundaries
- phase-1 Prompt-03 shared package scaffolds and build-boundary records for `@hbc/brand-tokens` and `@hbc/sharepoint-core`
- phase-1 Prompt-04 shared brand-token and UI-foundation normalization records for `@hbc/brand-tokens` and `@hbc/ui-kit`
- phase-1 Prompt-05 shell/hero dedicated web part records with non-hero composition host ownership split
- phase-1 Prompt-06 featured-projects/company-pulse dedicated web part records with non-hero composition host ownership split
- phase-1 Prompt-07 quick-actions dedicated web part records with explicit native SharePoint composition seams
- phase-1 Prompt-08 packaging hardening and validation records with canonical Phase-2 handoff backlog
- phase-2 Prompt-01 scope-baseline and open-decision closure records
- phase-2 Prompt-02 final composition-model and page-assembly closure records
- phase-2 Prompt-03 news/recognition/spotlight zone closure records
- phase-2 Prompt-04 people-and-culture zone closure records
- a deterministic `.sppkg` packaging path for the homepage app via native SPFx production packaging (`apps/hb-central-homepage/gulpfile.cjs` + `config/package-solution.json`) guarded by `tools/validate-sppkg.mjs`
- a `packages/ui-kit/` shared visual package with runnable typecheck, lint, build, and test scripts

The repository does not yet contain:

- automated production deployment pipeline artifacts beyond the currently documented phase-0 readiness guidance

## Classification guidance

- Treat this repo as a planning-and-governance seed for the homepage platform, not yet as an implemented workspace.
- Treat Prompt-02 as materially executed: the first runtime baseline now exists and should be extended rather than recreated.
- Treat Prompt-03 as materially executed: the shared visual baseline now exists and should be extended rather than recreated.
- Treat Prompt-06 as materially executed for featured projects: the projects surface now has a concrete implementation and should be extended rather than re-scaffolded.
- Treat Prompt-07 as materially executed for company pulse and people moments: both surfaces now have concrete implementations and should be extended rather than re-scaffolded.
- Treat Prompt-08 as materially executed for quick actions: the actions surface now has a concrete implementation and should be extended rather than re-scaffolded.
- Treat Prompt-09 as materially executed for the mosaic: the news/recognition/spotlight surface now has a concrete implementation and should be extended rather than re-scaffolded.
- Treat Prompt-10 as materially executed for the decision scope: personalization is intentionally deferred with a seam, and global utility/footer is intentionally page-local.
- Treat Prompt-11 as materially executed for source/configuration seams: surface adapters and authoring defaults are now centralized and should be extended rather than bypassed.
- Treat Prompt-12 as materially executed for hardening scope: accessibility semantics, responsive contracts, and performance refinements are now baseline expectations and should be preserved.
- Treat Prompt-13 as materially executed for convergence scope: final validation and deployment-readiness guidance are now baseline records for phase-0 closure.
- Treat phase-1 Prompt-01 as materially executed for baseline scope: the hybrid composition decision matrix and deployment strategy are approved and should be implemented, not rediscovered.
- Treat phase-1 Prompt-02 as materially executed for structure scope: first-stage package directories and ownership/dependency rules are established and should be extended through Prompt-03 scaffolding rather than remapped.
- Treat phase-1 Prompt-03 as materially executed for shared seam scope: shared package exports and build boundaries are now baseline expectations and should be extended rather than re-scaffolded.
- Treat phase-1 Prompt-04 as materially executed for visual foundation scope: canonical brand tokens and shared UI primitives are now baseline expectations and should be extended rather than duplicated.
- Treat phase-1 Prompt-05 as materially executed for shell ownership scope: dedicated shell/hero web part path is baseline and non-hero composition host must remain hero-free.
- Treat phase-1 Prompt-06 as materially executed for feature-web-part ownership scope: dedicated featured-projects and company-pulse web part paths are baseline and non-hero composition host must remain projects/pulse-free.
- Treat phase-1 Prompt-07 as materially executed for quick-actions/native-composition seam scope: dedicated quick-actions web part path is baseline and non-hero composition host must remain actions-free.
- Treat phase-1 Prompt-08 as materially executed for packaging/validation scope: focused web part registrations and runtime mount wiring are validated as release baselines.
- Treat phase-2 Prompt-01 as materially executed for scope baseline: the initial Phase-2 end-state baseline, scope matrix, open-decision direction, and inherited constraints are approved and should be implemented, not rediscovered.
- Treat phase-2 Prompt-02 as materially executed for composition governance: final zone ownership, page assembly rules, and authoring boundaries are approved and should be implemented, not rediscovered.
- Treat phase-2 Prompt-03 as materially executed for zone governance: news/recognition/spotlight architecture, source/curation model, and fallback behavior are approved and should be implemented, not rediscovered.
- Treat phase-2 Prompt-04 as materially executed for people/culture governance: section scope, operational curation model, and fallback posture are approved and should be implemented, not rediscovered.
- Use the prompt package to sequence implementation work, but use live files and this map as the source of truth for what exists now.
- Do not infer app structure, package structure, or verification capabilities that have not been created yet.
- Treat Prompt-01 as historically executed: the structural baseline already exists and should be confirmed rather than recreated.
- Treat `apps/hb-central-homepage/` as the approved target path for the first runtime scaffold established by Prompt-02.
- Treat `@hbc/ui-kit` as the approved owner for the shared token and reusable-primitive scaffold established by Prompt-03.
- Treat `apps/hb-central-homepage/` as the approved owner for the homepage shell and static composition manifest.

## Authority notes

- `README.md`, `AGENTS.md`, and `CLAUDE.md` provide root operating guidance.
- `docs/README.md` provides documentation routing.
- `docs/architecture/blueprint/package-relationship-map.md` governs package placement and dependency direction.
- `docs/architecture/blueprint/phase-0-directory-structure-and-ownership.md` records the approved Prompt-01 structural baseline.
- `docs/architecture/blueprint/phase-0-workspace-and-spfx-baseline.md` records the approved Prompt-02 runtime baseline.
- `docs/architecture/blueprint/phase-0-shared-visual-foundation.md` records the approved Prompt-03 shared visual baseline.
- `docs/architecture/blueprint/phase-0-homepage-shell-and-composition.md` records the approved Prompt-04 composition baseline.
- `docs/architecture/blueprint/phase-0-featured-projects-showcase.md` records the approved Prompt-06 featured projects baseline.
- `docs/architecture/blueprint/phase-0-company-pulse-and-people-moments.md` records the approved Prompt-07 company pulse and people moments baseline.
- `docs/architecture/blueprint/phase-0-quick-actions-deck.md` records the approved Prompt-08 quick actions baseline.
- `docs/architecture/blueprint/phase-0-news-recognition-and-spotlight-mosaic.md` records the approved Prompt-09 news, recognition, and spotlight mosaic baseline.
- `docs/architecture/blueprint/phase-0-personalized-lower-zone-and-global-utility-decision.md` records the approved Prompt-10 personalization and global utility decision baseline.
- `docs/architecture/blueprint/phase-0-data-configuration-and-authoring-seams.md` records the approved Prompt-11 data/configuration/authoring seam baseline.
- `docs/architecture/blueprint/phase-0-accessibility-responsive-performance-hardening.md` records the approved Prompt-12 hardening baseline.
- `docs/architecture/blueprint/phase-0-final-verification-documentation-and-deployment-readiness.md` records the approved Prompt-13 closure baseline.
- `docs/architecture/blueprint/phase-1-hybrid-refactor-baseline.md` records the approved phase-1 Prompt-01 hybrid baseline.
- `docs/architecture/blueprint/phase-1-target-package-map-and-directory-structure.md` records the approved phase-1 Prompt-02 package map and directory-structure baseline.
- `docs/architecture/blueprint/phase-1-shared-packages-and-build-boundaries.md` records the approved phase-1 Prompt-03 shared package and build-boundary baseline.
- `docs/architecture/blueprint/phase-1-shared-brand-token-and-ui-foundation.md` records the approved phase-1 Prompt-04 shared brand-token and UI-foundation baseline.
- `docs/architecture/blueprint/phase-1-shell-hero-dedicated-web-part.md` records the approved phase-1 Prompt-05 shell/hero dedicated web part baseline.
- `docs/architecture/blueprint/phase-1-featured-projects-company-pulse-dedicated-web-parts.md` records the approved phase-1 Prompt-06 featured-projects/company-pulse dedicated web part baseline.
- `docs/architecture/blueprint/phase-1-quick-actions-and-native-composition-seams.md` records the approved phase-1 Prompt-07 quick-actions and native-composition seam baseline.
- `docs/reference/developer/hb-central-homepage-phase-1-hybrid-composition-playbook.md` records the canonical SharePoint page assembly guidance for phase-1 hybrid composition.
- `docs/architecture/blueprint/phase-1-packaging-validation-and-phase-2-handoff.md` records the approved phase-1 Prompt-08 packaging/validation and handoff baseline.
- `docs/architecture/blueprint/phase-2-scope-baseline-and-open-decisions.md` records the approved phase-2 Prompt-01 scope baseline and open-decision closure.
- `docs/architecture/blueprint/phase-2-final-composition-model-and-page-assembly-rules.md` records the approved phase-2 Prompt-02 final composition model and page-assembly closure.
- `docs/architecture/blueprint/phase-2-news-recognition-and-spotlight-zone.md` records the approved phase-2 Prompt-03 news/recognition/spotlight zone closure.
- `docs/architecture/blueprint/phase-2-people-and-culture-zone.md` records the approved phase-2 Prompt-04 people/culture zone closure.
- `docs/architecture/blueprint/phase-2-homepage-handoff-backlog.md` records the canonical Phase-2 homepage backlog handoff.
