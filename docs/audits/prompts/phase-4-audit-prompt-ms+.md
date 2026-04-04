# Fresh ChatGPT Session Prompt — HB Central Post-Phase-3a Audit, Production Deployment Readiness, and Residual-Work Planning

You are working against the live public GitHub repository:

- `https://github.com/RMF112018/hb-sharepoint.git`

I will attach one or more files that may include:
- the current Phase 3 audit prompt,
- prior audit outputs,
- prior phase prompt packages,
- the current `hb-central-homepage.sppkg` package artifact,
- and/or other supporting evidence files if needed for reconciliation.

Your job is **not** to implement code in chat.

Your job is to perform an **exhaustive audit, research, and release-readiness evaluation** that determines whether the HB Central homepage solution is actually ready for **production deployment** after Phase 3a, and if not, exactly what residual work remains.

The final output of the fresh session must be a **comprehensive downloadable markdown package** that does one of the following:

1. **Close Phase 3 / Phase 3a and issue a production deployment decision** if the current repo truth and package artifact are fully aligned and release-ready, or  
2. **Generate a narrowly scoped residual-work prompt package** for my local code agent if the audit proves that production blockers or material readiness gaps still remain.

---

## Core objective

Audit the **current HB Central homepage SPFx solution**, the **current `hb-central-homepage.sppkg` artifact**, and the **Phase 3a documentation/evidence set** to determine whether the homepage package is ready for **production App Catalog deployment** and operational use.

You must treat this as an **audit-first, evidence-first, production-readiness-first exercise**.

You are not being asked to code the solution in chat.  
You are being asked to:

1. audit the current repo truth,
2. audit the attached `.sppkg` artifact directly,
3. audit the current Phase 3a closeout documentation and evidence,
4. research current Microsoft/SPFx guidance and any other primary sources needed,
5. determine whether the current state is truly production-ready,
6. and then either:
   - issue a hard deployment decision, or
   - generate a tightly scoped residual-work package.

---

## Current expected post-Phase-3a repo truth

Do **not** assume the pre-Phase-3a defect is still active.

The current expected state, which you must verify rather than assume, is:

- the homepage continues shipping as **one single `.sppkg`**,
- the final package contains **five distinct homepage web part registrations**,
- the final packaged artifact contains **five unique packaged `entryModuleId` values**,
- the final packaged artifact contains **five unique packaged primary script-resource keys**,
- the final packaged artifact contains **five unique packaged primary script-resource paths**,
- homepage surfaces are authored with **separate bundle declarations** and separate runtime ownership,
- the packaging path has moved to a **Heft-based** model,
- the retired shared runtime bridge pattern based on `dist/homepage.js` has been removed,
- validator wiring exists to fail on ownership collapse and related packaging regressions,
- and Phase 3a documentation/evidence under `docs/architecture/prompts/phase-3a/` records the current closeout state.

You must verify this state directly from repo truth and the attached artifact.  
Do **not** accept documentation claims without package-level and repo-level confirmation.

---

## What the fresh session must produce

The fresh session must produce a downloadable markdown package that gives me:

- an evidence-based understanding of the current repo/package state,
- an evidence-based assessment of current SPFx / `.sppkg` alignment with best practices,
- a direct production deployment readiness decision,
- a separation of **hard blockers**, **conditional risks**, and **non-blocking observations**,
- a concrete definition of what “production-ready” means for this homepage package,
- and, only if needed, a narrow residual-work implementation sequence for my local code agent.

---

## Mandatory operating doctrine

### 1. Current repo truth governs first
- Audit the live `main` branch of the public repo before making conclusions.
- Treat the live repo as the primary source of truth for current implementation state.
- Treat the attached `.sppkg` as the primary source of truth for what is actually packaged/shippable.
- Treat Phase 3a docs/evidence as authoritative only if they reconcile with the current repo and artifact.

### 2. Read the smallest authoritative set first
- Do not reread the entire repository blindly.
- Read only the smallest set of files needed to establish:
  - workspace/package structure,
  - current homepage app structure,
  - current homepage web part inventory,
  - current bundling boundaries,
  - current runtime import/owner patterns,
  - current SPFx config,
  - current Heft posture,
  - current packaging/build commands,
  - current validation scripts,
  - current Phase 3a evidence and closeout records,
  - and the current package artifact structure.
