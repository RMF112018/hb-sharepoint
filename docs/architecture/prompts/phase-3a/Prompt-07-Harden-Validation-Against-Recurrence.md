# Prompt 07 — Harden Validation Against Recurrence

## Objective
Ensure the repo fails fast if homepage packaged ownership ever collapses again.

## Scope
This prompt covers validation and guardrail updates related to the Phase 3a failure mode.

## Repo-Truth Files to Inspect First
- `tools/validate-sppkg.mjs`
- any related homepage packaging validation scripts
- any build/package commands that should invoke validation automatically

## Instructions
- Update validation logic so it explicitly asserts one homepage `.sppkg` with five unique packaged ownership entries.
- Ensure validation checks unique packaged `entryModuleId` values, unique primary script-resource keys, and unique primary script-resource paths.
- Ensure the documented homepage packaging command invokes the relevant validation automatically.
- Write a short validator-behavior note describing what failure mode is now guarded against.

## Constraints / Guardrails
- Work from the live `main` branch repo truth first.
- Do not reread files still in your current context or memory unless the file changed or task scope expanded.
- Do not jump ahead to later prompts.
- Prefer the minimum authoritative file set needed to complete this prompt.
- Be explicit about confirmed findings, strong inferences, and open questions.
- Do not broaden scope beyond the homepage packaging remediation objective.

## Required Outputs
- updated validation scripts and/or command wiring
- `07-validator-hardening-note.md`

## Acceptance Criteria
- The validator would fail the previously observed collapsed-package artifact.
- The validator is wired into the normal homepage packaging flow.
