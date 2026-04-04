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
- Phase-2 Prompt-05 has now established the finalized personalized-lower-zone governance record, including bounded role-aware behavior and fallback explainability expectations.
- Phase-2 Prompt-06 has now established the finalized production-grade data/config seam governance record, including section ownership and fallback limitations.
- Phase-2 Prompt-07 has now established the finalized quick-actions operational governance record, including permission/context visibility rules and launch fallback expectations.
- Phase-2 Prompt-08 has now established the finalized UX/accessibility/responsive/performance governance record, including conformance guardrails and runtime fallback-quality expectations.
- Phase-2 Prompt-09 has now established the finalized authoring/administration/support governance record, including role-based maintenance responsibilities, troubleshooting flows, and escalation boundaries.
- Phase-2 Prompt-10 has now established the finalized validation/release-readiness governance record, including severity-ranked findings, conditional-go rationale, and remediation punch-list boundaries.
- Phase-3 Prompt-01 has now established the repo-truth evidence-map baseline, including current surface inventory, shared-bundle/runtime ownership reality, hybrid packaging-path classification, and validation-coverage freeze.
- Phase-3 Prompt-02 has now established the canonical Heft-reference baseline and current-vs-target delta map for packaging/config/script authority migration.
- Phase-3 Prompt-03 has now established the locked runtime/React strategy baseline and preview-only Vite role before ownership refactor work.
- Phase-3 Prompt-04 has now established per-surface source runtime ownership and reduced `src/index.tsx` to an aggregator/bootstrap boundary.
- Phase-3 Prompt-05 has now established direct wrapper-to-surface runtime ownership and removed production wrapper dependency on `dist/homepage.js`.
- Phase-3 Prompt-06 has now established real split bundle ownership and artifact-level ownership validation for all five homepage surfaces.
- Phase-3 Prompt-07 has now established Heft-native homepage packaging authority and retired the custom gulp bridge from deployable package flow.
- Phase-3 Prompt-08 has now established the canonical Heft customization inventory baseline and locked no-ejection/no-extra-plugin defaults for the current deployable path.
- Phase-3 Prompt-09 has now established ownership-aware validation release gates that hard-fail shared-bundle regressions and production debug/localhost leakage.
- Phase-3 Prompt-10 has now established final Heft-native package artifact proof with canonical per-surface ownership mapping evidence for the shipped `.sppkg`.
- Phase-3 Prompt-11 has now established final Phase-3 closeout governance with explicit Conditional-Go criteria and unresolved tenant-readiness blockers recorded as external evidence gates.
- Phase-3a Prompt-01 has now established suspect-artifact evidence freeze and mismatch-branch closure governance (validated artifact-of-record is split; no further escalation without a different suspect artifact).
- Phase-3a Prompt-02 has now established current-repo-truth freeze and build-input-map closure governance with explicit operator-override continuity from Prompt-01 mismatch disposition.
- Phase-3a Prompt-03 has now established true-clean rebuild execution and post-build output-inventory closure governance with continued operator-override continuity.
- Phase-3a Prompt-04 has now established generated-manifest and pre-package primary-asset boundary inspection closure governance with continued operator-override continuity.
- Phase-3a Prompt-05 has now established exact collapse-boundary isolation closure governance (no in-pipeline collapse found in current repo-truth ownership layers) with continued operator-override continuity.
- Phase-3a Prompt-06 has now established minimum-correct-remediation closure governance as a no-code provenance-control disposition for current repo truth, with recurrence hardening explicitly routed to Prompt-07 under continued operator-override continuity.
- Phase-3a Prompt-07 has now established recurrence-proof validation hardening closure governance, confirming fail-fast packaged ownership anti-collapse checks are wired into the normal homepage packaging commands.
- Phase-3a Prompt-08 has now established final rebuild, packaged ownership proof, root-cause closeout, and explicit `Go` closure governance for artifacts produced through the documented validated packaging flow.
- Phase-3b Prompt-01 has now established runtime-chunk forensics closure governance with explicit `Confirmed root cause` disposition for browser-incompatible CommonJS signatures in lazy homepage owner chunks (`docs/architecture/blueprint/phase-3b-runtime-chunk-forensics-and-prompt-01-closure.md`).
- Phase-3b Prompt-02 has now established browser-safe owner build remediation closure governance, with lazy owner chunks verified free of browser-breaking CommonJS signatures and packaging ownership invariants preserved (`docs/architecture/blueprint/phase-3b-browser-safe-owner-build-remediation-and-prompt-02-closure.md`).
- Phase-3b Prompt-03 has now established validator and regression-hardening closure governance, with mandatory package-time lazy owner chunk inspection and hard-fail runtime-format guards for CommonJS signatures (`docs/architecture/blueprint/phase-3b-validator-and-regression-hardening-and-prompt-03-closure.md`).
- Phase-3b Prompt-04 has now established rebuild/deploy/live-proof closure governance, with clean-state artifact provenance and validator evidence frozen and explicit `Conditional Go` release classification pending external tenant live-proof artifacts (`docs/architecture/blueprint/phase-3b-rebuild-deploy-live-proof-and-prompt-04-closure.md`).
- Phase-3c Prompt-01 has now established placeholder-owner forensics and classification closure governance, with surface-by-surface mapping from browser-safe placeholder owner entrypoints to intended real mount targets and explicit Prompt-02 restoration boundary (`docs/architecture/blueprint/phase-3c-placeholder-owner-forensics-and-prompt-01-closure.md`).
- Phase-3c Prompt-02 has now established owner-restoration closure governance, with browser-safe owner entrypoints restored to surface-specific non-placeholder rendering while preserving wrapper import topology (`docs/architecture/blueprint/phase-3c-restore-real-owner-mounts-and-prompt-02-closure.md`).
- Phase-3c Prompt-03 has now established placeholder-regression hardening closure governance, with source-owner and packaged lazy-owner phrase-family checks wired into mandatory homepage package validation while preserving prior runtime-format/ownership gates (`docs/architecture/blueprint/phase-3c-harden-against-placeholder-regression-and-prompt-03-closure.md`).
- Phase-3c Prompt-04 has now established rebuild/deploy/functional-live-proof closure governance, with clean-state artifact provenance and validator evidence frozen and explicit `Conditional Go` release classification pending external tenant live-proof artifacts (`docs/architecture/blueprint/phase-3c-rebuild-deploy-functional-live-proof-and-prompt-04-closure.md`).
- Phase-3d Prompt-01 has now established repo-truth and emitted-artifact baseline closure governance for the five homepage surfaces, with wrapper-to-owner, owner-to-mount, emitted-chunk, and phrase-family classification evidence frozen (`docs/architecture/blueprint/phase-3d-repo-truth-and-artifact-baseline-and-prompt-01-closure.md`).
- Prompt-01 should now be treated as a confirmed historical foundation rather than pending structural work.

## Usage rules

- Update the nearest canonical document instead of duplicating policy text across multiple files.
- Treat `docs/architecture/blueprint/current-state-map.md` as the present-truth authority for what currently exists in the repo.
- Treat `docs/architecture/blueprint/package-relationship-map.md` as the authority for package placement and dependency direction.
- Use prompt-package files for scoped implementation sequencing, not for long-lived repository governance.
