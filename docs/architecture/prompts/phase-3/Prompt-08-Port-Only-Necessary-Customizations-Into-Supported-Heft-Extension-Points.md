# Prompt 08 — Port Only Necessary Customizations Into Supported Heft Extension Points

## Objective
Ensure any nonstandard build/package behavior is carried forward through supported Heft/SPFx mechanisms only where necessary.

## Scope
Customization review and targeted Heft extension implementation.

## Repo-truth files to inspect first
- Prompt 02 delta map
- Prompt 07 outputs
- any remaining custom scripts/configs tied to homepage packaging

## Instructions
1. Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.
2. Inventory any behaviors from the old homepage package path that are not covered by the canonical Heft rig out of the box.
3. For each behavior, choose one of:
   - remove it because it is obsolete;
   - preserve it through standard Heft config;
   - preserve it through a documented Heft plugin/hook;
   - last resort: use ejection, with written justification.
4. Keep the final customization surface as small as possible.

## Constraints / guardrails
- Do not cargo-cult old customizations forward.
- Do not eject webpack unless you have documented why standard approaches are insufficient.

## Acceptance criteria
- Every nonstandard build behavior is either removed, supported, or explicitly justified.
- The final package path remains maintainable and supportable.

## Required outputs
- Customization inventory + disposition doc
- Any required Heft plugin/config implementation
