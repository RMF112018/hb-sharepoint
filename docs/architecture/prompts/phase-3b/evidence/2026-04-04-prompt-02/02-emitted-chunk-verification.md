# 02 Emitted Chunk Verification

## Build and validation command

- `pnpm --filter @hbc/hb-central-homepage check-types`
- `pnpm --filter @hbc/hb-central-homepage lint`
- `pnpm --filter @hbc/hb-central-homepage build`
- `pnpm --filter @hbc/hb-central-homepage test`
- `pnpm build:sppkg:homepage`

## Exact emitted assets inspected

Primary web part bundles:

- `apps/hb-central-homepage/dist/hb-central-homepage-sections-web-part_90f02b71ad1b38bc5c80.js`
- `apps/hb-central-homepage/dist/hb-central-homepage-hero-web-part_0e4b42c75fb43d9139cd.js`
- `apps/hb-central-homepage/dist/hb-central-homepage-featured-projects-web-part_37482f2e6757ba64e147.js`
- `apps/hb-central-homepage/dist/hb-central-homepage-company-pulse-web-part_4c4299c4167e1719a461.js`
- `apps/hb-central-homepage/dist/hb-central-homepage-quick-actions-web-part_9e1fa2afc250efd2814a.js`

Lazy owner chunks:

- `apps/hb-central-homepage/dist/chunk.88_9602014fd0d2b1d3ed0a.js`
- `apps/hb-central-homepage/dist/chunk.921_b782200598a855750239.js`
- `apps/hb-central-homepage/dist/chunk.763_82de90a313678c89a094.js`
- `apps/hb-central-homepage/dist/chunk.678_ba13c6269415a5b67f0b.js`
- `apps/hb-central-homepage/dist/chunk.462_d2b9c1d7b7d38d78a8a5.js`

## Before/after module-format findings

Before Prompt-02:

- Affected lazy owner chunks contained:
  - `Object.defineProperty(exports, ...)`
  - `exports.mountHomepage...`
  - `require(...)`
- This signature class directly matched the observed live failure (`ReferenceError: exports is not defined`).

After Prompt-02:

- Affected lazy owner chunks no longer contain:
  - `Object.defineProperty(exports, ...)`
  - `exports.mountHomepage...`
  - bare `require(...)`
- Verification query used:
  - `rg -n "Object\\.defineProperty\\(exports|exports\\.mountHomepage|\\brequire\\(" apps/hb-central-homepage/dist/chunk.*.js -S`
- Result: no matches.

## Packaging and ownership invariant verification

- `pnpm build:sppkg:homepage` succeeded.
- `validate-homepage-webpart-wiring.mjs` succeeded with updated browser-safe owner import paths.
- `validate-sppkg.mjs` succeeded with:
  - five focused web part registrations,
  - five unique `entryModuleId` values,
  - five unique primary script-resource keys,
  - five unique primary script-resource paths.

## Remaining uncertainty routed downstream

- Prompt-03 remains open to formalize runtime-format regression guards against this defect class.
- Prompt-04 remains open for live tenant redeploy proof and release classification evidence.
