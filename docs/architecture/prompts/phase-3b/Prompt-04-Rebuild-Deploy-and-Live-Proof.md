# Prompt-04 — Rebuild, Deploy, and Live Proof

## Objective

Produce a clean repaired homepage artifact, deploy it through the correct tenant-wide SharePoint path, and capture live proof that all five homepage surfaces render successfully without runtime-bundle failure.

## Scope

In scope:
- clean-state build and packaging
- validator-backed artifact generation
- artifact provenance capture
- SharePoint redeployment of the repaired artifact
- live proof collection for toolbox visibility and surface rendering

Out of scope:
- new remediation development beyond small release blockers discovered during proof
- broad tenant rollout planning
- unrelated SharePoint governance work

## Files to inspect first

1. Prompt-02 and Prompt-03 outputs
2. root `package.json`
3. homepage app package/build config
4. updated validator files
5. current deployment/readiness docs relevant to homepage release

Do **not** reread files still in current context or memory unless the file changed or the task scope expanded.

## Required work

1. Run the homepage package path from a clean state.
2. Retain the exact command output, including validator output.
3. Record the rebuilt artifact-of-record and its provenance details.
4. Deploy the rebuilt homepage solution through the correct tenant-wide deployment path.
5. Confirm the five homepage surfaces appear in the SharePoint web part picker.
6. Add each surface to an appropriate page/site context and prove the following:
   - it renders without the runtime-bundle fallback
   - no browser console error equivalent to `exports is not defined` occurs
   - no new module-format/runtime failure replaces the old one
7. If applicable, validate hero/full-width behavior on a communication site.
8. Capture screenshots, console evidence, and a final release recommendation.

## Constraints / guardrails

- Do not treat App Catalog upload success alone as proof of release readiness.
- Do not use a stale `.sppkg`; prove the deployed artifact is the rebuilt artifact-of-record.
- Do not close the remediation without live page proof.
- If a new runtime error appears, stop and classify it precisely rather than forcing a Go decision.

## Acceptance criteria

This prompt is complete only when all of the following are true:
- the repaired artifact builds successfully from a clean state
- all validators pass, including the new runtime-format guard
- the deployed artifact is provenance-linked to the repaired build
- all five homepage surfaces render successfully in SharePoint
- no runtime-bundle fallback appears for the five surfaces
- no console evidence remains of the original browser/module-format defect
- release status is explicitly classified as `Hard Go`, `Conditional Go`, or `No-Go`

## Required outputs

Create or update:
- `04-build-and-validator-evidence.md`
- `04-live-sharepoint-proof.md`
- `04-final-release-decision.md`

The final release decision file must include:
- deployment scope
- artifact-of-record identifier
- proof summary by homepage surface
- remaining warnings, if any
- explicit release classification
