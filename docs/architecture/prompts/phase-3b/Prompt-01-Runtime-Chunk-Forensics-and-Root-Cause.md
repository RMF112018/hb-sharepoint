# Prompt-01 — Runtime Chunk Forensics and Root Cause

## Objective

Determine the exact root cause of the HB Central homepage live runtime failure in the smallest authoritative way possible.

You must prove why the deployed homepage surface bundles reach a lazy-loaded runtime chunk that then throws browser-side module-format errors such as `ReferenceError: exports is not defined`.

Do **not** implement broad remediation in this prompt until the root cause is proven from repo truth and emitted artifact truth.

## Scope

In scope:
- homepage wrapper files for the five focused surfaces
- the focused runtime owner modules currently imported by those wrappers
- the homepage app build/package configuration
- the emitted browser assets produced by the current packaging flow
- the relationship between source module format and emitted chunk format

Out of scope:
- homepage redesign
- multi-package migration
- replacing the five-surface split-bundle strategy
- unrelated UI refactors
- tenant configuration work unrelated to this runtime defect

## Files to inspect first

Read the smallest authoritative set first.

1. `apps/hb-central-homepage/config/config.json`
2. `apps/hb-central-homepage/config/heft.json`
3. `apps/hb-central-homepage/package.json`
4. root `package.json`
5. the five homepage wrapper files under `apps/hb-central-homepage/src/webparts/**`
6. the focused owner modules currently imported from `lib-commonjs/src/runtime/owners/*`
7. any tsconfig / build config that governs how those owner modules are transpiled and bundled
8. `tools/validate-homepage-webpart-wiring.mjs`
9. `tools/validate-sppkg.mjs`
10. the emitted homepage primary bundles and secondary chunks from the most recent local build output

Do **not** reread files still in current context or memory unless the file changed or the task scope expanded.

## Evidence you already have

Treat the following as already-established starting evidence and reconcile against repo truth:
- live SharePoint deployment succeeded
- the web parts are visible and insertable on the page
- page render then fails with `failed to load runtime bundle`
- live browser error includes `ReferenceError: exports is not defined`
- the failing code path includes `chunk.357_775c0006db12ff929954.js`
- the failing primary bundle includes `hb-central-homepage-featured-projects-web-part_d1c70dfab7c182850c34.js`
- prior audit work identified focused dynamic imports targeting `lib-commonjs/src/runtime/owners/*`

## Required work

1. Map each homepage wrapper to the exact focused owner module it imports.
2. Identify whether those owner modules are authored and/or published in a CommonJS-oriented form.
3. Trace how those modules move through the homepage build pipeline into emitted secondary chunks.
4. Inspect the emitted chunk source and prove whether it contains browser-incompatible patterns such as:
   - `exports.`
   - `Object.defineProperty(exports, ...)`
   - `module.exports`
   - bare `require(...)`
   - relative CommonJS requires that cannot execute in the browser chunk runtime
5. Determine whether the defect originates from:
   - import-path selection
   - tsconfig/module target
   - package entrypoint resolution
   - webpack/Heft bundling behavior
   - or a combination of the above
6. Identify the **smallest correct remediation point**.
7. Confirm whether the defect affects one surface only or all five surfaces through the same owner/runtime path pattern.

## Constraints / guardrails

- Do not broaden this into a homepage architecture rewrite.
- Do not replace one `.sppkg` with many `.sppkg` files.
- Do not remove the current split-bundle ownership model unless repo truth proves it is itself defective.
- Do not weaken or bypass validators.
- Do not assume the fix is in SharePoint configuration; prove whether it is in emitted code first.
- Do not stop at a theory. You must show the exact source-to-output chain that creates the failing runtime chunk.

## Acceptance criteria

This prompt is complete only when you deliver all of the following:
- a root-cause statement tied to exact repo files and emitted asset evidence
- a mapping of wrappers -> owners -> emitted chunks
- a determination of whether `lib-commonjs` usage is the direct cause, a contributing cause, or a red herring
- the smallest correct remediation point clearly identified
- a short go-forward implementation plan for Prompt-02 with no unnecessary scope

## Required outputs

Create or update a concise markdown artifact set under the current remediation working area that includes:
- `01-runtime-chunk-forensics.md`
- `01-wrapper-owner-chunk-map.md`
- `01-root-cause-decision.md`

Your `01-root-cause-decision.md` must end with one explicit conclusion:
- `Confirmed root cause`
- `Probable root cause pending one remaining verification`
- `Root cause not yet proven`

Do not proceed to broad code changes in this prompt unless the exact remediation point becomes obvious and minimal.
