# Phase 0 Personalized Lower Zone and Global Utility Decision

## Purpose

This note records the approved Prompt-10 decision baseline for personalization and global utility/footer scope.

## Decision summary

- Personalized lower zone is intentionally deferred in this phase.
- A governed app-local seam is implemented to keep the composition contract stable and unblock future integration.
- Global utility/footer remains page-local in `apps/hb-central-homepage/`; no Application Customizer is introduced.

## Rationale

- Current source quality is not sufficient for meaningful personalization without noisy or unstable results.
- A page-local utility/footer treatment satisfies current needs with lower operational and support overhead.
- Cross-page persistence via Application Customizer is deferred until measurable product value and supportability conditions are met.

## Future trigger conditions

Move to richer personalization and/or Application Customizer only when:

- stable per-user signals and targeting contracts are available,
- observability/support pathways exist for personalization outcomes,
- cross-page utility persistence provides clear user/product value beyond page-local treatment.

## Closure conditions

This planning item is considered closed when:

- Prompt-10 implementation reflects the defer/local-footer decision in app runtime
- phase package and current-state docs record Prompt-10 as executed baseline
- root manifest version has been patch-bumped for the governance update

## Current status

Closure conditions are satisfied in current repo state:

- personalized lower zone seam exists and communicates deferred decision requirements
- global utility/footer is implemented page-local in the homepage app
- phase/governance docs record Prompt-10 as executed baseline
- root manifest patch version has been advanced for this governance update
