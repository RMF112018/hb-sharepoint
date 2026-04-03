# Phase 3 Heft-Native Packaging and Prompt-07 Closure

## Purpose

This note records the approved Prompt-07 baseline for homepage Heft-native SPFx packaging authority and serves as the formal closure artifact for the Phase-3 Prompt-07 open item.

## Prompt-07 migration summary

### Decision

Replace the homepage package path authority with canonical Heft-native SPFx commands and retire the custom gulp bridge from deployable packaging.

### What changed

Confirmed findings:

- Homepage package authority now uses Heft-native SPFx commands for deployable packaging.
- Homepage package configuration now includes canonical Heft rig/config files:
  - `config/rig.json`,
  - `config/heft.json`,
  - `config/typescript.json`,
  - `config/sass.json`.
- `tools/run-spfx-package.mjs` is retired from production packaging authority.
- `apps/hb-central-homepage/gulpfile.cjs` is retired from authoritative package flow.
- Prompt-05 and Prompt-06 runtime and ownership posture remains intact.

Strong inferences:

- Removing the custom gulp bridge reduces packaging-path ambiguity and operational drift.
- Heft-native command authority creates a stable baseline for downstream extension-point and validation hardening prompts.

Open questions:

- Prompt-08 now locks the current no-ejection/no-extra-plugin default for extension-point governance.
- Final end-to-end deployment proof in SharePoint remains downstream scope.

## Why this strategy is safest now

- Keeps packaging migration focused on authority-path replacement without redesigning runtime contracts.
- Uses canonical SPFx Heft rig posture rather than introducing custom orchestration.
- Preserves one-solution packaging shape while improving build/package governance clarity.

## Guardrail alignment

Confirmed findings:

- No public API/type/export shape changes are introduced.
- Single `.sppkg` package shape is preserved.
- Runtime shared-bridge regression remains blocked by existing wrapper and package validation rules.

## Closure conditions

This planning item is considered closed when:

- deployable homepage package scripts are Heft-native;
- custom gulp bridge is removed from authoritative package execution;
- required Heft rig/config files are present and wired;
- Prompt-07 status is propagated into Phase-3 planning and governance routing docs;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- homepage package authority is now Heft-native;
- legacy gulp bridge script is retired from deployable path authority;
- Prompt-07 baseline status is propagated across Phase-3 planning and governance routing docs;
- root manifest patch version is advanced for this governance update.
