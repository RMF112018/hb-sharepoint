# 03 Release Gate Updates

## Mandatory command path

Prompt-03 keeps release enforcement in the existing mandatory command chain:

1. `pnpm build:sppkg:homepage`
2. `pnpm validate:homepage:package`
3. `node tools/validate-homepage-webpart-wiring.mjs`
4. `node tools/validate-sppkg.mjs`

## Gate behavior added in Prompt-03

`tools/validate-sppkg.mjs` now includes runtime-format regression hard-failure checks for homepage lazy runtime-owner chunks in packaged `ClientSideAssets/chunk.*.js` assets.

## Regression class now blocked before release

- browser-incompatible CommonJS owner chunk signatures (`Object.defineProperty(exports, ...)`, `exports.mountHomepage...`, `require(...)`)
- missing expected runtime-owner mount export coverage
- duplicate runtime-owner mount export mapping across lazy chunks

## Verification executed for Prompt-03 closure

- `pnpm --filter @hbc/hb-central-homepage check-types`
- `pnpm --filter @hbc/hb-central-homepage lint`
- `pnpm --filter @hbc/hb-central-homepage build`
- `pnpm --filter @hbc/hb-central-homepage test`
- `pnpm build:sppkg:homepage`

Packaged lazy owner chunk entries inspected during closure verification:

- `ClientSideAssets/chunk.88_9602014fd0d2b1d3ed0a.js` (`mountHomepageSections`)
- `ClientSideAssets/chunk.921_b782200598a855750239.js` (`mountHomepageHero`)
- `ClientSideAssets/chunk.763_82de90a313678c89a094.js` (`mountHomepageFeaturedProjects`)
- `ClientSideAssets/chunk.678_ba13c6269415a5b67f0b.js` (`mountHomepageCompanyPulse`)
- `ClientSideAssets/chunk.462_d2b9c1d7b7d38d78a8a5.js` (`mountHomepageQuickActions`)

Residual uncertainty:

- Prompt-03 closes only validator hardening/regression gate scope.
- Prompt-04 remains required for clean rebuild + redeploy + live SharePoint proof closure.

Prompt-03 closure requires this release-gated validation behavior to remain non-optional in normal homepage packaging flow.
