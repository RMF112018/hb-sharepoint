# Implement Cinematic Hero Storyboard Web Part

## Objective

Build the premium hero/storyboard web part for the top of the homepage, with strong visual hierarchy, restrained motion, image treatment, CTA handling, and authoring-safe content constraints.

## Repo-truth context

Inspect the smallest authoritative set first.

Start with:
- outputs from Prompts 01–04
- hero web part path in the SPFx solution
- shared tokens/primitives
- any initial content contracts relevant to hero items

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Ground your decisions in the live repo as it exists at the time you begin this prompt. Preserve healthy patterns that already exist. Because this repo started essentially empty for this scope, prefer the smallest durable foundation that cleanly supports the homepage roadmap.

## Architectural guardrails

- The hero must feel premium, editorial, and polished without becoming visually loud.
- Motion must be optional and restrained.
- Image handling must be resilient for desktop and mobile widths.
- Editorial content length must be guarded so authors cannot easily break the design.
- Do not bury critical CTAs below excessive text.

## Implementation instructions

- Implement the hero web part with support for featured image/media, headline, supporting copy, CTA(s), and optional multi-slide/storyboard treatment if justified.
- Create clear authoring rules for headline length, copy length, CTA count, and image expectations.
- Use shared primitives and tokens rather than hero-specific ad hoc styling.
- Add robust empty/fallback rendering when hero content is absent or incomplete.
- Keep implementation compatible with supported SharePoint media/content sourcing patterns.

## Verification

Start with the smallest meaningful validation set first.

- package-local build/type validation
- visual validation at wide, medium, and narrow widths
- validate focus order, CTA accessibility, and no broken layout with short/long content boundaries
- validate reduced-motion behavior

Verify that any new shared or local visual components use the governed brand token system instead of ad hoc hardcoded color values unless explicitly justified.

## Documentation updates

- Document hero authoring expectations and supported content shape.
- Update any architecture notes if the hero requires a specific source contract.

## Deliverables / exit criteria

- A production-intent hero web part exists.
- It uses the shared token/primitives layer.
- Authoring constraints and fallbacks are clear.
- The shell can host the hero cleanly.
