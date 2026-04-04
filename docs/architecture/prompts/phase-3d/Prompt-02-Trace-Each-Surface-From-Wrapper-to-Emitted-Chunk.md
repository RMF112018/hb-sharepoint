# Prompt 02 — Trace Each Surface from Wrapper to Emitted Chunk

## Objective

For each homepage surface, trace the exact import and execution chain from the SPFx wrapper to the emitted webpack chunk and identify the precise point where intended surface behavior is replaced by placeholder/stub behavior.

This prompt is for proof and diagnosis, not broad refactoring.

## Precondition

Use the baseline produced in Prompt 01. Do **not** reread files still in your current context unless the file changed or the task scope expanded.

## Required trace workflow

Perform this exact workflow for each of the five surfaces.

### A. Wrapper trace

Prove:
- which wrapper class is used,
- which dynamic import expression is executed,
- which owner symbol is awaited,
- where `mount` / `unmount` is assigned.

### B. Owner trace

Prove:
- which owner file is actually imported,
- what the owner exports,
- what component or tree the owner renders,
- whether it imports the intended production component or a stub/fallback/demo component.

### C. Component trace

Prove:
- the exact component file path mounted by the owner,
- whether that component is a real surface implementation or a placeholder/stub,
- whether it depends on missing providers/data and was reduced to placeholder content.

### D. Emitted artifact trace

Prove:
- which emitted JS module contains the owner export,
- which emitted module contains the mounted component,
- whether the emitted chunk text/function body matches the intended source behavior,
- whether the emitted output diverges from source due to aliasing, barrel resolution, or build transforms.

## Required evidence style

For each surface, produce:

- source path chain
- export/import chain
- emitted file chain
- direct explanation of where the stub is introduced

Use exact file names and symbol names.

## Focus questions you must answer

1. Is the owner file itself a stub?
2. Is the owner file real, but mounting a stub component?
3. Is a barrel/index alias silently resolving to a stub component?
4. Is the real component absent from the emitted artifact?
5. Is the component intentionally reduced because required providers/data/services are missing?
6. Do all five surfaces share one common stub source, or do they diverge?

## Constraints / guardrails

- No code edits until the trace is complete.
- No "fix by replacing everything."
- No placeholder-preserving compromises.
- No generic "browser-safe owner path" explanations without exact source-to-output proof.

## Acceptance criteria

This prompt is complete only when you have produced an evidence-backed trace for all five surfaces that pinpoints the exact source location where real behavior becomes stub behavior.

## Required outputs

Create or update:

- a `five-surface-trace-matrix` document
- a `source-vs-emitted-divergence` document
- a short implementation note stating the smallest correct remediation path
