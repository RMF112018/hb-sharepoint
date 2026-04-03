import { existsSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workspaceRoot = resolve(__dirname, '..');
const homepageRoot = resolve(workspaceRoot, 'apps/hb-central-homepage');
const gulpCliPath = resolve(homepageRoot, 'node_modules/gulp/bin/gulp.js');

if (!existsSync(gulpCliPath)) {
  throw new Error(`Missing gulp CLI at ${gulpCliPath}. Run \`pnpm install\` first.`);
}

function parseVersion(raw) {
  const cleaned = raw.trim().replace(/^v/, '');
  const match = cleaned.match(/^(\d+)\.(\d+)\.(\d+)/);
  if (!match) return null;
  return { major: Number(match[1]), minor: Number(match[2]), patch: Number(match[3]), raw: cleaned };
}

function isSupported(version) {
  if (!version) return false;
  if (version.major === 18) return version.minor > 17 || (version.minor === 17 && version.patch >= 1);
  if (version.major === 20) return version.minor > 11 || (version.minor === 11 && version.patch >= 0);
  if (version.major === 22) return version.minor > 14 || (version.minor === 14 && version.patch >= 0);
  return false;
}

function discoverNodeCandidates() {
  const candidates = [];

  const explicit = process.env.SPFX_NODE_BIN;
  if (explicit && existsSync(explicit)) {
    candidates.push(explicit);
  }

  candidates.push(process.execPath);

  const nvmRoot = join(homedir(), '.nvm/versions/node');
  if (existsSync(nvmRoot)) {
    for (const entry of readdirSync(nvmRoot)) {
      const nodePath = join(nvmRoot, entry, 'bin/node');
      if (existsSync(nodePath)) {
        candidates.push(nodePath);
      }
    }
  }

  return [...new Set(candidates)];
}

function selectNodeBinary() {
  const candidates = discoverNodeCandidates();
  let best = null;

  for (const candidate of candidates) {
    const probe = spawnSync(candidate, ['-v'], { encoding: 'utf8', stdio: 'pipe' });
    if (probe.status !== 0) continue;

    const version = parseVersion(probe.stdout);
    if (!isSupported(version)) continue;

    if (!best) {
      best = { path: candidate, version };
      continue;
    }

    const isNewer =
      version.major > best.version.major ||
      (version.major === best.version.major && version.minor > best.version.minor) ||
      (version.major === best.version.major &&
        version.minor === best.version.minor &&
        version.patch > best.version.patch);

    if (isNewer) {
      best = { path: candidate, version };
    }
  }

  return best;
}

function runGulpTask(nodeBinary, task) {
  const result = spawnSync(nodeBinary, [gulpCliPath, '--gulpfile', 'gulpfile.cjs', task, '--ship'], {
    cwd: homepageRoot,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    throw new Error(`SPFx task failed: gulp ${task} --ship`);
  }
}

function cleanPackagingOutputs() {
  const releaseAssetsDir = resolve(homepageRoot, 'release/assets');
  const debugSolutionDir = resolve(homepageRoot, 'sharepoint/solution/debug');

  rmSync(releaseAssetsDir, { recursive: true, force: true });
  rmSync(debugSolutionDir, { recursive: true, force: true });
}

function main() {
  const selected = selectNodeBinary();
  if (!selected) {
    throw new Error(
      [
        'No supported Node.js runtime found for SPFx packaging.',
        'Required: >=18.17.1 <19, >=20.11.0 <21, or >=22.14.0 <23.',
        'Set SPFX_NODE_BIN to a compatible node binary or run packaging under a supported Node version.',
      ].join(' '),
    );
  }

  process.stdout.write(`Using Node ${selected.version.raw} for SPFx packaging (${selected.path})\n`);
  cleanPackagingOutputs();
  runGulpTask(selected.path, 'bundle');
  runGulpTask(selected.path, 'package-solution');
}

main();
