# Prompt-03 — Implement News, Recognition, and Spotlight Zone

## Objective

Build or complete the homepage news / recognition / spotlight zone in a way that aligns with the locked hybrid composition model, uses a supportable content source strategy, and delivers a premium but maintainable presentation.

---

## Repo-truth context

Inspect the smallest authoritative set first.

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Start with the exact files, packages, and docs that govern this scope, including whichever of the following actually exist:

- root `package.json` and workspace config files
- SPFx solution package(s) and related `config/*` files
- homepage web part host files and manifests
- shared UI/token packages or shared component layers
- homepage section component files
- build/package scripts and any CI/workflow files relevant to packaging
- existing homepage documentation, if any
- current news/recognition/spotlight-related components or placeholders
- any native SharePoint news usage already present
- content source utilities, config seams, or data adapters relevant to this zone

You must determine the current repo truth for this prompt before making implementation decisions.

---

## Architectural guardrails

- Do not hardcode content into the visual component as a long-term solution.
- Do not create a visually polished section with no sustainable content source or curation model.
- Do not over-customize if native SharePoint news already satisfies most of the need.
- Preserve accessibility, empty/loading/error states, and editorial maintainability.
- Keep the implementation aligned to the final composition model locked in Prompt 02.

---

## Implementation instructions

### 1) Determine the correct zone architecture

Confirm whether this zone should be:
- native SharePoint with governed styling/composition
- a dedicated SPFx web part
- a wrapper around native content
- a hybrid of the above

Do not proceed until this is explicit.

### 2) Implement or complete the zone

Build the actual zone behavior and presentation so it can surface:
- news
- recognition
- spotlight / featured content

Ensure the implementation handles:
- loading
- empty
- error
- editorial fallback

### 3) Define the content source and curation model

Clarify:
- where this content comes from
- who curates it
- what the source of truth is
- what happens when content is missing or sparse

### 4) Validate the visual and authoring model

Ensure the section fits the HB Central visual system and does not create unreasonable maintenance burden for editors.

---

## Verification

Use the smallest meaningful validation set first.

1. The zone is implemented or meaningfully completed according to the locked composition model.
2. Loading, empty, and error states exist and are acceptable.
3. The content source/curation model is documented.
4. The zone is visually and behaviorally aligned with the rest of the homepage.

---

## Documentation updates

Update only the docs necessary to make the implementation durable and understandable.

- Update the homepage section guide or admin/editor documentation with the content source and maintenance rules for this zone.
- Document only the durable operational guidance, not temporary debugging notes.

---

## Deliverables / exit criteria

Do not stop until you provide all of the following:

1. **Implementation summary** — what was built or completed.
2. **Content source model** — including curation and fallback rules.
3. **Validation evidence** — section behavior and state handling.
4. **Open gaps** — anything intentionally deferred or limited.

If you cannot fully resolve the prompt objective, stop only after narrowing the issue to the smallest confirmed blocker with evidence.
