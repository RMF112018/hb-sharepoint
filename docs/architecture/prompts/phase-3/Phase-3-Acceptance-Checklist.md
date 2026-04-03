# Phase-3 Acceptance Checklist

## Technical outcomes
- [ ] Homepage production packaging is Heft-native.
- [ ] Gulp is no longer part of the authoritative homepage package path.
- [ ] The production runtime no longer depends on `dist/homepage.js`.
- [ ] Homepage surfaces preserve the existing five web part identities unless a documented migration requires otherwise.
- [ ] Each homepage surface has explicit bundle ownership.
- [ ] Shared UI remains shared through source/package boundaries, not through a shared exported runtime bundle.

## Required validation evidence
- [ ] Build/package logs from canonical Heft commands are captured.
- [ ] Generated package/debug structures are inspected.
- [ ] Final `.sppkg` ZIP contents are inspected programmatically.
- [ ] Validation proves expected web part registrations exist.
- [ ] Validation proves no localhost references remain.
- [ ] Validation proves no unsupported feature registrations remain.
- [ ] Validation proves the package no longer collapses all surfaces onto one unintended primary entry module / asset.
- [ ] Validation proves wrappers no longer import the retired shared runtime bridge in the production path.

## Packaging/build outputs
- [ ] Final homepage `.sppkg` is generated successfully.
- [ ] Package metadata aligns with intended tenant deployment behavior.
- [ ] Output location and packaging instructions are documented.
- [ ] Any obsolete packaging scripts are removed or explicitly marked non-authoritative.

## Deployment/readiness checks
- [ ] Package uploads successfully to the app catalog.
- [ ] App catalog does not report package validation errors.
- [ ] Toolbox entries remain correct.
- [ ] Surfaces render correctly on target modern page layouts.
- [ ] Full-width surfaces are verified where supported.
- [ ] SharePoint Page Diagnostics review is completed after deployment.

## Documentation updates
- [ ] Packaging/build README is updated.
- [ ] Architecture/migration documentation is updated.
- [ ] Runtime/version decisions are documented.
- [ ] Validation/readiness process is documented.
- [ ] Open questions or deferred follow-ons are documented.

## Go / no-go conditions
### Go only if all are true
- [ ] Heft-native packaging is real, not nominal.
- [ ] Shared runtime bridge is removed from the deployable path.
- [ ] Artifact-level validation proves real bundle separation.
- [ ] No critical runtime/deployment regressions remain.
- [ ] Documentation matches repo truth.

### No-go if any are true
- [ ] The shipped package still routes all surfaces through one hidden primary entry module / asset without explicit documented intent.
- [ ] Gulp remains part of the authoritative package path.
- [ ] The production path still depends on `dist/homepage.js`.
- [ ] Deployment/package validation errors remain unresolved.
- [ ] Runtime/version compatibility is still ambiguous and untested.
