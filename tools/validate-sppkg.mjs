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
 * debugLeakageEntries: string[];
 * unsupportedFeatureEntries: string[];
 * missingExpectedWebPartDefinitionEntries: string[];
 * webPartOwnershipRecords: Array<{
 *   id: string;
 *   entryModuleId: string | null;
 *   primaryScriptResourceKey: string | null;
 *   primaryScriptResourcePath: string | null;
 * }>;
 * webPartOwnershipParseFailures: string[];
 * runtimeOwnerChunkRecords: Array<{
 *   entry: string;
 *   mounts: string[];
 *   blockedSignatures: string[];
 * }>;
 * runtimeOwnerChunkViolations: string[];
 * missingRuntimeOwnerMountExports: string[];
 * duplicateRuntimeOwnerMountExports: Array<{
 *   mount: string;
 *   entries: string[];
 * }>;
 * }} SppkgValidationResult */

const packageManifestRelationshipType =
  "http://schemas.microsoft.com/sharepoint/2012/app/relationships/package-manifest";
const expectedWebPartManifestIds = [
  "b8bb1136-d33e-47d2-9d45-848524b8fcbf",
  "4ff4d963-cb8e-4ba2-b70f-89f72f0f4db1",
  "02ce4751-f355-444e-a635-a6f3b11fad79",
  "c5819073-cf72-4d91-bd5b-49982a6b8230",
  "506562ca-e752-4bf4-a218-f06d965f8f7f",
];
const expectedWebPartDefinitionEntries = expectedWebPartManifestIds.map(
  (id) => `${id}/WebPart_${id}.xml`,
);
const expectedRuntimeOwnerMountExports = [
  "mountHomepageSections",
  "mountHomepageHero",
  "mountHomepageFeaturedProjects",
  "mountHomepageCompanyPulse",
  "mountHomepageQuickActions",
];

