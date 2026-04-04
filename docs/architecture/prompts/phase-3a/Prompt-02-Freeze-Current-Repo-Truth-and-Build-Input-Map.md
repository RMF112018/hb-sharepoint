# Prompt 02 — Freeze Current Repo Truth and Build Input Map

## Objective
Establish the minimum authoritative repo-truth map for homepage packaging and determine whether source truth is genuinely split before any rebuild occurs.

## Scope
This prompt covers repo-truth inspection only. Do not build or modify code in this prompt.

## Repo-Truth Files to Inspect First
- `package.json`
- `apps/hb-central-homepage/package.json`
- `apps/hb-central-homepage/config/config.json`
- `apps/hb-central-homepage/config/package-solution.json`
- `apps/hb-central-homepage/config/write-manifests.json`
- all homepage source manifests
- all homepage web part wrapper files
- `tools/validate-sppkg.mjs`
- active Heft/SPFx config files used by the homepage package

## Instructions
- Map the current packaging command chain end to end.
- Map every homepage source manifest to its intended bundle key/path.
- Map every homepage wrapper to its intended owner module import.
- Identify the exact config files that should govern bundle declarations and package assembly.
- Write a repo-truth summary stating whether source truth is actually split or only superficially split.

## Constraints / Guardrails
- Work from the live `main` branch repo truth first.
- Do not reread files still in your current context or memory unless the file changed or task scope expanded.
- Do not jump ahead to later prompts.
- Prefer the minimum authoritative file set needed to complete this prompt.
- Be explicit about confirmed findings, strong inferences, and open questions.
- Do not broaden scope beyond the homepage packaging remediation objective.

## Required Outputs
- `02-source-config-snapshot.txt`
- `02-build-input-map.md`
- `02-repo-truth-summary.md`

## Acceptance Criteria
- The current source tree has been mapped without speculative assumptions.
- The repo-truth summary explicitly states whether the source layer is split.
- No code was modified.
