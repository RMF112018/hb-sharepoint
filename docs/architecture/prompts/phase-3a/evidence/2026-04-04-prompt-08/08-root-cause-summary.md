# Prompt-08 Root Cause Summary

## Confirmed findings

- Source manifests, generated manifests, pre-package ownership records, and final packaged ownership records remain split across all five homepage surfaces in current repo truth.
- The final Prompt-08 rebuild (`pnpm build:sppkg:homepage`) produced a single `dist/sppkg/hb-central-homepage.sppkg` that passes all ownership and safety validations.
- Final packaged validation confirms one `.sppkg`, expected five web part registrations, and five unique packaged ownership values for `entryModuleId`, primary script-resource key, and primary script-resource path.

## Where ownership was correct and where it first collapsed

- Ownership remained correct at every inspected in-repo boundary (source -> generated -> pre-package -> packaged).
- No in-pipeline collapse boundary exists in the current build/package flow.

## Why the mismatch occurred

- The previously observed collapsed state is best explained by artifact provenance/selection mismatch outside the current inspected and validated pipeline, not by current repo packaging logic.

## Exact effective fix class

- Prompt-06 established provenance-control remediation closure for the no in-pipeline defect outcome.
- Prompt-07 established/confirmed fail-fast recurrence guards via packaging validation and command wiring (`validate:homepage:package` in normal build/package flow).
- Prompt-08 final rebuild and validator evidence confirm the corrected operational posture.

## Strong inferences

- If an externally supplied stale/collapsed artifact is substituted, current validator checks would fail on ownership uniqueness conditions.

## Open questions

- None block Phase-3a closure for current repo-truth build outputs.
