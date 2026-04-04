import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const DISALLOWED_RUNTIME_BRIDGE_PATTERN =
  /(?:^|["'`])(?:\.\.\/)+dist\/homepage\.js(?:["'`]|$)/;

const wiringChecks = [
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepage/HbCentralHomepageWebPart.js",
    expectedOwnerImport: "../../runtime/owners-browser/mountHomepageSections.js",
    expectedMountCall: "mountHomepageSections",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageHero/HbCentralHomepageHeroWebPart.js",
    expectedOwnerImport: "../../runtime/owners-browser/mountHomepageHero.js",
    expectedMountCall: "mountHomepageHero",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageFeaturedProjects/HbCentralHomepageFeaturedProjectsWebPart.js",
    expectedOwnerImport:
      "../../runtime/owners-browser/mountHomepageFeaturedProjects.js",
    expectedMountCall: "mountHomepageFeaturedProjects",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageCompanyPulse/HbCentralHomepageCompanyPulseWebPart.js",
    expectedOwnerImport:
      "../../runtime/owners-browser/mountHomepageCompanyPulse.js",
    expectedMountCall: "mountHomepageCompanyPulse",
  },
  {
    path: "apps/hb-central-homepage/src/webparts/hbCentralHomepageQuickActions/HbCentralHomepageQuickActionsWebPart.js",
    expectedOwnerImport:
      "../../runtime/owners-browser/mountHomepageQuickActions.js",
    expectedMountCall: "mountHomepageQuickActions",
  },
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function main() {
  const failures = [];

  for (const check of wiringChecks) {
    const fullPath = resolve(process.cwd(), check.path);
    const content = readFileSync(fullPath, "utf8");
    if (DISALLOWED_RUNTIME_BRIDGE_PATTERN.test(content)) {
      failures.push(
        `${check.path} still depends on a retired dist runtime bridge (expected no imports ending in dist/homepage.js)`,
      );
    }
    const importPattern = new RegExp(
      `import\\(\\s*["']${escapeRegExp(check.expectedOwnerImport)}["']\\s*\\)`,
    );
    if (!importPattern.test(content)) {
      failures.push(
        `${check.path} does not dynamically import ${check.expectedOwnerImport}`,
      );
    }
    const mountBindingPattern = new RegExp(
      `const\\s+${escapeRegExp(check.expectedMountCall)}\\s*=`,
    );
    if (!mountBindingPattern.test(content)) {
      failures.push(
        `${check.path} does not bind ${check.expectedMountCall} from imported owner module`,
      );
    }
    const mountCallPattern = new RegExp(
      `${escapeRegExp(check.expectedMountCall)}\\(root\\)`,
    );
    if (!mountCallPattern.test(content)) {
      failures.push(
        `${check.path} does not invoke ${check.expectedMountCall}(root)`,
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
