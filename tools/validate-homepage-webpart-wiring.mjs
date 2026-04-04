import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const DISALLOWED_RUNTIME_BRIDGE_PATTERN =
  /(?:^|["'`])(?:\.\.\/)+dist\/homepage\.js(?:["'`]|$)/;
const blockedPlaceholderPhraseChecks = [
  {
    label: "runtime owner is loaded through the browser-safe owner path",
    pattern: /runtime owner is loaded through the browser-safe owner path/i,
  },
  {
    label: "mounted through the browser-safe owner entrypoint",
    pattern: /mounted through the browser-safe owner entrypoint/i,
  },
  {
    label: "mounted through the browser-safe surface owner",
    pattern: /mounted through the browser-safe surface owner/i,
  },
];
const ownerSourceChecks = [
  "apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageSections.js",
  "apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageHero.js",
  "apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageFeaturedProjects.js",
  "apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageCompanyPulse.js",
  "apps/hb-central-homepage/src/runtime/owners-browser/mountHomepageQuickActions.js",
];

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

  for (const sourcePath of ownerSourceChecks) {
    const fullPath = resolve(process.cwd(), sourcePath);
    const content = readFileSync(fullPath, "utf8");
    const blockedMatches = blockedPlaceholderPhraseChecks
      .filter((check) => check.pattern.test(content))
      .map((check) => check.label);
    if (blockedMatches.length > 0) {
      failures.push(
        `${sourcePath} contains blocked placeholder success-path phrase(s): ${blockedMatches.join(", ")}`,
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
      "\n" +
      `Validated homepage owner source placeholder phrases (${ownerSourceChecks.length} checks): none blocked\n` +
      "\n",
  );
}

main();
