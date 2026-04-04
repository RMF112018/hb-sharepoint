# Prompt-02 Build Input Map (Current Repo Truth)

## Packaging command chain

1. Root packaging orchestration in `package.json`:
   - `build:sppkg`: `pnpm --filter @hbc/hb-central-homepage build && pnpm --filter @hbc/hb-central-homepage spfx:package && pnpm validate:homepage:package`
   - `build:sppkg:homepage`: `pnpm --filter @hbc/hb-central-homepage spfx:package && pnpm validate:homepage:package`
2. App packaging command in `apps/hb-central-homepage/package.json`:
   - `spfx:package`: `heft build --clean --production && heft package-solution --production`
3. Packaging guard in root `package.json`:
   - `validate:homepage:package`: `node tools/validate-homepage-webpart-wiring.mjs && node tools/validate-sppkg.mjs`

## Source manifest -> bundle map

Authority file: `apps/hb-central-homepage/config/config.json`

| Web part manifest | Manifest ID | Bundle key | Entrypoint |
|---|---|---|---|
| `src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.manifest.json` | `b8bb1136-d33e-47d2-9d45-848524b8fcbf` | `hb-central-homepage-sections-web-part` | `./src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js` |
| `src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.manifest.json` | `4ff4d963-cb8e-4ba2-b70f-89f72f0f4db1` | `hb-central-homepage-hero-web-part` | `./src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js` |
| `src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.manifest.json` | `02ce4751-f355-444e-a635-a6f3b11fad79` | `hb-central-homepage-featured-projects-web-part` | `./src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js` |
| `src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.manifest.json` | `c5819073-cf72-4d91-bd5b-49982a6b8230` | `hb-central-homepage-company-pulse-web-part` | `./src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js` |
| `src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.manifest.json` | `506562ca-e752-4bf4-a218-f06d965f8f7f` | `hb-central-homepage-quick-actions-web-part` | `./src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js` |

## Wrapper -> runtime owner module map

| Wrapper file | Runtime owner import |
|---|---|
| `src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js` | `../../../lib-commonjs/src/runtime/owners/mountHomepageSections.js` |
| `src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js` | `../../../lib-commonjs/src/runtime/owners/mountHomepageHero.js` |
| `src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js` | `../../../lib-commonjs/src/runtime/owners/mountHomepageFeaturedProjects.js` |
| `src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js` | `../../../lib-commonjs/src/runtime/owners/mountHomepageCompanyPulse.js` |
| `src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js` | `../../../lib-commonjs/src/runtime/owners/mountHomepageQuickActions.js` |

## Governing config inputs (Heft/SPFx/package)

- `apps/hb-central-homepage/config/heft.json`
- `apps/hb-central-homepage/config/rig.json`
- `apps/hb-central-homepage/config/typescript.json`
- `apps/hb-central-homepage/config/sass.json`
- `apps/hb-central-homepage/config/config.json`
- `apps/hb-central-homepage/config/package-solution.json`
- `apps/hb-central-homepage/config/write-manifests.json`
- `tools/validate-sppkg.mjs` (packaged ownership/structure guard)

## Prompt-01 gate override note

Prompt-01 mismatch branch remains authoritative for suspect artifact disposition. Prompt-02 continuation in this run is an approved operator override to freeze additional repo-truth build-input evidence.
