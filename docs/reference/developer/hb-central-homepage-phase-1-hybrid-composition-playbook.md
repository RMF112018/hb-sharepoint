# HB Central Homepage Phase-1 Hybrid Composition Playbook

## Purpose

Provide a concise SharePoint page assembly guide for the approved Phase-1 hybrid model so custom and native web parts are composed intentionally.

## Phase-1 section ownership map

| Homepage zone | Ownership | Implementation surface |
| --- | --- | --- |
| Shell / Hero | Custom | HB Central Homepage Hero web part |
| Featured Projects | Custom | HB Central Featured Projects web part |
| Company Pulse | Custom | HB Central Company Pulse web part |
| Quick Actions | Custom | HB Central Quick Actions web part |
| People moments | Custom | HB Central Homepage Sections web part |
| News / recognition mosaic | Custom (current app-local surface) | HB Central Homepage Sections web part |
| Personalized lower zone | Custom optional seam | HB Central Homepage Sections web part (optional) |
| Footer / global utility | Custom page-local seam | HB Central Homepage Sections web part |
| News (author-managed editorial feed) | Native SharePoint | News web part |
| Quick Links (low-complexity links) | Native SharePoint | Quick Links web part |
| Events / additional editorial modules | Native SharePoint | Events and other native web parts |

## Recommended page assembly order

1. HB Central Homepage Hero
2. HB Central Featured Projects
3. HB Central Company Pulse
4. HB Central Quick Actions
5. HB Central Homepage Sections
6. Native SharePoint News
7. Native SharePoint Quick Links (when needed)
8. Native SharePoint Events / additional modules (when needed)

## Authoring constraints

- Keep custom HB Central web parts in the order above unless a documented content strategy exception is approved.
- Use native Quick Links only for low-complexity curated lists; preserve the custom Quick Actions part for grouped operational action sets.
- Avoid duplicating the same content intent in both custom and native sections on the same page region.
- Treat the non-hero HB Central sections web part as the owner for people/newsRecognition/personalized/footer seams only.

## Assembly checklist

- Confirm all five HB Central custom web parts are available in toolbox:
  - Homepage Hero
  - Featured Projects
  - Company Pulse
  - Quick Actions
  - Homepage Sections
- Confirm homepage sections host does not render actions/projects/pulse/hero content.
- Add native News/Quick Links/Events only where the native behavior is desired.
- Validate visual consistency against shared token/UI baselines.
