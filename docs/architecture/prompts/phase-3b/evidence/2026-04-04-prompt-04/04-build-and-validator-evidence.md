# 04 Build and Validator Evidence

## Purpose

Capture clean-state rebuild provenance for the repaired homepage artifact and retain exact validator-backed command output.

## Clean-state execution

Cleanup step (captured):

- `rm -rf apps/hb-central-homepage/temp apps/hb-central-homepage/lib apps/hb-central-homepage/lib-commonjs apps/hb-central-homepage/sharepoint/solution/debug`
- `rm -f dist/sppkg/hb-central-homepage.sppkg`

Primary build and validation command:

- `pnpm build:sppkg:homepage`

## Artifact-of-record

- Path: `dist/sppkg/hb-central-homepage.sppkg`
- SHA-256: `40b65564bb7b0f587c9900ff214869981e4ff66361cd16bb8e11f87aef61781a`
- Size/mtime snapshot: `dist/sppkg/hb-central-homepage.sppkg|35675|2026-04-04T06:37:07-0400`

## Validator outcomes

Confirmed from captured command output:

- `validate-homepage-webpart-wiring.mjs`: passed (5/5 wrapper-owner mount checks).
- `validate-sppkg.mjs`: passed with all expected structure and ownership checks.
- Runtime-format gate status: passed (`runtime owner CommonJS signatures: none`).

## Exact output retention

- Full cleanup log: `logs/04-cleanup-log.txt`
- Full build/package/validator output: `logs/04-build-sppkg-homepage-log.txt`
- Validator-focused extract: `logs/04-validator-output-extract.txt`
- Artifact digest: `logs/04-artifact-sha256.txt`
- Artifact stat snapshot: `logs/04-artifact-stat.txt`

These files are the Prompt-04 machine-captured record for build/validator provenance.
