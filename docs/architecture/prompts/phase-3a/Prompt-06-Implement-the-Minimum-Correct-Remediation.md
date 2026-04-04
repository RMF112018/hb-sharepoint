# Prompt 06 — Implement the Minimum Correct Remediation

## Objective
Implement the smallest correct fix that resolves the proven packaging-boundary defect without redesigning the homepage architecture or splitting the solution package.

## Scope
This prompt covers the code/config change required to fix the exact failure boundary proven in Prompt 05.

## Repo-Truth Files to Inspect First
- the exact files/processes named in `05-failure-boundary-statement.md`
- any directly adjacent config/script files required to implement the fix safely

## Instructions
- Implement only the changes required to fix the proven failure boundary.
- Preserve the one-`.sppkg` packaging strategy.
- Preserve the intended split homepage ownership model unless repo-truth evidence requires otherwise.
- Update or add minimal documentation/comments only where needed to make the fix understandable and maintainable.
- Produce a concise remediation summary describing the exact change and why it fixes the issue.

## Constraints / Guardrails
- Work from the live `main` branch repo truth first.
- Do not reread files still in your current context or memory unless the file changed or task scope expanded.
- Do not jump ahead to later prompts.
- Prefer the minimum authoritative file set needed to complete this prompt.
- Be explicit about confirmed findings, strong inferences, and open questions.
- Do not broaden scope beyond the homepage packaging remediation objective.

## Required Outputs
- code/config changes in repo
- `06-remediation-summary.md`

## Acceptance Criteria
- The change set is tightly scoped to the proven root cause.
- The package strategy remains one `.sppkg` unless a documented hard blocker is proven.
- The remediation summary explains the fix plainly.
