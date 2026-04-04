# 01 Wrapper Owner Chunk Map

## Wrapper -> owner module -> emitted lazy chunk

| Surface | Wrapper file | Dynamic owner import | Primary bundle | Lazy chunk id | Lazy chunk file |
| --- | --- | --- | --- | --- | --- |
| Homepage Sections | `src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js` | `../../../lib-commonjs/src/runtime/owners/mountHomepageSections.js` | `dist/hb-central-homepage-sections-web-part_77a76b2b245ac60ecde8.js` | `757` | `dist/chunk.757_b7a56530249311b149d8.js` |
| Homepage Hero | `src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js` | `../../../lib-commonjs/src/runtime/owners/mountHomepageHero.js` | `dist/hb-central-homepage-hero-web-part_1e3f2e854d24aa41b894.js` | `725` | `dist/chunk.725_ec8a856a5b318be378ed.js` |
| Featured Projects | `src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js` | `../../../lib-commonjs/src/runtime/owners/mountHomepageFeaturedProjects.js` | `dist/hb-central-homepage-featured-projects-web-part_d1c70dfab7c182850c34.js` | `357` | `dist/chunk.357_775c0006db12ff929954.js` |
| Company Pulse | `src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js` | `../../../lib-commonjs/src/runtime/owners/mountHomepageCompanyPulse.js` | `dist/hb-central-homepage-company-pulse-web-part_7cbfe4e3e765bf2ad8e9.js` | `613` | `dist/chunk.613_015c923baf4a31220915.js` |
| Quick Actions | `src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js` | `../../../lib-commonjs/src/runtime/owners/mountHomepageQuickActions.js` | `dist/hb-central-homepage-quick-actions-web-part_68d1f19c506736707671.js` | `603` | `dist/chunk.603_88338352a0ffd29ab6fe.js` |

## Common defect signatures found in every mapped lazy chunk

All mapped lazy chunks contain CommonJS/browser-incompatible patterns:

- `Object.defineProperty(exports, "__esModule", ...)`
- `exports.mountHomepage...`
- `require(...)`

## Scope impact determination

The defect is not isolated to one surface. All five focused wrappers point at `lib-commonjs` owner inputs and all five corresponding lazy chunks carry the same CommonJS signature class.
