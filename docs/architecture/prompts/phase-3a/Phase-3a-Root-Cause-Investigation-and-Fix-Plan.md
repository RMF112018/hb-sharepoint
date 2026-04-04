# Phase 3a Root-Cause Investigation and Fix Plan

## Objective
Determine exactly where the current homepage packaging pipeline stops honoring the authored split bundle ownership and collapses back into a single packaged primary web part asset, then implement the minimum correct fix.

## Prompt-01 Status (2026-04-04)
- Step 1 evidence freeze is complete in `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-01/`.
- Step 2 suspect-artifact proof is complete: `dist/sppkg/hb-central-homepage.sppkg` validates as split ownership (five unique packaged `entryModuleId` values, primary script-resource keys, and primary script-resource paths).
- Current branch decision: stop escalation and classify the observed mismatch as an artifact-selection/provenance issue unless a different suspect `.sppkg` is provided.

## Prompt-02 Status (2026-04-04)
- Step 3 repo-truth freeze is complete in `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-02/`.
- Prompt-02 required outputs are complete:
  - `02-source-config-snapshot.txt`
  - `02-build-input-map.md`
  - `02-repo-truth-summary.md`
- Confirmed Prompt-02 disposition: current source truth is genuinely split at source-manifest, bundle-declaration, and wrapper-owner boundaries.
- Governance note: Prompt-01 mismatch-branch gate remains true; Prompt-02 continuation is an approved operator override to freeze repo-truth build-input evidence.

## Investigation Sequence

### 1. Freeze evidence before modifying anything
Capture:
- `main` commit SHA
- checksum of the suspect `.sppkg`
- local Node version
- `pnpm` version
- exact command used to produce the suspect artifact
- timestamped evidence folder for all outputs

Required evidence files:
- `commit.txt`
- `package-sha256.txt`
- `environment.txt`
- `build-command.txt`

### 2. Prove the failure in the suspect artifact
Run the current package validator against the suspect artifact.  
Then manually inspect packaged web part ownership records and client-side assets.

Required package proof:
- packaged `entryModuleId` map
- packaged primary script-resource key map
- packaged primary script-resource path map
- packaged JS asset inventory

Decision:
- if the suspect artifact is actually correct, stop and document the mismatch as an artifact-selection issue;
- if the suspect artifact is collapsed, continue.

### 3. Freeze current repo truth
Inspect only the minimum authoritative files first:
- root `package.json`
- homepage app `package.json`
- homepage SPFx config files
- homepage manifests
- homepage web part wrappers
- package validation scripts
- active Heft/SPFx configuration files

Goal:
- prove whether current source truth is genuinely split or only appears split.

### 4. Rebuild from current `main` with a true clean
Delete prior output directories and caches relevant to homepage packaging.  
Rebuild using the current documented packaging command.

Capture:
- full build log
- post-build output directory listings
- exact generated artifacts before final `.sppkg` creation

### 5. Inspect generated manifests/assets before `.sppkg` assembly
This is the critical boundary inspection.

For each homepage web part, record:
- generated `entryModuleId`
- generated primary script-resource key
- generated primary script-resource path
- emitted primary JS asset
- any shared chunk references

Decision:
- if collapse already exists here, the failure is pre-package assembly;
- if split is preserved here but lost in the final `.sppkg`, the failure is in package assembly or artifact selection.

### 6. Diff source manifests against generated manifests and final packaged ownership
For each surface, compare:
- source manifest
- generated manifest
- packaged ownership manifest/XML

Goal:
- locate the first point where bundle identity is renamed, rewritten, or collapsed.

### 7. Implement the minimum correct fix
The fix must target the proven failure boundary only.

Examples of valid fix classes:
- correct stale-output selection,
- correct Heft/SPFx config resolution,
- correct generated manifest input selection,
- correct package assembly source mapping,
- correct clean/build ordering.

Avoid:
- architecture redesign without evidence,
- introducing multiple solution packages,
- broad refactors unrelated to the failure boundary.

### 8. Add recurrence-proof validation
Update validation so the repo fails fast if packaging ever collapses homepage ownership again.

Validation must assert:
- one `.sppkg`,
- five homepage packaged ownership entries,
- five unique packaged `entryModuleId` values,
- five unique primary script-resource keys,
- five unique primary script-resource paths.

### 9. Rebuild, validate, document, close
Produce:
- rebuilt `.sppkg`
- validator output
- updated ownership maps
- root cause summary
- documentation updates
- go / no-go closure note

## Completion Criteria
Phase 3a is complete only when the final packaged artifact proves the split and the validation logic would catch the previously observed failure mode automatically.
