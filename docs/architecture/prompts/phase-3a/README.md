# Phase 3a Remediation Prompt Package

## Objective
This package is a focused remediation follow-on to Phase 3. Its purpose is to identify and fix the **repo-truth packaging mismatch** in the HB Central homepage solution where the live source tree is authored as split homepage web part ownership, but the packaged `.sppkg` still collapses back to a single primary SPFx entry module and primary asset.

The intent of Phase 3a is **not** to redesign the homepage again.  
The intent is to:
- prove the exact failure boundary in the build/package pipeline,
- determine the exact root cause,
- implement the smallest correct fix,
- and produce a final `.sppkg` that preserves a **single solution package** while shipping **independently owned packaged web part entries/assets**.

## Package Contents
1. `README.md`
2. `Phase-3a-Remediation-Summary.md`
3. `Phase-3a-Root-Cause-Investigation-and-Fix-Plan.md`
4. `Phase-3a-Risk-Exposure.md`
5. `Phase-3a-Acceptance-Checklist.md`
6. `Prompt-01-*` through `Prompt-08-*`

## Recommended Reading Order
1. `Phase-3a-Remediation-Summary.md`
2. `Phase-3a-Root-Cause-Investigation-and-Fix-Plan.md`
3. `Phase-3a-Risk-Exposure.md`
4. `Phase-3a-Acceptance-Checklist.md`
5. `Prompt-01-*` through `Prompt-08-*`

## Evidence Basis
This package is based on the currently observed mismatch between:
- live `main` repo truth showing a move toward Heft-based packaging and split homepage bundle declarations,
- and the uploaded `hb-central-homepage.sppkg` artifact still packaging all homepage surfaces back onto one primary entry module / primary asset.

## Prompt-01 Status (2026-04-04)
- Prompt-01 closure is complete on the mismatch branch.
- Evidence directory: `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-01/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3a-suspect-artifact-evidence-and-prompt-01-closure.md`
- Current validated disposition: the artifact-of-record `dist/sppkg/hb-central-homepage.sppkg` is split and valid; do not continue remediation escalation unless a different suspect artifact is supplied.

## Prompt-02 Status (2026-04-04)
- Prompt-02 closure is complete for repo-truth and build-input freeze scope.
- Evidence directory: `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-02/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3a-repo-truth-build-input-map-and-prompt-02-closure.md`
- Current validated disposition: current source layer is genuinely split; Prompt-02 execution in this run is an approved operator override while retaining Prompt-01 mismatch-branch findings.

## Prompt-03 Status (2026-04-04)
- Prompt-03 closure is complete for true-clean rebuild and post-build artifact inventory scope.
- Evidence directory: `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-03/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3a-true-clean-rebuild-and-prompt-03-closure.md`
- Current validated disposition: the current homepage packaging command chain was rerun from a clean artifact/cache baseline and generated output locations were frozen for subsequent boundary analysis.

## Prompt-04 Status (2026-04-04)
- Prompt-04 closure is complete for generated-manifest and pre-package primary-asset boundary inspection scope.
- Evidence directory: `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-04/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3a-generated-manifest-and-asset-boundary-and-prompt-04-closure.md`
- Current validated disposition: generated and pre-package ownership remains split across all five homepage surfaces; collapse is not present before final `.sppkg` assembly.

## Prompt-05 Status (2026-04-04)
- Prompt-05 closure is complete for ownership diffing and precise collapse-boundary isolation scope.
- Evidence directory: `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-05/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3a-collapse-boundary-isolation-and-prompt-05-closure.md`
- Current validated disposition: no in-pipeline collapse boundary was found across source, generated, pre-package, and packaged ownership layers; mismatch source is artifact-selection/provenance outside the current inspected build/package flow.

## Prompt-06 Status (2026-04-04)
- Prompt-06 closure is complete for minimum-correct-remediation disposition scope.
- Evidence directory: `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-06/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3a-minimum-correct-remediation-and-prompt-06-closure.md`
- Current validated disposition: Prompt-05 proved no in-pipeline collapse boundary in current repo truth; Prompt-06 therefore closes as no-code provenance-control remediation with operator-override continuity retained and recurrence hardening deferred to Prompt-07.

## Prompt-07 Status (2026-04-04)
- Prompt-07 closure is complete for recurrence-proof validation hardening scope.
- Evidence directory: `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-07/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3a-validation-hardening-and-prompt-07-closure.md`
- Current validated disposition: current validator scripts and package command wiring already enforce fail-fast packaged ownership anti-collapse assertions in the normal homepage packaging flow.

## Prompt-08 Status (2026-04-04)
- Prompt-08 closure is complete for final rebuild, validation, root-cause, and go/no-go closeout scope.
- Evidence directory: `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-08/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3a-final-rebuild-validation-and-prompt-08-closure.md`
- Current validated disposition: final true-clean rebuild and packaged ownership validation pass in current repo-truth flow, and Phase-3a closes with `Go` for artifacts produced through the documented validated packaging path.

## Assumptions and Limitations
- This package assumes the homepage should continue shipping as **one single `.sppkg`**.
- This package assumes the current remediation target is limited to the homepage package and its packaging chain.
- This package does **not** assume the current uploaded `.sppkg` was necessarily built from the exact current `main`; Prompt 01 explicitly proves that.
- This package is remediation-focused. It is not a replacement for the broader Phase 3 architecture package.

## How to Use This Package
- Run the prompts in order.
- Do not skip the evidence-freeze and pre-fix validation prompts.
- Do not jump to implementation before the failure boundary is proven.
- Do not reread files that are still in the agent's current context or memory unless the file changed or task scope expanded.
- Do not accept “directionally correct” repo state as completion. The packaged artifact must prove the split at the `.sppkg` level.
