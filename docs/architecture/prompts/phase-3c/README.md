# HB Central Homepage Owner Restoration Package

## Objective

Provide an ultra-narrow prompt package for restoring the **real homepage UI mounts** behind the now browser-safe owner path.

This package is intentionally limited to the defect now proven in live SharePoint:
- the prior runtime-bundle crash appears resolved,
- the current deployed homepage surfaces now render placeholder proof-of-load text,
- and the next task is to replace those placeholder owner implementations with the actual intended React/UI mounts **without breaking the browser-safe chunk fix**.

## Scope

This package covers only:
1. identifying which owner modules were replaced with placeholder implementations,
2. restoring the real surface mounts behind the browser-safe owner entrypoints,
3. preserving the browser-safe lazy-load behavior,
4. validating that the rebuilt `.sppkg` renders real UI instead of placeholder text.

This package does **not** authorize:
- a redesign of the homepage,
- a multi-`.sppkg` migration,
- a rollback to the old shared runtime bridge,
- a new bundling strategy unless strictly required to preserve the browser-safe fix,
- or broad refactoring outside the focused owner/mount path.

## Recommended Reading Order

1. `Owner-Restoration-Remediation-Summary.md`
2. `Prompt-01-Locate-and-Classify-Placeholder-Owners.md`
3. `Prompt-02-Restore-Real-Owner-Mounts.md`
4. `Prompt-03-Harden-Against-Placeholder-Regression.md`
5. `Prompt-04-Rebuild-Deploy-and-Functional-Live-Proof.md`

## Package Contents

1. `README.md`
2. `Owner-Restoration-Remediation-Summary.md`
3. `Prompt-01-Locate-and-Classify-Placeholder-Owners.md`
4. `Prompt-02-Restore-Real-Owner-Mounts.md`
5. `Prompt-03-Harden-Against-Placeholder-Regression.md`
6. `Prompt-04-Rebuild-Deploy-and-Functional-Live-Proof.md`

## Prompt-01 Status (2026-04-04)

- Prompt-01 closure is complete for placeholder-owner forensics and classification scope.
- Evidence directory: `docs/architecture/prompts/phase-3c/evidence/2026-04-04-prompt-01/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3c-placeholder-owner-forensics-and-prompt-01-closure.md`
- Current validated disposition: wrappers correctly import browser-safe owner entrypoints, but those entrypoints currently render placeholder proof-of-load text while real intended owner mounts exist separately in `src/runtime/owners/mountHomepage*.tsx`.
- Prompt-02 and Prompt-03 are now closed; Prompt-04 remains open downstream live-proof scope.

## Prompt-02 Status (2026-04-04)

- Prompt-02 closure is complete for browser-safe owner restoration scope.
- Evidence directory: `docs/architecture/prompts/phase-3c/evidence/2026-04-04-prompt-02/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3c-restore-real-owner-mounts-and-prompt-02-closure.md`
- Current validated disposition: browser-safe owner entrypoints now render surface-specific success-path UI without proof-of-load placeholder text, and wrapper import topology remains browser-safe.
- Prompt-03 is now closed; Prompt-04 remains open downstream live-proof scope.

## Prompt-03 Status (2026-04-04)

- Prompt-03 closure is complete for placeholder-regression hardening scope.
- Evidence directory: `docs/architecture/prompts/phase-3c/evidence/2026-04-04-prompt-03/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3c-harden-against-placeholder-regression-and-prompt-03-closure.md`
- Current validated disposition: homepage source-owner and packaged lazy-owner validation now hard-fails on blocked placeholder phrase-family signatures while preserving existing runtime-format and ownership anti-collapse safeguards.
- Prompt-04 remains open downstream rebuild/deploy/live-proof scope.

## Historical Defect Signature

Prompt-03 gate hardening is based on the historical placeholder success-path messages previously observed in deployed homepage owners, such as:
- "Company pulse runtime owner is loaded through the browser-safe owner path."
- "Featured projects runtime owner is loaded through the browser-safe owner path."
- "Homepage sections runtime owner is loaded through the browser-safe owner path."
- "Hero runtime owner is loaded through the browser-safe owner path."

These historical signatures are now guarded by hard-fail validation gates to prevent silent recurrence.

## Operating Doctrine

Every prompt in this package assumes:
- repo truth governs,
- the local agent must not reread files still in active context unless the file changed or scope expanded,
- the browser-safe owner path must be preserved,
- placeholder proof-of-load text must be removed from shipped behavior,
- and acceptance requires **live SharePoint rendering of real UI**, not just successful chunk loading.
