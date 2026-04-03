# Prompt-10 — Execute Final Homepage Validation and Release-Readiness Audit

## Objective

Perform the final end-state audit of the Phase 2 homepage implementation and determine whether the current repo truth and deployable artifacts justify a go / no-go release-readiness conclusion for the HB Central homepage.

---

## Repo-truth context

Inspect the smallest authoritative set first.

**Do not reread files that are already in your current context or memory unless they changed, context is stale, or scope expanded.**

Start with the exact files, packages, and docs that govern this scope, including whichever of the following actually exist:

- root `package.json` and workspace config files
- SPFx solution package(s) and related `config/*` files
- homepage web part host files and manifests
- shared UI/token packages or shared component layers
- homepage section component files
- build/package scripts and any CI/workflow files relevant to packaging
- existing homepage documentation, if any
- final homepage code paths and manifests
- packaging/deployment scripts and the latest deployable artifact path
- all Phase 2 documentation outputs
- the composed homepage architecture and section ownership model

You must determine the current repo truth for this prompt before making implementation decisions.

---

## Architectural guardrails

- Do not confuse 'it renders' with 'it is release-ready'.
- Do not overstate readiness if architecture, packaging, authoring, or supportability gaps remain.
- Base the verdict on evidence from repo truth, runtime behavior, packaging outputs, and docs.
- Separate confirmed blockers from non-blocking improvements.
- Deliver a clear go / no-go conclusion with rationale.

---

## Implementation instructions

### 1) Audit the final homepage end state

Review the full homepage implementation across:
- architecture
- composition
- data/config seams
- personalization
- quick actions
- UX/accessibility/responsive behavior/performance
- documentation/support readiness
- packaging/deployment correctness

### 2) Classify findings by severity and readiness impact

Separate:
- hard blockers
- serious but non-blocking issues
- minor cleanup items
- deliberate deferred work

### 3) Determine release readiness

Issue a clear:
- go
- conditional go
- no-go

Back the conclusion with evidence and explicit rationale.

### 4) Produce the final remediation punch list

If issues remain, produce the smallest credible list of next actions required to reach a defensible release state.

---

## Verification

Use the smallest meaningful validation set first.

1. The final homepage end state is audited across all major dimensions.
2. Findings are severity-ranked and tied to release impact.
3. A clear go / conditional go / no-go verdict is issued.
4. A final remediation punch list exists for any remaining gaps.

---

## Documentation updates

Update only the docs necessary to make the implementation durable and understandable.

- Update the final release-readiness or audit doc with the verdict and supporting rationale.
- Keep the conclusion concise and evidence-based.

---

## Deliverables / exit criteria

Do not stop until you provide all of the following:

1. **Final audit summary** — complete end-state assessment.
2. **Severity-ranked findings matrix** — blocker vs non-blocker vs minor vs deferred.
3. **Release-readiness verdict** — go / conditional go / no-go with rationale.
4. **Remediation punch list** — next steps required if not fully ready.

If you cannot fully resolve the prompt objective, stop only after narrowing the issue to the smallest confirmed blocker with evidence.
