# Phase 3 Ownership-Aware Release Gates and Prompt-09 Closure

## Purpose

This note records the approved Prompt-09 baseline for ownership-aware validation release gates and serves as the formal closure artifact for the Phase-3 Prompt-09 open item.

## Prompt-09 validation scope

### Confirmed findings

- `tools/validate-homepage-webpart-wiring.mjs` now enforces wrapper ownership posture with actionable checks for:
  - retired shared runtime bridge regression (`dist/homepage.js`),
  - expected per-surface owner-module import path,
  - expected owner mount symbol binding and invocation.
- `tools/validate-sppkg.mjs` now enforces artifact semantics with hard failures for:
  - collapsed packaged `entryModuleId` ownership,
  - collapsed packaged primary script-resource key/path ownership,
  - localhost production leakage,
  - debug/workbench leakage (`debugManifestsFile`, `loadSPFX=true`, `noredir=true`, workbench URL references),
  - unsupported feature registration.
- Root `validate:homepage:package` remains the canonical release-gate entrypoint for wrapper + artifact ownership checks.

### Strong inferences

- Actionable ownership-map output in failure mode reduces diagnosis time when bundle ownership collapses.
- Treating debug/workbench leakage as a hard failure protects deployable package hygiene as packaging evolves.

### Open questions

- Final production deployment and SharePoint tenant validation remains downstream scope (Prompt-10/11), not a blocker for Prompt-09 closure.

## Closure conditions

This planning item is considered closed when:

- ownership-aware wrapper and `.sppkg` release-gate checks are implemented with actionable hard-failure messages;
- release-gate invocation remains easy and canonical via package scripts;
- Prompt-09 executed-baseline status is propagated through Phase-3 and repository governance routing docs;
- developer validation guidance reflects ownership-aware release-gate expectations;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- ownership-aware wrapper and packaged artifact checks now fail explicitly on shared-bundle regression patterns;
- release-gate command routing is canonical and documented;
- Prompt-09 baseline routing is recorded in Phase-3 and repository governance maps;
- root manifest patch version is advanced for this governance update.
