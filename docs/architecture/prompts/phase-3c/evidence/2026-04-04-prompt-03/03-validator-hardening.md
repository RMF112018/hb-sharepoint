# 03 Validator Hardening

## Purpose

Record Prompt-03 validator hardening changes that prevent placeholder-regression success-path text from shipping in homepage owners.

## Implemented hardening

- Extended `tools/validate-homepage-webpart-wiring.mjs` to scan the five browser-safe owner source files under `apps/hb-central-homepage/src/runtime/owners-browser/`.
- Added blocked placeholder phrase-family checks for:
  - `runtime owner is loaded through the browser-safe owner path`
  - `mounted through the browser-safe owner entrypoint`
  - `mounted through the browser-safe surface owner`
- Extended `tools/validate-sppkg.mjs` runtime-owner lazy-chunk inspection to fail when the same blocked phrase-family signatures are found in packaged owner chunks.
- Preserved all existing hard-fail checks for:
  - runtime CommonJS defect signatures,
  - ownership anti-collapse constraints,
  - anti-bridge and production hygiene validation.

## Outcome

Homepage validation now rejects both source-level and packaged lazy-chunk placeholder-regression phrase signatures while keeping previous runtime-format and ownership protections intact.
