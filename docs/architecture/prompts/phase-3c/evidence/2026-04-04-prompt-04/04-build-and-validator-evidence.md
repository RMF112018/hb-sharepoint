# 04 Build and Validator Evidence

## Purpose

Capture clean-state rebuild provenance for the phase-3c Prompt-04 artifact-of-record and retain exact validator-backed command output.

## Clean-state execution

Cleanup step (captured):

- `rm -rf apps/hb-central-homepage/temp apps/hb-central-homepage/lib apps/hb-central-homepage/lib-commonjs apps/hb-central-homepage/sharepoint/solution/debug`
- `rm -f dist/sppkg/hb-central-homepage.sppkg`

Primary build and validation command:

- `pnpm build:sppkg:homepage`

## Artifact-of-record

- Path: `dist/sppkg/hb-central-homepage.sppkg`
- SHA-256: `a2ec15d3d939f8e7814ce48f35fd2e1dc31bc35cd8be10b3ab034e2b594ad8ab`
- Size/mtime snapshot: `dist/sppkg/hb-central-homepage.sppkg|35551|2026-04-04T07:21:55-0400`

## Validator outcomes

Confirmed from captured command output:

- `validate-homepage-webpart-wiring.mjs`: passed (5/5 wrapper-owner mount checks).
- `validate-sppkg.mjs`: passed with expected structure, ownership, and runtime-format checks.
- Runtime-format gate status: passed (`runtime owner CommonJS signatures: none`).
- Placeholder-regression gate status: passed (`runtime owner placeholder phrases: none`).

## Exact output retention

- Full cleanup log: `logs/04-cleanup-log.txt`
- Full build/package/validator output: `logs/04-build-sppkg-homepage-log.txt`
- Validator-focused extract: `logs/04-validator-output-extract.txt`
- Artifact digest: `logs/04-artifact-sha256.txt`
- Artifact stat snapshot: `logs/04-artifact-stat.txt`

These files are the Prompt-04 machine-captured record for build/validator provenance.
