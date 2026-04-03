# `@hbc/ui-kit`

Shared visual foundation package for the HB Central homepage workspace.

## Purpose

- own the shared design token model
- own reusable visual primitives that multiple homepage surfaces can consume
- stay free of app-local composition, data fetching, and feature business logic

## Commands

- `pnpm --filter @hbc/ui-kit check-types`
- `pnpm --filter @hbc/ui-kit lint`
- `pnpm --filter @hbc/ui-kit build`
- `pnpm --filter @hbc/ui-kit test`

## Ownership notes

- Tokens and reusable visual primitives belong here together.
- App packages may compose these primitives, but must not recreate design-system-grade components or token systems locally.
