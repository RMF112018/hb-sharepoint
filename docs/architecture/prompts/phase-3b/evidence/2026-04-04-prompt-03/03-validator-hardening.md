# 03 Validator Hardening

## Purpose

Document the exact Prompt-03 validator implementation that prevents regression to browser-incompatible lazy owner chunk output.

## Confirmed implementation changes

- Extended `tools/validate-sppkg.mjs` to inspect packaged homepage lazy chunk assets under `ClientSideAssets/chunk.*.js`.
- Added explicit runtime-owner export coverage model using expected mount exports:
  - `mountHomepageSections`
  - `mountHomepageHero`
  - `mountHomepageFeaturedProjects`
  - `mountHomepageCompanyPulse`
  - `mountHomepageQuickActions`
- Added hard-fail checks for browser-incompatible CommonJS signatures when found in inspected runtime-owner lazy chunks:
  - `Object.defineProperty(exports, ...)`
  - `exports.mountHomepage...`
  - `require(...)`
- Added hard-fail checks for missing or duplicate runtime-owner export-to-chunk mapping.
- Preserved existing `.sppkg` validation controls:
  - package-manifest structure checks,
  - localhost/debug leakage checks,
  - unsupported feature registration checks,
  - expected focused web part registration checks,
  - packaged ownership anti-collapse checks.

## Changed files

- `tools/validate-sppkg.mjs`

## Enforcement path

- Root command `validate:homepage:package` still runs both wiring and package validators.
- Root command `build:sppkg:homepage` still invokes `validate:homepage:package` as mandatory release gating.

## Load-bearing effect

The homepage package now fails before release if lazy owner chunks regress to the Prompt-01 defect class (`exports is not defined` / `require is not defined` risk), while preserving prior ownership and bridge protections.
