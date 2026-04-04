# 04 Live SharePoint Proof

## Purpose

Define required tenant deployment and live rendering proof for all five homepage surfaces and document current Prompt-04 external-evidence status.

## Tenant deployment procedure (operator-run)

1. Upload `dist/sppkg/hb-central-homepage.sppkg` to the tenant App Catalog.
2. Confirm tenant-wide deployment approval is enabled.
3. Confirm deployed package version maps to this artifact-of-record hash and stat snapshot.
4. Refresh target sites after package propagation.

## Required proof checklist (per surface)

Collect the following for each surface:

- toolbox visibility in the web part picker,
- successful add-to-page behavior,
- render success without runtime-bundle fallback messaging,
- browser console evidence showing no module/runtime failures (`exports is not defined`, `require is not defined`, or equivalent).

Surfaces:

- HB Central Homepage Sections
- HB Central Homepage Hero
- HB Central Homepage Featured Projects
- HB Central Homepage Company Pulse
- HB Central Homepage Quick Actions

Additional check when applicable:

- Hero/full-width behavior on communication site pages.

## Pending external evidence artifacts

The following evidence is required from tenant execution and remains pending:

- screenshot set for toolbox visibility across all five surfaces,
- screenshot set for successful render state across all five surfaces,
- console/network captures per surface with no runtime/module failures,
- communication-site hero/full-width capture (if rollout includes communication pages).

## Current Prompt-04 live-proof status

- Local clean rebuild and validator-backed artifact provenance: complete.
- Tenant deployment and live page proof in this environment: not directly executable.
- Status for live-proof requirement: pending external operator evidence.
