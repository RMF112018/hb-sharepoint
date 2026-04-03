# Phase 0 Directory Structure and Ownership

## Purpose

This note records the approved Prompt-01 baseline for repository structure and ownership. It is the formal closure artifact for the open planning item to establish directory structure and ownership.

## Approved baseline

The Prompt-01 baseline consists of:

- root `package.json` as the first versioned manifest and repository version authority
- `docs/` for canonical documentation and prompt packages
- `apps/` reserved for future deployable application hosts
- `packages/` reserved for non-visual shared logic and contracts with real consumers
- `tools/` reserved for future repository tooling

## Ownership rules

- Reusable visual UI belongs in `@hbc/ui-kit`.
- App-local composition, SPFx wiring, and SharePoint host concerns belong in the future app layer.
- Shared contracts and non-visual helpers may live under `packages/` only when they serve real usage and preserve directional dependencies.
- Prompt-01 must not create speculative internals that later prompts would need to unwind.

## Closure conditions

This planning item is considered closed when:

- the baseline directories exist
- the root manifest has been established as the first version authority, originally initialized at `00.000.001`
- the canonical governance records referenced by repo policy exist
- the phase-0 prompt package points to this note and no longer assumes a nonexistent workspace already exists

Later governance revisions may legitimately advance the live root-manifest version while preserving `00.000.001` as the historical Prompt-01 initialization point.
