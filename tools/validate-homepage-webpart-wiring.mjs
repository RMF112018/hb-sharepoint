import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const wiringChecks = [
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js",
    expectedOwnerImport: "../../runtime/owners/mountHomepageSections.tsx",
    expectedMountCall: "mountHomepageSections",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js",
    expectedOwnerImport: "../../runtime/owners/mountHomepageHero.tsx",
    expectedMountCall: "mountHomepageHero",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js",
    expectedOwnerImport:
      "../../runtime/owners/mountHomepageFeaturedProjects.tsx",
    expectedMountCall: "mountHomepageFeaturedProjects",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js",
    expectedOwnerImport: "../../runtime/owners/mountHomepageCompanyPulse.tsx",
    expectedMountCall: "mountHomepageCompanyPulse",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js",
    expectedOwnerImport: "../../runtime/owners/mountHomepageQuickActions.tsx",
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
    if (!content.includes(`from "${check.expectedOwnerImport}"`)) {
      failures.push(
        `${check.path} does not import ${check.expectedOwnerImport}`,
      );
    }
    if (!content.includes(`${check.expectedMountCall}(root)`)) {
      failures.push(
        `${check.path} does not call ${check.expectedMountCall}(root)`,
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
