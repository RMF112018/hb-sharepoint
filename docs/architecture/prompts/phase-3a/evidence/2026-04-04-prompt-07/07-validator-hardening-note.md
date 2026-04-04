# Prompt-07 Validator Hardening Note

## Confirmed findings

- `tools/validate-sppkg.mjs` enforces one homepage `.sppkg` package-manifest relationship and validates expected focused web part registrations for all five homepage IDs.
- `tools/validate-sppkg.mjs` fails if packaged ownership collapses by requiring exactly five unique packaged `entryModuleId` values, five unique primary script-resource keys, and five unique primary script-resource paths.
- `tools/validate-homepage-webpart-wiring.mjs` validates wrapper-to-owner runtime wiring and fails on retired `dist/homepage.js` bridge usage.
- Root command wiring in `package.json` is already fail-fast:
  - `build:sppkg:homepage` runs `spfx:package` then `validate:homepage:package`
  - `build:sppkg` runs build + package then `validate:homepage:package`
  - `validate:homepage:package` runs both validator scripts.
- Current artifact validation output confirms five-way packaged ownership in `dist/sppkg/hb-central-homepage.sppkg`.

## Strong inference

- A previously observed collapsed ownership artifact (single packaged primary owner reused across homepage surfaces) would fail current validator gates because uniqueness assertions are mandatory and wired into normal homepage packaging commands.

## Open questions

- No open questions block Prompt-07 closure in current repo truth.

## Prompt-07 closure disposition

- Prompt-07 closes as a reconciliation/governance milestone: required validation hardening behavior and command wiring are already present and are now explicitly frozen in this evidence record.
