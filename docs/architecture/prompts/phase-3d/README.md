# HB Central Runtime Trace Remediation Package

## Objective

Force a repo-truth and emitted-chunk trace that proves exactly why the current homepage artifact still renders placeholder/stub surface content instead of the intended HB Central UI.

This package is intentionally narrower than the prior remediation packages. It does **not** authorize:
- redesigning the homepage,
- changing the one-solution/five-surface packaging model,
- reverting to the retired shared runtime bridge,
- or shipping another "proof-of-load" or "content available" stub.

It exists to answer one question with evidence:

**For each of the five homepage surfaces, what exact source component is being mounted, how does that import chain flow into the emitted chunk, and why is the deployed bundle still rendering placeholder content instead of the real surface UI?**

## Package Contents

1. `README.md`
2. `Trace-Package-Summary.md`
3. `Prompt-01-Establish-Repo-Truth-and-Artifact-Baseline.md`
4. `Prompt-02-Trace-Each-Surface-From-Wrapper-to-Emitted-Chunk.md`
5. `Prompt-03-Replace-Stub-Owners-With-Real-Surface-Mounts.md`
6. `Prompt-04-Harden-Validation-and-Prove-Live-Behavior.md`

## Recommended Reading Order

1. `Trace-Package-Summary.md`
2. `Prompt-01-Establish-Repo-Truth-and-Artifact-Baseline.md`
3. `Prompt-02-Trace-Each-Surface-From-Wrapper-to-Emitted-Chunk.md`
4. `Prompt-03-Replace-Stub-Owners-With-Real-Surface-Mounts.md`
5. `Prompt-04-Harden-Validation-and-Prove-Live-Behavior.md`

## Prompt-01 Status (2026-04-04)

- Prompt-01 closure is complete for repo-truth and emitted-artifact baseline scope.
- Evidence directory: `docs/architecture/prompts/phase-3d/evidence/2026-04-04-prompt-01/`
- Canonical closure authority: `docs/architecture/blueprint/phase-3d-repo-truth-and-artifact-baseline-and-prompt-01-closure.md`
- Current validated disposition: all five wrappers resolve through browser-safe `owners-browser` entrypoints that currently mount placeholder success-path content, and emitted lazy chunks preserve the same placeholder owner behavior.
- Prompt-02, Prompt-03, and Prompt-04 remain open implementation/hardening/live-proof scope.

## Current Confirmed Situation

- The package now deploys and the web parts load without the prior fatal "failed to load runtime bundle" error.
- The live surfaces still do **not** render the intended homepage UI.
- Instead, each surface renders placeholder/stub content such as:
  - "Company pulse updates are available."
  - "Featured project highlights are available."
  - "Hero surface content is available."
  - "Quick action shortcuts are available."
  - "Homepage sections surface is available."
- Therefore the browser-safe loader path is not enough; the real issue is that the emitted owner path is still resolving to stub/demo/fallback surface content instead of the intended feature implementation.

## Operating Doctrine for the Agent

- Repo truth governs first.
- Do not reread files still in current context or memory unless the file changed or the task scope expanded.
- Trace each surface end-to-end from:
  1. SPFx wrapper
  2. dynamic import target
  3. owner module
  4. mounted React/component entry
  5. emitted webpack chunk/module
  6. live deployed behavior
- No "best guess" fixes.
- No placeholder copy.
- No stub components.
- No stand-in "content available" surfaces.
- No release until the emitted chunks prove they contain the intended mounts.

## Success Standard

Success means the rebuilt artifact proves, for all five surfaces, that:
- the wrapper imports the correct owner,
- the owner mounts the correct real surface component,
- the emitted chunk contains the correct implementation chain,
- the live page renders real UI rather than placeholder copy,
- and validators fail if stub/demo/placeholder owners are reintroduced.
