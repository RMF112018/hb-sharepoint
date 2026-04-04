# 02 Impact on Architecture and Packaging

## Architecture impact

Confirmed:

- Removed wrapper dependency on `lib-commonjs` owner artifact imports for runtime-owner chunk loading.
- Introduced browser-safe owner entrypoint layer at `src/runtime/owners-browser/` used only by SPFx wrapper dynamic imports.
- Preserved the one-solution/five-surface model and wrapper-level ownership boundaries.

Not changed:

- No new package added.
- No manifest topology changes.
- No change to surface IDs, registration contracts, or `.sppkg` structure.
- No shared `dist/homepage.js` bridge reintroduced.

## Packaging impact

Confirmed:

- Heft-native packaging command path remains authoritative (`spfx:package`).
- Root `build:sppkg:homepage` command remains validator-gated.
- Packaged ownership uniqueness remains intact across all five surfaces.

## Operational impact

- Prompt-02 removes the direct CommonJS lazy-owner chunk failure mode and restores browser execution viability for wrapper-loaded owner chunks.
- Prompt-03 and Prompt-04 remain required for complete regression hardening and live proof closeout.
