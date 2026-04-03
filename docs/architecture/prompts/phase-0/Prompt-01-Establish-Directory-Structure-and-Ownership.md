# Establish Directory Structure and Ownership

## Objective

Create or confirm the structural and governance baseline required for later homepage prompts to execute against real workspace, documentation, and ownership authorities. In the current repository state, this prompt should be treated as a historical-baseline confirmation pass: the original Prompt-01 work established the baseline, and execution now means verifying and preserving that closure record without recreating it from scratch.

## Repo-truth context

Inspect the smallest authoritative set first:

- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- root directory contents
- `docs/architecture/prompts/phase-0/README.md`
- `docs/architecture/prompts/phase-0/HB-Central-Homepage-Prompt-Package-Summary.md`
- `docs/reference/developer/agent-authority-map.md`
- `docs/reference/developer/documentation-authoring-standard.md`
- `docs/reference/developer/verification-commands.md`

Ground decisions in the live repo as it exists when you start this prompt. At this stage, the repo is a planning-and-governance seed, not an SPFx workspace.

If the baseline already exists, confirm it and reconcile the documentation so it remains historically accurate while allowing later governance revisions to advance the current repository version.

## Required implementation

Complete all of the following in one coherent pass:

1. Create or confirm the first root workspace manifest:
   - add `package.json` at the repo root if it does not yet exist
   - treat `00.000.001` as the original Prompt-01 baseline initialization point
   - keep the manifest minimal and governance-oriented unless additional fields are required by the chosen package manager/tooling baseline

2. Create or confirm the canonical governance records referenced by repo policy:
   - `docs/README.md`
   - `docs/architecture/blueprint/current-state-map.md`
   - `docs/architecture/blueprint/package-relationship-map.md`

3. Add or update the Prompt-01 closure artifact:
   - `docs/architecture/blueprint/phase-0-directory-structure-and-ownership.md`
   - record the approved minimum top-level structure
   - record ownership and dependency direction
   - state that reusable visual UI belongs in `@hbc/ui-kit`

4. Establish or confirm only the minimum directory skeleton needed for subsequent prompts:
   - `apps/`
   - `packages/`
   - `tools/`
   - create additional top-level directories only if the governance note explicitly justifies them

5. Update root and prompt-package documentation where needed so the repository purpose and this prompt package no longer read as if the repo were already a blank implementation scaffold.

## Structural contract

The implementation must document and follow this contract:

- the root manifest is the first version authority
- `00.000.001` is the historical initialization point for that authority, but the live version may advance through later governance revisions
- `apps/` is reserved for deployable app hosts such as the future SPFx solution container
- `packages/` is reserved for non-visual shared logic, shared contracts, and helpers that have real consumers
- reusable visual UI belongs in `@hbc/ui-kit`, not in a new ad hoc local visual package
- no speculative package internals or SPFx scaffolds should be created in this prompt

## Documentation requirements

The new and updated docs must:

- match current repo truth
- align with `AGENTS.md` and `CLAUDE.md`
- point to the structure/ownership note as the formal closure record for this open item
- be concise and canonical rather than duplicating large policy blocks

## Verification

Start with the smallest meaningful validation set first:

- confirm `package.json` exists, uses the required `00.000.000` format, and preserves Prompt-01 as the first version authority
- confirm the required governance files exist at the documented paths
- confirm prompt-package references to those files are accurate
- confirm the new governance docs do not contradict `AGENTS.md`, `CLAUDE.md`, or each other

Do not run app-level or workspace-level runtime verification unless this prompt introduces actual runtime scaffolding or executable scripts that need it.

## Deliverables / exit criteria

- the root workspace manifest exists and establishes the first version authority
- the Prompt-01 records preserve `00.000.001` as the original baseline initialization point without requiring the current repo version to remain there
- the required governance records exist and are internally consistent
- the minimum top-level directory skeleton exists without speculative internals
- the structure/ownership note formally closes the open item
- later prompts can begin from a real governed baseline rather than inferred or missing authority files
