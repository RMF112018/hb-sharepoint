# Phase 3 Prompt Package — HB Central Homepage Surface Split + Heft-Native Packaging

## Objective

This package translates the Phase 3 audit into an implementation-grade prompt series for a local code agent.

The Phase 3 end state is:

- split homepage surfaces into intentional, independently owned web part bundle boundaries;
- remove the fragile shared runtime-bundle pattern;
- migrate the homepage solution from the current hybrid packaging path to a Heft-native SPFx packaging workflow;
- strengthen validation so future packages cannot silently collapse back into a single shared runtime bundle.

## Package contents

1. `Phase-3-Implementation-Summary.md`
2. `Phase-3-Architecture-and-Migration-Plan.md`
3. `Phase-3-Risk-Exposure.md`
4. `Phase-3-Standards-and-Best-Practices.md`
5. `Phase-3-Acceptance-Checklist.md`
6. `Prompt-01-*` through `Prompt-11-*`

## Recommended reading order

1. `Phase-3-Implementation-Summary.md`
2. `Phase-3-Architecture-and-Migration-Plan.md`
3. `Phase-3-Risk-Exposure.md`
4. `Phase-3-Standards-and-Best-Practices.md`
5. `Phase-3-Acceptance-Checklist.md`
6. Prompt files in numeric order

## Prompt-01 Baseline Status

- Prompt-01 is now treated as an executed Phase-3 baseline, not an open discovery setup item.
- Canonical closure note: `docs/architecture/blueprint/phase-3-repo-truth-evidence-map-and-prompt-01-closure.md`.
- The Prompt-01 closure freezes:
  - current homepage surface inventory,
  - current single-bundle ownership reality,
  - current shared-runtime ownership seam through `dist/homepage.js`,
  - current hybrid gulp-backed packaging path,
  - current validation coverage and known gap areas for later release-gate hardening.

## Prompt-02 Baseline Status

- Prompt-02 is now treated as an executed Phase-3 baseline, not an open canonical-target discovery item.
- Canonical closure note: `docs/architecture/blueprint/phase-3-canonical-heft-reference-and-prompt-02-delta-map.md`.
- The Prompt-02 closure freezes:
  - canonical Heft-native SPFx reference expectations for the current SPFx baseline,
  - the current-vs-target delta map for packaging/config/script authority,
  - explicit disposition of legacy artifacts (`replace`, `retain`, `translate`, `retire-later`),
  - migration guardrails requiring downstream prompts to consume the canonical delta map.

## Prompt-03 Baseline Status

- Prompt-03 is now treated as an executed Phase-3 baseline, not an open runtime-strategy decision item.
- Canonical closure note: `docs/architecture/blueprint/phase-3-runtime-react-strategy-and-prompt-03-closure.md`.
- The Prompt-03 closure freezes:
  - React/runtime posture aligned to SPFx-supported React `17.0.1` for the selected baseline,
  - Vite role as preview-only non-production workflow,
  - prerequisite runtime alignment changes required before ownership and bundle-boundary refactors.

## Prompt-04 Baseline Status

- Prompt-04 is now treated as an executed Phase-3 baseline for source-level runtime ownership decomposition.
- Canonical closure note: `docs/architecture/blueprint/phase-3-per-surface-runtime-ownership-and-prompt-04-closure.md`.
- The Prompt-04 closure freezes:
  - explicit per-surface source mount ownership modules,
  - `src/index.tsx` as thin aggregator/bootstrap rather than monolithic runtime authority,
  - stable `mountHbCentralHomepage*` export contracts for downstream wrapper compatibility,
  - intentional deferral of wrapper import-path migration to Prompt-05.

## Prompt-05 Baseline Status

- Prompt-05 is now treated as an executed Phase-3 baseline for direct wrapper surface ownership.
- Canonical closure note: `docs/architecture/blueprint/phase-3-wrapper-direct-ownership-and-prompt-05-closure.md`.
- The Prompt-05 closure freezes:
  - direct wrapper-to-surface-owner runtime mapping for all five homepage wrappers,
  - removal of production wrapper dependency on `../../../dist/homepage.js`,
  - ownership-aware wiring validation that rejects bridge regression in wrappers.

## Prompt-06 Baseline Status

