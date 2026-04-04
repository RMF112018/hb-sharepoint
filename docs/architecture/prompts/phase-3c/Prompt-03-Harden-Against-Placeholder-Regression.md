# Prompt-03 — Harden Against Placeholder Regression

## Objective

Add narrow validator and release-gate checks that fail the build/package flow if placeholder owner implementations or proof-of-load text are shipped again.

## Scope

Work only on targeted regression hardening related to the current defect class.

## Files to Inspect First

Inspect only the smallest relevant set first. Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.

Start with:
- current homepage validator scripts
- homepage package validation flow
- owner files restored in Prompt-02
- any remediation docs/checklists tied to homepage packaging

## Required Tasks

1. Add a validator check that fails if known placeholder proof-of-load strings are present in source files that are meant to ship real owners.
2. Add a validator or artifact check that fails if packaged homepage owner chunks still contain the placeholder proof-of-load strings.
3. Preserve the existing anti-collapse and browser-safety validations.
4. Update the release-gate documentation so successful chunk loading alone is not treated as sufficient acceptance.
5. Ensure the packaging path clearly distinguishes:
   - browser-safe owner execution success,
   - and actual real-UI render success.

## Constraints / Guardrails

- Keep the hardening narrow.
- Do not add brittle checks that depend on unrelated minified details.
- Do not weaken the current runtime-bundle regression checks.
- Do not introduce validation that blocks legitimate localized error messaging; target shipped placeholder success-path text instead.

## Acceptance Criteria

This prompt is complete only when:
- placeholder owner text cannot be shipped silently,
- the validator flow still protects against the prior runtime chunk defect,
- and the release-gate docs now require real render proof, not only chunk load proof.

## Required Outputs

Generate:
1. updated validator code,
2. an updated release/readiness note,
3. and a short explanation of the new regression gate.
