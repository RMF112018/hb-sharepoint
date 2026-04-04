# Phase 3b Runtime Chunk Forensics and Prompt-01 Closure

## Purpose

This note records the approved Prompt-01 baseline for phase-3b runtime chunk forensics and root-cause proof. It serves as the formal closure artifact for the phase-3b Prompt-01 open item.

## Prompt-01 forensics findings

Confirmed findings:

- Prompt-01 evidence artifacts are frozen at `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-01/`.
- All five homepage wrappers dynamically import owner modules from `../../../lib-commonjs/src/runtime/owners/*`.
- Owner modules under `apps/hb-central-homepage/lib-commonjs/src/runtime/owners/*.js` contain CommonJS signatures (`Object.defineProperty(exports, ...)`, `exports.mountHomepage...`, `require(...)`).
- Emitted lazy runtime chunks referenced by homepage primary bundles (`chunk.357_*`, `chunk.603_*`, `chunk.613_*`, `chunk.725_*`, `chunk.757_*`) preserve CommonJS signatures (`Object.defineProperty(exports, ...)`, `exports.mountHomepage...`, `require(...)`).
- The observed featured-projects failure path (`hb-central-homepage-featured-projects-web-part_d1c70dfab7c182850c34.js` -> `chunk.357_775c0006db12ff929954.js`) is directly explained by emitted CommonJS signatures in browser-loaded chunk code.

Strong inferences:

- Runtime bundle failure is caused by module-format incompatibility in lazy owner chunks, not by SPFx registration/package-ownership structure.
- The same defect class applies across all five focused surfaces due to identical wrapper->`lib-commonjs` owner import pattern.

Open questions:

- None required for Prompt-01 closure. Prompt-02 owns implementation remediation and post-fix emitted-chunk validation.

## Prompt-01 closure decision

Decision:

- Close phase-3b Prompt-01 as `Confirmed root cause`.
- Route remediation execution to Prompt-02 without widening scope to Prompt-03/04 in this change.

## Evidence outputs

Prompt-01 required artifacts are present:

- `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-01/01-runtime-chunk-forensics.md`
- `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-01/01-wrapper-owner-chunk-map.md`
- `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-01/01-root-cause-decision.md`

## Closure conditions

This Prompt-01 item is considered closed when:

- required Prompt-01 forensics artifacts are frozen in a timestamped phase-3b evidence directory;
- wrapper->owner->chunk mapping and emitted-signature proof are documented from current repo truth;
- the root-cause decision is explicit and ends as `Confirmed root cause`;
- phase-3b prompt-package docs and governance routing docs reference Prompt-01 closure authority;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- phase-3b Prompt-01 evidence artifacts are frozen in `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-01/`;
- this canonical phase-3b Prompt-01 closure authority note now exists;
- phase-3b prompt-package docs and repository routing docs reference this closure baseline;
- root manifest patch version is advanced for this governance update.