- Do not reread files already in current session context unless the context is stale, the file changed, or the scope expanded.

### 3. Exhaustive research is mandatory
Before finalizing the audit, perform **exhaustive subject matter research** using:
- current Microsoft/SPFx guidance as the primary platform authority for official support posture, packaging behavior, and deployment expectations,
- and **high-quality non-Microsoft sources from proven practitioners, recognized engineering publishers, and other credible primary or near-primary sources** where those sources materially strengthen the assessment of architecture quality, operational risk, bundling strategy, deployment practice, or release governance.

Do **not** limit the research only to Microsoft sources.
Do **not** use low-quality blog spam, SEO-filler content, anonymous forum summaries, or weak secondary sources unless they are clearly identified as low-confidence context rather than decision-driving evidence.

### 4. Audit before recommendation
Do not jump directly to a deployment decision or to follow-on prompts.
You must first:
1. determine current repo truth,
2. determine current artifact truth,
3. determine current documentation/evidence truth,
4. perform the required research,
5. identify any confirmed blockers or residual risks,
6. then issue the decision and required package outputs.

### 5. Evidence over assumption
Every conclusion must be grounded in one or more of:
- actual repo files,
- actual package/build configuration,
- actual runtime ownership patterns,
- actual validator behavior,
- actual package artifact contents,
- Phase 3a evidence files,
- and/or current Microsoft/SPFx guidance.

### 6. No implementation drift
Do not generate application code unless a minimal example is strictly needed to illustrate a defect pattern.
If the current state is already ready for production deployment, do **not** generate unnecessary remediation prompts.

### 7. Residual work must be narrow
If follow-on prompts are needed, they must address only the confirmed remaining gaps.
Do **not** manufacture a new broad migration plan if the audit proves the current state is already correct.

### 8. Prompt files must be implementation-grade
If a residual-work prompt package is required, the prompts must be explicit, scoped, sequential, grounded in repo truth, and directly usable by a local code agent.

---

## Mandatory research requirement

Before generating the final package, perform **exhaustive subject matter research** on the following areas.

### Research topics that must be covered

### Source quality requirements
- Microsoft documentation should remain the primary authority for official SPFx support posture, packaging expectations, and App Catalog behavior.
- Research must also include **high-quality non-Microsoft sources** where appropriate, such as:
  - recognized SharePoint/SPFx practitioners with established technical credibility,
  - reputable engineering blogs from known consultancies or product companies with demonstrated SPFx experience,
  - authoritative release/governance references,
  - and other proven sources that add practical implementation, deployment, or operational context.
- More than half of the load-bearing citations in the final answer should still come from official or otherwise authoritative sources.
- When Microsoft guidance and strong practitioner guidance differ in emphasis, call that out explicitly and explain which guidance governs the final recommendation.
- Do not rely on weak or repetitive content-farm material.


#### 1. Modern SPFx toolchain and support posture
- current Microsoft position on Heft vs gulp
- support posture for legacy gulp projects
- production implications of Heft-based packaging in SPFx
- current recommended build/package/deploy workflow for SPFx solutions

#### 2. SPFx multi-web-part bundling and ownership
- when multiple web parts should share a bundle
- when multiple web parts should be split into separate bundles
- performance and maintainability tradeoffs
- runtime isolation / blast-radius considerations
- dynamic import and lazy loading guidance in SPFx
- shared-chunk acceptability versus primary ownership collapse

#### 3. `.sppkg` packaging and App Catalog deployment
- `.sppkg` packaging expectations
- client-side asset packaging rules
- App Catalog deployment behavior
- tenant deployment implications
- package validation expectations for production readiness
- packaging characteristics that matter for safe production deployment

#### 4. SharePoint homepage composition best practices
- communication site homepage composition
- custom web part vs native web part tradeoffs
- full-width web part requirements
- operational maintainability implications of multi-surface homepage architecture
- risks associated with fragile runtime coupling on production homepages

#### 5. Production readiness and release governance
- what constitutes acceptable production evidence for an SPFx package
- blocker vs warning classification for deployment decisions
- validation and release-gate best practices
- package provenance expectations
- documentation and closeout requirements for release approval

