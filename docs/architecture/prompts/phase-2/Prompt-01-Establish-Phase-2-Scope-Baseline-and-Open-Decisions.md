# Prompt-01 — Establish Phase 2 Scope Baseline and Open Decisions

## Objective

Audit the actual end state of Phase 1, determine what is truly complete vs partial vs placeholder, freeze the real Phase 2 starting baseline, and prevent the code agent from drifting back into Phase 1 restructuring or speculative redesign work.

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
- all homepage-related package/folder locations introduced during Phase 1
- the most recent deployable artifact path, if present
- any Phase 1 summary/readme/docs created previously

You must determine the current repo truth for this prompt before making implementation decisions.

---

## Architectural guardrails

- Do not restructure the repo again unless repo truth proves a Phase 1 gap forces it.
- Do not assume Phase 1 completed everything it intended to complete.
- Separate confirmed implementation from placeholders, stubs, disabled code paths, and aspirational docs.
- Do not expand Phase 2 scope before first establishing what already exists.
- Preserve the hybrid direction unless repo truth proves the Phase 1 split is fundamentally broken.

---

## Implementation instructions

### 1) Establish the actual Phase 1 end state

Audit the current homepage-related implementation and classify each relevant item as one of the following:

- complete and functional
- partially implemented
- placeholder or stub
- miswired / broken
- not implemented despite prior intent

At minimum, classify:
- homepage shell / hero
- featured projects
- company pulse
- quick actions
- people / culture
- news / recognition / spotlight
- personalized lower zone
- shared token/UI layer
- packaging/deployment path
- docs/admin guidance

### 2) Create a Phase 2 scope map

Produce a scope matrix that distinguishes:

- **must finish in Phase 2**
- **optional for Phase 2**
- **explicitly defer beyond Phase 2**
- **blocked by missing repo truth / missing source / unresolved dependency**

Do not let the scope remain implied. Make it explicit.

### 3) Identify open decisions

List the decisions that must be resolved early in Phase 2, including:

- which remaining zones stay native vs custom
- whether the lower zone is justified
- what personalization is appropriate
- what data/config seams are required
- which sections are release-critical vs deferrable

### 4) Freeze the baseline

Document the actual starting baseline for the rest of the prompt series and identify any Phase 1 defects that must be treated as constraints rather than silently inherited.

---

## Verification

Use the smallest meaningful validation set first.

1. Classify every major homepage surface and shared layer as complete, partial, placeholder, broken, or absent.
2. Produce a Phase 2 scope matrix grounded in repo truth.
3. Produce an open-decisions list with recommended direction for each item.
4. Confirm what Phase 2 will and will not cover.

---

## Documentation updates

Update only the docs necessary to make the implementation durable and understandable.

- Update the Phase 2 summary or appropriate canonical doc with the confirmed Phase 2 baseline only if it clarifies actual implementation state.
- Keep forensic notes concise; avoid duplicating large exploratory text in canonical docs.

---

## Deliverables / exit criteria

Do not stop until you provide all of the following:

1. **Baseline summary** — actual Phase 1 end state and unresolved gaps.
2. **Scope map** — required, optional, deferred, and blocked Phase 2 items.
3. **Open decisions register** — with recommended direction and rationale.
4. **Constraint summary** — anything inherited from Phase 1 that limits Phase 2.

If you cannot fully resolve the prompt objective, stop only after narrowing the issue to the smallest confirmed blocker with evidence.