function runUnzip(args) {
  const result = spawnSync("unzip", args, { encoding: "utf8", stdio: "pipe" });
  if (result.status !== 0) {
    throw new Error(
      `unzip ${args.join(" ")} failed: ${result.stderr || result.stdout}`,
    );
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

function hasDebugLeakage(content) {
  return (
    /debugmanifestsfile=/i.test(content) ||
    /loadspfx=true/i.test(content) ||
    /noredir=true/i.test(content) ||
    /_layouts\/15\/workbench\.aspx/i.test(content)
  );
}

function decodeXmlAttribute(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function extractComponentManifestJson(webPartXml) {
  const match = webPartXml.match(/\bComponentManifest="([^"]+)"/);
  if (!match) {
    throw new Error("ComponentManifest attribute is missing");
  }
  const decoded = decodeXmlAttribute(match[1]);
  return JSON.parse(decoded);
}

function resolvePrimaryScriptResource(loaderConfig) {
  if (!loaderConfig || typeof loaderConfig !== "object") {
    return { key: null, path: null };
  }
  const scriptResources = loaderConfig.scriptResources;
  if (!scriptResources || typeof scriptResources !== "object") {
    return { key: null, path: null };
  }

  const entryModuleId =
    typeof loaderConfig.entryModuleId === "string"
      ? loaderConfig.entryModuleId
      : null;
  if (entryModuleId) {
    const byEntryModule = scriptResources[entryModuleId];
    if (
      byEntryModule?.type === "path" &&
      typeof byEntryModule.path === "string"
    ) {
      return { key: entryModuleId, path: byEntryModule.path };
    }
  }

  for (const [key, resource] of Object.entries(scriptResources)) {
    if (key.startsWith("@")) continue;
    if (resource?.type === "path" && typeof resource.path === "string") {
      return { key, path: resource.path };
    }
  }

  return { key: null, path: null };
}

function inspectRuntimeOwnerChunks(entries, artifactPath) {
  const runtimeChunkEntries = entries.filter((entry) =>
    /^ClientSideAssets\/chunk\..*\.js$/i.test(entry),
  );
  const runtimeOwnerChunkRecords = [];
  const runtimeOwnerChunkViolations = [];
  const mountEntryMap = new Map();

  for (const entry of runtimeChunkEntries) {
    const content = readEntry(artifactPath, entry);
    const mounts = expectedRuntimeOwnerMountExports.filter((mount) =>
      content.includes(mount),
    );
    if (mounts.length === 0) continue;

    const blockedSignatures = [];
    if (/Object\.defineProperty\(\s*exports\b/.test(content)) {
      blockedSignatures.push("Object.defineProperty(exports, ...)");
    }
    if (/\bexports\.mountHomepage[A-Za-z]+\b/.test(content)) {
      blockedSignatures.push("exports.mountHomepage...");
    }
    if (/\brequire\s*\(/.test(content)) {
      blockedSignatures.push("require(...)");
    }

    runtimeOwnerChunkRecords.push({ entry, mounts, blockedSignatures });
    for (const mount of mounts) {
      const mountEntries = mountEntryMap.get(mount);
      if (mountEntries) {
        mountEntries.push(entry);
      } else {
        mountEntryMap.set(mount, [entry]);
      }
    }

    if (blockedSignatures.length > 0) {
      runtimeOwnerChunkViolations.push(
        `${entry} [${mounts.join(", ")}]: ${blockedSignatures.join(", ")}`,
      );
    }
  }

  const missingRuntimeOwnerMountExports = expectedRuntimeOwnerMountExports.filter(
    (mount) => !mountEntryMap.has(mount),
  );
  const duplicateRuntimeOwnerMountExports = Array.from(mountEntryMap.entries())
    .filter(([, mappedEntries]) => mappedEntries.length > 1)
    .map(([mount, mappedEntries]) => ({
      mount,
      entries: mappedEntries,
    }));

  return {
    runtimeOwnerChunkRecords,
    runtimeOwnerChunkViolations,
    missingRuntimeOwnerMountExports,
    duplicateRuntimeOwnerMountExports,
  };
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
  const debugLeakageEntries = [];
  const unsupportedFeatureEntries = [];
  const missingExpectedWebPartDefinitionEntries =
    expectedWebPartDefinitionEntries.filter(
      (entry) => !entries.includes(entry),
    );
  const webPartOwnershipRecords = [];
  const webPartOwnershipParseFailures = [];
  const {
    runtimeOwnerChunkRecords,
    runtimeOwnerChunkViolations,
    missingRuntimeOwnerMountExports,
    duplicateRuntimeOwnerMountExports,
  } = inspectRuntimeOwnerChunks(entries, artifactPath);

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
      packageManifestTargetExists = entries.includes(
        normalizePackagePath(packageManifestTarget),
      );
    }
  }

  const textEntries = entries.filter(
    (entry) =>
      /\.(xml|rels|json|js)$/i.test(entry) &&
      !entry.includes("[") &&
      !entry.includes("]"),
  );
  for (const entry of textEntries) {
    const content = readEntry(artifactPath, entry);
    if (hasLocalhostReference(content)) {
      localhostManifestEntries.push(entry);
    }
    if (hasDebugLeakage(content)) {
      debugLeakageEntries.push(entry);
    }
  }

  const featureEntries = entries.filter((entry) =>
    /(^|\/)elements\.xml$/i.test(entry),
  );
  for (const entry of featureEntries) {
    const content = readEntry(artifactPath, entry);
    if (hasUnsupportedFeatureRegistration(content)) {
      unsupportedFeatureEntries.push(entry);
    }
  }

  for (const webPartId of expectedWebPartManifestIds) {
    const webPartEntry = `${webPartId}/WebPart_${webPartId}.xml`;
    if (!entries.includes(webPartEntry)) continue;

    try {
      const webPartXml = readEntry(artifactPath, webPartEntry);
      const componentManifest = extractComponentManifestJson(webPartXml);
      const loaderConfig =
        componentManifest && typeof componentManifest === "object"
          ? componentManifest.loaderConfig
          : null;
      const entryModuleId =
        loaderConfig && typeof loaderConfig.entryModuleId === "string"
          ? loaderConfig.entryModuleId
          : null;
      const primaryScriptResource = resolvePrimaryScriptResource(loaderConfig);
      webPartOwnershipRecords.push({
        id: webPartId,
        entryModuleId,
        primaryScriptResourceKey: primaryScriptResource.key,
        primaryScriptResourcePath: primaryScriptResource.path,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      webPartOwnershipParseFailures.push(`${webPartEntry}: ${errorMessage}`);
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
    debugLeakageEntries,
    unsupportedFeatureEntries,
    missingExpectedWebPartDefinitionEntries,
    webPartOwnershipRecords,
    webPartOwnershipParseFailures,
    runtimeOwnerChunkRecords,
    runtimeOwnerChunkViolations,
    missingRuntimeOwnerMountExports,
    duplicateRuntimeOwnerMountExports,
  };

  return result;
}

function main() {
  const artifactPath = resolve(
    process.cwd(),
    process.argv[2] || "dist/sppkg/hb-central-homepage.sppkg",
  );

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
  if (!result.packageManifestTarget)
    failures.push("package-manifest relationship target is missing");
  if (result.packageManifestTarget && !result.packageManifestTargetExists) {
    failures.push(
      `package-manifest target does not exist: ${result.packageManifestTarget}`,
    );
  }
  if (result.localhostManifestEntries.length > 0) {
    failures.push(
      `localhost production reference detected in: ${result.localhostManifestEntries.join(", ")}`,
    );
  }
  if (result.debugLeakageEntries.length > 0) {
    failures.push(
      `debug/workbench leakage detected in production package entries: ${result.debugLeakageEntries.join(", ")}`,
    );
  }
  if (result.unsupportedFeatureEntries.length > 0) {
    failures.push(
      `unsupported ClientSideComponentInstance registration detected in: ${result.unsupportedFeatureEntries.join(
        ", ",
      )}`,
    );
  }
  if (result.missingExpectedWebPartDefinitionEntries.length > 0) {
    failures.push(
      `missing expected focused web part registrations: ${result.missingExpectedWebPartDefinitionEntries.join(", ")}`,
    );
  }
  if (result.webPartOwnershipParseFailures.length > 0) {
    failures.push(
      `unable to parse packaged web part ownership manifests: ${result.webPartOwnershipParseFailures.join("; ")}`,
    );
  }
  if (result.runtimeOwnerChunkRecords.length === 0) {
    failures.push(
      `unable to locate homepage runtime owner lazy chunks in ClientSideAssets/chunk.*.js for expected mounts: ${expectedRuntimeOwnerMountExports.join(", ")}`,
    );
  }
  if (result.missingRuntimeOwnerMountExports.length > 0) {
    failures.push(
      `missing runtime owner mount exports in lazy chunk inspection: ${result.missingRuntimeOwnerMountExports.join(", ")}`,
    );
  }
  if (result.duplicateRuntimeOwnerMountExports.length > 0) {
    failures.push(
      `runtime owner mount exports mapped to multiple lazy chunks: ${result.duplicateRuntimeOwnerMountExports
        .map(({ mount, entries }) => `${mount} -> ${entries.join(" | ")}`)
        .join("; ")}`,
    );
  }
  if (result.runtimeOwnerChunkViolations.length > 0) {
    failures.push(
      `browser-incompatible CommonJS runtime signatures detected in homepage lazy owner chunks: ${result.runtimeOwnerChunkViolations.join("; ")}`,
    );
  }

  const ownershipRecordsById = new Map(
    result.webPartOwnershipRecords.map((record) => [record.id, record]),
  );
  const missingOwnershipRecords = expectedWebPartManifestIds.filter(
    (id) => !ownershipRecordsById.has(id),
  );
  if (missingOwnershipRecords.length > 0) {
    failures.push(
      `missing packaged ownership records for web parts: ${missingOwnershipRecords.join(", ")}`,
    );
  }

  const missingEntryModuleOwnership = result.webPartOwnershipRecords
    .filter((record) => !record.entryModuleId)
    .map((record) => record.id);
  if (missingEntryModuleOwnership.length > 0) {
    failures.push(
      `missing entryModuleId in packaged manifests for web parts: ${missingEntryModuleOwnership.join(", ")}`,
    );
  }

  const missingPrimaryScriptOwnership = result.webPartOwnershipRecords
    .filter(
      (record) =>
        !record.primaryScriptResourceKey || !record.primaryScriptResourcePath,
    )
    .map((record) => record.id);
  if (missingPrimaryScriptOwnership.length > 0) {
    failures.push(
      `missing primary script-resource ownership in packaged manifests for web parts: ${missingPrimaryScriptOwnership.join(
        ", ",
      )}`,
    );
  }

  const uniqueEntryModuleIds = new Set(
    result.webPartOwnershipRecords
      .map((record) => record.entryModuleId)
      .filter(Boolean),
  );
  if (uniqueEntryModuleIds.size !== expectedWebPartManifestIds.length) {
    failures.push(
      `packaged web part entryModuleId ownership collapsed: found ${uniqueEntryModuleIds.size} unique values, expected ${expectedWebPartManifestIds.length}. Inspect per-web-part ownership map in this output.`,
    );
  }

  const uniquePrimaryScriptResourceKeys = new Set(
    result.webPartOwnershipRecords
      .map((record) => record.primaryScriptResourceKey)
      .filter(Boolean),
  );
  if (
    uniquePrimaryScriptResourceKeys.size !== expectedWebPartManifestIds.length
  ) {
    failures.push(
      `packaged primary script-resource keys collapsed: found ${uniquePrimaryScriptResourceKeys.size} unique values, expected ${expectedWebPartManifestIds.length}. Inspect per-web-part ownership map in this output.`,
    );
  }

  const uniquePrimaryScriptResourcePaths = new Set(
    result.webPartOwnershipRecords
      .map((record) => record.primaryScriptResourcePath)
      .filter(Boolean),
  );
  if (
    uniquePrimaryScriptResourcePaths.size !== expectedWebPartManifestIds.length
  ) {
    failures.push(
      `packaged primary script-resource paths collapsed: found ${uniquePrimaryScriptResourcePaths.size} unique values, expected ${expectedWebPartManifestIds.length}. Inspect per-web-part ownership map in this output.`,
    );
  }

  const ownershipRecordsSummary = result.webPartOwnershipRecords
    .map(
      (record) =>
        `  - ${record.id}: ${record.entryModuleId} -> ${record.primaryScriptResourceKey} (${record.primaryScriptResourcePath})`,
    )
    .join("\n");
  const runtimeOwnerChunkSummary = result.runtimeOwnerChunkRecords
    .map(
      (record) =>
        `  - ${record.entry}: ${record.mounts.join(", ")}${record.blockedSignatures.length > 0 ? ` [blocked: ${record.blockedSignatures.join(", ")}]` : ""}`,
    )
    .join("\n");

  if (failures.length > 0) {
    throw new Error(
      `Invalid .sppkg structure:\n${failures.map((f) => `- ${f}`).join("\n")}\n- packaged ownership map:\n${ownershipRecordsSummary}\n- runtime owner lazy-chunk inspection:\n${runtimeOwnerChunkSummary}`,
    );
  }

  process.stdout.write(
    `Validated .sppkg: ${artifactPath}\n` +
      `- [Content_Types].xml: present\n` +
      `- _rels/.rels: present\n` +
      `- package-manifest relationship: 1\n` +
      `- package-manifest target: ${result.packageManifestTarget}\n` +
      `- localhost manifest references: none\n` +
      `- debug/workbench leakage: none\n` +
      `- unsupported feature registration: none\n` +
      `- focused web part registrations: present (${expectedWebPartManifestIds.join(", ")})\n` +
      `- packaged entryModuleId ownership: ${uniqueEntryModuleIds.size} unique values\n` +
      `- packaged primary script-resource keys: ${uniquePrimaryScriptResourceKeys.size} unique values\n` +
      `- packaged primary script-resource paths: ${uniquePrimaryScriptResourcePaths.size} unique values\n` +
      `- runtime owner lazy chunks inspected: ${result.runtimeOwnerChunkRecords.length}\n` +
      `- runtime owner exports discovered: ${result.runtimeOwnerChunkRecords.flatMap((record) => record.mounts).length}\n` +
      `- runtime owner CommonJS signatures: none\n` +
      ownershipRecordsSummary +
      "\n" +
      runtimeOwnerChunkSummary +
      "\n",
  );
}

main();
