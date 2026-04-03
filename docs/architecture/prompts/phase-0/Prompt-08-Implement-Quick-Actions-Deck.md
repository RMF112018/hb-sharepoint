# Implement Quick Actions Deck

## Objective

Build a premium quick actions / launch deck surface that provides fast access to important tools, destinations, and workflows while remaining easy to scan and easy to maintain.

## Repo-truth context

Inspect the smallest authoritative set first.

Start with:
- outputs from Prompts 01–07
- quick actions deck component path
- shared primitives/contracts

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Ground your decisions in the live repo as it exists at the time you begin this prompt. Preserve healthy patterns that already exist. Because this repo started essentially empty for this scope, prefer the smallest durable foundation that cleanly supports the homepage roadmap.

## Architectural guardrails

- The deck must emphasize speed and clarity.
- Avoid a generic icon soup.
- Grouping, ordering, and prominence should be intentional.
- This surface should be useful even if audience targeting is added later.

## Implementation instructions

- Implement the quick actions deck with governed action cards / buttons.
- Support optional grouping, priority treatment, iconography, descriptions, and destination metadata as needed.
- Enforce content constraints so labels remain short and scannable.
- Handle external links, internal SharePoint links, and future role-aware filtering cleanly.
- Use motion sparingly and only to support affordance.

## Verification

Start with the smallest meaningful validation set first.

- validate keyboard navigation and focus visibility
- validate grouped and ungrouped states
- validate label truncation/fallback and responsive wrapping

Verify that any new shared or local visual components use the governed brand token system instead of ad hoc hardcoded color values unless explicitly justified.

## Documentation updates

- Document the supported action schema and authoring limits.
- Add brief guidance on when an action belongs in this deck versus normal site navigation.

## Deliverables / exit criteria

- A premium quick actions deck exists.
- It supports maintainable authoring.
- It is faster and clearer than a random collection of links.
