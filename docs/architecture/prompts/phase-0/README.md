# HB Central Homepage Prompt Package

This package contains the phase-0 prompt sequence for turning this repository from a planning-and-governance seed into a governed SharePoint implementation workspace for the HB Central homepage.

## What this package assumes

- The repository is still in a pre-scaffold state for homepage delivery.
- The phase-0 prompt package and developer reference docs already exist.
- Prompt-01 has already established the structural and governance baseline that later prompts build on.
- Prompt-02 has now established the runtime/tooling baseline in `apps/hb-central-homepage/` rather than a separate `spfx/solutions/...` tree.
- Prompt-03 has now established the shared visual foundation in `packages/ui-kit/` under the package name `@hbc/ui-kit`.
- Prompt-04 has now established the homepage shell and static composition contract app-local in `apps/hb-central-homepage/`.
- Prompt-06 has now established the featured projects showcase surface and source contract in `apps/hb-central-homepage/`.
- Prompt-07 has now established the company pulse and people moments surfaces and source contracts in `apps/hb-central-homepage/`.
- Prompt-08 has now established the quick actions deck surface and source contract in `apps/hb-central-homepage/`.
- Prompt-09 has now established the news, recognition, and spotlight mosaic surface and source contract in `apps/hb-central-homepage/`.
- Prompt-10 has now established a deferred personalization seam and a page-local global utility/footer decision in `apps/hb-central-homepage/`.
- Prompt-11 has now established data/configuration and authoring seam adapters in `apps/hb-central-homepage/`.
- Prompt-12 has now established accessibility semantics, responsive behavior hardening, and performance-minded runtime refinements in `apps/hb-central-homepage/`.
- Prompt-13 now closes phase-0 with final verification outcomes, documentation convergence, and deployment-readiness guidance.
- Reusable visual UI belongs in `@hbc/ui-kit`; the phase package should not direct implementers to create an alternate shared visual library.

## Recommended execution order

1. `Prompt-01-Establish-Directory-Structure-and-Ownership.md`
2. `Prompt-02-Scaffold-Workspace-and-SPFx-Baseline.md`
3. `Prompt-03-Create-Brand-Token-and-Shared-UI-Foundations.md`
4. `Prompt-04-Implement-Homepage-Shell-and-Composition-Contracts.md`
5. `Prompt-05-Implement-Cinematic-Hero-Storyboard-Web-Part.md`
6. `Prompt-06-Implement-Featured-Projects-Showcase-Web-Part.md`
7. `Prompt-07-Implement-Company-Pulse-and-People-Moments-Surfaces.md`
8. `Prompt-08-Implement-Quick-Actions-Deck.md`
9. `Prompt-09-Implement-News-Recognition-and-Spotlight-Mosaic.md`
10. `Prompt-10-Implement-Personalized-Lower-Zone-and-Global-Utility-Decision.md`
11. `Prompt-11-Implement-Data-Configuration-and-Authoring-Seams.md`
12. `Prompt-12-Harden-Accessibility-Responsive-Behavior-and-Performance.md`
13. `Prompt-13-Final-Verification-Documentation-and-Deployment-Readiness.md`

## Package contents

- `README.md` - package overview and execution framing
- `HB-Central-Homepage-Prompt-Package-Summary.md` - current-state summary, baseline structure, ownership model, and documentation impact
- `Prompt-01-*` through `Prompt-13-*` - implementation prompts for the local code agent

## Core architectural stance

- Prompt-01 is the historically completed repository structure and governance gate.
- Prompt-02 is the executed apps-first runtime baseline gate.
- Prompt-03 is the executed shared visual foundation gate.
- Prompt-04 is the executed homepage shell and composition-contract gate.
- Prompt-06 is the executed featured projects showcase gate.
- Prompt-07 is the executed company pulse and people moments gate.
- Prompt-08 is the executed quick actions deck gate.
- Prompt-09 is the executed news, recognition, and spotlight mosaic gate.
- Prompt-10 is the executed personalized lower zone and global utility decision gate.
- Prompt-11 is the executed data, configuration, and authoring seam gate.
- Prompt-12 is the executed accessibility, responsive behavior, and performance hardening gate.
- Prompt-13 is the executed final verification, documentation, and deployment-readiness gate.
- The first versioned manifest should be the root `package.json` using the `00.000.000`-style format.
- The repository should grow from a minimal baseline into a governed SPFx workspace; do not skip directly to component implementation.
- Reusable visual UI and tokens belong in `@hbc/ui-kit`, while SPFx composition and SharePoint-specific wiring stay in the eventual app layer.
- Prompt-02 should add runtime structure under `apps/hb-central-homepage/` and the root workspace layer, not under a separate canonical `spfx/solutions/...` tree.
- Prompt-03 should add the shared token model and reusable primitives through `@hbc/ui-kit`, not through a separate canonical `packages/brand-tokens/` package.
- Prompt-04 should define a static app-local composition manifest for section order and slot layout rather than introducing a dynamic surface registry.

## Boundary notes

- Do not treat the old greenfield assumptions in this package as current repo truth.
- Do not create many empty packages or app internals during Prompt-01.
- Do not create a second reusable visual component layer outside `@hbc/ui-kit`.
- Do not let later prompt edits drift away from the canonical authority files established by Prompt-01.

## Primary risks

- Beginning SPFx implementation before the repo has a clear ownership and documentation baseline
- Letting prompt text drift away from `AGENTS.md` and `CLAUDE.md`
- Creating speculative directories that later prompts will need to undo
- Letting the root manifest/version rule become implicit or drift across prompt revisions
- Reintroducing a competing `spfx/solutions/...` path model after Prompt-02 has been aligned to `apps/`
- Reintroducing a competing `packages/brand-tokens/` ownership model after Prompt-03 has been aligned to `@hbc/ui-kit`
- Reintroducing a dynamic shell-registration model after Prompt-04 has been aligned to a static app-local composition manifest

## Expected outputs from the implementation run

By the end of the full prompt sequence, the repo should contain:

- a governed root workspace manifest and initial version authority
- canonical documentation routing and architecture authority records
- a clean structural baseline inherited from Prompt-01
- an executed apps-first runtime baseline centered on `apps/hb-central-homepage/`
- an executed shared visual foundation centered on `packages/ui-kit/` with the package name `@hbc/ui-kit`
- an app-local homepage shell/composition contract centered on a static manifest
- an executed featured projects showcase with editorial-first source shape and image fallbacks
- executed company pulse and people moments surfaces with bounded counts and graceful empty states
- an executed quick actions deck with grouped/ungrouped support, priority treatment, and explicit empty-state rendering
- an executed news/recognition/spotlight mosaic with blended stream handling and explicit empty-state rendering
- an executed Prompt-10 decision with deferred personalization seam and page-local global utility/footer implementation
- an executed Prompt-11 data/configuration seam model with explicit source modes, authoring defaults, and adapter guardrails
- an executed Prompt-12 hardening layer with explicit accessibility semantics, responsive layout contracts, reduced-motion-conscious behavior, and targeted lazy loading for lower-priority sections
- an executed Prompt-13 final-readiness layer with explicit verification evidence, go/no-go summary, and deployment guidance aligned to repo truth
- shared/runtime package boundaries that follow repository governance
- homepage implementation scaffolding and later surface work from subsequent prompts
