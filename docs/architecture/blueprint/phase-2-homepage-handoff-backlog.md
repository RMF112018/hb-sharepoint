# Phase-2 Homepage Handoff Backlog

## Purpose

Define the canonical Phase-2 handoff scope after Phase-1 Prompt-08 packaging and validation closure.

## Prompt-01 closure status

- Phase-2 Prompt-01 scope-baseline and open-decision outputs are now closed.
- Canonical closure note: `docs/architecture/blueprint/phase-2-scope-baseline-and-open-decisions.md`.
- This backlog remains authoritative for intentionally deferred Phase-2 implementation items and does not imply those items are complete.

## Intentionally unfinished scope

- deeper data integrations across focused homepage surfaces
- personalization expansion beyond current deferred seam
- deferred native-vs-custom follow-up decisions as usage and governance data matures
- production release pipeline and tenant validation operationalization

## Phase-2 backlog

| Backlog item | Owner area | Primary dependency | Readiness criterion |
| --- | --- | --- | --- |
| Replace seeded/demo surface data with governed production data sources | Homepage app + shared adapters | stable source contracts and access approvals | each focused web part renders with production-backed data and fallback behavior preserved |
| Expand personalization from deferred seam to targeted runtime behavior | Homepage app + identity/data integration | reliable role/profile signal and targeting rules | personalized zone exits deferred-only state with observable and supportable behavior |
| Re-evaluate native-vs-custom for news/recognition composition follow-up | Architecture + content governance | authoring usage evidence and maintainability review | explicit decision record updates composition guidance with no ambiguous ownership |
| Operationalize release automation and tenant validation workflow | Platform/release operations | environment approvals and deployment controls | documented CI/CD and tenant verification checklist executed in release path |
| Add page-context validation coverage for focused web parts | QA + app team | stable tenant test environment | repeatable evidence of toolbox visibility and page rendering captured per release |

## Handoff notes

- Phase-1 architecture baseline remains authoritative until a Phase-2 decision explicitly supersedes it.
- Packaging validation safeguards introduced in Prompt-08 are required baselines for all Phase-2 release work.
