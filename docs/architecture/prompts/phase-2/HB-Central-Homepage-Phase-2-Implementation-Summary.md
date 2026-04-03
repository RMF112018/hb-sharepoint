# HB Central Homepage — Phase 2 Implementation Summary

## Objective

Phase 2 completes the HB Central homepage hybrid implementation following the Phase 1 refactor. The goal is to move from a structurally correct hybrid baseline to a **complete, production-grade homepage experience** that is operationally useful, maintainable, supportable, and ready for controlled rollout.

Phase 2 is not another architecture reset. It is the completion, hardening, and operationalization phase.

---

## Phase 1 Handoff Assumptions

Phase 2 assumes Phase 1 delivered, or was intended to deliver, the following:

- a hybrid homepage direction rather than a monolithic single-web-part homepage
- shared brand/token and reusable UI foundations
- multiple focused homepage web parts
- working SPFx packaging and deployment flow
- a functioning or near-functioning homepage shell and some initial core sections
- at least lightweight packaging/runtime validation safeguards

If repo truth shows that one or more of those assumptions are false, Prompt 01 must surface the gap and explicitly constrain Phase 2 scope accordingly.

---

## Prompt-01 Baseline Status (Executed)

Prompt-01 is now treated as an executed baseline for Phase 2.
Canonical closure note: `docs/architecture/blueprint/phase-2-scope-baseline-and-open-decisions.md`.

### Baseline summary (actual Phase-1 end state)

- complete and functional:
  - homepage shell / hero
  - featured projects
  - company pulse
  - quick actions
  - people moments and blended news/recognition/spotlight surfaces
  - shared token/UI layer usage via `@hbc/ui-kit`
  - packaging/deployment path and validation safeguards
- partially implemented:
  - production data integration depth across all surfaces
  - tenant/page-context verification coverage
- intentionally deferred:
  - full personalization rollout beyond the current seam
  - release automation and downstream tenant-operational steps

### Phase 2 scope matrix

| Scope classification | Items |
| --- | --- |
| Must finish in Phase 2 | production-grade data/config seams, runtime hardening and final composition governance, authoring/admin guidance, release-readiness evidence |
| Optional for Phase 2 | bounded personalization expansion if reliable targeting signals and support posture are available |
| Explicitly defer beyond Phase 2 | full production deployment automation and tenant-specific operationalization |
| Blocked by unresolved dependency | any personalization expansion requiring unapproved identity/profile signal contracts or unsupported governance controls |

### Open-decisions register (resolved direction)

| Decision | Approved direction | Rationale |
| --- | --- | --- |
| Which zones stay native vs custom | Preserve hybrid model; keep custom ownership for differentiated surfaces and native SharePoint for low-complexity editorial modules | Maintains maintainability and authoring flexibility without regressions to monolith behavior |
| Whether lower zone is justified | Keep lower zone seam, but keep broader personalization deferred unless evidence supports expansion | Prevents premature complexity while preserving extension point |
| Appropriate personalization depth | Bound scope to supportable, fallback-safe runtime behavior only | Reduces operational risk and brittle audience-targeting behavior |
| Required data/config seams | Centralized source/config seam ownership remains mandatory before production-readiness claims | Keeps data contracts and support ownership explicit |
| Release-critical vs deferrable sections | Critical: composition, data/config seams, hardening, documentation, validation evidence. Deferrable: broader automation and deep personalization | Aligns release gate to reliability and supportability first |

### Constraint summary inherited from earlier phases

- one deployable `.sppkg` artifact remains the baseline deployment model
- packaging validation safeguards remain mandatory
- reusable visual UI ownership remains in `@hbc/ui-kit`
- Phase 2 is completion/hardening, not repository restructuring
- unresolved platform/tenant automation concerns remain outside this prompt's closure scope

---

## Phase 2 Scope

Phase 2 is intended to cover:

1. confirmation of the actual Phase 1 end state
2. final homepage composition and section ownership decisions
3. implementation or completion of unfinished homepage zones
4. production-grade data and configuration seams
5. runtime personalization and role-aware content where justified
6. quick actions hardening for operational use
7. UX, accessibility, responsive, and performance refinement
8. admin/editor/support documentation
9. final validation and release-readiness audit

---

## Target Homepage End State

At the end of Phase 2, the homepage should present a clear, maintainable hybrid model, typically including a combination of:

- premium custom shell / hero where justified
- focused custom SPFx sections where they materially improve the experience
- native SharePoint composition where it remains the better authoring/maintenance choice
- governed shared UI foundations
- structured data/config seams
- supportable personalization logic
- clear page assembly and maintenance rules

