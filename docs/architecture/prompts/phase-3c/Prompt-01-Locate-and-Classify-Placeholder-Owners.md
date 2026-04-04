# Prompt-01 — Locate and Classify Placeholder Owners

## Objective

Determine exactly where the homepage surfaces were redirected to placeholder proof-of-load owner implementations, and produce a minimal root-cause map for that change.

## Scope

Audit only the files necessary to identify:
- which focused owner modules currently emit placeholder text,
- which wrapper/web part files import those owners,
- which real component or mount paths existed before the placeholder substitution,
- and whether the substitution occurred in source, adapter, export wiring, or packaging-only transformation.

Do **not** perform broad refactoring in this prompt.

## Files to Inspect First

Inspect the smallest authoritative set first. Do **not** reread files still in your current context or memory unless they changed or the task scope expanded.

Start with:
- `apps/hb-central-homepage/src/webparts/**`
- `lib-commonjs/src/runtime/owners/**`
- any browser-safe owner adapters introduced by the prior remediation
- any shared mount helpers referenced by the homepage web parts
- current validator files related to homepage wiring
- the most recent homepage remediation docs generated during the prior runtime-bundle fix

Also inspect the packaged output only if needed to confirm the source-to-artifact path.

## Required Tasks

1. Identify every focused homepage owner currently shipping placeholder text.
2. Map each owner back to its consuming web part wrapper.
3. Determine whether each owner currently:
   - directly renders placeholder text,
   - delegates to a placeholder helper,
   - or conditionally falls back to placeholder text because the real mount path is disconnected.
4. Find the intended real mount target for each surface.
5. Produce a concise defect map showing:
   - surface name,
   - current owner file,
   - current mount behavior,
   - intended real mount/component path,
   - exact gap preventing real rendering.
6. Explicitly state whether the browser-safe fix can remain intact while restoring the real mount.

## Constraints / Guardrails

- Do not redesign the homepage.
- Do not revert to the retired shared runtime bridge.
- Do not broaden scope into unrelated UI cleanup.
- Do not change bundling strategy unless you prove it is required.
- Do not stop at “placeholder exists”; identify the exact intended target path that should replace it.

## Acceptance Criteria

This prompt is complete only when you provide:
- a confirmed list of all placeholder owner implementations,
- a confirmed mapping from each placeholder owner to the intended real mount path,
- the smallest viable remediation boundary,
- and a recommendation for the exact files that Prompt-02 must change.

## Required Outputs

Generate:
1. a short markdown forensic summary,
2. a surface-by-surface defect map,
3. and a precise implementation handoff for Prompt-02.
