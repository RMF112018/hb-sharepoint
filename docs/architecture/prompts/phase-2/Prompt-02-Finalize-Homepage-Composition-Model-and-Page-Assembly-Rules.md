# Prompt-02 — Finalize Homepage Composition Model and Page Assembly Rules

## Objective

Lock the final hybrid homepage composition model and explicitly define which sections are native SharePoint, which are dedicated custom SPFx web parts, how they are assembled on the page, and what editorial/authoring constraints govern the final homepage layout.

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
- all current homepage section manifests and component entry points
- any existing page-composition docs, README guidance, or layout notes
- native SharePoint section assumptions reflected in code or docs

You must determine the current repo truth for this prompt before making implementation decisions.

---

## Architectural guardrails

- Do not allow custom-vs-native decisions to remain ad hoc.
- Do not revert to a monolithic homepage app to avoid page composition complexity.
- Do not force custom implementation where native SharePoint is already the better authoring/maintenance choice.
- Do not sacrifice visual cohesion; native and custom surfaces still need a governed visual model.
- Page assembly rules must be clear enough for a site owner or admin to follow safely.

---

## Implementation instructions

### 1) Map every homepage zone to an ownership model

For each homepage zone, explicitly assign one of the following:

- native SharePoint
- dedicated SPFx web part
- shared layout wrapper plus native content
- deferred / optional

Document the rationale for each decision.

### 2) Define page assembly rules

Specify:
- what page sections/columns are expected
- which parts belong in which regions
- where full-width usage is appropriate
- where editors may safely reorder or replace content
- where the layout should remain fixed

### 3) Define authoring boundaries

Clarify what can be changed without code by:
- site owners
- content editors
- admins

Also define what should not be changed casually because it would break composition or design integrity.

### 4) Record the final composition model

Produce a concise but authoritative homepage surface map and page assembly guide that the rest of Phase 2 can follow without ambiguity.

---

## Verification

Use the smallest meaningful validation set first.

1. Every major homepage zone has an explicit ownership model.
2. Page assembly rules are documented and internally coherent.
3. Authoring boundaries are clear for editors/admins.
4. The final composition model is concise enough to govern the remaining prompts.

---

## Documentation updates

Update only the docs necessary to make the implementation durable and understandable.

- Update the canonical homepage architecture/composition doc with the final section ownership model.
- Add a short page assembly rule set where future editors/admins will actually find it.

---

## Deliverables / exit criteria

Do not stop until you provide all of the following:

1. **Homepage surface map** — final native/custom/shared/deferred ownership.
2. **Page assembly rules** — layout, placement, and composition constraints.
3. **Authoring boundary summary** — who can safely change what.
4. **Decision rationale** — why the final hybrid model is the recommended path.

If you cannot fully resolve the prompt objective, stop only after narrowing the issue to the smallest confirmed blocker with evidence.
