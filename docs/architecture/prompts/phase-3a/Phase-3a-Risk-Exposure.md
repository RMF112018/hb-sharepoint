# Phase 3a Risk Exposure

## Objective
This file defines the primary technical and operational risks for the Phase 3a remediation effort and the mitigation posture that should govern implementation.

## Primary Risks

### 1. False-positive repo confidence
**Risk**  
Source config may look correct while the actual shipped package remains wrong.

**Exposure**  
High.

**Mitigation**
- Always validate the suspect `.sppkg` first.
- Always inspect generated manifests/assets before packaging.
- Do not use source manifests alone as proof of success.

### 2. Stale output reuse
**Risk**  
The build or package step may read from stale prior outputs or a different output tree than the one just built.

**Exposure**  
High.

**Mitigation**
- perform a true clean before reproduction;
- inventory all generated directories after build;
- prove which directory package assembly consumes.

### 3. Wrong Heft/SPFx config resolution
**Risk**  
Heft may be invoked, but not necessarily against the intended current homepage configuration.

**Exposure**  
High.

**Mitigation**
- inspect the actual Heft/SPFx configuration in effect;
- prove which config files and manifests are consumed during build/package.

### 4. Misidentifying shared chunks as distinct primary web part assets
**Risk**  
A build may emit many JS files, giving the impression of a successful split even though there is only one real primary homepage entry asset.

**Exposure**  
Medium.

**Mitigation**
- explicitly separate primary entry assets from shared chunks;
- map each web part to its primary asset via generated/package manifests.

### 5. Over-fixing
**Risk**  
The agent may attempt a broad architectural rewrite rather than fixing the exact packaging-boundary defect.

**Exposure**  
Medium.

**Mitigation**
- require proof of the failure boundary before coding the fix;
- implement the smallest correct change set first.

### 6. Regression in deployment behavior
**Risk**  
A packaging fix could break toolbox registration, asset loading, or SharePoint deployment.

**Exposure**  
Medium.

**Mitigation**
- preserve existing solution/package identity unless evidence requires change;
- validate the final package structure and deployment readiness before closure.

## Risk Governance Rules
- No implementation before the failure is reproduced.
- No completion claim without final artifact proof.
- No multiple-`.sppkg` detour unless repo truth proves it is required.
- No undocumented assumptions about which artifact was actually built or deployed.
