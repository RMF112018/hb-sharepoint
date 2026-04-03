# Phase-3 Standards and Best Practices

## Objective
Define the standards that must govern the homepage surface split and the Heft-native SPFx migration.

---

## 1. Toolchain standards

### 1.1 Heft is the target authority for SPFx v1.22+
Use the canonical Heft-native SPFx structure for the selected baseline.

#### Required
- Heft-based package scripts
- SPFx Heft rig usage
- Heft-native configuration files per Microsoft guidance
- migration of custom build behavior into supported Heft extension points where needed

#### Not acceptable as Phase 3 end state
- a deployable package path that still shells into `gulp bundle` / `gulp package-solution`
- a nominal “Heft migration” that keeps gulp as hidden infrastructure

### 1.2 Canonical scaffold first
Before designing the final repo structure, create a same-version reference Heft SPFx project and use it to determine the exact target file/config shape.

### 1.3 Prefer standard customization over ejection
Default to canonical rig/config usage.
Use Heft plugins when customization is necessary.
Only eject webpack if standard/extensible mechanisms are insufficient and the reason is documented.

---

## 2. Bundle-boundary standards

### 2.1 Surface ownership must match bundle ownership intent
If a homepage surface is independently placeable and independently named in the toolbox, its runtime ownership must be explicit.

### 2.2 Do not hide multi-surface ownership behind a shared runtime export file
Shared UI code is acceptable.
Shared ownership through a single exported runtime bundle is not.

### 2.3 Shared code should be source-level shared, not deployment-level disguised coupling
Use:
- shared packages
- shared source modules
- standard chunking/deduplication

Do not use:
- one monolithic exported runtime file as the deployment contract for all surfaces.

### 2.4 Artifact truth matters more than source intent
Source manifests that *look* split are not sufficient.
The shipped `.sppkg` must prove that ownership separation is real.

---

## 3. Manifest and configuration standards

### 3.1 Preserve component identity unless change is explicitly required
Maintain existing component ids wherever possible to reduce deployment and page-content disruption.

### 3.2 Preserve intended deployment semantics unless deliberately changed
Current package uses:
- `includeClientSideAssets: true`
- `skipFeatureDeployment: true`

Do not change these casually during Phase 3.

### 3.3 Full-width support must remain intentional
Surfaces that advertise full-width support should continue to do so only if they are actually intended and tested for that layout.

### 3.4 Remove legacy-config assumptions during Heft migration
Do not assume legacy `config/config.json` structures remain the canonical config surface after migration.

---

## 4. Runtime standards

### 4.1 Explicit mount/unmount ownership
Every surface must:
- mount intentionally;
- unmount intentionally;
- handle failure explicitly.

### 4.2 No production dependency on Vite-built `dist/homepage.js`
The deployable production path must not depend on a separately built shared runtime artifact.

### 4.3 Runtime-version discipline
The selected React/runtime strategy must be deliberate and documented.
Do not let incidental package versions drive runtime architecture.

---

## 5. Testing and validation standards

### 5.1 Validation must prove ownership, not just structure
Minimum release-gated checks:
- each expected surface is registered;
- no localhost refs in production artifacts;
- no unsupported feature registrations;
- no wrapper production imports of the retired shared runtime path;
- no accidental collapse of all surfaces onto one entry module / primary asset.

### 5.2 Inspect generated artifacts, not only source
Always review:
- generated solution/debug structures
- final `.sppkg` internals
- app catalog validation feedback

### 5.3 Performance validation is mandatory
Use Page Diagnostics after deployment to verify page-load impact and confirm the split does not create a worse overall result.

---

## 6. Documentation standards

### 6.1 Docs must describe the actual shipping path
If the package ships through Heft, docs must say so.
If Vite becomes non-production-only, docs must say so.
If Vite is removed entirely, docs must say so.

### 6.2 Distinguish confirmed findings, strong inferences, and open questions
Do not flatten uncertainty.

### 6.3 Record migration decisions
Document:
- why one vs many `.sppkg` packages was chosen;
- why React/runtime posture was chosen;
- whether any Heft plugin/ejection was required;
- what validations now guard bundle ownership.

---

## 7. Local code-agent guardrails

### Guardrail 1
Do not reread files still in your current context or memory unless the file changed or the task scope expanded.

### Guardrail 2
Use the smallest authoritative file set first.

### Guardrail 3
Do not invent structure that conflicts with canonical SPFx Heft guidance.

### Guardrail 4
Do not declare Phase 3 complete from source diffs alone. Prove it from shipped artifacts.

### Guardrail 5
Do not broaden scope into homepage redesign, content strategy, or unrelated repo modernization.

### Guardrail 6
If uncertainty remains, surface it explicitly in updated docs and in the phase audit output.
