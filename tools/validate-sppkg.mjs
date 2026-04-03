import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

/** @typedef {{
 * hasContentTypes: boolean;
 * hasRootRels: boolean;
 * packageManifestRelationshipCount: number;
 * packageManifestTarget: string | null;
 * packageManifestTargetExists: boolean;
 * localhostManifestEntries: string[];
 * unsupportedFeatureEntries: string[];
 * }} SppkgValidationResult */

const packageManifestRelationshipType =
  "http://schemas.microsoft.com/sharepoint/2012/app/relationships/package-manifest";

function runUnzip(args) {
  const result = spawnSync("unzip", args, { encoding: "utf8", stdio: "pipe" });
  if (result.status !== 0) {
    throw new Error(`unzip ${args.join(" ")} failed: ${result.stderr || result.stdout}`);
  }

  return result.stdout;
}

function listEntries(artifactPath) {
  return runUnzip(["-Z1", artifactPath])
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function readEntry(artifactPath, entryPath) {
  return runUnzip(["-p", artifactPath, entryPath]);
}

function normalizePackagePath(path) {
  return path.replace(/^\//, "").replace(/\\/g, "/");
}

function hasLocalhostReference(content) {
  return /https?:\/\/localhost(?::\d+)?\//i.test(content);
}

function hasUnsupportedFeatureRegistration(content) {
  return /<\s*ClientSideComponentInstance\b/i.test(content);
}

/** @param {string} artifactPath */
function validateSppkg(artifactPath) {
  const entries = listEntries(artifactPath);
  const hasContentTypes = entries.includes("[Content_Types].xml");
  const hasRootRels = entries.includes("_rels/.rels");

  let packageManifestRelationshipCount = 0;
  let packageManifestTarget = null;
  let packageManifestTargetExists = false;
  const localhostManifestEntries = [];
  const unsupportedFeatureEntries = [];

  if (hasRootRels) {
    const relsXml = readEntry(artifactPath, "_rels/.rels");
    const relationshipRegex = /<Relationship\b([^>]*?)\/?>/g;
    let match = relationshipRegex.exec(relsXml);

    while (match) {
      const attrs = match[1];
      const typeMatch = attrs.match(/\bType="([^"]+)"/);
      const targetMatch = attrs.match(/\bTarget="([^"]+)"/);

      if (typeMatch?.[1] === packageManifestRelationshipType) {
        packageManifestRelationshipCount += 1;
        packageManifestTarget = targetMatch?.[1] ?? null;
      }

      match = relationshipRegex.exec(relsXml);
    }

    if (packageManifestTarget) {
      packageManifestTargetExists = entries.includes(normalizePackagePath(packageManifestTarget));
    }
  }

  const textEntries = entries.filter(
    (entry) => /\.(xml|rels|json|js)$/i.test(entry) && !entry.includes("[") && !entry.includes("]"),
  );
  for (const entry of textEntries) {
    const content = readEntry(artifactPath, entry);
    if (hasLocalhostReference(content)) {
      localhostManifestEntries.push(entry);
    }
  }

  const featureEntries = entries.filter((entry) => /(^|\/)elements\.xml$/i.test(entry));
  for (const entry of featureEntries) {
    const content = readEntry(artifactPath, entry);
    if (hasUnsupportedFeatureRegistration(content)) {
      unsupportedFeatureEntries.push(entry);
    }
  }

  /** @type {SppkgValidationResult} */
  const result = {
    hasContentTypes,
    hasRootRels,
    packageManifestRelationshipCount,
    packageManifestTarget,
    packageManifestTargetExists,
    localhostManifestEntries,
    unsupportedFeatureEntries,
  };

  return result;
}

function main() {
  const artifactPath = resolve(process.cwd(), process.argv[2] || "dist/sppkg/hb-central-homepage.sppkg");

  if (!existsSync(artifactPath)) {
    throw new Error(`Missing .sppkg artifact: ${artifactPath}`);
  }

  const result = validateSppkg(artifactPath);
  const failures = [];

  if (!result.hasContentTypes) failures.push("[Content_Types].xml is missing");
  if (!result.hasRootRels) failures.push("_rels/.rels is missing");
  if (result.packageManifestRelationshipCount !== 1) {
    failures.push(
      `package-manifest relationship count is ${result.packageManifestRelationshipCount}; expected 1`,
    );
  }
  if (!result.packageManifestTarget) failures.push("package-manifest relationship target is missing");
  if (result.packageManifestTarget && !result.packageManifestTargetExists) {
    failures.push(`package-manifest target does not exist: ${result.packageManifestTarget}`);
  }
  if (result.localhostManifestEntries.length > 0) {
    failures.push(
      `localhost production reference detected in: ${result.localhostManifestEntries.join(", ")}`,
    );
  }
  if (result.unsupportedFeatureEntries.length > 0) {
    failures.push(
      `unsupported ClientSideComponentInstance registration detected in: ${result.unsupportedFeatureEntries.join(", ")}`,
    );
  }

  if (failures.length > 0) {
    throw new Error(`Invalid .sppkg structure:\n${failures.map((f) => `- ${f}`).join("\n")}`);
  }

  process.stdout.write(
    `Validated .sppkg: ${artifactPath}\n` +
      `- [Content_Types].xml: present\n` +
      `- _rels/.rels: present\n` +
      `- package-manifest relationship: 1\n` +
      `- package-manifest target: ${result.packageManifestTarget}\n` +
      `- localhost manifest references: none\n` +
      `- unsupported feature registration: none\n`,
  );
}

main();
