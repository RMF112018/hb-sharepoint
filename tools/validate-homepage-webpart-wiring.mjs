import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const wiringChecks = [
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js",
    expectedOwnerImport:
      "../../../lib-commonjs/src/runtime/owners/mountHomepageSections.js",
    expectedMountCall: "mountHomepageSections",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js",
    expectedOwnerImport:
      "../../../lib-commonjs/src/runtime/owners/mountHomepageHero.js",
    expectedMountCall: "mountHomepageHero",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js",
    expectedOwnerImport:
      "../../../lib-commonjs/src/runtime/owners/mountHomepageFeaturedProjects.js",
    expectedMountCall: "mountHomepageFeaturedProjects",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js",
    expectedOwnerImport:
      "../../../lib-commonjs/src/runtime/owners/mountHomepageCompanyPulse.js",
    expectedMountCall: "mountHomepageCompanyPulse",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js",
    expectedOwnerImport:
      "../../../lib-commonjs/src/runtime/owners/mountHomepageQuickActions.js",
    expectedMountCall: "mountHomepageQuickActions",
  },
];
const DISALLOWED_RUNTIME_BRIDGE = "../../../dist/homepage.js";

function main() {
  const failures = [];

  for (const check of wiringChecks) {
    const fullPath = resolve(process.cwd(), check.path);
    const content = readFileSync(fullPath, "utf8");
    if (content.includes(DISALLOWED_RUNTIME_BRIDGE)) {
      failures.push(
        `${check.path} still depends on ${DISALLOWED_RUNTIME_BRIDGE}`,
      );
    }
    if (!content.includes(check.expectedOwnerImport)) {
      failures.push(
        `${check.path} does not import ${check.expectedOwnerImport}`,
      );
    }
    if (!content.includes(check.expectedMountCall)) {
      failures.push(
        `${check.path} does not reference ${check.expectedMountCall}`,
      );
    }
  }

  if (failures.length > 0) {
    throw new Error(
      `Invalid homepage web part mount wiring:\n${failures.map((f) => `- ${f}`).join("\n")}`,
    );
  }

  process.stdout.write(
    `Validated homepage web part mount wiring (${wiringChecks.length} checks)\n` +
      wiringChecks
        .map(
          (check) =>
            `- ${check.path} -> ${check.expectedOwnerImport} (${check.expectedMountCall})`,
        )
        .join("\n") +
      "\n",
  );
}

main();
