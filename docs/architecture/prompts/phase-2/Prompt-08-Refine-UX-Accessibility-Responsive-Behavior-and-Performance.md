# Prompt-08 — Refine UX, Accessibility, Responsive Behavior, and Performance

## Objective

Perform the cross-homepage refinement pass that brings all homepage zones into visual, behavioral, accessibility, responsive, and performance conformance with the Phase 1/Phase 2 design and engineering standards.

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
- all implemented homepage web parts and shared UI primitives
- token/theme files and shared visual foundations
- any known layout or performance concerns introduced during prior prompts
- existing loading/error/empty state implementations

You must determine the current repo truth for this prompt before making implementation decisions.

---

## Architectural guardrails

- Do not treat polish as cosmetic-only; this prompt must address behavior, accessibility, and runtime quality as well.
- Do not create one-off visual fixes that bypass the shared UI/token system.
- Do not defer obvious loading, empty, error, or focus-state issues just because core functionality exists.
- Validate across the homepage, not only inside one section at a time.
- Keep refinements compatible with the hybrid model and SharePoint hosting constraints.

---

## Implementation instructions

### 1) Perform a cross-homepage conformance audit

Review the homepage as a composed experience and identify:
- visual inconsistency
- spacing/typography hierarchy issues
- accessibility defects
- responsive layout issues
- performance or bundle concerns
- weak loading/empty/error states

### 2) Normalize shared visual behavior

Fix cross-section inconsistencies through shared layers where feasible rather than local ad hoc patches.

### 3) Address accessibility and responsive behavior

Ensure focus states, keyboard paths, readable structure, screen-reader clarity, reduced motion, and responsive behavior are acceptable across the full homepage.

### 4) Address performance and runtime quality

Look for avoidable performance problems, excessive work on initial load, weak lazy-loading behavior, or obvious runtime inefficiencies.

---

## Verification

Use the smallest meaningful validation set first.

1. A cross-homepage conformance audit is completed.
2. Shared visual inconsistencies are reduced through governed fixes.
3. Accessibility and responsive defects are addressed or explicitly documented.
4. Performance/runtime quality risks are addressed or clearly scoped.

---

## Documentation updates

Update only the docs necessary to make the implementation durable and understandable.

- Update any canonical design/system docs only where the shared rules themselves changed.
- Add concise release notes for major UX/accessibility/performance corrections if useful.

---

## Deliverables / exit criteria

Do not stop until you provide all of the following:

1. **Conformance audit summary** — cross-homepage findings.
2. **Fix summary** — visual, accessibility, responsive, and performance improvements.
3. **Validation evidence** — including state handling and key viewport/interaction checks.
4. **Remaining known limitations** — anything still deferred or constrained.

If you cannot fully resolve the prompt objective, stop only after narrowing the issue to the smallest confirmed blocker with evidence.
