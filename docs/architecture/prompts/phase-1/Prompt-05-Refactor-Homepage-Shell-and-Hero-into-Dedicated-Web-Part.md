# Prompt 05 — Refactor Homepage Shell and Hero into Dedicated Web Part

## Objective

Refactor the shell/hero portion of the homepage into its own focused custom SPFx web part backed by the new shared packages, removing it from the monolithic homepage render path.

---

## Repo-truth context

Inspect the smallest authoritative set first.

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Start with the exact files and paths that govern this work, including whichever of the following actually exist and are relevant:

- current homepage shell/hero implementation files
- SPFx web part host files
- homepage runtime entry files
- shared brand/UI packages
- web part manifests
- property pane definitions if any

You must confirm repo truth before assuming exact paths, package names, build flow, or deployment boundaries.

---

## Architectural guardrails

- The shell/hero web part should be premium and differentiated, but not become the new monolith.
- The host web part class should stay thin and mount the real feature root cleanly.
- Avoid reintroducing runtime bundle ambiguity or placeholder-only behavior.
- Keep authoring/configuration realistic for SharePoint page authors.
- Ensure full-width usage is supported if that is part of the approved model.

---

## Implementation instructions

1. Isolate the shell/hero responsibilities from the current homepage implementation.

2. Create or refactor a dedicated shell/hero web part feature package and SPFx host path that:
   - renders the intended shell/hero UI
   - consumes shared tokens/UI
   - exposes only the necessary property pane/configuration surface
   - unmounts cleanly

3. Remove shell/hero ownership from the old monolithic homepage render path.

4. Ensure the shell/hero package can stand alone as a page-composed surface while coexisting with other custom and native homepage sections.


---

## Verification

Use the smallest meaningful verification set first.

### Required verification
1. The shell/hero renders through its dedicated web part path
2. The old monolithic entry path no longer owns shell/hero rendering
3. The web part appears in the SharePoint toolbox
4. The rendered UI uses the shared token/UI foundation
5. Build/package output is stable

### Preferred additional verification
6. Verify full-width behavior if applicable
7. Confirm no stale placeholder string remains in the emitted bundle


---

## Documentation updates

Update the homepage composition docs and package-ownership docs to show the shell/hero as a standalone custom web part and identify its supported configuration surface.

---

## Deliverables / exit criteria

1. Dedicated shell/hero web part implementation
2. Clean mount/unmount path
3. Removal of shell/hero ownership from the old monolithic path
4. Verified deployment/test path for the shell/hero web part

