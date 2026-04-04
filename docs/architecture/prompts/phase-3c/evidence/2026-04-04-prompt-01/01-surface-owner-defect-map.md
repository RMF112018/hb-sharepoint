# 01 Surface Owner Defect Map

## Surface-by-surface mapping

| Surface | Wrapper consumer | Current owner file (browser-safe) | Current mount behavior | Intended real mount path | Exact gap |
| --- | --- | --- | --- | --- | --- |
| Homepage Sections | `src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js` | `src/runtime/owners-browser/mountHomepageSections.js` | Direct placeholder render (`Homepage sections runtime owner is loaded...`) | `src/runtime/owners/mountHomepageSections.tsx` -> `HbCentralHomepageHost` | Browser-safe entrypoint renders placeholder instead of delegating to real owner mount |
| Homepage Hero | `src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js` | `src/runtime/owners-browser/mountHomepageHero.js` | Direct placeholder render (`Hero runtime owner is loaded...`) | `src/runtime/owners/mountHomepageHero.tsx` -> `HomepageShellHero` | Browser-safe entrypoint renders placeholder instead of delegating to real owner mount |
| Featured Projects | `src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js` | `src/runtime/owners-browser/mountHomepageFeaturedProjects.js` | Direct placeholder render (`Featured projects runtime owner is loaded...`) | `src/runtime/owners/mountHomepageFeaturedProjects.tsx` -> `HomepageFeaturedProjects` | Browser-safe entrypoint renders placeholder instead of delegating to real owner mount |
| Company Pulse | `src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js` | `src/runtime/owners-browser/mountHomepageCompanyPulse.js` | Direct placeholder render (`Company pulse runtime owner is loaded...`) | `src/runtime/owners/mountHomepageCompanyPulse.tsx` -> `HomepageCompanyPulse` | Browser-safe entrypoint renders placeholder instead of delegating to real owner mount |
| Quick Actions | `src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js` | `src/runtime/owners-browser/mountHomepageQuickActions.js` | Direct placeholder render (`Quick actions runtime owner is loaded...`) | `src/runtime/owners/mountHomepageQuickActions.tsx` -> `HomepageQuickActions` | Browser-safe entrypoint renders placeholder instead of delegating to real owner mount |

## Classification summary

- Placeholder behavior is direct in each browser-safe owner module.
- No evidence of conditional fallback branching to placeholder because of disconnected runtime state.
- Smallest viable remediation boundary is the five `owners-browser` modules only, preserving wrapper dynamic import topology.