---

## Recommended Prompt Sequence

1. **Prompt-01 — Establish Phase 2 Scope Baseline and Open Decisions**
2. **Prompt-02 — Finalize Homepage Composition Model and Page Assembly Rules**
3. **Prompt-03 — Implement News, Recognition, and Spotlight Zone**
4. **Prompt-04 — Implement People and Culture Zone**
5. **Prompt-05 — Implement Personalized Lower Zone and Role-Aware Content**
6. **Prompt-06 — Implement Production-Grade Data and Configuration Seams**
7. **Prompt-07 — Harden Quick Actions, Permissions, and Operational Launch Behavior**
8. **Prompt-08 — Refine UX, Accessibility, Responsive Behavior, and Performance**
9. **Prompt-09 — Create Authoring, Administration, and Support Guidance**
10. **Prompt-10 — Execute Final Homepage Validation and Release-Readiness Audit**

---

## Risk Exposure

### 1. Composition Drift
**Risk**  
The implementation may drift away from the intended hybrid model and back toward either:
- a monolithic custom homepage app, or
- a loosely assembled page with weak ownership and inconsistent UX.

**Control**  
Prompt 02 explicitly freezes section ownership, page assembly rules, and the custom-vs-native composition model.

### 2. Data-Source Instability
**Risk**  
Homepage zones may be wired to inconsistent, stale, unclear, or unsupportable sources of truth.

**Control**  
Prompt 06 formalizes data contracts, configuration ownership, and source-of-truth definitions before calling the homepage production-ready.

### 3. Personalization Overreach
**Risk**  
Personalization may become too complex, brittle, or hard to support.

**Control**  
Prompt 05 requires runtime personalization to remain justified, bounded, and fallback-safe rather than configuration-heavy or user-specific in authoring.

### 4. Packaging and Runtime Regression
**Risk**  
Additional sections and richer data logic may reintroduce bundle, packaging, deployment, or runtime failures.

**Control**  
Prompt 10 performs final release-readiness validation, and all prompts preserve the Phase 1 principle of artifact correctness over assumptions.

### 5. Authoring Confusion
**Risk**  
Site owners and editors may not understand what is native vs custom, what can be changed safely, and where content comes from.

**Control**  
Prompt 09 creates explicit guidance for authors, administrators, and support personnel.

### 6. UI Inconsistency
**Risk**  
Phase 2 sections may diverge from the established token/UI foundation and produce a stitched-together experience.

**Control**  
Prompt 08 applies a dedicated cross-homepage polish and conformance pass.

---

## Standards / Best Practices

### Architectural
- Keep the hybrid model explicit and governed
- Prefer focused web parts over oversized multi-purpose components
- Keep web part hosts thin; keep render complexity in React roots/components
- Push reusable UI, tokens, and shared behavior into shared layers
- Keep data contracts/config seams out of purely visual components

### SharePoint Composition
- Use native SharePoint where it is already strong
- Use custom SPFx only where it materially improves the experience
- Preserve authoring flexibility wherever possible
- Avoid creating a homepage that requires developers for routine editorial updates

### Packaging and Deployment
- Build only from source-controlled repo truth
- Preserve packaging/runtime validation discipline
- Fail fast on localhost leakage, stale bundles, broken lazy-load contracts, or wrong artifact uploads
- Keep deployable artifacts traceable back to explicit source/config

### UX / Accessibility / Responsive Behavior
- Treat loading, empty, and error states as first-class deliverables
- Support keyboard navigation, focus order, screen-reader clarity, and reduced motion
- Validate large-screen, desktop, and tablet behavior deliberately
- Apply consistent hierarchy, spacing, typography, and interaction patterns across all homepage zones

### Governance and Support
- Every homepage section should have:
  - clear ownership
  - source of truth
  - config/update path
  - support path
- Documentation should make routine maintenance possible without developer intervention wherever feasible

---

## Open Decisions Expected in Phase 2

Prompt 01 and Prompt 02 should resolve, at minimum:

- which remaining zones stay native vs become custom
- whether the lower homepage zone is justified and what it should contain
- how far personalization should go in the current phase
- what the production data/config model should be for each section
- which sections are required for release vs acceptable to defer

---

## Success Criteria

Phase 2 is successful when the repo truth and deployed homepage reflect:

- a coherent, maintainable hybrid model
- completed major homepage zones
- production-grade content/data/config seams
- safe and supportable personalization
- hardened quick actions
- polished UX/accessibility/responsiveness/performance
- clear admin/editor/support guidance
- final release-readiness confidence grounded in evidence
