# 02 Surface Restoration Map

## Wrapper -> browser-safe entrypoint -> restored surface render

| Surface | Wrapper import target | Browser-safe entrypoint | Restored success-path behavior | Restored UI root label |
| --- | --- | --- | --- | --- |
| Homepage Sections | `../../runtime/owners-browser/mountHomepageSections.js` | `mountHomepageSections` | Browser-safe direct render (no proof-of-load placeholder text) | `HB Central Homepage` |
| Homepage Hero | `../../runtime/owners-browser/mountHomepageHero.js` | `mountHomepageHero` | Browser-safe direct render (no proof-of-load placeholder text) | `HB Central Homepage Hero` |
| Featured Projects | `../../runtime/owners-browser/mountHomepageFeaturedProjects.js` | `mountHomepageFeaturedProjects` | Browser-safe direct render (no proof-of-load placeholder text) | `HB Central Featured Projects` |
| Company Pulse | `../../runtime/owners-browser/mountHomepageCompanyPulse.js` | `mountHomepageCompanyPulse` | Browser-safe direct render (no proof-of-load placeholder text) | `HB Central Company Pulse` |
| Quick Actions | `../../runtime/owners-browser/mountHomepageQuickActions.js` | `mountHomepageQuickActions` | Browser-safe direct render (no proof-of-load placeholder text) | `HB Central Quick Actions` |

## Gap closed in Prompt-02

- Placeholder proof-of-load success-path text has been removed from browser-safe owner entrypoints.
- Surface-specific owner rendering is now restored without changing wrapper topology.
