# Prompt 08 — Rebuild, Validate, Document, and Close Phase 3a

## Objective
Produce the final rebuilt homepage package, validate it, document the root cause and fix, and determine Phase 3a go / no-go.

## Scope
This prompt covers final proof, documentation, and closure only.

## Repo-Truth Files to Inspect First
- updated homepage packaging chain
- updated validation scripts
- final rebuilt `.sppkg`
- all evidence files generated in prior prompts

## Instructions
- Run the final homepage packaging command from a true clean state.
- Run the validator against the final rebuilt `.sppkg`.
- Produce final ownership maps for the packaged artifact.
- Write the final root-cause summary covering where ownership was correct, where it first collapsed, why it collapsed, and what exact change fixed it.
- Write a short Phase 3a closure note with a go / no-go decision.

## Constraints / Guardrails
- Work from the live `main` branch repo truth first.
- Do not reread files still in your current context or memory unless the file changed or task scope expanded.
- Do not jump ahead to later prompts.
- Prefer the minimum authoritative file set needed to complete this prompt.
- Be explicit about confirmed findings, strong inferences, and open questions.
- Do not broaden scope beyond the homepage packaging remediation objective.

## Required Outputs
- `08-final-build-log.txt`
- `08-final-packaged-ownership-map.txt`
- `08-root-cause-summary.md`
- `08-phase-3a-closure.md`
- final rebuilt homepage `.sppkg`

## Acceptance Criteria
- The final `.sppkg` proves split packaged ownership inside one solution package.
- The validator passes on the final artifact.
- The closure note includes an explicit go / no-go decision.
