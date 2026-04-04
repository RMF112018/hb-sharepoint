# Prompt 03 — Rebuild from Current Main with a True Clean

## Objective
Reproduce the packaging flow from the current live repo with a true clean so the generated outputs can be trusted for boundary analysis.

## Scope
This prompt covers cleaning, rebuilding, and logging. Do not implement fixes in this prompt.

## Repo-Truth Files to Inspect First
- `apps/hb-central-homepage/package.json`
- the active homepage Heft/SPFx config files identified in Prompt 02
- homepage output directories and caches that can affect packaging

## Instructions
- Delete prior homepage build/package outputs and any caches or temp trees relevant to homepage packaging.
- Run the current documented homepage packaging command from the current repo state.
- Capture full console output to a build log.
- After build completion, inventory all generated output directories and files relevant to homepage packaging.
- Do not change source files even if the build output appears wrong.

## Constraints / Guardrails
- Work from the live `main` branch repo truth first.
- Do not reread files still in your current context or memory unless the file changed or task scope expanded.
- Do not jump ahead to later prompts.
- Prefer the minimum authoritative file set needed to complete this prompt.
- Be explicit about confirmed findings, strong inferences, and open questions.
- Do not broaden scope beyond the homepage packaging remediation objective.

## Required Outputs
- `03-build-log.txt`
- `03-output-directory-inventory.txt`
- `03-post-build-file-tree.txt`

## Acceptance Criteria
- The build was executed from a true clean state.
- All generated output locations relevant to homepage packaging were recorded.
- No source code changes were made.
