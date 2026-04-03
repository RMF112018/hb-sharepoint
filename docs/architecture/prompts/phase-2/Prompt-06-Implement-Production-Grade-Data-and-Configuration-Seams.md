# Prompt-06 — Implement Production-Grade Data and Configuration Seams

## Objective

Formalize production-grade data and configuration seams for the homepage so each section has a clear source of truth, update path, configuration model, and support boundary instead of relying on ad hoc or placeholder content wiring.

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
- all current data adapters, mock/stub feeds, config files, and section-specific source logic
- existing SharePoint lists/libraries/content assumptions reflected in source
- any environment or package config related to homepage content sources

You must determine the current repo truth for this prompt before making implementation decisions.

---

## Architectural guardrails

- Do not allow section data wiring to remain ad hoc or hidden inside visual components.
- Do not hardcode production assumptions that should be configurable or documented.
- Do not overengineer a data layer that exceeds the repo’s current maturity or actual needs.
- Every section should end this prompt with a clear source-of-truth and configuration story.
- Be honest about gaps where the repo or tenant-side setup is not yet ready for a fully live source.

---

## Implementation instructions

### 1) Inventory all current homepage data/config seams

Create a section-by-section map of:
- source of truth
- current implementation status
- config location
- missing assumptions
- editorial/admin dependency

### 2) Normalize the data and config model

Refactor or formalize the data/config seams so each homepage zone has a clear, maintainable contract. Keep the solution proportionate to the repo’s actual needs.

### 3) Remove obvious placeholder-only wiring where feasible

Where placeholder or demo-only data paths remain in release-critical sections, either replace them with the proper seam or document the constraint and fallback behavior clearly.

### 4) Define operational ownership

For each section, define:
- who owns the content
- who owns the configuration
- where updates happen
- how failures or empty states are handled

---

## Verification

Use the smallest meaningful validation set first.

1. A section-by-section data/config map exists.
2. Release-critical homepage zones have explicit production-grade seams or clearly documented limitations.
3. Operational ownership is defined for each section.
4. The resulting model is maintainable and consistent with repo truth.

---

## Documentation updates

Update only the docs necessary to make the implementation durable and understandable.

- Update the canonical admin/editor/homepage docs with the final data/config ownership model.
- Add concise implementation notes where developers need to understand the supported data seam pattern.

---

## Deliverables / exit criteria

Do not stop until you provide all of the following:

1. **Data/config inventory** — current state by homepage zone.
2. **Normalized seam design** — what changed and why.
3. **Operational ownership map** — section-by-section.
4. **Limitations/fallbacks** — anything still constrained or deferred.

If you cannot fully resolve the prompt objective, stop only after narrowing the issue to the smallest confirmed blocker with evidence.
