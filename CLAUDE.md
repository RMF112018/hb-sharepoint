# HB SharePoint repository operating brief for Claude Code

## Purpose

Build and evolve the Hedrick Brothers SharePoint codebase as a maintainable, production-grade SPFx platform that delivers a premium HB Central homepage and supporting reusable SharePoint experiences without sacrificing architectural discipline, supportability, or editor usability.

## Primary objective

Optimize for:
- maintainable SPFx code,
- clean package and ownership boundaries,
- supportable Microsoft 365 customization patterns,
- reusable premium UI,
- editor-friendly configurability,
- targeted verification,
- lean context usage,
- and disciplined documentation.

For this project, a major visible objective is the HB Central homepage:
- highly polished,
- visually premium,
- brand-aligned,
- operationally useful,
- and built in a way that can scale into additional SharePoint experiences.

## Start here

Before changing anything:

1. Inspect the live repo structure on the current branch.
2. Identify the smallest authoritative set of files needed for the task.
3. Read only those files first.

Typical starting points:
- root `package.json`
- workspace config (`pnpm-workspace.yaml`, `turbo.json`, or equivalents) if present
- SPFx solution manifests (`config/package-solution.json`)
- web part manifests and entry points
- shared package manifests and exports
- existing design-system or shared UI packages if present
- local README files nearest the touched area
- existing verification scripts and CI config
- deployment/package build config

Do not start every task by rereading the entire repository.
Do not reread files that are already in current session context unless the file changed, the context is stale, or the task scope expanded.

## Project-specific development intent

The repository should be treated as a governed SharePoint experience platform, not just a collection of isolated web parts.

The homepage and related premium surfaces should behave like:
- a strong visual front door,
- a launchpad into work,
- an adoption surface for HB Central,
- and a reusable design foundation for later site experiences.

Implementation should favor:
- premium editorial composition,
- strong brand presentation,
- excellent spacing, hierarchy, and interaction polish,
- configuration through supported SPFx mechanisms,
- and reusable UI rather than page-specific one-off code.

## Authority hierarchy

When code, docs, plans, or assumptions disagree, use this order:

1. **Current repository truth**
   - live code
   - package manifests
   - exports
   - SPFx manifests
   - tests
   - build config
   - deployment config

2. **Nearest local implementation guidance**
   - local package README files
   - local docs near the touched area
   - local implementation notes if they are clearly active and maintained

3. **Repository-level developer guidance**
   - root `README.md`
   - root `CLAUDE.md`
   - any repo-level architecture or contribution guidance that clearly applies to the current repo

4. **Active scoped plans or prompt packages**
   - only if they are clearly intended for this repo and this workstream

5. **Imported doctrine or examples from other repositories**
   - useful for principles
   - never authoritative over verified repo truth

If a plan, prompt, or imported doctrine conflicts with the verified repo state, follow the verified repo state for what exists now.

## Locked invariants

Protect these unless the user explicitly asks to revisit them:

- Use supported SharePoint / Microsoft 365 extensibility patterns.
- SPFx web parts are the default building block for homepage surfaces.
- SPFx extensions should only be used when page-level augmentation is clearly justified.
- ACEs should only be used when there is a real Viva/dashboard/mobile card need.
- Do not rely on brittle DOM scraping, unsupported page mutation, or CSS-overrides-as-architecture.
- Reusable visual UI belongs in a governed shared layer, not scattered across web parts.
- Shared logic should live in the appropriate shared package or utility layer rather than being copied between surfaces.
- Property-pane and configuration design matter as much as the visual layer.
- The homepage must be beautiful, but also maintainable, accessible, performant, and editable by non-developers where appropriate.
- Brand quality must not come at the expense of supportability.

## Homepage-specific guardrails

When working on homepage or premium visual surfaces:

