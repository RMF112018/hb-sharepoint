# Implement Company Pulse and People Moments Surfaces

## Objective

Build the company pulse band and the people/culture moments surface as two distinct but visually coordinated homepage sections that balance operational relevance with engagement.

## Repo-truth context

Inspect the smallest authoritative set first.

Start with:
- outputs from Prompts 01–06
- company pulse and people moments component paths
- shared tokens/primitives/contracts

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Ground your decisions in the live repo as it exists at the time you begin this prompt. Preserve healthy patterns that already exist. Because this repo started essentially empty for this scope, prefer the smallest durable foundation that cleanly supports the homepage roadmap.

## Architectural guardrails

- Company Pulse should be compact, scannable, and low-friction.
- People Moments should feel warm and human without becoming visually noisy.
- These surfaces should share design DNA but not become visually repetitive.
- Do not fake dashboard complexity where a concise band or ribbon is better.

## Implementation instructions

- Implement a compact pulse band for small metrics/callouts/status blocks.
- Implement a people moments surface for birthdays, anniversaries, promotions, recognition snippets, or similar culture content.
- Apply restrained orange usage for celebration/emphasis states only where beneficial.
- Ensure both surfaces have graceful empty states and can handle uneven content counts.
- Reuse shared components rather than inventing separate styling systems.

## Verification

Start with the smallest meaningful validation set first.

- validate scannability and heading hierarchy
- validate list/ribbon behavior with few items, many items, and zero items
- validate color restraint and contrast

Verify that any new shared or local visual components use the governed brand token system instead of ad hoc hardcoded color values unless explicitly justified.

## Documentation updates

- Document intended content types and count limits.
- Add concise notes for how authors/editors should keep these surfaces fresh without overloading them.

## Deliverables / exit criteria

- Company Pulse and People Moments surfaces are implemented.
- Both can render realistic content states cleanly.
- The design remains premium and disciplined, not crowded.
