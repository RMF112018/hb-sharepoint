# HB Central Homepage Prompt Package Summary

## Executive summary

This repository now has the Prompt-01 structural baseline, the Prompt-02 runtime scaffold, the Prompt-03 shared visual foundation, the Prompt-04 homepage shell/composition baseline, the Prompt-06 featured projects baseline, the Prompt-07 company-pulse/people-moments baseline, the Prompt-08 quick-actions baseline, the Prompt-09 news/recognition/spotlight baseline, the Prompt-10 personalization/global-utility decision baseline, the Prompt-11 data/configuration/authoring seam baseline, the Prompt-12 accessibility/responsive/performance hardening baseline, and the Prompt-13 final verification/documentation/deployment-readiness baseline recorded in repo truth.

## Repo-truth summary

At the time of this package revision, the live repository contains:

- a minimal root `README.md`
- `AGENTS.md` and `CLAUDE.md` repository guidance
- a root `package.json` with the initial repository version authority
- `docs/README.md`
- `docs/architecture/blueprint/current-state-map.md`
- `docs/architecture/blueprint/package-relationship-map.md`
- `docs/architecture/blueprint/phase-0-directory-structure-and-ownership.md`
- `docs/architecture/prompts/phase-0/**`
- `docs/reference/developer/**`
- top-level `apps/`, `packages/`, and `tools/` directories reserved for later implementation work
- root `pnpm` workspace configuration and Turbo task orchestration
- an `apps/hb-central-homepage/` homepage shell with static composition manifest and section wrappers
- an app-local featured projects showcase implementation mounted in the homepage `projects` slot
- app-local company pulse and people moments surface implementations mounted in the homepage `pulse` and `people` slots
- an app-local quick actions deck implementation mounted in the homepage `actions` slot
- an app-local news, recognition, and spotlight mosaic implementation mounted in the homepage `newsRecognition` slot
- an app-local personalized lower zone seam and page-local global utility/footer implementation reflecting the Prompt-10 decision
- app-local data/configuration/authoring seam adapters that normalize source and guardrail behavior across implemented homepage surfaces
- Prompt-12 runtime hardening for accessibility semantics, responsive layout contracts, and performance-minded lazy loading of lower-priority sections
- Prompt-13 convergence records for final validation outcomes, deployment-readiness guidance, and go/no-go summary
- a `packages/ui-kit/` shared visual package for tokens and reusable primitives

It does not yet contain:

- full production deployment automation beyond the currently executed Prompt-13 readiness scope

Prompt-01 is therefore the recorded structural kickoff for this repository, Prompt-02 is the recorded runtime kickoff, Prompt-03 is the recorded shared-visual kickoff, Prompt-04 is the recorded homepage-composition kickoff, Prompt-06 is the recorded featured-projects kickoff, Prompt-07 is the recorded pulse/people kickoff, Prompt-08 is the recorded quick-actions kickoff, Prompt-09 is the recorded news/recognition/spotlight kickoff, Prompt-10 is the recorded personalization/global-utility-decision kickoff, Prompt-11 is the recorded data/configuration/authoring-seam kickoff, Prompt-12 is the recorded accessibility/responsive/performance-hardening kickoff, Prompt-13 is the recorded final-verification/deployment-readiness kickoff, and subsequent prompts should treat those baselines as established unless repo truth changes again.

## Recommended architecture

### 1) Structural baseline

Prompt-01 establishes only the durable minimum:

```text
/
├─ README.md
├─ AGENTS.md
├─ CLAUDE.md
├─ package.json
├─ docs/
│  ├─ README.md
│  ├─ architecture/
│  │  ├─ blueprint/
│  │  │  ├─ current-state-map.md
│  │  │  ├─ package-relationship-map.md
│  │  │  └─ phase-0-directory-structure-and-ownership.md
│  │  └─ prompts/
│  │     └─ phase-0/
│  └─ reference/
│     └─ developer/
├─ apps/
├─ packages/
└─ tools/
```

Create only the root-level directories that the next prompt needs. Do not scaffold app internals, SPFx internals, or speculative shared packages yet.

### 2) Versioning baseline

- The first versioned manifest should be the root `package.json`.
- Use the required `00.000.000`-style format.
- Prompt-01 originally initialized the repository baseline at `00.000.001`.
- Treat that root manifest as the patch-bump authority for subsequent planning/governance revisions until a broader workspace structure supersedes it intentionally.

### 3) Ownership model

#### Root workspace
Owns:

- repository-level scripts and orchestration when they are introduced
- workspace-wide package manager configuration
- repository version authority until a more specific release model is documented

Must not own:

- SPFx solution implementation details
- reusable UI implementation
- feature-specific business logic

#### `apps/`
Owns:

- deployable application surfaces
- SPFx solution hosts and page-level composition surfaces once created

Must not own:

- reusable shared UI primitives that belong in `@hbc/ui-kit`
- cross-app shared contracts duplicated locally

#### `packages/`
Owns:

