# HB Central Homepage — Phase 2 Prompt Package

## Purpose

This package contains the full **Phase 2** code-agent prompt series for the HB Central homepage hybrid SharePoint/SPFx implementation.

Phase 2 assumes Phase 1 completed the structural refactor into a hybrid model and established the following baseline:

- multiple focused homepage web parts instead of one monolithic homepage package
- shared design/token and UI foundations
- working SPFx packaging/deployment path
- initial homepage shell and core sections in place
- packaging/runtime validation guardrails established

Phase 2 is the **completion and production-hardening phase**. It is intended to finish the homepage experience, formalize data/configuration seams, add justified personalization, polish the UX, and complete authoring/admin guidance and release-readiness validation.

---

## Package Contents

- `HB-Central-Homepage-Phase-2-Implementation-Summary.md`
- `Prompt-01-Establish-Phase-2-Scope-Baseline-and-Open-Decisions.md`
- `Prompt-02-Finalize-Homepage-Composition-Model-and-Page-Assembly-Rules.md`
- `Prompt-03-Implement-News-Recognition-and-Spotlight-Zone.md`
- `Prompt-04-Implement-People-and-Culture-Zone.md`
- `Prompt-05-Implement-Personalized-Lower-Zone-and-Role-Aware-Content.md`
- `Prompt-06-Implement-Production-Grade-Data-and-Configuration-Seams.md`
- `Prompt-07-Harden-Quick-Actions-Permissions-and-Operational-Launch-Behavior.md`
- `Prompt-08-Refine-UX-Accessibility-Responsive-Behavior-and-Performance.md`
- `Prompt-09-Create-Authoring-Administration-and-Support-Guidance.md`
- `Prompt-10-Execute-Final-Homepage-Validation-and-Release-Readiness-Audit.md`

---

## Prompt-01 Baseline Status

- Prompt-01 is now treated as an executed Phase-2 baseline, not an open discovery pass.
- Canonical closure note: `docs/architecture/blueprint/phase-2-scope-baseline-and-open-decisions.md`.
- The Prompt-01 closure records:
  - the confirmed Phase-1 end-state baseline summary,
  - an explicit Phase-2 scope matrix,
  - resolved early Phase-2 decision direction,
  - inherited constraints that subsequent prompts must preserve.

---

## Prompt-02 Baseline Status

- Prompt-02 is now treated as an executed Phase-2 composition-governance baseline.
- Canonical closure note: `docs/architecture/blueprint/phase-2-final-composition-model-and-page-assembly-rules.md`.
- Canonical operator-facing assembly guide remains: `docs/reference/developer/hb-central-homepage-phase-1-hybrid-composition-playbook.md`.
- The Prompt-02 closure records:
  - final homepage surface ownership mapping,
  - explicit page assembly and layout constraints,
  - clear authoring boundaries for site owners, editors, and admins,
  - rationale for the final hybrid model used by subsequent prompts.

---

## Prompt-03 Baseline Status

- Prompt-03 is now treated as an executed Phase-2 zone-implementation governance baseline.
- Canonical closure note: `docs/architecture/blueprint/phase-2-news-recognition-and-spotlight-zone.md`.
- The Prompt-03 closure records:
  - implemented blended custom-zone behavior for news/recognition/spotlight in the sections host,
  - explicit source/curation ownership and sparse-content fallback posture,
  - validation evidence for loading/empty/error/editorial fallback behavior,
  - deferred gaps for deeper production source hardening and broader operational verification.

---

## Prompt-04 Baseline Status

- Prompt-04 is now treated as an executed Phase-2 people/culture governance baseline.
- Canonical closure note: `docs/architecture/blueprint/phase-2-people-and-culture-zone.md`.
- The Prompt-04 closure records:
  - explicit people/culture section scope for the current phase,
  - operational content model (source of truth, curation ownership, update path, fallback),
  - accessibility/responsive validation posture for the people/culture surface,
  - deferred gaps for deeper source operationalization.

---

## Recommended Execution Order

Execute the prompts in numeric order.

The sequencing is intentional:

1. confirm the actual Phase 1 end state and freeze Phase 2 scope
2. lock the final hybrid composition model
3. finish the major remaining homepage content zones
4. add runtime personalization only after section ownership is stable
5. formalize production-grade data/config seams
6. harden quick actions and operational launch behavior
7. perform cross-homepage UX/accessibility/responsive/performance refinement
8. document authoring/admin/support expectations
9. close with a final validation and release-readiness audit

Do not skip Prompt 01 or Prompt 02. Those prompts prevent drift back into Phase 1 restructuring and prevent ad hoc page composition decisions.

---

## What Phase 2 Includes

Phase 2 includes:

- completion of unfinished homepage sections
- final hybrid composition decisions
- production-grade data and configuration seams
- justified personalization and role-aware runtime behavior
- quick actions hardening
- UX/accessibility/responsive/performance polish
- admin/editor/support documentation
- final release-readiness validation

---

## What Phase 2 Explicitly Excludes

Unless repo truth proves otherwise, Phase 2 does **not** include:

- another large-scale repo/package restructuring
- reverting back to a single monolithic homepage web part
- uncontrolled feature expansion unrelated to the homepage
- unsupported SharePoint DOM/CSS hacks
- manual packaging workarounds that bypass the source-controlled SPFx build/package flow

---

## Assumptions

This package assumes:

- the work is being performed against the live public repo:
  - `https://github.com/RMF112018/hb-sharepoint.git`
- Phase 1 produced a functioning hybrid baseline, even if some sections remain incomplete
- the code agent should validate the current repo truth before every major conclusion
- the code agent should avoid rereading files already in current context unless they changed, context is stale, or scope expanded

If Phase 1 is materially incomplete, Prompt 01 should identify that and constrain or resequence Phase 2 accordingly.

---

## Validation Philosophy

Every prompt in this package follows the same principles:

- **repo truth first**
- **smallest meaningful validation set first**
- **fix the source-controlled implementation, not emitted artifacts**
- **prefer supported SharePoint/SPFx patterns**
- **keep shared UI/governance centralized**
- **separate confirmed findings from strong inferences and open questions**

---

## Expected End State After Phase 2

By the end of Phase 2, the homepage should have:

- a finalized hybrid composition model
- completed major homepage zones
- stable production-grade data/config seams
- runtime personalization where justified
- hardened operational quick actions
- polished UX, accessibility, responsiveness, and performance
- clear admin/editor/support guidance
- a final go / no-go release-readiness audit

---

## Notes for the Code Agent

Every prompt in this package is structured to require:

- Objective
- Repo-truth context
- Architectural guardrails
- Implementation instructions
- Verification
- Documentation updates
- Deliverables / exit criteria

Do not collapse or remove those sections.
