# Prompt-04 — Rebuild, Deploy, and Functional Live Proof

## Objective

Rebuild the homepage package, redeploy it through the documented path, and capture live proof that the homepage surfaces now render the intended real UI instead of placeholder owner text.

## Scope

This prompt is limited to rebuild, validation, deployment, and proof capture for the restored owner implementation.

## Preconditions

Prompt-02 and Prompt-03 must be complete first.

Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.

## Required Tasks

1. Run the documented homepage build/package path from a clean state.
2. Run the full homepage validator path, including the new placeholder-regression checks.
3. Produce the artifact-of-record `.sppkg`.
4. Redeploy the package through the correct SharePoint App Catalog flow.
5. On a live page, add each focused homepage surface and verify:
   - no placeholder proof-of-load text appears,
   - no runtime-bundle failure appears,
   - the real intended UI renders,
   - and the surfaces remain independently addable from the toolbox.
6. Capture console and network evidence sufficient to show that the prior and current defect classes are closed.
7. Update the deployment/readiness note with the final proof set.

## Constraints / Guardrails

- Do not accept successful toolbox availability as sufficient proof.
- Do not accept successful chunk load as sufficient proof.
- Do not close the work unless the actual intended UI is visible for each restored surface.
- If any surface still renders placeholder text, classify the package as not ready and map the remaining gap explicitly.

## Acceptance Criteria

This prompt is complete only when all of the following are true:
- the rebuilt package validates cleanly,
- the rebuilt package deploys successfully,
- each homepage surface renders real UI in SharePoint,
- no placeholder proof-of-load text appears in normal operation,
- and no regression to the earlier runtime bundle failure is observed.

## Required Outputs

Generate:
1. a rebuild/deploy execution summary,
2. validator output,
3. artifact provenance details,
4. live SharePoint render evidence for each surface,
5. and an updated final readiness note stating whether the restored package is now Go / Conditional Go / No-Go.
