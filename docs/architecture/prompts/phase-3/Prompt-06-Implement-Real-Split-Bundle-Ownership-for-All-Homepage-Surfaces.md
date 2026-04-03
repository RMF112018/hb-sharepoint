# Prompt 06 — Implement Real Split Bundle Ownership for All Homepage Surfaces

## Objective
Make bundle ownership match surface ownership so the shipped package no longer disguises one runtime bundle as five separate web parts.

## Scope
Bundle-boundary implementation using the canonical Heft-native SPFx model.

## Repo-truth files to inspect first
- Prompt 02 canonical Heft delta map
- Prompt 04 and 05 outputs
- current manifests/config relevant to SPFx bundle ownership

## Instructions
1. Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.
2. Implement the bundle-boundary model that corresponds to the canonical Heft-native SPFx structure for the selected baseline.
3. Ensure each homepage surface is independently owned in the deployable output.
4. Preserve shared code via normal source/package reuse and chunk dedupe, not by collapsing ownership.
5. Keep component ids stable unless a documented migration-safe reason requires change.
6. Update manifests/config so repo intent and deployable output align.

## Constraints / guardrails
- Do not measure success by source manifests alone.
- Do not preserve the current one-bundle-for-all-surfaces model.
- Do not create multiple `.sppkg` packages unless repo truth proves that is required and you document why.

## Acceptance criteria
- The deployable output path is capable of producing per-surface bundle ownership.
- The implementation does not require a shared exported runtime bundle.
- Manifest-to-surface mapping remains explicit and stable.

## Required outputs
- Updated Heft/SPFx bundle ownership configuration
- Updated manifests/configuration where required
- Architecture note describing the final ownership model
