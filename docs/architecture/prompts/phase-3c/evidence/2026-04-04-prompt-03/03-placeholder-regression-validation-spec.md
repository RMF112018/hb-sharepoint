# 03 Placeholder Regression Validation Spec

## Scope

The Prompt-03 gate applies only to focused homepage owner paths:

- Source owner entrypoints: `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepage*.js`
- Packaged lazy owner chunks: `ClientSideAssets/chunk.*.js` entries that expose `mountHomepage*` exports.

## Blocked phrase-family signatures

Validation hard-fails when any inspected source owner or packaged lazy owner chunk contains:

- `runtime owner is loaded through the browser-safe owner path`
- `mounted through the browser-safe owner entrypoint`
- `mounted through the browser-safe surface owner`

These checks target placeholder-style success-path text and are intentionally separate from runtime CommonJS signature checks.

## Failure contract

- Source validator emits per-file failures listing blocked phrase matches.
- Package validator emits per-chunk failures listing blocked phrase matches and affected mount exports.
- Failures are returned through the existing mandatory `validate:homepage:package` path.

## Non-goals

- Do not block localized runtime error/fallback messaging outside owner success-path signatures.
- Do not loosen or replace existing runtime CommonJS and ownership anti-collapse checks.
