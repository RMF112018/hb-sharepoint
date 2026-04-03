# Prompt-09 — Create Authoring, Administration, and Support Guidance

## Objective

Create the documentation and operating guidance required for site owners, content editors, admins, and support personnel to use, maintain, troubleshoot, and evolve the Phase 2 homepage without unnecessary developer dependence.

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
- all existing README/admin/homepage docs
- page assembly rules and section ownership docs from earlier prompts
- data/config ownership outputs from prior Phase 2 work
- packaging/deployment notes relevant to site owners/admins

You must determine the current repo truth for this prompt before making implementation decisions.

---

## Architectural guardrails

- Do not assume future users will infer how the homepage works from code or manifests.
- Do not bury critical operational knowledge across too many docs.
- Keep the guidance role-based and practical.
- Document what can be changed safely and what should trigger escalation.
- Avoid writing vague 'best effort' guidance; make it actionable.

---

## Implementation instructions

### 1) Define the target audiences for the guidance

At minimum, produce guidance for:
- site owners
- content editors
- tenant/site admins
- support / troubleshooters

Clarify what each audience needs to know.

### 2) Document homepage composition and maintenance rules

Explain:
- what parts make up the homepage
- which parts are native vs custom
- what can be edited safely
- where content/config updates happen
- what not to change casually

### 3) Document troubleshooting and support flows

Provide practical guidance for:
- missing content
- misconfigured quick actions
- empty/personalized states
- broken section data
- packaging/deployment issues relevant to admins

### 4) Make the docs concise and canonical

Consolidate the essential operating guidance in the right place so future maintainers and site owners can actually use it.

---

## Verification

Use the smallest meaningful validation set first.

1. Role-based guidance exists for site owners, editors, admins, and support personnel.
2. Homepage composition/maintenance rules are clearly documented.
3. Common troubleshooting paths are documented.
4. The documentation is concise enough to be used in practice.

---

## Documentation updates

Update only the docs necessary to make the implementation durable and understandable.

- Create or update the canonical homepage/admin/support documentation set.
- Avoid duplicating the same instructions across multiple docs unless role-specific context requires it.

---

## Deliverables / exit criteria

Do not stop until you provide all of the following:

1. **Documentation set** — role-based guidance created or updated.
2. **Maintenance summary** — how the homepage is safely maintained.
3. **Support/troubleshooting summary** — common issues and response paths.
4. **Documentation map** — where future users should look first.

If you cannot fully resolve the prompt objective, stop only after narrowing the issue to the smallest confirmed blocker with evidence.
