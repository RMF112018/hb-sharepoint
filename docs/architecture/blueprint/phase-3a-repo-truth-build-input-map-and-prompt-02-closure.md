# Phase 3a Repo-Truth Build Input Map and Prompt-02 Closure

## Purpose

This note records the approved Prompt-02 baseline for current repo-truth freeze and build-input mapping. It serves as the formal closure artifact for the Phase-3a Prompt-02 open item.

## Operator override posture

Confirmed findings:

- Prompt-01 mismatch-branch findings remain authoritative for suspect artifact disposition.
- Prompt-02 continuation in this run was explicitly approved as an operator override to harden repo-truth mapping evidence before any rebuild work.

Strong inferences:

- Prompt-02 execution does not invalidate Prompt-01 findings; it adds source-truth and build-input provenance clarity.

Open questions:

- None for Prompt-02 closure.

## Repo-truth freeze findings

Confirmed findings:

- Root packaging orchestration routes through `build:sppkg` / `build:sppkg:homepage` in `package.json`.
- App packaging authority is Heft-native via `spfx:package` in `apps/hb-central-homepage/package.json`.
- Source bundle declarations in `apps/hb-central-homepage/config/config.json` map one bundle key per homepage surface (five total).
- Homepage wrappers each import a dedicated runtime owner module under `lib-commonjs/src/runtime/owners/`.
- Package assembly target remains one `.sppkg` path in `apps/hb-central-homepage/config/package-solution.json`.
- `tools/validate-sppkg.mjs` remains an authoritative packaged-artifact integrity and ownership guard.

Strong inferences:

- Current source truth is genuinely split, not superficially split.
- Current build/package inputs are aligned with split ownership expectations at source and wrapper boundaries.

Open questions:

- None required for Prompt-02 closure.

## Evidence outputs

Prompt-02 evidence is frozen at:

- `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-02/02-source-config-snapshot.txt`
- `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-02/02-build-input-map.md`
- `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-02/02-repo-truth-summary.md`

## Closure conditions

This Prompt-02 item is considered closed when:

- required Prompt-02 evidence outputs exist in a timestamped evidence folder;
- packaging command chain, source manifest-to-bundle mapping, wrapper-to-owner mapping, and governing config set are explicitly documented from live repo truth;
- the repo-truth summary explicitly states whether source truth is genuinely split;
- planning and governance routing docs reference Prompt-02 closure status;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- Prompt-02 evidence outputs are frozen in `docs/architecture/prompts/phase-3a/evidence/2026-04-04-prompt-02/`;
- canonical Prompt-02 closure authority now exists in blueprint governance docs;
- Phase-3a planning and repository routing docs now reference Prompt-02 closure and operator-override posture;
- root manifest patch version is advanced for this governance update.
