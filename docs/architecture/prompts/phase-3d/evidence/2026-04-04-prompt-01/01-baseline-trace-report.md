# 01 Baseline Trace Report

## Scope

Prompt-01 baseline proof for the five homepage surfaces only:

1. Homepage Sections
2. Hero
3. Featured Projects
4. Company Pulse
5. Quick Actions

## Wrapper-to-owner trace

| Surface | Wrapper file path | Dynamic import target string | Imported symbol | Owner file path | Owner export |
| --- | --- | --- | --- | --- | --- |
| Homepage Sections | `apps/hb-central-homepage/src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js` | `../../runtime/owners-browser/mountHomepageSections.js` | `mountHomepageSections` | `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageSections.js` | `mountHomepageSections` |
| Hero | `apps/hb-central-homepage/src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js` | `../../runtime/owners-browser/mountHomepageHero.js` | `mountHomepageHero` | `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageHero.js` | `mountHomepageHero` |
| Featured Projects | `apps/hb-central-homepage/src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js` | `../../runtime/owners-browser/mountHomepageFeaturedProjects.js` | `mountHomepageFeaturedProjects` | `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageFeaturedProjects.js` | `mountHomepageFeaturedProjects` |
| Company Pulse | `apps/hb-central-homepage/src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js` | `../../runtime/owners-browser/mountHomepageCompanyPulse.js` | `mountHomepageCompanyPulse` | `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageCompanyPulse.js` | `mountHomepageCompanyPulse` |
| Quick Actions | `apps/hb-central-homepage/src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js` | `../../runtime/owners-browser/mountHomepageQuickActions.js` | `mountHomepageQuickActions` | `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageQuickActions.js` | `mountHomepageQuickActions` |

## Owner-to-mounted-component trace

| Surface | Current owner file | Mounted component path | Mounted component export/name | Current mount style |
| --- | --- | --- | --- | --- |
| Homepage Sections | `src/runtime/owners-browser/mountHomepageSections.js` | same file | inline `createElement("main" -> "section")` tree | Stub placeholder render |
| Hero | `src/runtime/owners-browser/mountHomepageHero.js` | same file | inline `createElement("main" -> "section")` tree | Stub placeholder render |
| Featured Projects | `src/runtime/owners-browser/mountHomepageFeaturedProjects.js` | same file | inline `createElement("main" -> "section")` tree | Stub placeholder render |
| Company Pulse | `src/runtime/owners-browser/mountHomepageCompanyPulse.js` | same file | inline `createElement("main" -> "section")` tree | Stub placeholder render |
| Quick Actions | `src/runtime/owners-browser/mountHomepageQuickActions.js` | same file | inline `createElement("main" -> "section")` tree | Stub placeholder render |

## Explicit source-chain proof

- Homepage Sections:
  `HbCentralHomepageWebPart.render()` -> dynamic import `owners-browser/mountHomepageSections.js` -> export `mountHomepageSections` -> inline render with placeholder paragraph text.
- Hero:
  `HbCentralHomepageHeroWebPart.render()` -> dynamic import `owners-browser/mountHomepageHero.js` -> export `mountHomepageHero` -> inline render with placeholder paragraph text.
- Featured Projects:
  `HbCentralHomepageFeaturedProjectsWebPart.render()` -> dynamic import `owners-browser/mountHomepageFeaturedProjects.js` -> export `mountHomepageFeaturedProjects` -> inline render with placeholder paragraph text.
- Company Pulse:
  `HbCentralHomepageCompanyPulseWebPart.render()` -> dynamic import `owners-browser/mountHomepageCompanyPulse.js` -> export `mountHomepageCompanyPulse` -> inline render with placeholder paragraph text.
- Quick Actions:
  `HbCentralHomepageQuickActionsWebPart.render()` -> dynamic import `owners-browser/mountHomepageQuickActions.js` -> export `mountHomepageQuickActions` -> inline render with placeholder paragraph text.

## Real owner targets present but not mounted by wrappers

- `src/runtime/owners/mountHomepageSections.tsx` -> `HbCentralHomepageHost`
- `src/runtime/owners/mountHomepageHero.tsx` -> `HomepageShellHero`
- `src/runtime/owners/mountHomepageFeaturedProjects.tsx` -> `HomepageFeaturedProjects`
- `src/runtime/owners/mountHomepageCompanyPulse.tsx` -> `HomepageCompanyPulse`
- `src/runtime/owners/mountHomepageQuickActions.tsx` -> `HomepageQuickActions`
