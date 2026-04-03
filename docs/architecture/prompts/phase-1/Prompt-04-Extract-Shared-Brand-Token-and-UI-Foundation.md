# Prompt 04 — Extract Shared Brand Token and UI Foundation

## Objective

Extract the reusable design system foundation required by the hybrid homepage so the custom web parts share one governed visual language instead of duplicating styling or hardcoding brand values.

---

## Repo-truth context

Inspect the smallest authoritative set first.

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Start with the exact files and paths that govern this work, including whichever of the following actually exist and are relevant:

- current homepage styles
- current hero/shell UI files
- current section/card primitives if any
- shared package folders created in prior prompts
- theme/token files if any

You must confirm repo truth before assuming exact paths, package names, build flow, or deployment boundaries.

---

## Architectural guardrails

- Primary blue `#225391` and secondary orange `#E57E46` must be governed through tokens, not copied ad hoc.
- Do not overfit the shared foundation to one section's needs.
- Reusable visual primitives should live in the shared UI layer, not inside the first refactored feature package.
- Maintain accessibility, contrast, and restrained premium styling.
- Keep the design system lean enough for SPFx delivery constraints.

---

## Implementation instructions

1. Audit the current homepage styling and identify:
   - duplicated spacing rules
   - duplicated typography rules
   - duplicated cards/sections/panels
   - hardcoded colors
   - one-off visual treatments that should become reusable

2. Extract a governed shared foundation for:
   - brand color tokens
   - neutral surfaces
   - emphasis states
   - spacing scale
   - typography scale
   - card / rail / section primitives
   - loading / empty / error state primitives

3. Refactor the current homepage implementation to consume the shared foundation rather than local ad hoc styling.

4. Ensure the shared UI layer supports multiple focused homepage web parts rather than only the old monolith.


---

## Verification

Use the smallest meaningful verification set first.

### Required verification
1. Brand colors are tokenized and not duplicated ad hoc
2. Shared UI primitives are imported by at least one feature path
3. Hardcoded styling duplication is materially reduced
4. Shared primitives remain accessible and production-appropriate

### Preferred additional verification
5. Visual comparison before/after for at least one section
6. Package-local tests or snapshots if already idiomatic for the repo


---

## Documentation updates

Document the token strategy, shared UI ownership, and styling rules for future homepage sections. Keep visual rationale concise and implementation-oriented.

---

## Deliverables / exit criteria

1. Shared token layer
2. Shared UI primitives
3. Refactored feature usage of the shared foundation
4. Styling governance notes for later homepage sections

