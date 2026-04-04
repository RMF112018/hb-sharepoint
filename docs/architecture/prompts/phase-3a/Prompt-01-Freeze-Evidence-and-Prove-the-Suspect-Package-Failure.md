# Prompt 01 — Freeze Evidence and Prove the Suspect Package Failure

## Objective
Freeze the exact evidence set for the current homepage package issue and prove, using the suspect `.sppkg` itself, whether packaged homepage ownership is actually collapsed.

## Scope
This prompt covers evidence capture and suspect-artifact validation only. Do not modify source code in this prompt.

## Repo-Truth Files to Inspect First
- root `package.json`
- `tools/validate-sppkg.mjs`
- the suspect `hb-central-homepage.sppkg` artifact

## Instructions
- Create a timestamped evidence directory for this remediation run.
- Record current `main` commit SHA, Node version, pnpm version, and the exact validation command used.
- Run the current `.sppkg` validator against the suspect artifact.
- Manually inspect packaged web part ownership records and packaged client-side JS assets to confirm or refute the validator result.
- Write a short evidence-backed conclusion stating whether the suspect package is collapsed or valid.

## Constraints / Guardrails
- Work from the live `main` branch repo truth first.
- Do not reread files still in your current context or memory unless the file changed or task scope expanded.
- Do not jump ahead to later prompts.
- Prefer the minimum authoritative file set needed to complete this prompt.
- Be explicit about confirmed findings, strong inferences, and open questions.
- Do not broaden scope beyond the homepage packaging remediation objective.

## Required Outputs
- `commit.txt`
- `environment.txt`
- `package-sha256.txt`
- `build-command.txt`
- `01-suspect-artifact-validation.txt`
- `01-packaged-asset-inventory.txt`

## Acceptance Criteria
- The suspect artifact has been validated directly.
- The result states clearly whether packaged ownership is collapsed.
- No source files were modified.
