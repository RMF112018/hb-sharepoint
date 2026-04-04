# Prompt 04 — Inspect Generated Manifests and Primary Assets Before Packaging

## Objective
Determine whether the split ownership survives in the generated manifests/assets immediately before final `.sppkg` assembly.

## Scope
This prompt covers generated-output inspection only. Do not implement fixes in this prompt.

## Repo-Truth Files to Inspect First
- generated component manifests
- generated packaged web part XML or equivalent pre-package ownership records
- generated client-side assets
- any asset/deploy mapping files emitted by the build

## Instructions
- For each homepage surface, record the generated `entryModuleId`, primary script-resource key, primary script-resource path, and emitted primary JS asset.
- Separate primary entry assets from shared chunks explicitly.
- Write an ownership map covering all five homepage surfaces.
- State clearly whether ownership is already collapsed before final package assembly.

## Constraints / Guardrails
- Work from the live `main` branch repo truth first.
- Do not reread files still in your current context or memory unless the file changed or task scope expanded.
- Do not jump ahead to later prompts.
- Prefer the minimum authoritative file set needed to complete this prompt.
- Be explicit about confirmed findings, strong inferences, and open questions.
- Do not broaden scope beyond the homepage packaging remediation objective.

## Required Outputs
- `04-generated-manifest-ownership-map.txt`
- `04-generated-asset-inventory.txt`
- `04-pre-package-boundary-summary.md`

## Acceptance Criteria
- There is a complete ownership map for all five homepage surfaces.
- The summary clearly states whether the collapse exists before `.sppkg` assembly.
- No source code changes were made.
