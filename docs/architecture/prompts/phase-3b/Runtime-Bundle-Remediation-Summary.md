# Runtime Bundle Remediation Summary

## Objective

Fix the confirmed live-runtime defect in the HB Central homepage package that causes all focused homepage web parts to fail with `failed to load runtime bundle` after being added to a SharePoint page.

## Confirmed live evidence

The current deployed artifact is now known to fail in the target environment as follows:
- tenant-wide deployment succeeded and the web parts became available
- when a homepage surface is added to a page, the wrapper begins loading
- the lazy-loaded runtime owner chunk then crashes in-browser
- the page shows the per-surface fallback error message

The decisive error observed in live execution is:
- `ReferenceError: exports is not defined`
- thrown from `chunk.357_775c0006db12ff929954.js`
- reached from `hb-central-homepage-featured-projects-web-part_d1c70dfab7c182850c34.js`

## Working diagnosis

The artifact appears structurally correct at the SPFx manifest/package layer but is broken at the emitted runtime-code layer.

The most likely defect class is:
- browser-incompatible CommonJS-style code in the lazy-loaded focused owner chunks
- likely originating from how the wrapper imports the owner modules and/or how those owner modules are emitted into split chunks by the current build pipeline

Earlier audits already established that wrappers dynamically import focused owner modules from `lib-commonjs/src/runtime/owners/*`. That path is now the highest-value investigation target.

## Prompt-01 closure status (2026-04-04)

- Prompt-01 forensics outputs are frozen at `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-01/`.
- Canonical closure authority is now `docs/architecture/blueprint/phase-3b-runtime-chunk-forensics-and-prompt-01-closure.md`.
- Prompt-01 concludes `Confirmed root cause`: wrapper imports target `lib-commonjs` owner modules and emitted lazy chunks preserve CommonJS signatures (`Object.defineProperty(exports, ...)`, `exports.*`, `require(...)`), including failing path `chunk.357_775c0006db12ff929954.js`.
- Prompt-02 is the next implementation step; Prompt-03/Prompt-04 remain downstream hardening and live-proof scope.

## Prompt-02 closure status (2026-04-04)

- Prompt-02 remediation outputs are frozen at `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-02/`.
- Canonical closure authority is now `docs/architecture/blueprint/phase-3b-browser-safe-owner-build-remediation-and-prompt-02-closure.md`.
- Prompt-02 confirms browser-safe owner remediation in current repo truth:
  - wrapper imports now target `src/runtime/owners-browser/*`,
  - emitted lazy owner chunks no longer contain `Object.defineProperty(exports, ...)`, `exports.*`, or bare `require(...)`,
  - `.sppkg` ownership invariants remain intact (five unique entry/primary ownership values).
- Prompt-03 and Prompt-04 remain open downstream scope.

## Scope of remediation

This package is deliberately narrow.

It is intended to:
1. prove the exact root cause in emitted code and build configuration
2. fix the owner/runtime chunk emission so the browser receives executable code
3. add validator coverage for this exact defect class
4. rebuild and prove the repaired artifact live in SharePoint

It is not intended to:
- redesign the homepage
- replace the five-surface split-bundle model
- split the solution into multiple `.sppkg` files
- remove Heft
- relax the current validators

## Recommended execution sequence

### Prompt 01
Perform repo-truth and emitted-chunk forensics. Confirm exactly why the lazy-loaded runtime chunk contains browser-incompatible code and identify the smallest correct fix point.

### Prompt 02
Implement the fix in the runtime owner import/build path so the emitted lazy-loaded chunks are browser-safe for SPFx execution.

### Prompt 03
Add runtime-format regression guards so future build artifacts fail before release if a lazy-loaded homepage chunk reverts to CommonJS/browser-incompatible output.

### Prompt 04
Run a clean rebuild, validate the artifact, redeploy, and capture live proof that all surfaces now render correctly.

## Success criteria

The remediation is complete only when all of the following are true:
- every homepage surface renders in SharePoint without the runtime-bundle fallback
- no lazy-loaded homepage chunk throws `exports is not defined`, `require is not defined`, or equivalent browser/module-format errors
- the rebuilt `.sppkg` remains one solution with five focused homepage surfaces
- validator output explicitly proves both ownership integrity and browser-safe runtime chunk posture
- live deployment evidence is retained with the artifact-of-record
