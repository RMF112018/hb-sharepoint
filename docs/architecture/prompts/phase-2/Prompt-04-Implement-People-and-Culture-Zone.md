# Prompt-04 — Implement People and Culture Zone

## Objective

Build or complete the people and culture zone so it supports the homepage’s adoption and engagement goals while remaining maintainable, accessible, and aligned to the hybrid composition model and shared UI system.

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
- current people/culture components, placeholders, or data adapters
- any candidate content sources for birthdays, anniversaries, promotions, spotlights, or culture content
- shared card/list/banner primitives that should govern this zone

You must determine the current repo truth for this prompt before making implementation decisions.

---

## Architectural guardrails

- Do not build a people/culture zone that depends on unsustainable manual developer updates.
- Do not let the section drift visually away from the governed token/UI system.
- Do not ignore accessibility or responsive behavior simply because the content is lightweight or celebratory.
- Do not overfit to a data source that may not be stable without documenting the limitation clearly.
- Keep the section editorially practical for the business users who will maintain it.

---

## Implementation instructions

### 1) Confirm the section scope and ownership

Define exactly what the people and culture zone includes in the current phase, such as:
- employee spotlights
- birthdays / anniversaries
- promotions / recognition
- culture highlights
- curated people moments

Do not leave the content model ambiguous.

### 2) Implement or complete the section

Build or finish the section so it renders cleanly, handles sparse content gracefully, and fits the homepage composition and UI system.

### 3) Define the operational content model

Document:
- source of truth
- curation model
- update path
- editorial responsibility
- fallback behavior

### 4) Validate accessibility and responsive behavior

Ensure the section remains readable, keyboard-safe, and visually coherent across the intended viewport sizes and content densities.

---

## Verification

Use the smallest meaningful validation set first.

1. The section scope is explicitly defined.
2. The zone is built or completed and fits the homepage composition model.
3. The operational content model is documented.
4. The zone passes a basic accessibility/responsiveness sanity check.

---

## Documentation updates

Update only the docs necessary to make the implementation durable and understandable.

- Update relevant section/admin/editor docs with maintenance guidance for the people/culture zone.
- Document data/source limitations honestly if any remain.

---

## Deliverables / exit criteria

Do not stop until you provide all of the following:

1. **Section definition** — what the people/culture zone includes.
2. **Implementation summary** — what was delivered.
3. **Operational content model** — ownership, source, update path, fallback.
4. **Validation evidence** — including accessibility/responsive notes.

If you cannot fully resolve the prompt objective, stop only after narrowing the issue to the smallest confirmed blocker with evidence.
