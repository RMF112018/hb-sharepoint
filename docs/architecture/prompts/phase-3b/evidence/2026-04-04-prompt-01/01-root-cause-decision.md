# 01 Root Cause Decision

## Decision scope

This decision closes Prompt-01 only and defines the smallest remediation point for Prompt-02 implementation.

## Confirmed findings

- The five homepage wrappers dynamically import owner modules from `../../../lib-commonjs/src/runtime/owners/*`.
- Those owner inputs are CommonJS-oriented (`exports.*`, `Object.defineProperty(exports, ...)`, `require(...)`).
- The emitted lazy runtime chunks (`chunk.357_*`, `chunk.603_*`, `chunk.613_*`, `chunk.725_*`, `chunk.757_*`) preserve the same CommonJS signatures.
- The featured projects live-failure path (`hb-central-homepage-featured-projects-web-part_d1c70dfab7c182850c34.js` -> `chunk.357_775c0006db12ff929954.js`) is directly explained by emitted `exports`/`require` usage in a browser chunk context.

## Root-cause classification

- `lib-commonjs` usage is the **direct cause** of the browser module-format failure in lazy owner chunks.
- Build/bundler behavior is a **contributing path**, because it emits those selected CommonJS owner artifacts as lazy browser chunks without converting them to a browser-safe module shape.
- SPFx manifest/package structure is **not** the root cause for this defect class.

## Smallest correct remediation point

Change the wrapper owner import path so lazy runtime owners resolve to browser-safe module inputs, then validate emitted lazy chunks no longer contain `exports`/`require` CommonJS signatures.

## Go-forward plan for Prompt-02

1. Replace wrapper dynamic imports that target `lib-commonjs/src/runtime/owners/*` with browser-safe owner module path(s).
2. Rebuild and inspect affected lazy chunks for CommonJS signature removal.
3. Verify all five wrapper surfaces retain one-solution/five-surface packaging invariants.
4. Record implementation and before/after emitted-chunk observations.

Confirmed root cause
