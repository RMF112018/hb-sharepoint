# Prompt 07 — Implement Quick Actions and Native SharePoint Composition Seams

## Objective

Implement Quick Actions as a focused custom web part if justified, and formalize the native SharePoint composition model for the homepage so the final page is intentionally hybrid rather than accidentally mixed.

---

## Repo-truth context

Inspect the smallest authoritative set first.

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Start with the exact files and paths that govern this work, including whichever of the following actually exist and are relevant:

- current quick actions implementation files if any
- page composition assumptions in current docs/code
- native SharePoint parts currently planned or implied
- shared UI packages
- property pane / configuration files

You must confirm repo truth before assuming exact paths, package names, build flow, or deployment boundaries.

---

## Architectural guardrails

- Only keep Quick Actions custom if it materially exceeds native Quick Links.
- The hybrid model must be explicit and documented, not left to ad hoc page authoring.
- Do not replace native News or other strong native parts without a clear value case.
- Ensure custom and native sections coexist cleanly in the page composition order.

---

## Implementation instructions

1. Evaluate the Quick Actions surface against native SharePoint Quick Links.

2. If the custom version is justified, implement/refactor Quick Actions into its own focused custom web part using shared foundations.
   If it is not justified, document the decision and remove the custom implementation path in favor of native composition.

3. Define the homepage composition blueprint for Phase 1:
   - which sections are custom web parts
   - which sections are native SharePoint parts
   - expected page order / section layout
   - any authoring constraints

4. Add the minimum configuration or documentation needed so the homepage can actually be assembled in SharePoint using the hybrid model.


---

## Verification

Use the smallest meaningful verification set first.

### Required verification
1. Quick Actions has an explicit keep-custom or revert-to-native decision
2. The homepage composition blueprint is explicit
3. Custom web parts and native parts have a documented coexistence model
4. No section remains in an ambiguous "maybe custom, maybe native" state for Phase 1

### Preferred additional verification
5. If Quick Actions stays custom, validate toolbox visibility and rendering
6. Produce a sample homepage composition layout or assembly checklist


---

## Documentation updates

Document the hybrid homepage composition playbook, including page order, custom-vs-native choices, and authoring notes. Keep it actionable for implementation and site assembly.

---

## Deliverables / exit criteria

1. Quick Actions decision and implementation outcome
2. Hybrid homepage composition blueprint
3. Authoring/composition notes for SharePoint page assembly
4. Any required configuration to support the hybrid model

