# Phase-3 Acceptance Checklist

Closeout posture for Prompt-11: **Conditional-Go** (external tenant-readiness evidence still required for full Go).

## Technical outcomes

- [x] Homepage production packaging is Heft-native.
- [x] Gulp is no longer part of the authoritative homepage package path.
- [x] The production runtime no longer depends on `dist/homepage.js`.
- [x] Homepage surfaces preserve the existing five web part identities unless a documented migration requires otherwise.
- [x] Each homepage surface has explicit bundle ownership.
- [x] Shared UI remains shared through source/package boundaries, not through a shared exported runtime bundle.

## Required validation evidence

- [x] Build/package logs from canonical Heft commands are captured.
- [x] Generated package/debug structures are inspected.
- [x] Final `.sppkg` ZIP contents are inspected programmatically.
- [x] Validation proves expected web part registrations exist.
- [x] Validation proves no localhost references remain.
- [x] Validation proves no unsupported feature registrations remain.
- [x] Validation proves the package no longer collapses all surfaces onto one unintended primary entry module / asset.
- [x] Validation proves wrappers no longer import the retired shared runtime bridge in the production path.

## Packaging/build outputs

- [x] Final homepage `.sppkg` is generated successfully.
- [ ] Package metadata aligns with intended tenant deployment behavior. (Pending tenant app-catalog validation evidence.)
- [x] Output location and packaging instructions are documented.
- [x] Any obsolete packaging scripts are removed or explicitly marked non-authoritative.

## Deployment/readiness checks

- [ ] Package uploads successfully to the app catalog. (External evidence pending.)
- [ ] App catalog does not report package validation errors. (External evidence pending.)
- [ ] Toolbox entries remain correct. (External evidence pending.)
- [ ] Surfaces render correctly on target modern page layouts. (External evidence pending.)
- [ ] Full-width surfaces are verified where supported. (External evidence pending.)
- [ ] SharePoint Page Diagnostics review is completed after deployment. (External evidence pending.)

## Documentation updates

- [ ] Packaging/build README is updated.
- [x] Architecture/migration documentation is updated.
- [x] Runtime/version decisions are documented.
- [x] Validation/readiness process is documented.
- [x] Open questions or deferred follow-ons are documented.

## Go / no-go conditions

### Go only if all are true

- [x] Heft-native packaging is real, not nominal.
- [x] Shared runtime bridge is removed from the deployable path.
- [x] Artifact-level validation proves real bundle separation.
- [ ] No critical runtime/deployment regressions remain. (Tenant runtime evidence pending.)
- [x] Documentation matches repo truth.

### No-go if any are true

- [ ] The shipped package still routes all surfaces through one hidden primary entry module / asset without explicit documented intent.
- [ ] Gulp remains part of the authoritative package path.
- [ ] The production path still depends on `dist/homepage.js`.
- [ ] Deployment/package validation errors remain unresolved.
- [ ] Runtime/version compatibility is still ambiguous and untested.
