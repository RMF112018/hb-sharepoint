# Implement Personalized Lower Zone and Global Utility Decision

## Objective

Make and implement the correct decision for the optional personalized lower zone and the optional global utility/footer layer. Build only what is justified by source availability and supportability.

## Repo-truth context

Inspect the smallest authoritative set first.

Start with:
- outputs from Prompts 01–09
- homepage shell
- any current source adapters / contracts
- extension path if one was created as a placeholder

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Ground your decisions in the live repo as it exists at the time you begin this prompt. Preserve healthy patterns that already exist. Because this repo started essentially empty for this scope, prefer the smallest durable foundation that cleanly supports the homepage roadmap.

## Architectural guardrails

- Do not force personalization if the source data quality is weak.
- Do not create an Application Customizer unless a persistent cross-page experience is genuinely needed.
- Keep supportability above novelty.
- A page-local footer/utility treatment is preferred unless cross-page persistence materially improves the product.

## Implementation instructions

- Evaluate whether a meaningful personalized lower zone can be delivered now.
- If yes, implement the narrowest high-value version.
- If no, implement a governed placeholder seam and document what future source integration would be required.
- Separately evaluate whether the utility/footer layer should remain page-local or become an Application Customizer.
- Implement the justified choice, not both by default.

## Verification

Start with the smallest meaningful validation set first.

- validate the decision against actual source availability and UX value
- if implemented, validate keyboard/focus behavior and responsive rendering
- if deferred, validate the placeholder/fallback is intentional and not broken

Verify that any new shared or local visual components use the governed brand token system instead of ad hoc hardcoded color values unless explicitly justified.

## Documentation updates

- Record the decision and rationale in architecture docs.
- Document what future conditions would justify moving to an Application Customizer or richer personalization.

## Deliverables / exit criteria

- The repo contains the correct scoped implementation decision.
- Optional features are either implemented well or intentionally deferred with clean seams.
- No unjustified page-level extension was introduced.
