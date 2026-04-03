# Phase-1 Prompt-06 Closure Note — Featured Projects and Company Pulse Dedicated Web Parts

## Purpose

Record Phase-1 Prompt-06 closure by confirming that Featured Projects and Company Pulse are no longer owned by the legacy non-hero composition host and now render through dedicated SPFx web part paths.

## Approved baseline decisions

- Featured Projects and Company Pulse each own a dedicated runtime + web part host path.
- The non-hero composition host no longer renders `projects` or `pulse`.
- One deployable SPFx solution remains the deployment strategy.
- Shared token/UI foundation ownership remains in `@hbc/ui-kit`; extracted runtimes consume shared UI contracts instead of local visual forks.

## Guardrails

- Do not reintroduce projects/pulse ownership into the non-hero composition host.
- Do not split deployable `.sppkg` outputs in this phase.
- Do not duplicate shared reusable visual primitives outside `@hbc/ui-kit`.

## Closure conditions

- Dedicated Featured Projects web part host + manifest exists and mounts independently.
- Dedicated Company Pulse web part host + manifest exists and mounts independently.
- SPFx config includes homepage sections host, hero host, featured projects host, and company pulse host in one solution.
- Runtime tests confirm projects/pulse are absent from the non-hero host and present in dedicated runtime paths.

## Current status

Prompt-06 closure conditions are met in repository baseline as of April 3, 2026.
