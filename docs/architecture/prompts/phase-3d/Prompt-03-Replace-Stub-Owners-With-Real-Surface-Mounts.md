# Prompt 03 — Replace Stub Owners with Real Surface Mounts

## Objective

Implement the smallest correct fix that restores the intended real homepage surface UI behind the now-working browser-safe owner path.

The goal is not to change the packaging model. The goal is to keep the browser-safe load path and replace stub behavior with the intended real surface mounts.

## Precondition

You must already have the exact source-to-output trace from Prompt 02. Do **not** start implementation until the stub insertion point is proven.

## Required implementation rules

### 1. Preserve the validated structural posture

Do **not** change unless Prompt 02 proved it is necessary:

- one homepage `.sppkg`
- five focused homepage surfaces
- separate bundle ownership
- browser-safe dynamic owner loading
- current wrapper pattern
- current Heft-native package path

### 2. Remove stub/demo/fallback owner behavior

For each surface, remove or replace only the code that causes placeholder/stub rendering.

That may include:

- replacing stub owner files with real owner files,
- repointing owners to the intended real component,
- correcting alias or barrel resolution,
- restoring missing production component exports,
- or reinstating required providers/services so the real component can mount.

### 3. Do not paper over missing dependencies

If a real component needs providers, props, services, theme context, or data contracts, restore the required production-safe path.

Do **not** replace production behavior with simplified content just to avoid runtime failures.

### 4. Keep emitted output browser-safe

The repaired path must remain compatible with the browser-safe dynamic loading approach that resolved the earlier runtime-bundle failure.

## Mandatory implementation checks

For each surface, prove after edits:

- wrapper still imports intended owner,
- owner still loads through browser-safe path,
- owner mounts the intended real component,
- emitted chunk contains the real component chain,
- emitted output no longer contains placeholder/stub phrases or equivalent fallback logic.

## Constraints / guardrails

- No redesign.
- No site-only hacks.
- No hardcoded placeholder copy.
- No "temporary" fallback components.
- No release candidate until emitted artifact proof exists.

## Acceptance criteria

This prompt is complete only when:

1. the source trace for each surface terminates in the intended real component,
2. emitted chunks reflect that real component chain,
3. placeholder/stub owner behavior is removed,
4. and the package builds cleanly.

## Required outputs

Update or create:

- implementation notes explaining the exact change per surface
- a post-fix source-to-output trace delta
- a short operator note describing what changed and what did not
