# Fresh ChatGPT Session Prompt — HB Central Phase 3 Audit and Prompt Package Generation

You are working against the live public GitHub repository:

- `https://github.com/RMF112018/hb-sharepoint.git`

I will attach one or more files that may include:
- the current Phase 3 baseline prompt,
- prior audit outputs,
- prior phase prompt packages,
- and/or the current `.sppkg` package artifact if needed for reconciliation.

Your job is **not** to implement code in chat.

Your job is to perform an **exhaustive audit and planning exercise** that culminates in a **downloadable Phase 3 prompt package** for my local code agent.

That Phase 3 prompt package must instruct implementation of two primary architectural objectives:

1. **Split all HB Central homepage web part surfaces into properly separated web part bundle ownership**
2. **Fully transition the homepage solution from the current hybrid/legacy packaging path to a Heft-native SPFx packaging model**

The final output of the fresh session must be a **comprehensive markdown package** containing:
- a Phase 3 summary plan,
- a README,
- and a numbered series of Phase 3 implementation prompts for my local code agent.

---

## Core objective

Audit the **current HB Central homepage SPFx solution** and determine exactly what must change to accomplish the following end state:

### Phase 3 target state
- each homepage surface is owned and packaged as a properly split web part surface,
- bundle boundaries are intentional and reduce unnecessary cross-loading,
- runtime contracts are stable and not dependent on a fragile shared runtime bundle pattern,
- the SPFx packaging/build path is fully migrated to a **Heft-native** model,
- packaging, deployment, validation, and artifact generation are aligned with current supported SPFx best practices,
- and the resulting architecture is maintainable, testable, and appropriate for long-term homepage evolution.

You must treat this as an **audit-first prompt-generation exercise**.

You are not being asked to code the solution in chat.
You are being asked to:
1. audit the current repo truth,
2. research current Microsoft/SPFx guidance,
3. determine the correct Phase 3 migration/design strategy,
4. and then generate the prompt package that instructs my local code agent to implement it.

---

## What the fresh session must produce

The fresh session must produce a downloadable markdown package that gives me:

- an evidence-based understanding of the current repo state,
- an evidence-based migration strategy from the current state to the Phase 3 target state,
- a prompt-by-prompt implementation sequence for a local code agent,
- risk exposure for the transition,
- standards / best practices that govern the implementation,
- and a concrete definition of what “done” means for Phase 3.

---

## Mandatory operating doctrine

### 1. Current repo truth governs first
- Audit the live `main` branch of the public repo before making conclusions.
- Do not rely on prior chat assumptions, stale architecture descriptions, or historical intent alone.
- Treat the live repo as the primary source of truth.
- If attached files describe prior plans, use them as secondary guidance only after repo truth is established.

### 2. Read the smallest authoritative set first
- Do not reread the entire repository blindly.
- Read only the smallest set of files needed to establish:
  - workspace/package structure,
  - current homepage app structure,
  - current bundling boundaries,
  - current runtime import patterns,
  - current SPFx config,
  - current packaging scripts,
  - current Heft/gulp posture,
  - current documentation and validation scripts,
  - and current source locations for each homepage surface.
- Do not reread files already in current session context unless the context is stale, the file changed, or the scope expanded.

### 3. Exhaustive research is mandatory
Before you finalize the Phase 3 prompt package, perform **exhaustive subject matter research** on current Microsoft/SPFx guidance and any other primary sources necessary to define the right implementation approach.

### 4. Audit before prompt generation
Do not jump directly into writing prompts.
You must first:
1. determine repo truth,
2. perform the required research,
3. identify defects, risks, and migration needs,
4. define the correct target architecture and migration sequence,
5. then generate prompts that implement that sequence.

### 5. Evidence over assumption
Every recommendation should be grounded in one or more of:
- actual repo files,
- actual package/build configuration,
- actual runtime ownership patterns,
- actual validation scripts,
- and/or current Microsoft/SPFx guidance.

### 6. No implementation drift
Do not generate application code unless a minimal example is strictly needed to illustrate a defect pattern or target structure.
The primary deliverable is a planning/prompt package.

### 7. Do not limit prompt count
Do not artificially restrict the number of implementation prompts.
Generate however many prompts are necessary to responsibly and completely implement Phase 3.

### 8. Prompt files must be implementation-grade
The generated prompts must be strong enough to hand directly to a local code agent.
They should be explicit, scoped, sequential, and grounded in repo truth.

