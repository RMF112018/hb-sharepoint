# Prompt 03 — Scaffold Shared Packages and Build Boundaries

## Objective

Create or normalize the shared packages that the hybrid homepage will depend on, and ensure the build/tooling boundaries are correct before feature extraction begins.

---

## Repo-truth context

Inspect the smallest authoritative set first.

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Start with the exact files and paths that govern this work, including whichever of the following actually exist and are relevant:

- workspace config files
- root and package-level package.json files
- tsconfig/base config files
- SPFx build config
- any existing shared utility/component packages
- any path alias config

You must confirm repo truth before assuming exact paths, package names, build flow, or deployment boundaries.

---

## Architectural guardrails

- Do not start feature extraction until the shared package seams are real.
- Keep shared packages minimal and high-signal.
- Do not turn generic helpers into a dumping ground.
- Avoid ambiguous barrel exports that can misresolve runtime entry points.
- Ensure package boundaries are explicit enough to support clean imports and code splitting.

---

## Implementation instructions

1. Scaffold or normalize the shared packages identified in the target package map:
   - brand tokens
   - shared UI
   - SharePoint/core adapters

2. Configure package metadata, build references, and path resolution so the SPFx host layer can consume these packages cleanly.

3. Establish stable public exports for each shared package.

4. Remove or isolate any ambiguous export patterns that could later create wrong-bundle or wrong-entry-point issues.

5. Add the smallest useful tests or smoke validation for package resolution and build integrity.


---

## Verification

Use the smallest meaningful verification set first.

### Required verification
1. Shared packages build or typecheck cleanly
2. Public exports are explicit and stable
3. SPFx host package(s) can resolve the shared packages
4. No ambiguous import path or barrel-export issue remains for the new shared seams

### Preferred additional verification
5. Package-local smoke tests for core exports
6. Confirm no feature package still owns shared concerns that should have moved


---

## Documentation updates

Update developer docs only as needed to describe package purposes, import conventions, and public export rules.

---

## Deliverables / exit criteria

1. Implemented shared packages with stable exports
2. Working workspace/build boundaries
3. Verified package resolution from the SPFx host layer
4. Notes on any unresolved build tooling constraint

