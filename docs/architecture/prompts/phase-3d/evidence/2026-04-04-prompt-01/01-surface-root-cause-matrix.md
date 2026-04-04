# 01 Surface Root-Cause Matrix

## Placeholder/stub phrase and fallback semantics inventory

### Placeholder/stub phrases found in current source owners

From `apps/hb-central-homepage/src/runtime/owners-browser/mountHomepage*.js`:

- `Homepage sections surface is available.`
- `Hero surface content is available.`
- `Featured project highlights are available.`
- `Company pulse updates are available.`
- `Quick action shortcuts are available.`

### Matching placeholder/stub phrases found in emitted lazy chunks

From `apps/hb-central-homepage/dist/chunk.*.js` and mirrored in `sharepoint/solution/debug/ClientSideAssets/chunk.*.js`:

- `Homepage sections surface is available.`
- `Hero surface content is available.`
- `Featured project highlights are available.`
- `Company pulse updates are available.`
- `Quick action shortcuts are available.`

### Related fallback semantics observed in wrappers

From `apps/hb-central-homepage/src/webparts/*/*WebPart.js`:

- Runtime fallback message pattern: `HB Central ... failed to load runtime bundle.`
- Export guard pattern: `mountHomepage... export is unavailable`

These wrapper fallbacks are error-path semantics; they are not the active placeholder success path currently observed in owner mounts.

## Surface-by-surface defect classification

| Surface | Classification | Evidence | Why this classification applies |
| --- | --- | --- | --- |
| Homepage Sections | `import path resolves to stub` | Wrapper imports `../../runtime/owners-browser/mountHomepageSections.js`; owner renders `Homepage sections surface is available.`; emitted `chunk.88_5b3113cfd8258bab274f.js` carries same text | Wrapper resolves to a browser-safe owner file that is itself a stub success path |
| Hero | `import path resolves to stub` | Wrapper imports `../../runtime/owners-browser/mountHomepageHero.js`; owner renders `Hero surface content is available.`; emitted `chunk.921_0af80efb9abe1a4e1f50.js` carries same text | Wrapper resolves to a browser-safe owner file that is itself a stub success path |
| Featured Projects | `import path resolves to stub` | Wrapper imports `../../runtime/owners-browser/mountHomepageFeaturedProjects.js`; owner renders `Featured project highlights are available.`; emitted `chunk.763_6865db265c0b9512f796.js` carries same text | Wrapper resolves to a browser-safe owner file that is itself a stub success path |
| Company Pulse | `import path resolves to stub` | Wrapper imports `../../runtime/owners-browser/mountHomepageCompanyPulse.js`; owner renders `Company pulse updates are available.`; emitted `chunk.678_77ffaf1b55c80a8dbb6c.js` carries same text | Wrapper resolves to a browser-safe owner file that is itself a stub success path |
| Quick Actions | `import path resolves to stub` | Wrapper imports `../../runtime/owners-browser/mountHomepageQuickActions.js`; owner renders `Quick action shortcuts are available.`; emitted `chunk.462_eadda890a8478f26dcd9.js` carries same text | Wrapper resolves to a browser-safe owner file that is itself a stub success path |

## Prompt-01 baseline conclusion

- All five surfaces converge on the same defect class in current repo truth: wrapper import paths are browser-safe but terminate in placeholder/stub owners.
- Real owners under `src/runtime/owners/mountHomepage*.tsx` are present but not in the active wrapper import chain.
- Emitted artifact evidence is consistent with source owner stubs (no source-to-emitted mismatch for this defect class).
