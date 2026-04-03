# Implement Homepage Shell and Composition Contracts

## Objective

Create the homepage composition layer inside `apps/hb-central-homepage/`: a shell plus static composition manifest that defines section wrappers, ordering contracts, slot types, and responsive layout rules without locking the homepage into brittle page-specific code.

## Repo-truth context

Inspect the smallest authoritative set first.

Start with:
- outputs from Prompts 01–03
- `apps/hb-central-homepage/src/`
- shared UI primitives and brand tokens
- any scaffolded sample web part entrypoints that need replacement

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Ground your decisions in the live repo as it exists at the time you begin this prompt. Preserve healthy patterns that already exist. The runtime path and shared visual ownership are already governed by Prompts 02 and 03, so this prompt should add the composition contract without reopening those decisions.

## Architectural guardrails

- Page composition belongs in the app layer at `apps/hb-central-homepage/`.
- Reusable presentational primitives stay in shared packages.
- Do not hardwire data fetching into the shell.
- The shell should support editorial sequencing and future surface replacement without structural churn.
- Avoid building a fake SPA inside a SharePoint page.
- Use a static, app-owned composition manifest/config for section order and slot layout rather than a dynamic registration framework.

## Implementation instructions

- Create the homepage shell / composition host inside `apps/hb-central-homepage/`.
- Define a static composition manifest/config that explicitly orders hero, projects, pulse, people, actions, news/recognition, optional personalized lower zone, and footer/global utility sections.
- Define the slot/zone contract for full-width, banded, and mosaic layouts.
- Establish shell-level loading, empty, and error-slot behavior without turning the shell into a data-fetching layer.
- Replace scaffold placeholders with the real shell and composition architecture once the Prompt-02 app scaffold exists.

## Verification

Start with the smallest meaningful validation set first.

- `check-types`, `lint`, `build`, and `test` for `apps/hb-central-homepage/` if those scripts are present
- verify section wrappers render predictably at different widths
- verify the shell can host stubbed versions of all major surfaces without layout collapse
- verify the static composition manifest/order is coherent and does not rely on dynamic surface registration

Verify that any new shared or local visual components use the governed brand token system instead of ad hoc hardcoded color values unless explicitly justified.

## Documentation updates

- Add architecture notes describing where composition logic lives and why the manifest remains app-local.
- Add brief implementation notes for how later homepage surfaces plug into the static composition manifest.

## Deliverables / exit criteria

- `apps/hb-central-homepage/` contains a real homepage shell.
- The surface composition order is explicit in a static manifest/config.
- The project is ready for individual surface implementations without structural refactoring.