---

## Mandatory research requirement

Before generating the final Phase 3 prompt package, perform **exhaustive subject matter research** on the following areas.

### Research topics that must be covered

#### 1. Modern SPFx toolchain direction
- current Microsoft position on Heft vs gulp
- support posture for legacy gulp projects
- implications of migrating an existing SPFx project to Heft-native packaging
- configuration differences between legacy and Heft-based SPFx tooling
- build/package/deploy workflow under current Heft guidance

#### 2. SPFx multi-web-part bundling strategy
- when multiple web parts should share a bundle
- when multiple web parts should be split into separate bundles
- performance and maintainability tradeoffs
- load isolation / blast-radius considerations
- lazy loading and dynamic import guidance in SPFx
- chunking and runtime asset loading considerations in SharePoint-hosted environments

#### 3. SPFx package and asset generation
- `.sppkg` packaging expectations
- client-side asset packaging rules
- App Catalog deployment behavior
- tenant deployment implications
- production artifact validation expectations
- how packaging behavior changes or remains stable under Heft-native builds

#### 4. SharePoint homepage composition best practices
- communication site homepage composition
- custom web part vs native web part tradeoffs
- full-width web part requirements
- authoring flexibility vs hard-coded homepage shell patterns
- maintainability implications of multi-surface homepage architecture

#### 5. Migration and architecture quality
- migration patterns from shared runtime bundles to separated web part ownership
- avoiding stale wrapper/loader contracts
- stable mount/unmount and entrypoint design
- validation and test hardening during build-system migration
- preserving shared UI ownership while splitting surface packages/bundles

### How to use the research
- Do not just list research findings.
- Use the research to evaluate the current repo and to define the correct Phase 3 target state.
- Explicitly state where the current implementation aligns, partially aligns, or conflicts with supported guidance.
- Use the research to shape the order, granularity, and acceptance criteria of the implementation prompts.

---

## Specific Phase 3 questions the fresh session must answer

The audit must answer, at minimum:

1. What homepage surfaces currently exist, and how are they actually owned in source?
2. Which surfaces are currently coupled through shared bundle ownership?
3. Which runtime contracts currently depend on a shared entry bundle or shared export pattern?
4. What must be split, relocated, reconfigured, or rewritten so each surface has proper independent ownership?
5. What shared utilities/packages should remain shared, and what should no longer be shared?
6. What is the current packaging/build flow, and what exact parts of it remain legacy or hybrid?
7. What must change to achieve a full **Heft-native** packaging and validation workflow?
8. What migration risks exist for toolbox registration, manifests, client-side assets, runtime loading, and deployment?
9. What sequence of implementation work best reduces risk while preserving continuity?
10. What evidence should be required to call Phase 3 complete?

---

## Audit scope

Your audit must cover, at minimum, the following areas.

### A. Repo truth and current architecture
Determine and document:
- actual workspace/package structure
- actual homepage app structure
- current homepage web part inventory
- current bundle ownership and config layout
- current entrypoints, manifests, and loader contracts
- current validation scripts
- current build/package scripts
- current docs that describe the homepage implementation
- current shared UI/design-token ownership

### B. Current bundling and runtime coupling
Determine:
- whether multiple surfaces currently share one bundle
- whether multiple surfaces currently depend on one runtime export file
- what runtime failures or future risks this pattern creates
- whether current boundaries are aligned with best practice for independently used homepage surfaces

### C. Current packaging/toolchain state
Determine:
- whether the current solution is using gulp, Heft, or a hybrid path
- where the existing packaging path deviates from a fully Heft-native posture
- what technical and operational work is required to migrate to Heft-native packaging
- what documentation, scripts, configs, and validation logic need to change

### D. Target-state architecture definition
Define the recommended Phase 3 target state for:
- web part ownership boundaries
- bundle boundaries
- entrypoint structure
- runtime mount/unmount boundaries
- shared package ownership
- build/package workflow
- validation flow
- release-readiness evidence

### E. Migration risk and sequencing
Identify:
- migration blockers
- likely breakpoints
- runtime and packaging risks
- regression risks
- deployment risks
- documentation drift risks
- and the best sequence to implement the transition safely

---

## Required audit method

You must perform the work in this order:

