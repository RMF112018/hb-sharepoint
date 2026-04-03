# HB Central Homepage — Phase 1 Hybrid Refactor Prompt Package

## Purpose

This package contains the Phase 1 prompt series for refactoring the current HB Central homepage SPFx implementation from a single monolithic homepage web part into a **hybrid, multi-package architecture**.

The target model is:

- **multiple source-owned packages** with clear ownership boundaries,
- **multiple focused custom web parts** for the premium HB Central surfaces,
- **native SharePoint web parts** used where Microsoft already provides strong, maintainable capability,
- and a homepage composition approach that avoids treating the entire homepage as one oversized SPA mounted into one web part.

Prompt-01, Prompt-02, Prompt-03, and Prompt-04 in this package are now treated as executed baselines, not open discovery items.

## Recommended target architecture

The approved Phase-1 baseline steers the repo toward the following decomposition:

1. **Shared brand / design foundation**
   - brand tokens
   - neutral palette / surface system
   - reusable layout primitives
   - typography / spacing / card / panel primitives

2. **Shared SharePoint integration layer**
   - common context adapters
   - image/content mapping helpers
   - page/toolbox-safe configuration helpers
   - property-pane conventions

3. **Focused custom homepage web parts**
   - homepage shell / hero
   - featured projects
   - company pulse
   - quick actions

4. **Native SharePoint composition**
   - News
   - Quick Links where appropriate
   - Events / people / other native modules where they are already strong enough
   - page-section composition guidance instead of over-customizing everything

## Phase 1 outcomes

The prompts are designed to execute against the Prompt-01 baseline and produce:

- a repo-truth architecture freeze for the hybrid model,
- a package/workspace boundary refactor,
- extraction of shared design/UI foundations,
- breakup of the current single homepage implementation into multiple focused components,
- a working homepage composition model,
- and deployable/refactor-safe packaging guidance for follow-on phases.

## Prompt-01 baseline status

- Baseline established: Phase-1 hybrid composition direction is frozen.
- Decision matrix established: homepage zones are explicitly classified as custom web part or native SharePoint composition.
- Deployment strategy established: keep one deployable SPFx solution in Phase 1 unless later prompts justify a split.
- Canonical governance closure note: `docs/architecture/blueprint/phase-1-hybrid-refactor-baseline.md`.

## Prompt-02 baseline status

- Target package map established with first-stage directories for shared foundations and focused feature ownership.
- SPFx host-layer separation preserved at `apps/hb-central-homepage` with one deployable solution for Phase 1.
- Ownership and dependency-direction rules are now explicit for shared, feature, and host layers.
- Full package scaffolding is intentionally deferred to Prompt-03.
- Canonical governance closure note: `docs/architecture/blueprint/phase-1-target-package-map-and-directory-structure.md`.

## Prompt-03 baseline status

- Shared packages `@hbc/brand-tokens` and `@hbc/sharepoint-core` are scaffolded with stable explicit root exports.
- Shared package build/type boundaries are defined with package-local TypeScript build configs.
- `apps/hb-central-homepage` resolves shared package exports through workspace dependencies.
- `@hbc/ui-kit` remains the governed reusable visual owner without competing shared UI packages.
- Canonical governance closure note: `docs/architecture/blueprint/phase-1-shared-packages-and-build-boundaries.md`.

## Prompt-04 baseline status

- `@hbc/brand-tokens` is the canonical source for governed brand values (including required primary `#225391` and secondary `#E57E46`).
- `@hbc/ui-kit` token semantics are normalized to consume canonical brand tokens.
- Shared loading/empty/error-state primitives are governed in `@hbc/ui-kit`.
- Homepage runtime styling uses shared token-driven focus treatment and shared card primitives for targeted feature rendering.
- Canonical governance closure note: `docs/architecture/blueprint/phase-1-shared-brand-token-and-ui-foundation.md`.

## Suggested execution order

1. `Prompt-01-Establish-Phase-1-Hybrid-Refactor-Baseline.md`
2. `Prompt-02-Create-Target-Package-Map-and-Directory-Structure.md`
3. `Prompt-03-Scaffold-Shared-Packages-and-Build-Boundaries.md`
4. `Prompt-04-Extract-Shared-Brand-Token-and-UI-Foundation.md`
5. `Prompt-05-Refactor-Homepage-Shell-and-Hero-into-Dedicated-Web-Part.md`
6. `Prompt-06-Refactor-Featured-Projects-and-Company-Pulse-into-Separate-Web-Parts.md`
7. `Prompt-07-Implement-Quick-Actions-and-Native-SharePoint-Composition-Seams.md`
8. `Prompt-08-Harden-Packaging-Validation-and-Phase-2-Handoff.md`

## Assumptions

- The current package already installs and surfaces a web part, but the current implementation path is unstable and too monolithic.
- The repo may still be early-stage and may not yet have mature shared package boundaries.
- Phase 1 is not intended to finish every homepage section. It is intended to create the correct **hybrid architecture and first working vertical slices**.
- The code agent must confirm repo truth before assuming any exact file path, workspace pattern, or SPFx build flow.

## Boundary notes

- Do **not** preserve the "entire homepage as one web part" approach unless repo truth exposes a compelling deployment reason.
- Do **not** create unnecessary custom web parts where native SharePoint parts already cover the need cleanly.
- Do **not** proliferate deployable `.sppkg` outputs without justification. Split **source ownership and runtime composition** first; split deployable solutions only when justified.
- Do **not** hardcode brand colors ad hoc across multiple web parts. Use governed tokens.

## Deliverables in this package

- `README.md`
- `HB-Central-Homepage-Phase-1-Implementation-Summary.md`
- `Prompt-01-*` through `Prompt-08-*`
