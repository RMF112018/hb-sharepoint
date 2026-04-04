# Prompt-03 — Validator and Regression Hardening

## Objective

Extend the existing validator-gated packaging flow so this exact defect class fails before release.

The current validators already guard against ownership collapse and runtime-bridge regression. This prompt must add guardrails for browser-incompatible homepage lazy-loaded runtime chunks.

## Scope

In scope:
- homepage-specific validation additions
- emitted asset inspection logic
- package/build pipeline wiring needed to enforce the new checks
- documentation updates for the new release gate

Out of scope:
- large new validation frameworks
- unrelated lint/test overhauls
- non-homepage release automation redesign

## Files to inspect first

1. `tools/validate-homepage-webpart-wiring.mjs`
2. `tools/validate-sppkg.mjs`
3. root `package.json`
4. homepage package scripts
5. Prompt-01 and Prompt-02 outputs
6. emitted homepage assets from the repaired build

Do **not** reread files still in current context or memory unless the file changed or the task scope expanded.

## Required work

1. Add homepage runtime-chunk validation that checks the emitted lazy-loaded owner/runtime chunks for browser-incompatible patterns that would cause failures like:
   - `exports is not defined`
   - `require is not defined`
   - CommonJS-only relative requires in browser chunks
2. Make the validation precise enough to catch the defect without creating noisy false positives on legitimate bundle boilerplate.
3. Ensure the validator runs in the normal homepage package path and is not optional for release candidates.
4. Preserve the existing anti-collapse and anti-bridge checks.
5. Update the relevant documentation/readme/checklist so the new validation step is explicit in release evidence.

## Constraints / guardrails

- Do not remove existing validator assertions.
- Do not implement a brittle text grep if a more precise emitted-asset inspection is available with minimal effort.
- Do not allow this validator to become a manual or advisory-only step.
- Keep the validator focused on the homepage runtime defect class proven in Prompt-01.

## Acceptance criteria

This prompt is complete only when all of the following are true:
- the new validation fails against a known-bad emitted asset pattern representative of the current defect
- the new validation passes against the repaired emitted asset set
- the normal homepage packaging path invokes the validation automatically
- documentation clearly states that runtime-format validation is now part of release gating

## Required outputs

Create or update:
- `03-validator-hardening.md`
- `03-runtime-format-validation-spec.md`
- `03-release-gate-updates.md`

The validation spec must state:
- what exact defect signatures are being blocked
- what artifact area is inspected
- what failure message should appear
- why the check is load-bearing for homepage release approval
