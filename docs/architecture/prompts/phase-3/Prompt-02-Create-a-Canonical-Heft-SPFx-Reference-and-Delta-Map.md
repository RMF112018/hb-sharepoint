# Prompt 02 — Create a Canonical Heft SPFx Reference and Delta Map

## Objective
Create a same-version canonical SPFx Heft reference so Phase 3 migrates toward actual Microsoft-supported structure rather than an invented approximation.

## Scope
Reference generation, structure comparison, and delta documentation only.

## Repo-truth files to inspect first
- Prompt 01 evidence map
- `apps/hb-central-homepage/package.json`
- current homepage config/build files

## Instructions
1. Do **not** reread files still in your current context or memory unless the file changed or the task scope expanded.
2. Using the selected SPFx baseline already in repo truth, create a temporary local reference project (or equivalent canonical reference) that uses the Heft-native SPFx toolchain.
3. Capture the exact canonical files/configs/scripts relevant to:
   - package scripts
   - `config/rig.json`
   - Heft TypeScript/Sass config
   - packaging/build/start commands
   - any multi-web-part structure guidance available from the scaffold
4. Produce a delta map that compares the current homepage package against the canonical Heft-native structure.
5. Explicitly identify which current files are legacy-only and which ones must be replaced, retained, or translated.

## Constraints / guardrails
- This prompt is for target-shape discovery, not full migration.
- Do not yet delete current files.
- Do not assume legacy `config/config.json` remains canonical after migration.

## Acceptance criteria
- A documented delta exists between current homepage packaging structure and canonical Heft-native SPFx structure.
- Required Heft-native target files/configs are explicitly identified.
- Legacy artifacts that must be retired are explicitly listed.

## Required outputs
- Canonical Heft reference summary
- Current-vs-target delta map markdown file
