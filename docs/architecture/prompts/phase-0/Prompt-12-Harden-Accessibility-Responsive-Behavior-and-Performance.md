# Harden Accessibility, Responsive Behavior, and Performance

## Objective

Run a focused hardening pass across the homepage implementation to meet accessibility, responsiveness, and performance expectations before final packaging.

## Repo-truth context

Inspect the smallest authoritative set first.

Start with:
- outputs from Prompts 01–11
- all homepage surfaces
- shared tokens/primitives
- build and test scripts

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Ground your decisions in the live repo as it exists at the time you begin this prompt. Preserve healthy patterns that already exist. Because this repo started essentially empty for this scope, prefer the smallest durable foundation that cleanly supports the homepage roadmap.

## Architectural guardrails

- Accessibility, responsive behavior, and performance are release gates, not cleanup chores.
- Do not use unsupported DOM inspection patterns when supported SPFx/page APIs exist.
- Keep motion optional and restrained.
- Prefer bundle discipline and dynamic loading where it materially reduces cost.

## Implementation instructions

- Audit keyboard order, semantics, focus visibility, link purpose, headings, contrast, and reduced-motion handling.
- Audit rendering across narrow, medium, wide, and extra-wide layouts.
- Use supported width/responsive approaches rather than brittle DOM assumptions.
- Identify heavy code paths or packages and apply dynamic loading or other optimizations where beneficial.
- Tighten skeleton/loading/empty/error state quality.

## Verification

Start with the smallest meaningful validation set first.

- run the smallest credible accessibility and build validation per package first
- run solution-level build/package validation
- verify reduced-motion behavior
- verify contrast-sensitive pairings
- verify responsive behavior under realistic page widths
- verify performance-minded changes did not break authoring or rendering

Verify that any new shared or local visual components use the governed brand token system instead of ad hoc hardcoded color values unless explicitly justified.

## Documentation updates

- Add or update verification docs with concrete acceptance checks.
- Document any known constraints that remain and why.

## Deliverables / exit criteria

- Accessibility, responsiveness, and performance hardening is complete.
- The homepage is materially safer to release.
- Any remaining gaps are explicit and limited.
