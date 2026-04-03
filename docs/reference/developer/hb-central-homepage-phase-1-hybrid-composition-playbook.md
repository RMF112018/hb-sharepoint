# HB Central Homepage Hybrid Composition Playbook (Phase-2 Finalized)

## Purpose

Provide a concise SharePoint page assembly guide for the approved Phase-2 final hybrid model so custom and native web parts are composed intentionally.

## Final section ownership map

| Homepage zone | Ownership | Implementation surface |
| --- | --- | --- |
| Shell / Hero | Custom | HB Central Homepage Hero web part |
| Featured Projects | Custom | HB Central Featured Projects web part |
| Company Pulse | Custom | HB Central Company Pulse web part |
| Quick Actions | Custom | HB Central Quick Actions web part |
| People moments | Custom | HB Central Homepage Sections web part |
| News / recognition mosaic | Custom (current app-local surface) | HB Central Homepage Sections web part |
| Personalized lower zone | Deferred/optional custom seam | HB Central Homepage Sections web part (optional) |
| Footer / global utility | Custom page-local seam | HB Central Homepage Sections web part |
| News (author-managed editorial feed) | Native SharePoint | News web part |
| Quick Links (low-complexity links) | Native SharePoint | Quick Links web part |
| Events / additional editorial modules | Native SharePoint | Events and other native web parts |

## Final page assembly order

1. Full-width hero region: HB Central Homepage Hero
2. Standard-width fixed stack: HB Central Featured Projects
3. Standard-width fixed stack: HB Central Company Pulse
4. Standard-width fixed stack: HB Central Quick Actions
5. Standard-width fixed stack: HB Central Homepage Sections
6. Native editorial region: Native SharePoint News
7. Native editorial region: Native SharePoint Quick Links (when needed)
8. Native editorial region: Native SharePoint Events / additional modules (when needed)

## Authoring boundaries and constraints

- Site owners:
  - Own final page assembly integrity and fixed-zone compliance.
  - Approve documented exceptions for fixed-zone ordering only when content strategy requires it.
- Content editors:
  - Can update section content and native web part configuration.
  - Can reorder native editorial modules below the fixed custom stack.
  - Must not change custom-vs-native ownership intent without owner/admin approval.
- Admins:
  - Own deployment, permissions, and operational safeguards.
  - Keep packaging/toolbox validation requirements intact.

- Keep custom HB Central web parts in the order above unless a documented content strategy exception is approved.
- Use native Quick Links only for low-complexity curated lists; preserve the custom Quick Actions part for grouped operational action sets.
- Avoid duplicating the same content intent in both custom and native sections on the same page region.
- Treat the non-hero HB Central sections web part as the owner for people/newsRecognition/personalized/footer seams only.
- Keep full-width usage reserved for hero by default; other sections should remain in standard-width regions unless explicitly approved.

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
- Confirm fixed custom stack order remains intact above native editorial modules.
