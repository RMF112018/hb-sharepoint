# Scaffold Workspace and SPFx Baseline

## Objective

Establish the runtime and tooling baseline for this repo: root workspace configuration, package manager conventions, and an apps-first SPFx host scaffold under `apps/hb-central-homepage/` aligned to the approved architecture. In the current repository state, this prompt should now be read as the execution record for that baseline rather than as a still-unperformed planning step.

## Repo-truth context

Inspect the smallest authoritative set first.

Start with:
- files created by Prompt 01
- root workspace config files
- root README / architecture notes
- `docs/reference/developer/spfx-baseline.md`
- `apps/hb-central-homepage/` as the canonical target path before scaffolding

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Ground your decisions in the live repo as it exists at the time you begin this prompt. Preserve healthy patterns that already exist. This repository already has a Prompt-01 structural baseline, and Prompt-02 should now preserve the executed runtime scaffold as the canonical baseline without reopening the path or ownership decisions already recorded.

## Architectural guardrails

- Use the current supported SPFx line and toolchain appropriate for a new project.
- Follow the Vite-based SPFx baseline documented for the repository unless a newer canonical architecture record supersedes it.
- Default to a single homepage SPFx host under `apps/hb-central-homepage/`.
- Do not introduce multiple deployable solutions without a hard reason.
- Shared packages must remain consumable by the app without collapsing boundaries.
- Keep scaffolding clean; remove template clutter that has no value.
- Do not create a separate canonical `spfx/solutions/...` tree unless a future architecture decision explicitly requires one.

## Implementation instructions

- Create the root workspace config needed to support `apps/hb-central-homepage/` plus future shared packages.
- Scaffold the homepage SPFx host under `apps/hb-central-homepage/`.
- Use a Vite-based SPFx host shape consistent with `docs/reference/developer/spfx-baseline.md`.
- Normalize package names, scripts, and metadata to match repo conventions and the root workspace model.
- Strip placeholder sample code and scaffold clutter that would mislead later implementation.
- Ensure the scaffold is ready to consume `@hbc/ui-kit` and future shared packages without changing the app path model.
- Add only the smallest sensible ignore/config files for the selected toolchain.

## Verification

Start with the smallest meaningful validation set first.

- validate workspace install/bootstrap
- validate `apps/hb-central-homepage/` can bootstrap and run `check-types`, `lint`, `build`, and `test` if those scripts are present
- validate package names, scripts, and paths are coherent
- do not broaden into full UI implementation yet

Verify that any new shared or local visual components use the governed brand token system instead of ad hoc hardcoded color values unless explicitly justified.

## Documentation updates

- Update the repo README with concise local setup instructions for the apps-first workspace.
- Add or update a developer bootstrap note if the toolchain choice requires specific steps.
- Record the chosen app path and Vite-based SPFx baseline in architecture docs.

## Deliverables / exit criteria

- A clean workspace baseline exists.
- A current homepage SPFx host exists at `apps/hb-central-homepage/`.
- Placeholder scaffold clutter has been reduced.
- Another prompt can now build shared packages and homepage surfaces without revisiting baseline setup.
