# Prompt 10 — Build, Package, and Prove the Final Artifact

## Objective
Produce the final homepage package and prove from generated artifacts that Phase 3 succeeded technically.

## Scope
Build/package execution + artifact inspection.

## Repo-truth files to inspect first
- Prompt 07–09 outputs
- final Heft-native build/package scripts
- validation outputs

## Instructions
1. Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.
2. Run the final Heft-native build/package workflow.
3. Inspect generated debug/package structures.
4. Inspect the final `.sppkg` internals programmatically.
5. Produce a concise artifact audit showing:
   - registered surfaces
   - entry-module mapping
   - primary asset mapping
   - confirmation that the old shared runtime bridge is gone from the deployable path
   - confirmation that validation passes.

## Constraints / guardrails
- Do not treat “build succeeded” as sufficient.
- The artifact audit must prove deployable semantics, not just compile success.

## Acceptance criteria
- Final package builds successfully.
- Validation passes.
- Artifact audit proves real surface ownership separation.

## Required outputs
- Final artifact audit markdown file
- Build/package logs or summarized evidence
