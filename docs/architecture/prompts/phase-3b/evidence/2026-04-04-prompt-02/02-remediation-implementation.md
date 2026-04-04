# 02 Remediation Implementation

## Purpose

Document the exact Prompt-02 implementation changes that redirect wrapper runtime-owner loading to browser-safe chunk inputs.

## Confirmed changes

- Updated all five homepage wrapper web parts to stop importing owner modules from `lib-commonjs/src/runtime/owners/*`.
- Repointed wrapper dynamic imports to browser-safe JS owner entrypoints under `src/runtime/owners-browser/*`.
- Preserved existing wrapper behavior contracts:
  - dynamic load on first render,
  - required mount function validation,
  - optional unmount callback handling in `onDispose`,
  - fallback error UI when runtime-owner load fails.
- Added browser-safe owner modules:
  - `mountHomepageSections.js`
  - `mountHomepageHero.js`
  - `mountHomepageFeaturedProjects.js`
  - `mountHomepageCompanyPulse.js`
  - `mountHomepageQuickActions.js`
- Updated `tools/validate-homepage-webpart-wiring.mjs` expected owner import paths to the new browser-safe owner module targets while preserving anti-bridge and mount-call assertions.

## Files changed

- `apps/hb-central-homepage/src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js`
- `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageSections.js`
- `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageHero.js`
- `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageFeaturedProjects.js`
- `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageCompanyPulse.js`
- `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageQuickActions.js`
- `tools/validate-homepage-webpart-wiring.mjs`

## Why this fixes the defect class

- The failing chunks were previously emitted from CommonJS owner artifacts that preserved browser-breaking `exports`/`require` signatures.
- The new owner entrypoints are browser-safe JS modules and emit chunks without those CommonJS signatures, removing the direct `exports is not defined` failure path from lazy owner chunk execution.
