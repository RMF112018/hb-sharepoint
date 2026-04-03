# Phase-3 Risk Exposure

## Objective
Identify the meaningful technical and operational risks associated with splitting homepage surfaces and migrating to a Heft-native SPFx packaging model.

---

## 1. Runtime risks

### 1.1 Shared-runtime regression risk
**Current risk:** very high

The current solution relies on a shared runtime bridge (`dist/homepage.js`) with multiple named mount exports. Any break in that runtime affects multiple homepage surfaces.

**Exposure:**
- one runtime defect can impact multiple web parts;
- one changed export can break one or more surfaces without manifest changes;
- error messaging can mislead teams into blaming “bundle load” rather than ownership collapse.

**Mitigation:**
- eliminate the shared runtime bridge from the production path;
- validate bundle ownership per surface;
- add tests that assert surface isolation.

### 1.2 Wrapper behavior drift risk
If wrapper classes are partially refactored but mount/unmount behavior is not preserved, render leaks or stale roots can occur.

**Mitigation:**
- preserve explicit unmount logic;
- add wrapper lifecycle tests;
- keep failure-state UX explicit and per surface.

### 1.3 React/runtime alignment risk
The homepage package currently uses a React 18-era runtime in app dependencies while the broader SPFx ecosystem is still in transition.

**Exposure:**
- unsupported runtime assumptions;
- hidden incompatibility with the selected SPFx baseline;
- future debugging/runtime issues if ownership is refactored carelessly.

**Mitigation:**
- lock runtime strategy early in Phase 3;
- align to the officially supported SPFx runtime posture for the selected version unless there is a deliberate, well-tested exception;
- do not let runtime-version uncertainty bleed into bundle-splitting work.

---

## 2. Packaging / toolchain risks

### 2.1 False-Heft migration risk
A superficial migration could rename scripts to Heft while still depending on gulp behind the scenes.

**Mitigation:**
- treat canonical scaffolded Heft structure as the reference model;
- explicitly delete/retire the gulp authority path;
- require proof that package/build commands are truly Heft-native.

### 2.2 Customization-port risk
Any current custom packaging behavior may need to move into Heft plugins or supported configuration.

**Mitigation:**
- inventory every current customization before migration;
- default to standard Heft/SPFx rig behavior;
- only introduce plugins/ejection when necessary and documented.

### 2.3 Legacy-config carryover risk
The legacy `config/config.json` model does not necessarily survive in Heft-native form.

**Mitigation:**
- do not hard-code assumptions from the gulp toolchain into the Heft migration;
- generate/use a canonical Heft-native reference project first.

### 2.4 Build reproducibility risk
The current packaging script selects a supported Node binary dynamically. A poorly planned migration could replace one problem with another.

**Mitigation:**
- explicitly document supported Node range and package-manager requirements;
- use canonical Heft scripts and documented environment expectations;
- validate on the intended local developer environment.

---

## 3. Bundle-splitting risks

### 3.1 Over-splitting risk
If surfaces share nearly all runtime code, naive splitting can create duplication and inefficient chunking.

**Mitigation:**
- separate *ownership* from *code duplication*;
- allow shared code/chunks where webpack/Heft dedupes them naturally;
- forbid only the current hidden single-bundle ownership model.

### 3.2 Under-splitting risk
If the implementation only changes manifests or wrappers but not real bundle ownership, the shipped package can still collapse back to a single runtime path.

**Mitigation:**
- validate the final `.sppkg`, not just source manifests;
- require manifest-to-primary-asset inspection in release gates.

### 3.3 Manifest/output mismatch risk
Source manifests may suggest separation while the actual shipped package still rewrites them into a shared entry.

**Mitigation:**
- treat `.sppkg` internals as the final truth for deployment behavior;
- compare repo intent vs packaged output every release.

---

## 4. App Catalog / deployment risks

### 4.1 Package validity risk
Even technically correct code changes can fail app catalog validation if package metadata, assets, or XML relationships are malformed.

**Mitigation:**
- inspect `sharepoint/solution/debug` (or the Heft-native equivalent generated structures);
- inspect the final `.sppkg` ZIP internals;
- review the app catalog’s package validation feedback before release.

### 4.2 Tenant deployment semantics risk
`skipFeatureDeployment` is currently enabled. Migration mistakes can accidentally change tenant deployment behavior.

**Mitigation:**
- preserve current deployment semantics unless a deliberate decision changes them;
- explicitly diff package-solution behavior before and after migration.

### 4.3 Toolbox/discoverability regression risk
If component IDs, manifests, or registration structure drift, homepage surfaces may disappear or duplicate in the toolbox.

**Mitigation:**
- preserve existing component ids unless change is explicitly required and migration-safe;
- validate toolbox presence and naming after deployment.

---

## 5. Regression risks

### 5.1 UI regression risk
Homepage layout polish can regress during runtime decomposition.

**Mitigation:**
- separate architectural refactor from visual redesign;
- capture baseline screenshots and surface-by-surface render expectations;
- use targeted regression review.

### 5.2 Performance regression risk
Splitting bundles can improve isolated-surface loading, but careless chunking can worsen first load or duplicate vendor code.

**Mitigation:**
- measure before and after;
- use SharePoint Page Diagnostics;
- track primary asset sizes and total lazy-load footprint.

### 5.3 Release-audit blind spot risk
Current validation scripts create a false sense of completion because they validate structure, not ownership.

**Mitigation:**
- add ownership-aware checks;
- make them blocking in CI/local release flows.

---

## 6. Documentation / operational risks

### 6.1 Documentation drift risk
The repo can easily end up documenting one packaging model while shipping another.

**Mitigation:**
- update docs only after final structure is proven;
- tie docs updates to acceptance criteria.

### 6.2 Local code-agent drift risk
A local code agent may overread the repo, preserve stale assumptions, or refactor beyond scope.

**Mitigation:**
- prompts explicitly enforce repo-truth discipline;
- prompts explicitly say not to reread files still in context unless changed or scope expanded;
- prompts include acceptance criteria and required outputs.

---

## 7. Highest-priority risk stack
1. Shared runtime bridge not actually removed
2. Heft migration that still relies on gulp internally
3. Shipped package still collapsing surfaces to one entry module
4. Runtime-version incompatibility introduced during refactor
5. Validation remaining too weak to detect regression

---

## 8. Risk posture recommendation
Proceed with Phase 3, but only with:
- a canonical Heft reference first;
- an early runtime/version decision gate;
- artifact-level ownership validation as a blocking release condition.