- non-visual shared logic
- shared contracts
- platform or SharePoint helper libraries when justified by real usage

Must not own:

- speculative packages with no current consumer
- reusable visual primitives that belong in `@hbc/ui-kit`

#### `@hbc/ui-kit`
Owns:

- reusable visual UI
- shared tokens, primitives, and interaction patterns that serve multiple surfaces

Must not own:

- SPFx wiring
- page-specific composition logic
- SharePoint data adapters

### 4) Documentation authority

Prompt-01 created the governance set that `AGENTS.md` already expects:

- `docs/README.md` for documentation routing
- `docs/architecture/blueprint/current-state-map.md` for current-state authority
- `docs/architecture/blueprint/package-relationship-map.md` for dependency and ownership authority
- a concise structure/ownership note that records the Prompt-01 baseline and closes the open item formally

## Key decisions

1. Start with governance and structure, not runtime scaffolding.
2. Add the first root manifest now so versioning has a real authority.
3. Keep reusable visual UI assigned to `@hbc/ui-kit`.
4. Do not invent package internals before Prompt-02.
5. Treat missing authority files as implementation blockers that Prompt-01 must remove.
6. Treat `apps/hb-central-homepage/` as the canonical first runtime scaffold path established by Prompt-02.
7. Treat `@hbc/ui-kit` as the canonical owner of both shared tokens and reusable visual primitives established by Prompt-03.
8. Treat `apps/hb-central-homepage/` as the canonical owner of a static homepage composition manifest for Prompt-04.
9. Treat `apps/hb-central-homepage/` as the canonical owner of the featured projects source contract and surface implementation for Prompt-06.
10. Treat `apps/hb-central-homepage/` as the canonical owner of company pulse and people moments source contracts and surface implementations for Prompt-07.
11. Treat `apps/hb-central-homepage/` as the canonical owner of the quick actions source contract and deck implementation for Prompt-08.
12. Treat `apps/hb-central-homepage/` as the canonical owner of the blended news/recognition/spotlight source contract and mosaic implementation for Prompt-09.
13. Treat `apps/hb-central-homepage/` as the canonical owner of the deferred personalization seam and page-local global utility/footer implementation decision for Prompt-10.
14. Treat `apps/hb-central-homepage/` as the canonical owner of data/configuration/authoring seam adapters for Prompt-11.
15. Treat `apps/hb-central-homepage/` as the canonical owner of Prompt-12 accessibility, responsive behavior, and performance hardening implementation.
16. Treat Prompt-13 as the final phase-0 convergence record for verification, documentation alignment, and deployment-readiness guidance.

## Verification philosophy

### Smallest meaningful verification set first

For this prompt-package update, validate:

- referenced authority paths exist
- prompt-package documents agree with `AGENTS.md` and `CLAUDE.md`
- the root manifest version uses the required format

### Broaden only when warranted

Run broader workspace or app verification once runtime scaffolding exists. With Prompt-02 and Prompt-03 executed, the expected package/app-level suite is `check-types`, `lint`, `build`, and `test`, with matching root workspace checks via Turbo.

## Documentation impact

This phase package should now point implementers toward the canonical governance records that Prompt-01 will create or maintain:

- root `README.md` for repo purpose
- `docs/README.md` for docs navigation
- `docs/architecture/blueprint/current-state-map.md` for current repo truth
- `docs/architecture/blueprint/package-relationship-map.md` for ownership and dependency direction
- `docs/architecture/blueprint/phase-0-directory-structure-and-ownership.md` as the closure artifact for this planning item
- `docs/architecture/blueprint/phase-0-workspace-and-spfx-baseline.md` as the Prompt-02 runtime baseline record
- `docs/architecture/blueprint/phase-0-shared-visual-foundation.md` as the Prompt-03 shared visual baseline record
- `docs/architecture/blueprint/phase-0-homepage-shell-and-composition.md` as the Prompt-04 composition baseline record
- `docs/architecture/blueprint/phase-0-featured-projects-showcase.md` as the Prompt-06 featured projects baseline record
- `docs/architecture/blueprint/phase-0-company-pulse-and-people-moments.md` as the Prompt-07 company pulse and people moments baseline record
- `docs/architecture/blueprint/phase-0-quick-actions-deck.md` as the Prompt-08 quick actions baseline record
- `docs/architecture/blueprint/phase-0-news-recognition-and-spotlight-mosaic.md` as the Prompt-09 news/recognition/spotlight baseline record
- `docs/architecture/blueprint/phase-0-personalized-lower-zone-and-global-utility-decision.md` as the Prompt-10 personalization/global-utility decision baseline record
- `docs/architecture/blueprint/phase-0-data-configuration-and-authoring-seams.md` as the Prompt-11 data/configuration/authoring seam baseline record
- `docs/architecture/blueprint/phase-0-accessibility-responsive-performance-hardening.md` as the Prompt-12 hardening baseline record
- `docs/architecture/blueprint/phase-0-final-verification-documentation-and-deployment-readiness.md` as the Prompt-13 final readiness baseline record
