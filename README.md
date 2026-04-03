# hb-sharepoint

HB SharePoint governed implementation workspace for the HB Central homepage workstream.

## Current state

This repository now contains the phase-0 Prompt-13 baseline: implemented homepage runtime surfaces, hardening updates, and final verification/deployment-readiness documentation.

Prompt-01 remains the historical structural baseline, and Prompts 02-13 now represent executed phase-0 implementation and convergence records.

## Bootstrap direction

Install dependencies with `pnpm install`, then use the root workspace scripts:

- `pnpm check-types`
- `pnpm lint`
- `pnpm build`
- `pnpm test`
- `pnpm build:sppkg`

The homepage runtime baseline lives at `apps/hb-central-homepage/`, which is the canonical first SPFx host path for the homepage app.

## Shared visual direction

Prompt-03 has now established the first shared visual package at `packages/ui-kit/` with the npm package name `@hbc/ui-kit`. The homepage app consumes that package instead of owning design-system-grade styling locally.

## Deployment and Readiness Direction

Prompt-13 final readiness guidance is documented in `docs/reference/developer/hb-central-homepage-deployment-readiness.md`, including packaging/build commands, rollout checks, and known phase constraints.

## Canonical references

- `AGENTS.md` - repository operating brief
- `CLAUDE.md` - repository-specific implementation guidance
- `docs/README.md` - documentation routing
- `docs/architecture/prompts/phase-0/` - phase-0 prompt package
