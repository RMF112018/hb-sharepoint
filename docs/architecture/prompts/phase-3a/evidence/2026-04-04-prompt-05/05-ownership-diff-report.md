# Prompt-05 Ownership Diff Report

Compared ownership fields only (`id`, `alias`, `entryModuleId`, primary script-resource key/path) across source, generated, pre-package, and packaged layers.

## Surface b8bb1136-d33e-47d2-9d45-848524b8fcbf

- Source
  file: apps/hb-central-homepage/src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.manifest.json
  id: b8bb1136-d33e-47d2-9d45-848524b8fcbf
  alias: HbCentralHomepageWebPart
  entryModuleId: (missing)
  primaryScriptResourceKey: hb-central-homepage-sections-web-part
  primaryScriptResourcePath: hb-central-homepage-sections-web-part.js

- Generated
  file: apps/hb-central-homepage/release/manifests/b8bb1136-d33e-47d2-9d45-848524b8fcbf.manifest.json
  id: b8bb1136-d33e-47d2-9d45-848524b8fcbf
  alias: HbCentralHomepageWebPart
  entryModuleId: hb-central-homepage-sections-web-part
  primaryScriptResourceKey: hb-central-homepage-sections-web-part
  primaryScriptResourcePath: hb-central-homepage-sections-web-part_77a76b2b245ac60ecde8.js

- Pre-package
  file: apps/hb-central-homepage/sharepoint/solution/debug/b8bb1136-d33e-47d2-9d45-848524b8fcbf/WebPart_b8bb1136-d33e-47d2-9d45-848524b8fcbf.xml
  id: b8bb1136-d33e-47d2-9d45-848524b8fcbf
  alias: HbCentralHomepageWebPart
  entryModuleId: hb-central-homepage-sections-web-part
  primaryScriptResourceKey: hb-central-homepage-sections-web-part
  primaryScriptResourcePath: hb-central-homepage-sections-web-part_77a76b2b245ac60ecde8.js

- Packaged
  file: dist/sppkg/hb-central-homepage.sppkg
  id: b8bb1136-d33e-47d2-9d45-848524b8fcbf
  alias: (n/a)
  entryModuleId: hb-central-homepage-sections-web-part
  primaryScriptResourceKey: hb-central-homepage-sections-web-part
  primaryScriptResourcePath: hb-central-homepage-sections-web-part_77a76b2b245ac60ecde8.js

Diff checks:
- source->generated entryModuleId: MISMATCH
- generated->pre-package entryModuleId: MATCH
- pre-package->packaged entryModuleId: MATCH
- source->generated primary key: MATCH
- generated->pre-package primary key: MATCH
- pre-package->packaged primary key: MATCH
- generated->pre-package primary path: MATCH
- pre-package->packaged primary path: MATCH

## Surface 4ff4d963-cb8e-4ba2-b70f-89f72f0f4db1

- Source
  file: apps/hb-central-homepage/src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.manifest.json
  id: 4ff4d963-cb8e-4ba2-b70f-89f72f0f4db1
  alias: HbCentralHomepageHeroWebPart
  entryModuleId: (missing)
  primaryScriptResourceKey: hb-central-homepage-hero-web-part
  primaryScriptResourcePath: hb-central-homepage-hero-web-part.js

- Generated
  file: apps/hb-central-homepage/release/manifests/4ff4d963-cb8e-4ba2-b70f-89f72f0f4db1.manifest.json
  id: 4ff4d963-cb8e-4ba2-b70f-89f72f0f4db1
  alias: HbCentralHomepageHeroWebPart
  entryModuleId: hb-central-homepage-hero-web-part
  primaryScriptResourceKey: hb-central-homepage-hero-web-part
  primaryScriptResourcePath: hb-central-homepage-hero-web-part_1e3f2e854d24aa41b894.js

- Pre-package
  file: apps/hb-central-homepage/sharepoint/solution/debug/4ff4d963-cb8e-4ba2-b70f-89f72f0f4db1/WebPart_4ff4d963-cb8e-4ba2-b70f-89f72f0f4db1.xml
  id: 4ff4d963-cb8e-4ba2-b70f-89f72f0f4db1
  alias: HbCentralHomepageHeroWebPart
  entryModuleId: hb-central-homepage-hero-web-part
  primaryScriptResourceKey: hb-central-homepage-hero-web-part
  primaryScriptResourcePath: hb-central-homepage-hero-web-part_1e3f2e854d24aa41b894.js

