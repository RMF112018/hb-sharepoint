# 03 Release Gate Updates

## Mandatory gate path

Prompt-03 hardening is enforced through the existing release chain:

1. `pnpm build:sppkg:homepage`
2. `pnpm validate:homepage:package`
3. `node tools/validate-homepage-webpart-wiring.mjs`
4. `node tools/validate-sppkg.mjs`

## Gate semantics after Prompt-03

A successful package build is now insufficient unless all of the following pass:

- wrapper/owner import wiring checks,
- source owner placeholder phrase-family checks,
- packaged lazy owner chunk placeholder phrase-family checks,
- runtime CommonJS format checks,
- ownership anti-collapse checks.

## Prompt-03 acceptance coverage

The release gate now blocks silent recurrence where owner chunks load but ship placeholder-style success-path content.
