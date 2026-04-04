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
- phase-2 Prompt-05 personalized-lower-zone and role-aware-content closure records
- phase-2 Prompt-06 production-grade data/configuration seam closure records
- phase-2 Prompt-07 quick-actions permissions and operational-launch closure records
- phase-2 Prompt-08 UX/accessibility/responsive/performance closure records
- phase-2 Prompt-09 authoring/administration/support guidance closure records
- phase-2 Prompt-10 final validation and release-readiness audit closure records
- phase-3 Prompt-01 repo-truth evidence-map and closure records for the homepage surface split and Heft-native migration phase
- phase-3 Prompt-02 canonical Heft-reference and current-vs-target delta-map closure records for migration target-shape authority
- phase-3 Prompt-03 runtime/React strategy and Vite-role closure records for pre-refactor runtime governance
- phase-3 Prompt-04 per-surface runtime source-ownership closure records for pre-wrapper-refactor decomposition
- phase-3 Prompt-05 direct wrapper-to-surface runtime ownership closure records that remove production wrapper dependency on `dist/homepage.js`
- phase-3 Prompt-06 split bundle-ownership closure records with artifact-level ownership validation for all five homepage surfaces
- phase-3 Prompt-07 Heft-native packaging-authority closure records for homepage deployable path governance
- phase-3 Prompt-08 Heft customization-inventory closure records for supported extension-point convergence and no-ejection/no-extra-plugin baseline governance
- phase-3 Prompt-09 ownership-aware release-gate closure records for actionable wrapper/artifact regression hard-failure governance
- phase-3 Prompt-10 final artifact-audit closure records for packaged ownership proof and deployable semantic evidence
- phase-3 Prompt-11 final closeout closure records for SharePoint-readiness reconciliation and explicit Conditional-Go governance
- phase-3a Prompt-01 suspect-artifact evidence freeze and mismatch-branch closure records for remediation-gate provenance governance
- phase-3a Prompt-02 repo-truth freeze and build-input-map closure records for packaging-input provenance governance
- phase-3a Prompt-03 true-clean rebuild and post-build output-inventory closure records for generated-artifact provenance governance
- phase-3a Prompt-04 generated-manifest and pre-package primary-asset boundary closure records for collapse-boundary provenance governance
- phase-3a Prompt-05 collapse-boundary isolation closure records for first-boundary determination governance
- phase-3a Prompt-06 minimum-correct-remediation closure records for no-code provenance-control governance in current repo truth
- phase-3a Prompt-07 validation-hardening closure records for recurrence-proof packaged ownership anti-collapse governance
- phase-3a Prompt-08 final rebuild/validation closeout records for packaged ownership proof, root-cause summary, and explicit go/no-go governance
- phase-3b Prompt-01 runtime-chunk forensics closure records for confirmed CommonJS lazy-chunk browser-failure root cause governance
- a deterministic `.sppkg` packaging path for the homepage app via Heft-native SPFx production packaging (`heft build --production` + `heft package-solution --production`) guarded by `tools/validate-sppkg.mjs`
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
- Treat phase-2 Prompt-05 as materially executed for personalization governance: lower-zone decision, bounded role-aware contract, and fallback-safe runtime behavior are approved and should be implemented, not rediscovered.
- Treat phase-2 Prompt-06 as materially executed for data/config governance: section-by-section seam model, operational ownership, and limitations/fallback posture are approved and should be implemented, not rediscovered.
- Treat phase-2 Prompt-07 as materially executed for quick-actions governance: launch model, permission/context behavior, and supportability fallback posture are approved and should be implemented, not rediscovered.
- Treat phase-2 Prompt-08 as materially executed for UX/accessibility/responsive/performance governance: cross-homepage conformance posture and runtime-quality guardrails are approved and should be implemented, not rediscovered.
- Treat phase-2 Prompt-09 as materially executed for authoring/admin/support governance: role-based maintenance guidance, troubleshooting paths, and escalation boundaries are approved and should be implemented, not rediscovered.
- Treat phase-2 Prompt-10 as materially executed for final audit governance: severity-ranked findings, release-readiness verdict, and remediation boundaries are approved and should be implemented, not rediscovered.
- Treat phase-3 Prompt-01 as materially executed for baseline evidence scope: current homepage surfaces, shared-bundle/runtime ownership posture, hybrid packaging path, and validation coverage are frozen and should be consumed rather than rediscovered.
- Treat phase-3 Prompt-02 as materially executed for target-shape scope: canonical Heft-native reference expectations and current-vs-target delta dispositions are frozen and should be consumed rather than rediscovered.
- Treat phase-3 Prompt-03 as materially executed for runtime-strategy scope: React/runtime posture and Vite preview-only role are locked and should be consumed rather than rediscovered.
- Treat phase-3 Prompt-04 as materially executed for source-ownership scope: per-surface mount ownership is explicit and should be consumed before wrapper import-path refactor work.
- Treat phase-3 Prompt-05 as materially executed for wrapper-ownership scope: wrappers now directly own per-surface runtime mounting and should remain free of `dist/homepage.js` production bridge imports.
- Treat phase-3 Prompt-06 as materially executed for bundle-ownership scope: deployable surface ownership is now split and should remain protected by artifact-level anti-collapse validation.
- Treat phase-3 Prompt-07 as materially executed for packaging-authority scope: homepage deployable packaging is now Heft-native and should remain free of custom gulp-bridge authority.
- Treat phase-3 Prompt-08 as materially executed for customization-governance scope: nonstandard package-path behavior is now inventoried/dispositioned and deployable flow should remain on supported Heft extension points without ejection or extra plugin drift unless new evidence requires change.
- Treat phase-3 Prompt-09 as materially executed for release-gate scope: wrapper/runtime and packaged artifact ownership checks are now actionable hard-failure guards and should remain authoritative in homepage package validation.
- Treat phase-3 Prompt-10 as materially executed for artifact-proof scope: final Heft-native package execution and per-surface packaged ownership mapping are now captured as canonical deployable evidence.
- Treat phase-3 Prompt-11 as materially executed for phase-closeout governance scope: final status is explicitly Conditional-Go when tenant evidence is missing, and full-Go requires explicit app-catalog/page-behavior/diagnostics evidence.
- Treat phase-3a Prompt-01 as materially executed for suspect-artifact validation scope: current artifact-of-record evidence is frozen and the approved branch is mismatch closure unless a different suspect artifact is provided.
- Treat phase-3a Prompt-02 as materially executed for repo-truth freeze scope: current packaging command chain, source bundle declarations, wrapper ownership imports, and governing config inputs are frozen as explicit build-input authority.
- Treat phase-3a Prompt-03 as materially executed for rebuild provenance scope: homepage packaging command chain has been rerun from a true-clean artifact/cache baseline and generated output locations are frozen for downstream boundary analysis.
- Treat phase-3a Prompt-04 as materially executed for generated-boundary scope: pre-package generated manifests and staged ownership/assets remain split across all five surfaces and do not show collapse before final `.sppkg` assembly.
- Treat phase-3a Prompt-05 as materially executed for boundary-isolation scope: no in-pipeline collapse boundary exists across source, generated, pre-package, and packaged ownership layers in current repo-truth execution.
- Treat phase-3a Prompt-06 as materially executed for minimum-remediation scope: no in-repo code/config fix is proven for current pipeline truth, and remediation is formally closed as provenance-control documentation with Prompt-07 retaining recurrence-hardening scope.
- Treat phase-3a Prompt-07 as materially executed for recurrence-hardening scope: packaged ownership anti-collapse validator checks and command wiring are now frozen as fail-fast baseline behavior in normal homepage packaging flow.
- Treat phase-3a Prompt-08 as materially executed for final-closeout scope: final rebuild and packaged ownership validation are frozen with root-cause summary and explicit `Go` decision for documented validated artifact flow.
- Treat phase-3b Prompt-01 as materially executed for runtime-forensics scope: wrapper imports into `lib-commonjs` owner artifacts and emitted lazy-chunk CommonJS signatures are now frozen as confirmed direct root cause for `exports is not defined` runtime failure.
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
- `docs/architecture/blueprint/phase-2-personalized-lower-zone-and-role-aware-content.md` records the approved phase-2 Prompt-05 personalized lower-zone and role-aware-content closure.
- `docs/architecture/blueprint/phase-2-production-grade-data-and-configuration-seams.md` records the approved phase-2 Prompt-06 production-grade data/configuration seam closure.
- `docs/architecture/blueprint/phase-2-quick-actions-permissions-and-operational-launch-behavior.md` records the approved phase-2 Prompt-07 quick-actions permissions and operational-launch closure.
- `docs/architecture/blueprint/phase-2-ux-accessibility-responsive-behavior-and-performance.md` records the approved phase-2 Prompt-08 UX/accessibility/responsive/performance closure.
- `docs/architecture/blueprint/phase-2-authoring-administration-and-support-guidance.md` records the approved phase-2 Prompt-09 authoring/administration/support closure.
- `docs/architecture/blueprint/phase-2-final-homepage-validation-and-release-readiness-audit.md` records the approved phase-2 Prompt-10 final validation and release-readiness audit closure.
- `docs/architecture/blueprint/phase-2-homepage-handoff-backlog.md` records the canonical Phase-2 homepage backlog handoff.
- `docs/architecture/blueprint/phase-3-repo-truth-evidence-map-and-prompt-01-closure.md` records the approved phase-3 Prompt-01 repo-truth evidence-map baseline and closure.
- `docs/architecture/blueprint/phase-3-canonical-heft-reference-and-prompt-02-delta-map.md` records the approved phase-3 Prompt-02 canonical Heft reference baseline and delta-map closure.
- `docs/architecture/blueprint/phase-3-runtime-react-strategy-and-prompt-03-closure.md` records the approved phase-3 Prompt-03 runtime/React strategy baseline and closure.
- `docs/architecture/blueprint/phase-3-per-surface-runtime-ownership-and-prompt-04-closure.md` records the approved phase-3 Prompt-04 per-surface runtime source-ownership baseline and closure.
- `docs/architecture/blueprint/phase-3-wrapper-direct-ownership-and-prompt-05-closure.md` records the approved phase-3 Prompt-05 direct wrapper-surface runtime ownership baseline and closure.
- `docs/architecture/blueprint/phase-3-split-bundle-ownership-and-prompt-06-closure.md` records the approved phase-3 Prompt-06 split bundle-ownership baseline and closure.
- `docs/architecture/blueprint/phase-3-heft-native-packaging-and-prompt-07-closure.md` records the approved phase-3 Prompt-07 Heft-native packaging-authority baseline and closure.
- `docs/architecture/blueprint/phase-3-heft-customization-inventory-and-prompt-08-closure.md` records the approved phase-3 Prompt-08 customization-inventory and supported extension-point convergence baseline and closure.
- `docs/architecture/blueprint/phase-3-ownership-aware-release-gates-and-prompt-09-closure.md` records the approved phase-3 Prompt-09 ownership-aware release-gate baseline and closure.
- `docs/architecture/blueprint/phase-3-final-artifact-audit-and-prompt-10-closure.md` records the approved phase-3 Prompt-10 final artifact-audit baseline and closure.
- `docs/architecture/blueprint/phase-3-sharepoint-readiness-and-prompt-11-closeout.md` records the approved phase-3 Prompt-11 final closeout baseline and Conditional-Go governance status.
- `docs/architecture/blueprint/phase-3a-suspect-artifact-evidence-and-prompt-01-closure.md` records the approved phase-3a Prompt-01 suspect-artifact evidence freeze baseline and mismatch-branch closure.
- `docs/architecture/blueprint/phase-3a-repo-truth-build-input-map-and-prompt-02-closure.md` records the approved phase-3a Prompt-02 repo-truth freeze and build-input-map baseline with operator-override continuity.
- `docs/architecture/blueprint/phase-3a-true-clean-rebuild-and-prompt-03-closure.md` records the approved phase-3a Prompt-03 true-clean rebuild and post-build output-inventory baseline with operator-override continuity.
- `docs/architecture/blueprint/phase-3a-generated-manifest-and-asset-boundary-and-prompt-04-closure.md` records the approved phase-3a Prompt-04 generated-manifest and pre-package primary-asset boundary baseline with operator-override continuity.
- `docs/architecture/blueprint/phase-3a-collapse-boundary-isolation-and-prompt-05-closure.md` records the approved phase-3a Prompt-05 collapse-boundary isolation baseline with operator-override continuity.
- `docs/architecture/blueprint/phase-3a-minimum-correct-remediation-and-prompt-06-closure.md` records the approved phase-3a Prompt-06 minimum-correct-remediation baseline as no-code provenance-control closure with operator-override continuity.
- `docs/architecture/blueprint/phase-3a-validation-hardening-and-prompt-07-closure.md` records the approved phase-3a Prompt-07 validation-hardening baseline for recurrence-proof ownership anti-collapse governance with operator-override continuity.
- `docs/architecture/blueprint/phase-3a-final-rebuild-validation-and-prompt-08-closure.md` records the approved phase-3a Prompt-08 final rebuild/validation closeout baseline with explicit go/no-go governance and operator-override continuity.
- `docs/architecture/blueprint/phase-3b-runtime-chunk-forensics-and-prompt-01-closure.md` records the approved phase-3b Prompt-01 runtime chunk forensics baseline and confirmed-root-cause closure.
