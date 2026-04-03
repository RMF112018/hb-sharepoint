# Implement News, Recognition, and Spotlight Mosaic

## Objective

Build the lower editorial mosaic that blends organizational news, recognition items, and optional spotlight content into a cohesive, fresh-looking homepage section.

## Repo-truth context

Inspect the smallest authoritative set first.

Start with:
- outputs from Prompts 01–08
- news/recognition mosaic paths
- shared contracts and any relevant source adapters

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Ground your decisions in the live repo as it exists at the time you begin this prompt. Preserve healthy patterns that already exist. Because this repo started essentially empty for this scope, prefer the smallest durable foundation that cleanly supports the homepage roadmap.

## Architectural guardrails

- Prefer native SharePoint News / Pages where they fit.
- Custom code should elevate presentation and blending, not re-create unsupported publishing infrastructure.
- Maintain strong information hierarchy so the mosaic is easy to scan.
- Avoid cards of wildly inconsistent density without an organizing logic.

## Implementation instructions

- Implement the mosaic surface and its card variants.
- Support ingestion of SharePoint News / page-derived items plus editorial recognition/spotlight items where needed.
- Establish ranking/featured logic so the section has visual hierarchy.
- Ensure the mosaic degrades gracefully when one content stream is empty.
- Use shared card primitives and tokenized emphasis states.

## Verification

Start with the smallest meaningful validation set first.

- validate mixed-content rendering states
- validate link semantics and heading structure
- validate responsive reflow from mosaic to stacked layouts

Verify that any new shared or local visual components use the governed brand token system instead of ad hoc hardcoded color values unless explicitly justified.

## Documentation updates

- Document how this surface maps native SharePoint content vs editorial items.
- Add authoring notes on featured ordering and content freshness.

## Deliverables / exit criteria

- The mosaic is implemented.
- It can combine multiple content streams coherently.
- It feels fresh and editorial rather than mechanically repetitive.
