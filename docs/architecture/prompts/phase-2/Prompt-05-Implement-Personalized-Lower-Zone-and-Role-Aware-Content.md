# Prompt-05 — Implement Personalized Lower Zone and Role-Aware Content

## Objective

Add justified runtime personalization and role-aware lower-zone behavior to the homepage without turning the homepage into an over-complex application or introducing brittle per-user configuration dependencies.

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
- current lower-zone implementation or placeholder, if any
- user-context or role-context utilities already present in the repo
- quick actions / operational surfaces that may need role-aware prioritization
- data/config seams relevant to runtime personalization

You must determine the current repo truth for this prompt before making implementation decisions.

---

## Architectural guardrails

- Do not assume the lower zone is justified without evidence from the actual homepage model.
- Do not build personalization through per-user web part property configuration.
- Do not create opaque personalization logic that is hard to explain or support.
- Keep personalization runtime-based, bounded, and fallback-safe.
- Do not let this prompt become a separate 'my work hub' product effort unless repo truth explicitly requires it.

---

## Implementation instructions

### 1) Decide whether the lower zone is justified

Use the current homepage model to decide whether the lower zone should:
- exist in this phase
- remain simple
- be personalized
- be role-aware
- or be deferred

Document the decision and rationale.

### 2) Define the personalization contract

Specify what personalization means in this context, for example:
- role-aware ordering
- user-context-aware content visibility
- prioritized quick actions
- contextual callouts

Also define what is explicitly out of scope.

### 3) Implement bounded runtime personalization

Implement the agreed personalization model with:
- clear fallbacks
- deterministic behavior where possible
- safe behavior for sparse data or unknown roles

### 4) Document explainability and support behavior

Make the personalization understandable enough that admins/support can explain why users see what they see.

---

## Verification

Use the smallest meaningful validation set first.

1. A decision is made on whether the lower zone exists and what it contains.
2. The personalization contract is explicit and bounded.
3. Runtime personalization is implemented safely, with fallbacks.
4. Supportable explainability guidance exists for personalized behavior.

---

## Documentation updates

Update only the docs necessary to make the implementation durable and understandable.

- Update homepage/admin/support documentation to explain the lower-zone and personalization behavior.
- Document scope limits clearly so future work does not overread the Phase 2 implementation.

---

## Deliverables / exit criteria

Do not stop until you provide all of the following:

1. **Decision summary** — whether the lower zone exists and what it is for.
2. **Personalization contract** — what is personalized and what is not.
3. **Implementation summary** — runtime logic and fallbacks.
4. **Supportability notes** — how the behavior can be explained and maintained.

If you cannot fully resolve the prompt objective, stop only after narrowing the issue to the smallest confirmed blocker with evidence.
