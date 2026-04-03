import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const wiringChecks = [
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js",
    expectedMountExport: "mountHbCentralHomepage",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js",
    expectedMountExport: "mountHbCentralHomepageHero",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js",
    expectedMountExport: "mountHbCentralHomepageFeaturedProjects",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js",
    expectedMountExport: "mountHbCentralHomepageCompanyPulse",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js",
    expectedMountExport: "mountHbCentralHomepageQuickActions",
  },
];

function main() {
  const failures = [];

  for (const check of wiringChecks) {
    const fullPath = resolve(process.cwd(), check.path);
    const content = readFileSync(fullPath, "utf8");
    if (!content.includes(`module.${check.expectedMountExport}`)) {
      failures.push(`${check.path} does not reference ${check.expectedMountExport}`);
    }
  }

  if (failures.length > 0) {
    throw new Error(`Invalid homepage web part mount wiring:\n${failures.map((f) => `- ${f}`).join("\n")}`);
  }

  process.stdout.write(
    `Validated homepage web part mount wiring (${wiringChecks.length} checks)\n` +
      wiringChecks.map((check) => `- ${check.path} -> ${check.expectedMountExport}`).join("\n") +
      "\n",
  );
}

main();