- Packaged
  file: dist/sppkg/hb-central-homepage.sppkg
  id: 4ff4d963-cb8e-4ba2-b70f-89f72f0f4db1
  alias: (n/a)
  entryModuleId: hb-central-homepage-hero-web-part
  primaryScriptResourceKey: hb-central-homepage-hero-web-part
  primaryScriptResourcePath: hb-central-homepage-hero-web-part_1e3f2e854d24aa41b894.js

Diff checks:
- source->generated entryModuleId: MISMATCH
- generated->pre-package entryModuleId: MATCH
- pre-package->packaged entryModuleId: MATCH
- source->generated primary key: MATCH
- generated->pre-package primary key: MATCH
- pre-package->packaged primary key: MATCH
- generated->pre-package primary path: MATCH
- pre-package->packaged primary path: MATCH

## Surface 02ce4751-f355-444e-a635-a6f3b11fad79

- Source
  file: apps/hb-central-homepage/src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.manifest.json
  id: 02ce4751-f355-444e-a635-a6f3b11fad79
  alias: HbCentralHomepageFeaturedProjectsWebPart
  entryModuleId: (missing)
  primaryScriptResourceKey: hb-central-homepage-featured-projects-web-part
  primaryScriptResourcePath: hb-central-homepage-featured-projects-web-part.js

- Generated
  file: apps/hb-central-homepage/release/manifests/02ce4751-f355-444e-a635-a6f3b11fad79.manifest.json
  id: 02ce4751-f355-444e-a635-a6f3b11fad79
  alias: HbCentralHomepageFeaturedProjectsWebPart
  entryModuleId: hb-central-homepage-featured-projects-web-part
  primaryScriptResourceKey: hb-central-homepage-featured-projects-web-part
  primaryScriptResourcePath: hb-central-homepage-featured-projects-web-part_d1c70dfab7c182850c34.js

- Pre-package
  file: apps/hb-central-homepage/sharepoint/solution/debug/02ce4751-f355-444e-a635-a6f3b11fad79/WebPart_02ce4751-f355-444e-a635-a6f3b11fad79.xml
  id: 02ce4751-f355-444e-a635-a6f3b11fad79
  alias: HbCentralHomepageFeaturedProjectsWebPart
  entryModuleId: hb-central-homepage-featured-projects-web-part
  primaryScriptResourceKey: hb-central-homepage-featured-projects-web-part
  primaryScriptResourcePath: hb-central-homepage-featured-projects-web-part_d1c70dfab7c182850c34.js

- Packaged
  file: dist/sppkg/hb-central-homepage.sppkg
  id: 02ce4751-f355-444e-a635-a6f3b11fad79
  alias: (n/a)
  entryModuleId: hb-central-homepage-featured-projects-web-part
  primaryScriptResourceKey: hb-central-homepage-featured-projects-web-part
  primaryScriptResourcePath: hb-central-homepage-featured-projects-web-part_d1c70dfab7c182850c34.js

Diff checks:
- source->generated entryModuleId: MISMATCH
- generated->pre-package entryModuleId: MATCH
- pre-package->packaged entryModuleId: MATCH
- source->generated primary key: MATCH
- generated->pre-package primary key: MATCH
- pre-package->packaged primary key: MATCH
- generated->pre-package primary path: MATCH
- pre-package->packaged primary path: MATCH

## Surface c5819073-cf72-4d91-bd5b-49982a6b8230

- Source
  file: apps/hb-central-homepage/src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.manifest.json
  id: c5819073-cf72-4d91-bd5b-49982a6b8230
  alias: HbCentralHomepageCompanyPulseWebPart
  entryModuleId: (missing)
  primaryScriptResourceKey: hb-central-homepage-company-pulse-web-part
  primaryScriptResourcePath: hb-central-homepage-company-pulse-web-part.js

- Generated
  file: apps/hb-central-homepage/release/manifests/c5819073-cf72-4d91-bd5b-49982a6b8230.manifest.json
  id: c5819073-cf72-4d91-bd5b-49982a6b8230
  alias: HbCentralHomepageCompanyPulseWebPart
  entryModuleId: hb-central-homepage-company-pulse-web-part
  primaryScriptResourceKey: hb-central-homepage-company-pulse-web-part
  primaryScriptResourcePath: hb-central-homepage-company-pulse-web-part_7cbfe4e3e765bf2ad8e9.js

