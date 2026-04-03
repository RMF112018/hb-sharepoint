# Prompt 09 — Replace Validation With Ownership-Aware Release Gates

## Objective
Upgrade validation so Phase 3 cannot be marked complete while the shipped package still collapses homepage surfaces into one hidden runtime bundle.

## Scope
Validation scripts and release gates.

## Repo-truth files to inspect first
- `tools/validate-homepage-webpart-wiring.mjs`
- `tools/validate-sppkg.mjs`
- Prompt 06–08 outputs
- final package/debug artifact locations for the Heft-native path

## Instructions
1. Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.
2. Keep useful existing checks, but add ownership-aware checks that fail if:
   - all surface registrations still resolve to one unintended shared entry module;
   - all surfaces still resolve to one unintended primary asset file;
   - retired shared runtime imports reappear in wrappers;
   - production package artifacts include localhost/debug leakage.
3. Make the validation messages specific and actionable.
4. Ensure the validation is easy to run from the package scripts.

## Constraints / guardrails
- Do not only validate structure.
- Do not only validate source manifests.
- Validate the final shipped artifact semantics.

## Acceptance criteria
- Validation proves real bundle ownership separation.
- Validation is wired into the homepage package flow.
- Regression into the old shared-bundle pattern becomes a hard failure.

## Required outputs
- Updated validation scripts
- Updated package scripts invoking those checks
- Validation README/update note
