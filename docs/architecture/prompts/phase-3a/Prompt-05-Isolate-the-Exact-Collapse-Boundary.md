# Prompt 05 — Isolate the Exact Collapse Boundary

## Objective
Find the first exact layer in the pipeline where split homepage ownership is renamed, rewritten, normalized, or collapsed.

## Scope
This prompt covers diffing and boundary isolation only. Do not implement the fix yet.

## Repo-Truth Files to Inspect First
- source manifests
- generated manifests/ownership records
- final packaged ownership records from the suspect artifact and/or rebuilt artifact
- package assembly inputs and source-selection logic

## Instructions
- Diff source manifests against generated manifests for the ownership fields only.
- Diff generated manifests against final packaged ownership records for the same fields.
- Determine the first layer where the split names/paths collapse to one shared identity.
- Write a precise failure-boundary statement naming the exact file/process/layer responsible.

## Constraints / Guardrails
- Work from the live `main` branch repo truth first.
- Do not reread files still in your current context or memory unless the file changed or task scope expanded.
- Do not jump ahead to later prompts.
- Prefer the minimum authoritative file set needed to complete this prompt.
- Be explicit about confirmed findings, strong inferences, and open questions.
- Do not broaden scope beyond the homepage packaging remediation objective.

## Required Outputs
- `05-ownership-diff-report.md`
- `05-failure-boundary-statement.md`

## Acceptance Criteria
- The first collapse boundary is named precisely.
- The report distinguishes source truth, generated truth, and packaged truth.
- No code was modified.
