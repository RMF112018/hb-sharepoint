# Phase 3 Heft Customization Inventory and Prompt-08 Closure

## Purpose

This note records the approved Prompt-08 baseline for homepage Heft customization governance and serves as the formal closure artifact for the Phase-3 Prompt-08 open item.

## Prompt-08 customization inventory

### Inventory and disposition

| Customization area                                                                                             | Current behavior                                                                            | Disposition                | Notes                                                                              |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------- |
| Legacy gulp bridge (`tools/run-spfx-package.mjs`, `gulpfile.cjs`)                                              | Previously orchestrated deployable packaging                                                | `remove`                   | Already retired from authoritative deployable flow by Prompt-07                    |
| Homepage package command authority                                                                             | `spfx:package` uses `heft build --clean --production && heft package-solution --production` | `supported-by-rig-config`  | Canonical SPFx Heft path remains authoritative                                     |
| Heft rig/config baseline (`config/rig.json`, `config/heft.json`, `config/typescript.json`, `config/sass.json`) | SPFx rig-owned configuration extensions                                                     | `supported-by-rig-config`  | Uses standard SPFx rig extension points, no ejection                               |
| Artifact/wiring validation scripts (`tools/validate-homepage-webpart-wiring.mjs`, `tools/validate-sppkg.mjs`)  | Repository release-gate checks for wrapper/runtime ownership and artifact semantics         | `retain`                   | Remains intentional governance hardening, not packaging-path authority replacement |
| Vite runtime build for preview (`dev`, `build`)                                                                | Non-deployable preview/runtime workflow still present in app scripts                        | `defer-with-justification` | Preserved as non-production workflow; deployable authority remains Heft-native     |
| Additional Heft plugin/ejection                                                                                | No custom plugin or webpack ejection committed                                              | `remove`                   | No extra customization required at current repo baseline                           |

## Findings classification

### Confirmed findings

- Homepage deployable packaging authority is Heft-native and no longer shells through the legacy gulp bridge.
- Current Heft-native packaging works with the committed SPFx rig/config files.
- Webpack ejection is not used.
- No additional Heft plugin is currently required for the deployable homepage package flow.
- Existing package/wiring validators remain active release gates for ownership and artifact integrity.

### Strong inferences

- Keeping customization limited to rig-supported config and explicit release gates yields the lowest-maintenance Phase-3 posture.
- Deferring non-production workflow simplification avoids unnecessary churn while preserving Prompt-07 deployable-path authority.

### Open questions

- Whether future phase work should further simplify wrapper/runtime linkage to remove dependence on intermediate compiled owner-module paths while preserving ownership guarantees.

## Closure conditions

This planning item is considered closed when:

- a canonical Prompt-08 closure note exists with a customization inventory and per-item disposition;
- unresolved Heft extension/ejection ambiguity from earlier Phase-3 docs is explicitly resolved;
- Phase-3 planning and governance routing docs treat Prompt-08 as executed baseline;
- root manifest version is patch-bumped for this governance revision.

## Current status

Closure conditions are satisfied in current repo state:

- Prompt-08 customization inventory and disposition authority is now documented;
- no-ejection/no-extra-plugin baseline is explicitly locked for the current deployable path;
- Phase-3 planning/governance docs now route to this Prompt-08 closure artifact as baseline authority;
- root manifest patch version is advanced for this governance update.
