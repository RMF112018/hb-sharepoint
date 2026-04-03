# Implement Featured Projects Showcase Web Part

## Objective

Build the featured projects surface as a premium, image-forward, scannable showcase that can highlight selected projects and route users into project destinations.

## Repo-truth context

Inspect the smallest authoritative set first.

Start with:
- outputs from Prompts 01–05
- featured projects web part path
- shared contracts/primitives
- any available project source assumptions or placeholder contracts

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Ground your decisions in the live repo as it exists at the time you begin this prompt. Preserve healthy patterns that already exist. Because this repo started essentially empty for this scope, prefer the smallest durable foundation that cleanly supports the homepage roadmap.

## Architectural guardrails

- Keep the experience scannable; do not overload each project card.
- The surface should support image-rich storytelling while preserving hierarchy and readability.
- Avoid equal-weight clutter; featured ranking should be obvious.
- Keep the source model abstract enough that a future project list integration can replace seed content cleanly.

## Implementation instructions

- Implement the featured projects web part using governed card primitives.
- Support featured image, project name, sublabel/market/location as needed, a short supporting line, and a primary destination.
- Provide layout variants only if they are genuinely needed.
- Add fallbacks for missing imagery.
- Design the data contract so the surface can start from editorial items and later bind to a more operational project source with minimal breakage.

## Verification

Start with the smallest meaningful validation set first.

- validate card rendering with varied image aspect ratios and content lengths
- validate keyboard interaction and link semantics
- validate responsive behavior for grid vs stacked states

Verify that any new shared or local visual components use the governed brand token system instead of ad hoc hardcoded color values unless explicitly justified.

## Documentation updates

- Add a short source-model note describing the current expected project input shape.
- Document image and text constraints for editors.

## Deliverables / exit criteria

- The featured projects web part is implemented.
- It is visually cohesive with the hero.
- The data contract is durable enough for future source upgrades.