- Prompt-06 is now treated as an executed Phase-3 baseline for real per-surface bundle ownership.
- Canonical closure note: `docs/architecture/blueprint/phase-3-split-bundle-ownership-and-prompt-06-closure.md`.
- The Prompt-06 closure freezes:
  - split SPFx bundle authority with one deployable bundle boundary per homepage surface,
  - artifact-level ownership validation that fails on collapsed `entryModuleId` or primary script-resource ownership,
  - stable one-solution packaging posture while Heft-native packaging-path migration remains Prompt-07 scope.

## Evidence sources used

### Attached artifacts

- `phase-3-audit-prompt.md`
- `hb-central-homepage.sppkg`

### Repo-truth files reviewed

- `package.json`
- `pnpm-workspace.yaml`
- `apps/hb-central-homepage/package.json`
- `apps/hb-central-homepage/config/config.json`
- `apps/hb-central-homepage/config/package-solution.json`
- `apps/hb-central-homepage/config/write-manifests.json`
- `apps/hb-central-homepage/gulpfile.cjs`
- `apps/hb-central-homepage/src/index.tsx`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.manifest.json`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.manifest.json`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js`
- `apps/hb-central-homepage/src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.manifest.json`
- `apps/hb-central-homepage/vite.config.ts`
- `tools/run-spfx-package.mjs`
- `tools/validate-homepage-webpart-wiring.mjs`
- `tools/validate-sppkg.mjs`

### Microsoft / primary-source guidance used to shape the plan

- SharePoint Framework toolchain: Heft & Webpack
- Migrate from the Gulp-based to the Heft-based toolchain
- Dynamic loading of packages in SPFx
- Provision SharePoint assets from your SPFx package
- Tenant-scoped deployment for SPFx solutions
- Use web parts with the full-width column
- Optimize modern page performance with Page Diagnostics
- SPFx roadmap / release notes

## Confirmed findings that drive this package

- The workspace is modernized at the repo level (`pnpm` + `turbo`) but the homepage packaging path remains SPFx-gulp based.
- The homepage app currently builds a Vite runtime (`dist/homepage.js`) and then shells into a custom SPFx packaging script that runs `gulp bundle --ship` and `gulp package-solution --ship`.
- The homepage solution exposes five web parts: Homepage Sections, Hero, Featured Projects, Company Pulse, and Quick Actions.
- The authoritative SPFx bundle config currently places all five components under a single bundle key (`hb-central-homepage-web-part`).
- Each SPFx wrapper dynamically imports the same Vite-built runtime file and expects one of several exported mount functions.
- The shipped `.sppkg` contains five component registrations, but every web part resolves to the same entry module and same primary JS asset, differing only by `exportName`.
- Current validation catches basic `.sppkg` structure and wrapper mount wiring, but it does not prove split bundle ownership.

## Strategic recommendation

Do **not** solve Phase 3 by creating multiple `.sppkg` packages unless repo truth during implementation proves operationally necessary.

The recommended Phase 3 shape is:

- keep one homepage solution package for now;
- split runtime ownership at the web part bundle level;
- eliminate the production dependency on the shared Vite runtime bridge;
- move the deployable build/package path fully into the canonical Heft-native SPFx toolchain;
- preserve shared UI code as source-level/shared-package imports, not as a fragile shared runtime-bundle contract.

## Assumptions and limitations

### Confirmed

- The shipped package artifact and reviewed repo files are sufficient to prove the current single-bundle coupling problem.
- Current Microsoft guidance clearly favors Heft for new SPFx projects and provides a migration path for upgraded legacy projects.

### Strong inferences

- The homepage should remain one solution package during Phase 3 to reduce deployment/operational blast radius while still achieving proper bundle separation.
- The current wrapper-to-Vite runtime bridge is the primary architectural seam that should be retired.

### Open questions to resolve during implementation

- Whether the repo should retain any Vite-based non-production preview path after the deployable path becomes Heft-native.
- Whether any custom webpack behavior from the current homepage app requires a Heft plugin, or whether the migration can remain inside standard Heft/SPFx rig customization.

## How to use this package

- Run prompts in order.
- Do not skip the Heft reference/scaffold prompt.
- Do not jump directly to code changes without first locking the canonical Heft-native target structure.
- Treat the acceptance checklist as the Phase 3 definition of done.
