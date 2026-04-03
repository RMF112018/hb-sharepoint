# Prompt-07 — Harden Quick Actions, Permissions, and Operational Launch Behavior

## Objective

Finish and harden the homepage quick actions / operational launch behavior so it reflects real destinations, respects permissions and user context where justified, and behaves like a reliable launch surface rather than a static visual tile strip.

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
- quick action components, config, manifests, and destination mappings
- permission/context utilities relevant to action visibility or prioritization
- any current placeholder links or TODO launch behavior in the repo

You must determine the current repo truth for this prompt before making implementation decisions.

---

## Architectural guardrails

- Do not leave quick actions as static demo tiles if the homepage is intended to act as an operational launch surface.
- Do not hide or show actions in opaque ways that are difficult to support.
- Do not let action behavior drift from the broader personalization/data/config model.
- Keep launch behavior predictable, supportable, and governed.
- Do not create a fragile dependency on unavailable downstream systems without documenting the constraint.

---

## Implementation instructions

### 1) Audit current quick actions behavior

Determine which quick actions are:
- real and functional
- placeholder
- role-aware
- broken or misdirected
- missing despite intent

### 2) Define the action model

For each action, define:
- destination
- visibility rule
- prioritization rule
- fallback behavior
- configuration/ownership path

### 3) Implement hardened launch behavior

Make the actions operationally credible. Ensure real destinations, safe visibility rules, and predictable fallbacks.

### 4) Validate permission and context behavior

Ensure the action model is explainable and supportable for users with different roles or sparse context.

---

## Verification

Use the smallest meaningful validation set first.

1. Quick actions are audited and classified.
2. Each action has an explicit operational model.
3. Launch behavior is hardened and no longer purely decorative.
4. Permission/context behavior is supportable and documented.

---

## Documentation updates

Update only the docs necessary to make the implementation durable and understandable.

- Update the admin/editor/support guidance with the quick-actions configuration and maintenance model.
- Document any external dependency or permission limitation honestly.

---

## Deliverables / exit criteria

Do not stop until you provide all of the following:

1. **Quick actions audit** — current state and gaps.
2. **Action model** — destinations, visibility, prioritization, fallbacks.
3. **Implementation summary** — hardened operational behavior.
4. **Support guidance** — how admins/editors maintain the launch surface.

If you cannot fully resolve the prompt objective, stop only after narrowing the issue to the smallest confirmed blocker with evidence.