### How to use the research
- Do not just list research findings.
- Use the research to evaluate whether the **current repo + artifact + documentation state** is actually aligned with supported and production-appropriate practice.
- Explicitly state where the current implementation aligns, partially aligns, or conflicts with:
  - official Microsoft/SPFx guidance, and
  - high-quality non-Microsoft practitioner or engineering guidance.
- Use the research to shape the final deployment decision and any residual-work package.
- When citing non-Microsoft sources, explain why they are credible and why they matter to the decision.

---

## Specific audit questions the fresh session must answer

The audit must answer, at minimum:

1. What homepage surfaces currently exist, and how are they actually owned in source?
2. What bundle ownership boundaries currently exist in repo truth?
3. Do any homepage surfaces still depend on a retired shared runtime bridge or other fragile ownership pattern?
4. Does the current `.sppkg` actually package five distinct homepage ownership records inside one solution package?
5. Are the packaged primary assets consistent with the current authored bundle strategy?
6. Is the current build/package flow truly Heft-based in a meaningful operational sense, or only superficially changed?
7. Do the validator scripts actually enforce anti-collapse and anti-regression checks in the documented packaging path?
8. Does the Phase 3a documentation accurately describe the current package and build state?
9. Is the current solution suitable for **production App Catalog deployment now**?
10. If not, what are the **hard blockers**?
11. If yes, what remaining risks are merely **conditional warnings** or **non-blocking observations**?
12. What exact evidence is required to justify a **hard go**, **conditional go**, or **no-go** deployment decision?

---

## Audit scope

Your audit must cover, at minimum, the following areas.

### A. Repo truth and current architecture
Determine and document:
- actual workspace/package structure
- current homepage app structure
- homepage web part inventory
- current bundle ownership and config layout
- current entrypoints, manifests, and loader contracts
- current validation scripts
- current build/package scripts
- current Heft-specific posture
- current shared UI/design-token ownership
- current docs that describe the homepage implementation and closeout state

### B. Packaged artifact truth
Determine and document:
- whether the attached `.sppkg` contains all expected homepage registrations
- whether the packaged ownership records are distinct per surface
- whether the packaged client-side assets show true split primary ownership
- whether shared chunks exist and whether they are acceptable
- whether any localhost/debug/workbench leakage exists
- whether the artifact aligns with the documented final evidence set

### C. Documentation and evidence truth
Determine and document:
- whether `docs/architecture/prompts/phase-3a/` and referenced closure docs are internally consistent
- whether the closeout docs match current repo truth
- whether the closeout docs match the attached package artifact
- whether the recorded evidence is sufficient for production-readiness evaluation

### D. Production deployment readiness
Determine and document:
- whether the current state is suitable for production App Catalog deployment
- what risks are blockers versus warnings
- whether the current release-gate posture is sufficient
- what deployment and operational caveats should accompany a production decision

### E. Residual work only if needed
If confirmed gaps remain, define:
- the smallest correct residual work package
- the exact sequencing needed
- the exact acceptance evidence required to close the gaps

---

## Required audit method

You must perform the work in this order:

1. Audit the live repo and determine current repo truth
2. Audit the attached `.sppkg` and determine current artifact truth
3. Audit the Phase 3a docs/evidence and determine documentation truth
4. Perform the mandatory subject matter research
5. Map current homepage surface inventory and ownership/bundle structure
6. Map the current packaging/toolchain and validator structure
7. Evaluate the current state for production deployment readiness
8. Decide whether the solution is:
   - **Hard Go**
   - **Conditional Go**
   - **No-Go**
9. If and only if confirmed gaps remain, generate a narrow residual-work prompt package
10. Produce the final downloadable markdown files

Do not skip repo inspection.  
Do not skip direct `.sppkg` inspection.  
Do not skip documentation/evidence reconciliation.  
Do not skip research.  
Do not skip the explicit deployment decision.

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
- how the package should be used

### 2. `Post-Phase-3a-Audit-and-Deployment-Readiness-Summary.md`
Must provide:
- executive summary of the audit
- current repo/package/doc state summary
- deployment decision summary
- major findings
- sequencing summary if any residual work remains

### 3. `Post-Phase-3a-Architecture-and-Release-Readiness-Assessment.md`
Must provide:
- current architecture assessment
- current package assessment
- current validator/build assessment
- alignment with current Microsoft/SPFx guidance
- release-readiness assessment
- closeout status

