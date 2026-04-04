# 01 Placeholder Owner Forensics

## Purpose

Identify where placeholder proof-of-load behavior is currently implemented for focused homepage owners and classify the exact substitution boundary.

## Authoritative files inspected

- `apps/hb-central-homepage/src/webparts/*/*WebPart.js`
- `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepage*.js`
- `apps/hb-central-homepage/src/runtime/owners/mountHomepage*.tsx`
- `tools/validate-homepage-webpart-wiring.mjs`
- phase-3b Prompt-01/02/03/04 closure artifacts for runtime-remediation provenance

## Confirmed findings

- All five focused wrappers dynamically import browser-safe owner entrypoints under `src/runtime/owners-browser/mountHomepage*.js`.
- Each `owners-browser` module currently renders static proof-of-load placeholder text in the success path (for example, `"...runtime owner is loaded through the browser-safe owner path."`).
- Real mount implementations already exist in `src/runtime/owners/mountHomepage*.tsx` and mount the intended React surface components (`HbCentralHomepageHost`, `HomepageShellHero`, `HomepageFeaturedProjects`, `HomepageCompanyPulse`, `HomepageQuickActions`).
- `tools/validate-homepage-webpart-wiring.mjs` enforces wrapper import paths to `owners-browser` only; it does not validate real-UI mount restoration inside those browser-safe entrypoints.

## Substitution boundary classification

- Substitution occurred in the **source owner-adapter layer** (`src/runtime/owners-browser/*`).
- Substitution did **not** originate from packaging-only transformation.
- Wrapper wiring remains browser-safe and intact; the gap is that browser-safe owner modules were replaced with placeholder render logic instead of delegating to real owner mounts.

## Restoration compatibility decision

The browser-safe fix can remain intact while restoring real mounts by reconnecting `src/runtime/owners-browser/mountHomepage*.js` to the intended real owner mount targets under `src/runtime/owners/mountHomepage*.tsx`.