1. Audit the live repo and determine current repo truth
2. Perform the mandatory subject matter research
3. Map the current homepage surface inventory and ownership/bundle structure
4. Map the current packaging/toolchain structure
5. Define the recommended Phase 3 target architecture
6. Identify defects, risks, gaps, and required migrations
7. Turn that into a concrete Phase 3 implementation prompt package
8. Produce the final downloadable markdown files

Do not skip repo inspection.
Do not skip research.
Do not skip architecture mapping.
Do not skip packaging/toolchain analysis.
Do not jump directly to prompts.

---

## Required deliverables

Produce a **downloadable markdown package** containing the following files.

### 1. `README.md`
Must include:
- package contents
- recommended reading order
- summary of the objective
- summary of evidence sources used
- assumptions and limitations
- how the prompt package should be used

### 2. `Phase-3-Implementation-Summary.md`
This should provide:
- executive summary of the audit
- current state summary
- target state summary
- why Phase 3 is necessary
- major decisions embedded in the prompt package
- implementation sequencing summary

### 3. `Phase-3-Architecture-and-Migration-Plan.md`
Detailed plan covering:
- current architecture
- target architecture
- web part splitting strategy
- Heft-native packaging transition strategy
- migration sequence
- validation requirements
- completion criteria

### 4. `Phase-3-Risk-Exposure.md`
Must include:
- runtime risks
- packaging risks
- App Catalog / deployment risks
- surface split risks
- regression risks
- documentation/operational risks
- mitigation guidance

### 5. `Phase-3-Standards-and-Best-Practices.md`
Must include:
- current Microsoft/SPFx-supported practices relevant to this migration
- bundle-boundary standards
- manifest/configuration standards
- packaging/toolchain standards
- testing/validation standards
- documentation standards
- local code-agent implementation guardrails

### 6. `Prompt-01-*` through `Prompt-XX-*`
A numbered sequence of Phase 3 prompts for the local code agent.
Generate as many prompts as needed.

These prompts must:
- be sequential and implementation-ready,
- tell the agent exactly what to audit/change/verify,
- preserve repo-truth discipline,
- explicitly instruct the agent **not to reread files still in its current context or memory unless needed because the file changed or the task scope expanded**,
- include clear acceptance criteria,
- and collectively implement the Phase 3 target state.

### 7. `Phase-3-Acceptance-Checklist.md`
Must define:
- required technical outcomes
- required validation evidence
- required documentation updates
- required packaging/build outputs
- required deployment/readiness checks
- conditions for Phase 3 go / no-go

---

## Prompt design requirements

Each generated prompt should, where appropriate, include:
- objective
- scope
- repo-truth files to inspect first
- implementation instructions
- constraints / guardrails
- acceptance criteria
- required outputs/documentation updates

The prompts should be grouped logically across the Phase 3 effort, such as:
- architecture split groundwork
- web part ownership and entrypoint restructuring
- bundle/config separation
- Heft-native migration work
- validation/test hardening
- documentation/readiness closure

Use however many prompts are needed.
Do not compress important work into too few prompts.

---

## Additional required behaviors

### Be explicit about uncertainty
If you cannot fully verify something, say so clearly.
Separate:
- confirmed findings,
- strong inferences,
- and open questions.

### Prefer repo truth and primary-source guidance
When evaluating the current solution and defining the migration, use:
- repo inspection,
- current configs/scripts/docs,
- and primary Microsoft/SPFx guidance as primary evidence.

### Do not overstate readiness
If the repo appears directionally sound but not yet ready for a clean split/Heft migration, say so plainly.

### Keep the prompts implementation-focused
The point of the fresh session is not merely to analyze.
It is to generate the prompt package that drives execution of Phase 3.

---

## Required structure for the final response in the fresh session

In the final chat response, do the following:

1. Summarize current repo truth relevant to Phase 3
2. Summarize the research findings that materially shaped the plan
3. Summarize the recommended target architecture and migration strategy
4. Summarize key risks and sequencing logic
5. Provide downloadable links to every markdown file generated
6. Provide a downloadable archive of the full Phase 3 markdown package if possible

---

## Success criteria

Success means the final package gives me:

- a rigorous audit of the current homepage architecture and toolchain posture,
- a correct plan to split all web part surfaces into proper ownership boundaries,
- a correct plan to transition to a fully Heft-native SPFx packaging model,
- a strong implementation prompt series for my local code agent,
- and a clear acceptance path for Phase 3 completion.
