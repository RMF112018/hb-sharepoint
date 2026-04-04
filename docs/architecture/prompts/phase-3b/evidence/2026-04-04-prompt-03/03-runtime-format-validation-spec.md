# 03 Runtime Format Validation Spec

## Defect signatures blocked

The validator now fails homepage package validation when any inspected lazy runtime-owner chunk contains:

- `Object.defineProperty(exports, ...)`
- `exports.mountHomepage...`
- `require(...)`

These signatures represent the browser-incompatible CommonJS defect class confirmed in Prompt-01.

## Artifact area inspected

- Source artifact: packaged `.sppkg` built for homepage release validation.
- Inspected entries: `ClientSideAssets/chunk.*.js` inside the `.sppkg`.
- Precision rule: only chunk entries that contain expected homepage runtime-owner mount exports are treated as runtime-owner chunks.
- Expected runtime-owner exports:
  - `mountHomepageSections`
  - `mountHomepageHero`
  - `mountHomepageFeaturedProjects`
  - `mountHomepageCompanyPulse`
  - `mountHomepageQuickActions`

## Failure conditions and messages

Validation fails when any of the following occurs:

- no runtime-owner lazy chunks are discovered for expected exports;
- one or more expected runtime-owner exports are missing;
- one expected runtime-owner export maps to more than one lazy chunk;
- any inspected runtime-owner chunk contains blocked CommonJS signatures.

Failure output includes:

- explicit reason line(s) for missing/duplicate coverage and/or blocked signatures;
- affected chunk entry path(s);
- a runtime-owner lazy-chunk inspection summary in the thrown validation error.

Primary failure-message fragments emitted by `tools/validate-sppkg.mjs`:

- `unable to locate homepage runtime owner lazy chunks in ClientSideAssets/chunk.*.js for expected mounts:`
- `missing runtime owner mount exports in lazy chunk inspection:`
- `runtime owner mount exports mapped to multiple lazy chunks:`
- `browser-incompatible CommonJS runtime signatures detected in homepage lazy owner chunks:`

Representative known-bad pattern (Prompt-01 defect class) that now fails:

- lazy owner chunk body includes one or more of:
  - `Object.defineProperty(exports, ...)`
  - `exports.mountHomepage...`
  - `require(...)`

## Why this check is release load-bearing

This check prevents recurrence of the exact runtime defect class that caused homepage surfaces to fail after deploy (`exports is not defined` from lazy owner chunk execution). Because it is wired into mandatory `validate:homepage:package` and transitively into `build:sppkg:homepage`, it is a pre-release gate rather than advisory documentation.
