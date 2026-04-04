# 04 Live SharePoint Proof

## Purpose

Define required tenant deployment and live rendering proof for all five homepage surfaces and document current Prompt-04 external-evidence status.

## Tenant deployment procedure (operator-run)

1. Upload the artifact-of-record (`dist/sppkg/hb-central-homepage.sppkg`) to the tenant App Catalog.
2. Confirm tenant-wide deployment approval is enabled for the uploaded package.
3. Ensure the deployed package identity/version maps to the artifact-of-record hash from `04-build-and-validator-evidence.md`.
4. Refresh target communication/team site contexts after package propagation.

## Required proof checklist (per surface)

For each surface below, collect:

- toolbox visibility in web part picker,
- successful add-to-page behavior,
- render success without `failed to load runtime bundle`,
- browser console evidence showing no `exports is not defined`, `require is not defined`, or equivalent module/runtime failure.

Surfaces:

- HB Central Homepage Sections
- HB Central Homepage Hero
- HB Central Homepage Featured Projects
- HB Central Homepage Company Pulse
- HB Central Homepage Quick Actions

Additional check when applicable:

- Hero/full-width behavior validated on a communication site.

## Pending external evidence artifacts

The following evidence is required from tenant execution and is pending external operator collection:

- screenshot set showing web part picker visibility for all five surfaces,
- screenshot set showing successful render state for all five surfaces,
- browser console capture per surface/session with no module-format/runtime failures,
- communication-site hero/full-width screenshot evidence (if applicable to target rollout).

## Current Prompt-04 live-proof status

- Local clean rebuild and validator-backed artifact provenance: complete.
- Tenant deployment + live page proof execution in this environment: not directly executable.
- Status for live-proof requirement: pending external operator evidence.
