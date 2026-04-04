# 01 Emitted Chunk Evidence

## Artifact sources inspected

- `apps/hb-central-homepage/dist/hb-central-homepage-*-web-part_*.js`
- `apps/hb-central-homepage/dist/chunk.*.js`
- `apps/hb-central-homepage/sharepoint/solution/debug/ClientSideAssets/*.js`
- `dist/sppkg/hb-central-homepage.sppkg`

## Emitted-chunk trace table

| Surface | Primary emitted JS | Secondary emitted chunk(s) | Emitted export name(s) | Emitted component/module reference chain | Stub text present in emitted chunk |
| --- | --- | --- | --- | --- | --- |
| Homepage Sections | `hb-central-homepage-sections-web-part_9c9c07b55acd9bfb8d5d.js` | `chunk.88_5b3113cfd8258bab274f.js` | `mountHomepageSections` | primary bundle `c.e(88)` -> `c.bind(c,88)` -> chunk export `mountHomepageSections` -> inline `createElement` section tree | Yes (`"Homepage sections surface is available."`) |
| Hero | `hb-central-homepage-hero-web-part_6dc4c352c10bc6803b91.js` | `chunk.921_0af80efb9abe1a4e1f50.js` | `mountHomepageHero` | primary bundle `c.e(921)` -> `c.bind(c,921)` -> chunk export `mountHomepageHero` -> inline `createElement` section tree | Yes (`"Hero surface content is available."`) |
| Featured Projects | `hb-central-homepage-featured-projects-web-part_2671f8877c3d645901c2.js` | `chunk.763_6865db265c0b9512f796.js` | `mountHomepageFeaturedProjects` | primary bundle `c.e(763)` -> `c.bind(c,763)` -> chunk export `mountHomepageFeaturedProjects` -> inline `createElement` section tree | Yes (`"Featured project highlights are available."`) |
| Company Pulse | `hb-central-homepage-company-pulse-web-part_caa97484d972ab9a0346.js` | `chunk.678_77ffaf1b55c80a8dbb6c.js` | `mountHomepageCompanyPulse` | primary bundle `c.e(678)` -> `c.bind(c,678)` -> chunk export `mountHomepageCompanyPulse` -> inline `createElement` section tree | Yes (`"Company pulse updates are available."`) |
| Quick Actions | `hb-central-homepage-quick-actions-web-part_c5716ad01ec6875975a6.js` | `chunk.462_eadda890a8478f26dcd9.js` | `mountHomepageQuickActions` | primary bundle `c.e(462)` -> `c.bind(c,462)` -> chunk export `mountHomepageQuickActions` -> inline `createElement` section tree | Yes (`"Quick action shortcuts are available."`) |

## Source-vs-emitted divergence proof

- Source wrappers import `src/runtime/owners-browser/mountHomepage*.js` and expect `mountHomepage*` exports.
- Dist primary bundles preserve this behavior as numeric chunk loads (`c.e(<id>)`).
- Dist secondary chunks export `mountHomepage*` symbols, but their mounted behavior is inline placeholder markup, not delegation to real owners in `src/runtime/owners/mountHomepage*.tsx`.
- The emitted behavior therefore matches current `owners-browser` source stubs and diverges from intended real owner mounts already present in `src/runtime/owners/`.

## `.sppkg` client-side asset proof

`unzip -l dist/sppkg/hb-central-homepage.sppkg` confirms all five primary bundles and all five lazy chunks are present in packaged output under `ClientSideAssets/`:

- `ClientSideAssets/hb-central-homepage-sections-web-part_9c9c07b55acd9bfb8d5d.js`
- `ClientSideAssets/hb-central-homepage-hero-web-part_6dc4c352c10bc6803b91.js`
- `ClientSideAssets/hb-central-homepage-featured-projects-web-part_2671f8877c3d645901c2.js`
- `ClientSideAssets/hb-central-homepage-company-pulse-web-part_caa97484d972ab9a0346.js`
- `ClientSideAssets/hb-central-homepage-quick-actions-web-part_c5716ad01ec6875975a6.js`
- `ClientSideAssets/chunk.88_5b3113cfd8258bab274f.js`
- `ClientSideAssets/chunk.921_0af80efb9abe1a4e1f50.js`
- `ClientSideAssets/chunk.763_6865db265c0b9512f796.js`
- `ClientSideAssets/chunk.678_77ffaf1b55c80a8dbb6c.js`
- `ClientSideAssets/chunk.462_eadda890a8478f26dcd9.js`
