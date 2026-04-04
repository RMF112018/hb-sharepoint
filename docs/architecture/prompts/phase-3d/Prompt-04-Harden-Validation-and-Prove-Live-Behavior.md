# Prompt 04 — Harden Validation and Prove Live Behavior

## Objective

Add targeted regression gates that fail the build/package path if placeholder/stub owner behavior returns, then rebuild, redeploy, and capture live proof that the actual surface UI renders.

## Precondition

Use the repaired implementation from Prompt 03. Do **not** reread files still in your current context unless the file changed or the task scope expanded.

## Required validation hardening

### 1. Add placeholder/stub regression detection

Extend homepage validation so the release candidate fails if emitted homepage assets contain placeholder/stub semantics for the five surfaces.

This should include:

- known placeholder phrases already observed,
- semantically equivalent fallback patterns if they are explicit and safe to detect,
- known stub owner filenames or exports if applicable.

Do not make the validator so broad that it causes random false positives, but do make it strong enough to block recurrence.

### 2. Preserve existing anti-regression checks

Do not weaken current checks related to:

- runtime bridge reintroduction,
- ownership collapse,
- localhost/debug leakage,
- missing homepage surface registrations.

### 3. Artifact proof

After rebuild, capture for each surface:

- wrapper file path
- owner file path
- mounted real component path
- emitted primary bundle
- emitted secondary chunk(s)
- proof that placeholder text is absent
- proof that intended real component chain is present

## Required live proof

Deploy the rebuilt artifact through the normal tenant path and verify:

- all five web parts appear in the toolbox,
- each web part adds to the page successfully,
- each web part renders intended UI rather than placeholder copy,
- no fatal HB runtime error appears in console,
- no fallback/stub content appears on the page.

## Constraints / guardrails

- No "works on localhost" closeout.
- No package approval without live page proof.
- No reliance on screenshot-only evidence; emitted artifact proof is required too.

## Acceptance criteria

This prompt is complete only when:

1. validators fail on placeholder/stub regression,
2. the rebuilt artifact passes all homepage validations,
3. live SharePoint behavior shows real UI for all five surfaces,
4. and deployment evidence is recorded.

## Required outputs

Create or update:

- validator/change log
- emitted-artifact proof note
- deployment proof note
- final go/no-go note for this remediation chain
