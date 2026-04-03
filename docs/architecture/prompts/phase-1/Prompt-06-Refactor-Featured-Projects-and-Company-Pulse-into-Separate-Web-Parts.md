# Prompt 06 — Refactor Featured Projects and Company Pulse into Separate Web Parts

## Objective

Break the next two premium homepage zones—Featured Projects and Company Pulse—out of the monolithic homepage implementation and into separate focused web parts with shared foundations and clean ownership.

---

## Repo-truth context

Inspect the smallest authoritative set first.

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Start with the exact files and paths that govern this work, including whichever of the following actually exist and are relevant:

- current featured projects implementation files
- current company pulse implementation files
- current monolithic homepage root
- shared packages
- relevant SPFx web part host/manifests
- any shared content/data mapping helpers

You must confirm repo truth before assuming exact paths, package names, build flow, or deployment boundaries.

---

## Architectural guardrails

- Featured Projects and Company Pulse must not be merged into one catch-all secondary web part.
- Separate feature ownership cleanly while reusing shared UI and data helpers.
- Keep each web part page-author-friendly and maintainable.
- Do not re-implement native SharePoint content unnecessarily within these parts.

---

## Implementation instructions

1. Isolate Featured Projects into its own feature package and SPFx host path.

2. Isolate Company Pulse into its own feature package and SPFx host path.

3. Extract any duplicated cards, wrappers, or content mapping helpers into the shared layers if they truly belong there.

4. Remove both features from the old monolithic homepage render path.

5. Ensure both web parts can be used independently on a modern page and can participate in the approved homepage composition order.


---

## Verification

Use the smallest meaningful verification set first.

### Required verification
1. Featured Projects renders from its own web part path
2. Company Pulse renders from its own web part path
3. Both web parts appear in the toolbox
4. Both consume shared UI/token/core packages
5. The monolithic homepage path no longer owns these sections

### Preferred additional verification
6. Confirm section-local loading/empty/error states
7. Validate emitted bundles do not include stale monolithic wiring for these sections


---

## Documentation updates

Update homepage composition and ownership docs to list Featured Projects and Company Pulse as dedicated custom web parts with their supported inputs and boundaries.

---

## Deliverables / exit criteria

1. Dedicated Featured Projects web part
2. Dedicated Company Pulse web part
3. Shared extraction of any genuinely reusable support code
4. Removal of those sections from the old monolithic path

