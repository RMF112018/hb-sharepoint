# Prompt 02 — Create Target Package Map and Directory Structure

## Objective

Create the directory structure and package ownership model required for the hybrid homepage refactor. Establish a clean source layout for shared packages, focused homepage features, and the SPFx host layer.

---

## Repo-truth context

Inspect the smallest authoritative set first.

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Start with the exact files and paths that govern this work, including whichever of the following actually exist and are relevant:

- root directory structure
- workspace configuration
- existing package folders
- existing SPFx solution folders
- existing homepage-related folders/files
- documentation structure
- any build tooling that constrains package placement

You must confirm repo truth before assuming exact paths, package names, build flow, or deployment boundaries.

---

## Architectural guardrails

- This must be the smallest correct restructuring path.
- Do not create packages merely for taxonomy; each package must have durable ownership.
- Reusable visual primitives must not remain scattered across feature-local folders.
- Keep the SPFx host layer thin; it should not own the entire homepage implementation.
- Preserve a structure that can support additional homepage sections in later phases without another major re-layout.

---

## Implementation instructions

1. Based on the Phase 1 architecture freeze, design the target directory and package map for:
   - shared brand tokens
   - shared UI primitives
   - shared SharePoint/core adapters
   - homepage shell / hero
   - featured projects
   - company pulse
   - quick actions
   - SPFx web part host(s)

2. Compare the target structure to current repo truth and determine the minimum restructuring required.

3. Implement the directory/package structure or the smallest safe first-stage restructuring that gets the repo onto the target path.

4. Define ownership rules for each package:
   - what belongs there
   - what must not live there
   - dependency direction rules

5. Ensure the structure supports a hybrid page composition model instead of encouraging a return to one giant homepage entry point.


---

## Verification

Use the smallest meaningful verification set first.

### Required verification
1. Confirm the final structure matches the approved target package map
2. Confirm package boundaries are explicit and non-overlapping
3. Confirm the SPFx host layer is separated from feature implementation
4. Confirm reusable UI is not left in feature-local folders

### Preferred additional verification
5. Validate workspace/build tooling still resolves after restructuring
6. Provide a short rationale for each package created


---

## Documentation updates

Update the canonical package-ownership and directory-structure documentation. Include an ownership table and dependency rules. Do not dump exploratory folder comparisons into permanent docs.

---

## Deliverables / exit criteria

1. Implemented directory/package structure
2. Ownership map for every new or moved package
3. Dependency direction rules
4. Notes on any deferred restructuring not completed in Phase 1

