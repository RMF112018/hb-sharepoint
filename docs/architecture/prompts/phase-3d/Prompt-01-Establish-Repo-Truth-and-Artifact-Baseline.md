# Prompt 01 — Establish Repo Truth and Artifact Baseline

## Objective

Establish an exact baseline for the current homepage implementation in source and in the emitted artifact, with special focus on the five homepage surfaces that currently render placeholder/stub text.

You are not fixing anything in this prompt. You are proving the baseline.

## Scope

Cover only the homepage solution and only the five homepage surfaces:

1. Homepage Sections
2. Hero
3. Featured Projects
4. Company Pulse
5. Quick Actions

## Files to inspect first

Inspect the smallest authoritative set first. Do **not** reread files still in your current context unless the file changed or the task scope expanded.

Start with:

- root `package.json`
- `apps/hb-central-homepage/package.json`
- `apps/hb-central-homepage/config/config.json`
- `apps/hb-central-homepage/config/package-solution.json`
- each homepage web part wrapper file
- each owner file currently targeted by the wrappers
- any direct barrel/index/alias file between wrapper and owner
- any direct component files mounted by those owners
- build/validator scripts currently governing homepage package output
- the current emitted homepage `.sppkg`
- emitted client-side asset JS files for the five homepage surfaces and their secondary chunks

## Required work

### 1. Reconstruct the current wrapper-to-owner map

For each of the five surfaces, capture:

- wrapper file path
- dynamic import target string
- imported symbol name
- owner file path
- owner export name
- mounted component path
- mounted component export name

### 2. Reconstruct the emitted-chunk map

For each of the five surfaces, capture:

- primary emitted JS file name
- secondary emitted chunk file name(s)
- emitted export name(s)
- emitted component/module reference chain
- whether the emitted code clearly contains stub/demo/placeholder wording or logic

### 3. Identify all placeholder/stub surface phrases now present

Search repo truth and emitted chunk truth for all placeholder-like text and fallback semantics, including but not limited to:

- "available"
- "browser-safe"
- "runtime owner"
- "surface content"
- "shortcuts are available"
- "updates are available"
- "highlights are available"

Also search for semantically equivalent phrases, not just exact matches.

### 4. Produce a defect classification per surface

For each surface, classify the current state as one of:

- owner is stub
- mounted component is stub
- import path resolves to stub
- emitted chunk does not match intended source
- real surface missing dependencies and was replaced by stub
- other

Do not use "unknown" unless you can prove why it cannot yet be determined.

## Constraints / guardrails

- Do not edit code in this prompt.
- Do not broaden scope beyond homepage surfaces.
- Do not propose a redesign.
- Do not assume all five surfaces fail for the exact same reason unless you prove it.
- Do not stop at source inspection; emitted chunk truth is mandatory.

## Acceptance criteria

This prompt is complete only when you have produced:

1. a five-row wrapper-to-owner trace table,
2. a five-row owner-to-mounted-component table,
3. a five-row emitted-chunk trace table,
4. a list of all placeholder/stub phrases or fallback semantics found in source and emitted output,
5. and a surface-by-surface defect classification grounded in evidence.

## Required outputs

Update or create:

- a baseline trace report under the homepage docs path
- an emitted-chunk evidence note
- a concise root-cause matrix for the five surfaces
