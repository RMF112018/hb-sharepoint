# Create Brand Token and Shared UI Foundations

## Objective

Implement the governed shared visual foundation for the homepage through `@hbc/ui-kit`: shared design tokens, semantic color rules, foundational layout primitives, typography helpers, card shells, CTA treatments, and loading/empty-state primitives. In the current repository state, this prompt should now be read as the execution record for that shared package baseline rather than as a still-unperformed planning step.

## Repo-truth context

Inspect the smallest authoritative set first.

Start with:
- Prompt 01 and 02 outputs
- `@hbc/ui-kit`
- `docs/reference/developer/shared-package-no-go-rules.md`
- `docs/reference/developer/spfx-baseline.md`
- the app scaffold path and package configuration created by Prompt-02 to confirm how shared packages are consumed

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Ground your decisions in the live repo as it exists at the time you begin this prompt. Preserve healthy patterns that already exist. This repository already records `@hbc/ui-kit` as the owner of reusable visual UI and shared tokens, so this prompt should preserve the executed shared layer as the canonical baseline rather than reopen package-boundary decisions.

## Architectural guardrails

- Hedrick Brothers primary blue `#225391` is the dominant anchor.
- Hedrick Brothers secondary orange `#E57E46` is a restrained accent.
- Do not hardcode one-off colors throughout components.
- Build semantic tokens, not raw-hex-driven component styling.
- Shared primitives must be generic enough to support multiple homepage surfaces without carrying business logic.
- Treat `@hbc/ui-kit` as the owner of both shared tokens and reusable visual primitives.
- Do not create a separate canonical `packages/brand-tokens/` target unless a later architecture decision explicitly introduces it.

## Implementation instructions

- Add the shared token model inside `@hbc/ui-kit`, covering brand, neutral, interactive, tinted-surface, border, emphasis, elevation, spacing, radius, typography, and motion states.
- Add baseline reusable primitives inside `@hbc/ui-kit` for sections, editorial cards, media frames, badges, CTA treatments, skeleton/loading states, and empty-state composition.
- Ensure the shared layer is ready for later consumption by `apps/hb-central-homepage/` without introducing app-local design-system primitives.
- Create a restrained motion system that can be disabled cleanly.
- Add concise docs or guidance comments so future components know when to use shared tokens/primitives versus thin app-local composition shells.

## Verification

Start with the smallest meaningful validation set first.

- package-local type/build validation for `@hbc/ui-kit`
- verify no uncontrolled hardcoded colors remain in shared tokens/primitives
- verify contrast intent for major text/background pairings
- verify reduced-motion accommodation is built into the primitives where relevant

Verify that any new shared or local visual components use the governed brand token system instead of ad hoc hardcoded color values unless explicitly justified.

## Documentation updates

- Document the token strategy and the allowed usage model for blue/orange/neutral surfaces inside the shared visual foundation record.
- Add a short usage guide for shared UI primitives owned by `@hbc/ui-kit`.
- Do not dump exhaustive design theory into docs.

## Deliverables / exit criteria

- Shared design tokens exist in `@hbc/ui-kit`.
- Shared UI primitives exist in `@hbc/ui-kit`.
- The homepage can now be built on a governed visual system rather than one-off styling.
- The token model is explicit enough that later prompts can enforce consistency.
