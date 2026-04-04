# 01 Prompt-02 Restoration Handoff

## Prompt-02 objective boundary

Restore real homepage UI mounts behind browser-safe owner entrypoints without changing wrapper dynamic-import topology or reintroducing runtime-bundle module-format regressions.

## Exact files Prompt-02 must change

- `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageSections.js`
- `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageHero.js`
- `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageFeaturedProjects.js`
- `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageCompanyPulse.js`
- `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageQuickActions.js`

## Required restoration behavior

For each file above:

1. Preserve exported function name and signature used by wrappers (`mountHomepage...`).
2. Preserve browser-safe entrypoint role (do not repoint wrappers back to `lib-commonjs`).
3. Remove placeholder proof-of-load success-path rendering.
4. Delegate mount/unmount behavior to the corresponding real owner mount target in `src/runtime/owners/mountHomepage*.tsx`.

## Explicit non-goals for Prompt-02

- No wrapper import-path rewiring.
- No bundling strategy redesign.
- No monolithic runtime bridge reintroduction.
- No unrelated UI or data-layer refactors.

## Verification expectations carried forward

Prompt-02 must confirm:

- wrappers still import browser-safe owner entrypoints,
- runtime-format validator protections remain intact,
- real surface UI mounts render in place of placeholder text in local/package proof.
