# Phase 3b Validator and Regression Hardening and Prompt-03 Closure

## Purpose

This note records the approved Prompt-03 baseline for validator and regression hardening. It serves as the formal closure artifact for the phase-3b Prompt-03 open item.

## Prompt-03 hardening findings

Confirmed findings:

- `tools/validate-sppkg.mjs` now inspects homepage lazy runtime-owner chunk entries (`ClientSideAssets/chunk.*.js`) in packaged `.sppkg` output.
- Runtime-owner chunk inspection scope is constrained to chunks containing expected homepage mount exports (`mountHomepageSections`, `mountHomepageHero`, `mountHomepageFeaturedProjects`, `mountHomepageCompanyPulse`, `mountHomepageQuickActions`).
- Validator now hard-fails on browser-incompatible CommonJS signatures in inspected runtime-owner chunks: `Object.defineProperty(exports, ...)`, `exports.mountHomepage...`, `require(...)`.
- Validator now hard-fails when runtime-owner export coverage is missing or duplicated across lazy chunks.
- Existing packaging, anti-collapse ownership, and anti-bridge validations remain in place.

Strong inferences:

- The Prompt-01 defect class is now explicitly release-gated in the normal homepage package flow.
- Prompt-02 remediation is now protected against recurrence via mandatory validator enforcement.

Open questions:

- Prompt-04 remains responsible for clean rebuild, tenant redeploy, and live SharePoint runtime proof closure.

## Evidence outputs

Prompt-03 required artifacts are frozen at:

- `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-03/03-validator-hardening.md`
- `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-03/03-runtime-format-validation-spec.md`
- `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-03/03-release-gate-updates.md`

## Closure conditions

This Prompt-03 item is considered closed when:

- homepage packaged lazy runtime-owner chunks are inspected as part of mandatory package validation;
- browser-incompatible CommonJS owner-chunk signatures hard-fail validation;
- ownership anti-collapse and anti-bridge checks remain preserved;
- phase-3b prompt package docs and repository governance routing docs reference Prompt-03 closure authority;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- Prompt-03 validator hardening and release-gate evidence artifacts are frozen in `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-03/`;
- this canonical phase-3b Prompt-03 closure authority now exists;
- phase-3b prompt package and repository governance routing docs reference Prompt-03 closure status;
- root manifest patch version is advanced for this governance update.