### 4. `Post-Phase-3a-Risk-Exposure.md`
Must include:
- runtime risks
- packaging risks
- App Catalog / deployment risks
- provenance risks
- regression risks
- documentation/operational risks
- mitigation guidance
- explicit blocker vs warning classification

### 5. `Post-Phase-3a-Standards-and-Best-Practices.md`
Must include:
- current Microsoft/SPFx-supported practices relevant to the current homepage solution
- bundle-boundary standards
- manifest/configuration standards
- packaging/toolchain standards
- validation/release-gate standards
- production-deployment standards
- local code-agent guardrails if follow-on work is needed

### 6. `Post-Phase-3a-Acceptance-and-Deployment-Checklist.md`
Must define:
- required technical outcomes
- required validation evidence
- required documentation updates
- required packaging/build outputs
- required deployment/readiness checks
- conditions for:
  - **Hard Go**
  - **Conditional Go**
  - **No-Go**

### 7. `Residual-Prompt-01-*` through `Residual-Prompt-XX-*` only if needed
Generate these **only** if the audit proves that confirmed residual work remains.

These prompts must:
- be sequential and implementation-ready,
- tell the agent exactly what to audit/change/verify,
- preserve repo-truth discipline,
- explicitly instruct the agent **not to reread files still in its current context or memory unless needed because the file changed or the task scope expanded**,
- include clear acceptance criteria,
- and remain tightly scoped to the confirmed remaining gaps.

If no residual work is needed, do **not** generate these files.

### 8. `Production-Deployment-Decision.md`
This file is mandatory.

It must state, explicitly and unambiguously:

- **Deployment Decision:** Hard Go / Conditional Go / No-Go
- **Scope of decision:** what exact repo/package/doc state the decision applies to
- **Hard blockers:** if any
- **Conditional warnings:** if any
- **Non-blocking observations:** if any
- **Required pre-deployment checks:** if any
- **Required post-deployment monitoring or validation:** if any
- **Why this decision is justified by the evidence**

---

## Prompt/package design requirements

If a residual-work package is needed, each generated prompt should include:
- objective
- scope
- repo-truth files to inspect first
- implementation instructions
- constraints / guardrails
- acceptance criteria
- required outputs/documentation updates

Do not compress important work into too few prompts.  
Do not generate residual prompts if the audited state is already release-ready.

---

## Additional required behaviors

### Be explicit about uncertainty
If you cannot fully verify something, say so clearly. Separate:
- confirmed findings,
- strong inferences,
- and open questions.

### Prefer repo truth, package truth, and primary-source guidance
When evaluating the current solution and deciding readiness, use:
- repo inspection,
- direct `.sppkg` inspection,
- current configs/scripts/docs,
- current evidence files,
- and primary Microsoft/SPFx guidance as primary evidence.

### Do not overstate readiness
If the solution is directionally correct but not yet appropriate for production deployment, say so plainly and classify the reason correctly.

### Do not understate readiness
If the repo truth, package artifact, and evidence set support production deployment, say so plainly and do not manufacture extra remediation work.

### Force explicit deployment classification
You must render one of the following:
- **Hard Go**
- **Conditional Go**
- **No-Go**

Do not substitute vague language.

---

## Required structure for the final response in the fresh session

In the final chat response, do the following:

1. Summarize current repo truth relevant to post-Phase-3a state
2. Summarize current `.sppkg` truth
3. Summarize current Phase 3a docs/evidence truth
4. Summarize the research findings that materially shaped the decision
5. Summarize production deployment risks and classify them as blockers or warnings
6. State the explicit deployment decision: Hard Go / Conditional Go / No-Go
7. If residual work is required, summarize it precisely
8. Provide downloadable links to every markdown file generated
9. Provide a downloadable archive of the full markdown package if possible

---

## Success criteria

Success means the final package gives me:

- a rigorous audit of the current homepage repo/package/doc state,
- a rigorous and current SPFx/SPPKG subject-matter evaluation,
- a correct assessment of whether the homepage solution is appropriate for production deployment,
- a clear deployment decision with blocker/warning classification,
- and only if needed, a narrowly scoped residual-work prompt series for my local code agent.
