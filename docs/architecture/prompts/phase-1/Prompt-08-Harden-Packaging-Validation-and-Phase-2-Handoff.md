# Prompt 08 — Harden Packaging, Validation, and Phase 2 Handoff

## Objective

Stabilize the build/package/validation path for the refactored multi-package homepage architecture, verify the new focused web parts deploy and render correctly, and create the Phase 2 handoff for remaining homepage sections and enhancements.

---

## Repo-truth context

Inspect the smallest authoritative set first.

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Start with the exact files and paths that govern this work, including whichever of the following actually exist and are relevant:

- build/package scripts
- SPFx packaging config
- emitted artifact paths
- all refactored web part host files
- validation scripts/checks if any
- architecture and composition docs produced in earlier prompts

You must confirm repo truth before assuming exact paths, package names, build flow, or deployment boundaries.

---

## Architectural guardrails

- Do not conclude Phase 1 with unresolved ambiguity about what artifact gets deployed.
- Do not leave the repo in a state where runtime bundle mismatches are easy to reintroduce.
- Package validation must focus on the new multi-package architecture and actual deployed web parts.
- Phase 2 handoff must be explicit about what remains intentionally unfinished.

---

## Implementation instructions

1. Audit the new package/build/deploy path after the refactor.

2. Add lightweight safeguards for:
   - wrong artifact upload
   - stale placeholder/runtime-bundle mismatch regressions
   - localhost leakage into production artifacts
   - missing or miswired focused web part registrations

3. Validate the deployable artifact(s) produced by the Phase 1 architecture.

4. Confirm that the refactored custom web parts:
   - appear in the SharePoint toolbox
   - render in page context
   - are not secretly dependent on the old monolithic homepage path

5. Produce the Phase 2 handoff:
   - remaining homepage zones
   - deeper data integrations
   - personalization / polish work
   - any deferred native-vs-custom decisions


---

## Verification

Use the smallest meaningful verification set first.

### Required verification
1. Clean production build/package run succeeds
2. Deployable artifact path is explicit
3. The refactored custom web parts appear in the toolbox
4. The refactored custom web parts render on a page
5. Runtime bundle and packaging safeguards are in place
6. The monolithic homepage path is no longer the hidden runtime dependency

### Preferred additional verification
7. Validate each focused web part in SharePoint page context
8. Summarize the emitted artifact(s) and their ownership


---

## Documentation updates

Update deployment, packaging, validation, and phase-handoff documentation. Include the final Phase 1 architecture snapshot and a concise Phase 2 backlog.

---

## Deliverables / exit criteria

1. Stable Phase 1 build/package/deploy path
2. Lightweight validation safeguards
3. Evidence of toolbox visibility and page rendering for the refactored custom web parts
4. Phase 2 handoff summary and backlog