- Prefer a system of reusable composition primitives over bespoke one-off sections.
- Keep visual hierarchy intentional and restrained.
- Avoid clutter, over-animation, and “more widgets” thinking.
- Build strong empty, loading, error, and no-permission states.
- Design all major homepage surfaces to degrade gracefully on smaller breakpoints.
- Treat authoring/editor experience as a first-class requirement.
- Do not hardcode content that should be editable through configuration or content sources.
- Use real content seams and clear data-source ownership.
- If multiple homepage sections need common card, media, ribbon, grid, or editorial primitives, move those into the shared layer.

## Package and ownership rules

- Prefer the smallest correct package placement.
- Do not create new packages casually.
- Check whether the repo already has a shared UI/design-system layer before creating new reusable UI locations.
- If no appropriate shared layer exists and reusable UI is clearly needed, propose and implement the smallest viable shared package or shared module boundary.
- Keep page composition local when it is page-specific.
- Move only genuinely reusable visual primitives into shared ownership.
- Keep dependencies directional and understandable.
- Do not create cross-feature entanglement for convenience.

## Working rules

- Inspect first, then change.
- Prefer the smallest correct change over broad speculative refactors.
- Keep code strongly typed, readable, and testable.
- Reuse healthy repo patterns where they exist.
- Improve weak patterns only when doing so materially improves maintainability or consistency.
- Do not infer architecture from imported doctrine alone.
- Do not duplicate large policy text into new files when a canonical source already exists.
- Do not reread files still in your current context or memory unless they changed, context is stale, or scope expanded.
- Do not add dependencies without first checking whether the repo already has an equivalent or better pattern.

## Execution expectations

For implementation work:

1. inspect the touched area first
2. identify the smallest authoritative reading set
3. confirm package ownership and boundary fit
4. make the change
5. run the smallest meaningful verification set
6. update documentation only where behavior, architecture, workflow, exports, or authoring expectations changed

For multi-step or cross-cutting work:

- provide a concise plan
- state material assumptions
- call out package or boundary risks
- recommend a better path when the repo suggests one
- separate “must do now” from “later refinement”

## Verification expectations

Use the smallest meaningful verification set first.

Typical order:
1. changed-file sanity checks
2. affected-package lint / typecheck / tests
3. SPFx package or bundle validation for the touched surface
4. broader workspace validation only when the change is cross-cutting, release-critical, or explicitly requested

Do not claim completion without stating:
- what was actually verified
- what was not verified
- and any known gaps or pre-existing issues encountered

## Documentation expectations

Update documentation when the change affects:
- public behavior
- package ownership
- architecture or boundaries
- editor/author workflow
- deployment or packaging expectations
- exports or developer usage expectations

Preferred documentation targets:
- local package/app `README.md` for local implementation guidance
- local developer docs for procedural implementation details
- reference docs for factual configuration or content-source details
- explanation docs for rationale
- ADRs only for durable architectural decisions or reversals

Do not write exploratory working notes into canonical architecture docs unless explicitly requested.
Keep exploratory plans in non-canonical working locations if such a location exists in this repo.

Documentation should be:
- concise
- accurate
- near the code or canonical location it describes
- updated only where justified by the change

## SPFx-specific expectations

For SPFx work:

- keep property-pane design clean and editor-friendly
- prefer explicit configuration models over hidden assumptions
- respect SharePoint hosting constraints
- keep bundle impact in mind
- avoid over-coupling web parts to page-specific DOM structure
- isolate content/data adapters from presentation where practical
- make theme handling deliberate
- ensure accessibility and keyboard/focus behavior are not afterthoughts
- verify packaging/build behavior for touched solutions when relevant

## Response style

Be direct and efficient.
Do not front-load long ritualized preambles.
Reference the governing source when it materially affects the decision.
Keep answers focused on the active task.

## When unsure

- inspect the affected code first
- inspect the nearest package docs second
- inspect repo-level guidance third
- expand outward only when necessary

If uncertainty remains:
- state the uncertainty
- make the smallest grounded assumption
- and avoid inventing structure that the repo has not confirmed