- Pre-package
  file: apps/hb-central-homepage/sharepoint/solution/debug/c5819073-cf72-4d91-bd5b-49982a6b8230/WebPart_c5819073-cf72-4d91-bd5b-49982a6b8230.xml
  id: c5819073-cf72-4d91-bd5b-49982a6b8230
  alias: HbCentralHomepageCompanyPulseWebPart
  entryModuleId: hb-central-homepage-company-pulse-web-part
  primaryScriptResourceKey: hb-central-homepage-company-pulse-web-part
  primaryScriptResourcePath: hb-central-homepage-company-pulse-web-part_7cbfe4e3e765bf2ad8e9.js

- Packaged
  file: dist/sppkg/hb-central-homepage.sppkg
  id: c5819073-cf72-4d91-bd5b-49982a6b8230
  alias: (n/a)
  entryModuleId: hb-central-homepage-company-pulse-web-part
  primaryScriptResourceKey: hb-central-homepage-company-pulse-web-part
  primaryScriptResourcePath: hb-central-homepage-company-pulse-web-part_7cbfe4e3e765bf2ad8e9.js

Diff checks:
- source->generated entryModuleId: MISMATCH
- generated->pre-package entryModuleId: MATCH
- pre-package->packaged entryModuleId: MATCH
- source->generated primary key: MATCH
- generated->pre-package primary key: MATCH
- pre-package->packaged primary key: MATCH
- generated->pre-package primary path: MATCH
- pre-package->packaged primary path: MATCH

## Surface 506562ca-e752-4bf4-a218-f06d965f8f7f

- Source
  file: apps/hb-central-homepage/src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.manifest.json
  id: 506562ca-e752-4bf4-a218-f06d965f8f7f
  alias: HbCentralHomepageQuickActionsWebPart
  entryModuleId: (missing)
  primaryScriptResourceKey: hb-central-homepage-quick-actions-web-part
  primaryScriptResourcePath: hb-central-homepage-quick-actions-web-part.js

- Generated
  file: apps/hb-central-homepage/release/manifests/506562ca-e752-4bf4-a218-f06d965f8f7f.manifest.json
  id: 506562ca-e752-4bf4-a218-f06d965f8f7f
  alias: HbCentralHomepageQuickActionsWebPart
  entryModuleId: hb-central-homepage-quick-actions-web-part
  primaryScriptResourceKey: hb-central-homepage-quick-actions-web-part
  primaryScriptResourcePath: hb-central-homepage-quick-actions-web-part_68d1f19c506736707671.js

- Pre-package
  file: apps/hb-central-homepage/sharepoint/solution/debug/506562ca-e752-4bf4-a218-f06d965f8f7f/WebPart_506562ca-e752-4bf4-a218-f06d965f8f7f.xml
  id: 506562ca-e752-4bf4-a218-f06d965f8f7f
  alias: HbCentralHomepageQuickActionsWebPart
  entryModuleId: hb-central-homepage-quick-actions-web-part
  primaryScriptResourceKey: hb-central-homepage-quick-actions-web-part
  primaryScriptResourcePath: hb-central-homepage-quick-actions-web-part_68d1f19c506736707671.js

- Packaged
  file: dist/sppkg/hb-central-homepage.sppkg
  id: 506562ca-e752-4bf4-a218-f06d965f8f7f
  alias: (n/a)
  entryModuleId: hb-central-homepage-quick-actions-web-part
  primaryScriptResourceKey: hb-central-homepage-quick-actions-web-part
  primaryScriptResourcePath: hb-central-homepage-quick-actions-web-part_68d1f19c506736707671.js

Diff checks:
- source->generated entryModuleId: MISMATCH
- generated->pre-package entryModuleId: MATCH
- pre-package->packaged entryModuleId: MATCH
- source->generated primary key: MATCH
- generated->pre-package primary key: MATCH
- pre-package->packaged primary key: MATCH
- generated->pre-package primary path: MATCH
- pre-package->packaged primary path: MATCH

## Aggregate ownership cardinality

- packaged unique entryModuleId count: 5
- packaged unique primary script-resource key count: 5
- packaged unique primary script-resource path count: 5
