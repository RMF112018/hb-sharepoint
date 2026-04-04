# HB Central Homepage Runtime Bundle Remediation Package

## Objective

Provide a narrowly scoped implementation package for the confirmed live-runtime failure affecting the HB Central homepage web parts after tenant-wide deployment.

This package is intentionally limited to the now-confirmed defect class:
- the deployed homepage web parts are visible in SharePoint,
- the primary web part bundles load,
- the lazy-loaded runtime owner chunk then crashes in-browser,
- and the page falls back to the per-surface message `failed to load runtime bundle`.

## Why this package exists

Earlier audit work concluded the `.sppkg` structure, manifest ownership, and packaging posture were directionally correct. Live tenant execution proved a narrower but decisive blocker:
- `chunk.357_775c0006db12ff929954.js` throws `ReferenceError: exports is not defined`
- the failure originates after the focused homepage web part primary bundle begins rendering
- the defect is consistent with browser-incompatible CommonJS-style code inside the lazy-loaded runtime chunk
- the current deployed artifact is therefore a runtime **No-Go** until rebuilt correctly

## Package contents

1. `README.md`
2. `Runtime-Bundle-Remediation-Summary.md`
3. `Prompt-01-Runtime-Chunk-Forensics-and-Root-Cause.md`
4. `Prompt-02-Browser-Safe-Owner-Build-Remediation.md`
5. `Prompt-03-Validator-and-Regression-Hardening.md`
6. `Prompt-04-Rebuild-Deploy-and-Live-Proof.md`

## Recommended reading order

1. `Runtime-Bundle-Remediation-Summary.md`
2. `Prompt-01-Runtime-Chunk-Forensics-and-Root-Cause.md`
3. `Prompt-02-Browser-Safe-Owner-Build-Remediation.md`
4. `Prompt-03-Validator-and-Regression-Hardening.md`
5. `Prompt-04-Rebuild-Deploy-and-Live-Proof.md`

## Prompt-01 Status (2026-04-04)

- Prompt-01 closure is complete for runtime-chunk forensics and root-cause proof scope.
- Evidence directory: `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-01/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3b-runtime-chunk-forensics-and-prompt-01-closure.md`
- Current validated disposition: wrappers import `lib-commonjs` runtime owner artifacts, emitted lazy chunks retain CommonJS signatures (`exports`/`require`), and Prompt-01 closes with `Confirmed root cause`.
- At Prompt-01 closure time, Prompt-02, Prompt-03, and Prompt-04 remained open implementation scope.

## Prompt-02 Status (2026-04-04)

- Prompt-02 closure is complete for browser-safe owner build remediation scope.
- Evidence directory: `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-02/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3b-browser-safe-owner-build-remediation-and-prompt-02-closure.md`
- Current validated disposition: wrapper imports now resolve to browser-safe owner modules under `src/runtime/owners-browser/*`, affected lazy chunks no longer emit `exports`/`require` CommonJS signatures, and package ownership invariants remain five-way unique.
- Prompt-03 is now closed; Prompt-04 remains open hardening/live-proof scope.

## Prompt-03 Status (2026-04-04)

- Prompt-03 closure is complete for validator and regression hardening scope.
- Evidence directory: `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-03/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3b-validator-and-regression-hardening-and-prompt-03-closure.md`
- Current validated disposition: `tools/validate-sppkg.mjs` now inspects homepage lazy owner chunks in packaged `ClientSideAssets/chunk.*.js` artifacts and hard-fails on browser-incompatible CommonJS signatures (`Object.defineProperty(exports, ...)`, `exports.mountHomepage...`, `require(...)`) while preserving existing ownership and anti-bridge validation gates.
- Prompt-04 is now closed under Conditional-Go release classification pending external tenant live-proof artifacts.

## Prompt-04 Status (2026-04-04)

- Prompt-04 closure is complete for clean rebuild, artifact provenance, deployment-proof framing, and final release-decision scope.
- Evidence directory: `docs/architecture/prompts/phase-3b/evidence/2026-04-04-prompt-04/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3b-rebuild-deploy-live-proof-and-prompt-04-closure.md`
- Current validated disposition: clean-state `pnpm build:sppkg:homepage` execution and validator output are captured with artifact digest/stat provenance for `dist/sppkg/hb-central-homepage.sppkg`; tenant deployment screenshots and live per-surface console proof are explicitly tracked as pending external operator evidence.
- Current release classification: `Conditional Go`.

## Scope boundary

This package is **not** a new architecture migration.

It does **not** authorize:
- converting the homepage to multiple `.sppkg` packages
- redesigning the homepage surface model
- weakening the current five-surface split-bundle strategy
- removing the validator-gated Heft packaging flow
- introducing a new monolithic runtime bridge
- broad UI refactors unrelated to the runtime bundle failure

It is limited to:
- proving the exact root cause of the broken lazy-loaded runtime chunks
- fixing the emitted module/chunk format so the browser can execute the owner chunks
- hardening validators so this exact defect class is caught before packaging/release
- rebuilding and proving the corrected artifact in SharePoint

## Repo-truth starting point

The prompts assume the current relevant repo area remains centered on:
- `apps/hb-central-homepage/`
- homepage wrapper files that dynamically import focused owner modules
- `lib-commonjs/src/runtime/owners/*`
- `apps/hb-central-homepage/config/config.json`
- `apps/hb-central-homepage/config/heft.json`
- `apps/hb-central-homepage/package.json`
- root `package.json`
- `tools/validate-homepage-webpart-wiring.mjs`
- `tools/validate-sppkg.mjs`

## Operating doctrine

The local code agent should:
- inspect repo truth first
- read the smallest authoritative file set first
- avoid rereading files still in current context or memory unless the file changed or the task scope expanded
- preserve the one-solution / five-surface packaging model unless repo truth proves that model itself is broken
- preserve Heft-native packaging
- preserve the existing anti-collapse and anti-bridge validator posture
- prefer the smallest correct fix over broad refactors

## Exit condition

This package is complete only when:
- all affected homepage surfaces render successfully in SharePoint
- no browser-loaded runtime chunk throws `exports is not defined` or similar module-format errors
- the rebuilt `.sppkg` passes the existing validators plus the new runtime-format checks
- live deployment proof is captured and retained with the rebuilt artifact
