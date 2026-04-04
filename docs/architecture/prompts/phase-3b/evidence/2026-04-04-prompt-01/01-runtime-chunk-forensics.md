# 01 Runtime Chunk Forensics

## Purpose

Prove the exact source-to-output chain for the homepage runtime-bundle failure class and isolate the smallest remediation point for Prompt-02.

## Forensic inputs

- `apps/hb-central-homepage/src/webparts/*/*.js`
- `apps/hb-central-homepage/lib-commonjs/src/runtime/owners/*.js`
- `apps/hb-central-homepage/dist/hb-central-homepage-*-web-part_*.js`
- `apps/hb-central-homepage/dist/chunk.*.js`
- `apps/hb-central-homepage/config/config.json`
- `apps/hb-central-homepage/config/heft.json`

## Confirmed findings

### Wrapper import path selects CommonJS owner artifacts

All five focused wrappers dynamically import owner modules from `../../../lib-commonjs/src/runtime/owners/*`:

- `src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js` -> `mountHomepageSections.js`
- `src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js` -> `mountHomepageHero.js`
- `src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js` -> `mountHomepageFeaturedProjects.js`
- `src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js` -> `mountHomepageCompanyPulse.js`
- `src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js` -> `mountHomepageQuickActions.js`

### Selected owner artifacts are CommonJS-shaped

Each imported owner file under `lib-commonjs/src/runtime/owners/*.js` contains browser-incompatible CommonJS signatures:

- `Object.defineProperty(exports, "__esModule", { value: true });`
- `exports.mountHomepage... = ...`
- `require("react/jsx-runtime")`, `require("react")`, `require("react-dom")`
- relative `require("../...")` calls

### Emitted lazy-loaded runtime chunks preserve CommonJS signatures

The chunk files referenced by each primary web part bundle (`chunk.357_*`, `chunk.603_*`, `chunk.613_*`, `chunk.725_*`, `chunk.757_*`) contain:

- `Object.defineProperty(exports, "__esModule", ...)`
- `exports.mountHomepage...`
- `require(...)`

Example (featured projects failing path):

- primary: `dist/hb-central-homepage-featured-projects-web-part_d1c70dfab7c182850c34.js`
- lazy chunk reference: `s.e(357)` / `s.u(e)=>"chunk."+e+"_775c0006db12ff929954.js"`
- emitted chunk: `dist/chunk.357_775c0006db12ff929954.js`
- emitted signatures include `Object.defineProperty(exports, ...)`, `exports.mountHomepageFeaturedProjects`, and `require(...)`

## Strong inferences

- The defect is not in manifest registration or primary entry ownership wiring; it is in module format of lazy owner chunks.
- The same defect class applies to all five focused surfaces because each wrapper follows the same `lib-commonjs` owner import pattern.

## Smallest remediation point for Prompt-02

Update wrapper dynamic imports so runtime owners resolve to a browser-safe module path/output format (instead of `lib-commonjs/src/runtime/owners/*`), then confirm emitted lazy chunks no longer contain CommonJS-only browser-incompatible signatures.
