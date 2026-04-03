# Prompt 01 — Establish Phase 1 Hybrid Refactor Baseline

## Objective

Establish the authoritative repo-truth baseline for refactoring the current HB Central homepage from a single-package, single-web-part implementation into a hybrid multi-package model. Produce the architecture freeze, current-state map, and a concrete decision on what stays custom versus what should defer to native SharePoint in Phase 1.

---

## Repo-truth context

Inspect the smallest authoritative set first.

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Start with the exact files and paths that govern this work, including whichever of the following actually exist and are relevant:

- root workspace/package files
- SPFx solution and web part host files
- current homepage web part implementation files
- current homepage React root / runtime entry files
- any shared package folders or shared component libraries
- build/package scripts
- packaging config files
- current deployment docs, if any

You must confirm repo truth before assuming exact paths, package names, build flow, or deployment boundaries.

---

## Architectural guardrails

- Do not assume the current monolithic homepage web part should be preserved.
- Do not invent a target structure before confirming what already exists.
- Do not split functionality into custom web parts where native SharePoint already provides sufficient capability.
- Do not split deployable solutions unnecessarily; distinguish between **source package decomposition** and **deployed `.sppkg` decomposition**.
- The Phase 1 target is a hybrid homepage model, not an all-custom intranet shell.

---

## Implementation instructions

1. Audit the current homepage implementation path end to end:
   - current SPFx web part host
   - current render/runtime entry
   - current React root
   - current build/package flow
   - current emitted artifact structure

2. Produce a current-state map for the homepage implementation:
   - what is monolithic today
   - what is already reusable
   - what is placeholder/stub logic
   - what is SharePoint-specific glue
   - what is UI/domain logic that should move into shared packages

3. Define the target hybrid composition model for Phase 1:
   - premium custom shell / hero
   - featured projects
   - company pulse
   - quick actions
   - native SharePoint surfaces to remain native in Phase 1

4. Make and document explicit decisions for:
   - what will become separate custom web parts
   - what will become shared packages
   - what will remain page-composed native SharePoint content
   - whether Phase 1 should keep one deployable SPFx solution or split deployable solutions

5. Freeze the Phase 1 target architecture and sequence of work so later prompts implement against an approved structure rather than improvising mid-refactor.


---

## Verification

Use the smallest meaningful verification set first.

### Required verification
1. Identify the exact current homepage render path
2. Identify the current packaging/deployment model
3. Produce a clear current-state map
4. Produce a clear target-state hybrid model
5. Explicitly classify each homepage zone as:
   - custom web part
   - shared package concern
   - native SharePoint composition

### Preferred additional verification
6. Include a concise risk register for the refactor
7. Identify any blocker that would force deviation from the hybrid model


---

## Documentation updates

Create or update only the canonical architecture note(s) required to document the Phase 1 baseline, current-state map, target-state map, and the decision matrix for custom versus native SharePoint surfaces.

---

## Deliverables / exit criteria

1. Current-state homepage implementation map
2. Target-state hybrid architecture map
3. Explicit custom-vs-native decision matrix
4. Package / deployable-solution strategy recommendation
5. Approved Phase 1 execution order

