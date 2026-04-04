# Prompt-02 — Restore Real Owner Mounts

## Objective

Replace the shipped placeholder proof-of-load owner behavior with the actual intended homepage surface mounts while preserving the browser-safe owner path and successful runtime chunk execution.

## Scope

Implement only the smallest correct changes required to:
- restore the real surface UI/component tree behind each focused owner,
- preserve the browser-safe lazy-load behavior,
- and remove placeholder proof-of-load rendering from shipped output.

## Use Prompt-01 Output First

Before changing code, use the Prompt-01 defect map as the source of truth for:
- which owner files are placeholders,
- which real mount/component targets they should call,
- and which wrappers/adapters depend on them.

Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.

## Implementation Requirements

1. For each homepage surface owner, replace the placeholder mount behavior with the real intended mount path.
2. Preserve the browser-safe entrypoint/export shape required by the current lazy-loaded chunk strategy.
3. Preserve focused ownership by surface.
4. Preserve localized error handling/fallbacks, but ensure the success path mounts the real UI.
5. Ensure placeholder proof-of-load text is removed from the shipped success path.
6. If a temporary adapter layer is required, keep it thin and explicit.
7. Avoid introducing CommonJS-only chunk behavior that would regress the prior runtime failure.

## Constraints / Guardrails

- Do not reintroduce `exports is not defined` or any equivalent browser/runtime incompatibility.
- Do not revert to a monolithic runtime owner.
- Do not change the package from one `.sppkg` to many.
- Do not substitute mock UI for the real intended surface UI.
- Do not perform opportunistic cleanup unrelated to restoring the real owner mounts.

## Acceptance Criteria

Code-level acceptance requires:
- each focused owner still loads through the browser-safe path,
- each focused owner mounts the intended real UI,
- no placeholder proof-of-load text remains in the normal success path,
- and local/package validation shows no regression to the prior runtime chunk failure class.

## Required Outputs

Generate:
1. the implementation changes,
2. a concise change summary,
3. a file-by-file explanation of what was restored,
4. and updated documentation for the restored owner path if the current docs describe placeholder owners.
