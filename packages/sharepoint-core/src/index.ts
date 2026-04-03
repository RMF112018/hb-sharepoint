export type SharePointRuntime = "spfx" | "local-dev";

export interface SharePointContextSnapshot {
  siteUrl: string;
  webUrl: string;
  userLoginName?: string;
  runtime: SharePointRuntime;
}

export function normalizeSharePointUrl(value: string): string {
  const trimmed = value.trim();
  return trimmed.endsWith("/") ? trimmed.slice(0, -1) : trimmed;
}

export function createSharePointContextSnapshot(
  input: SharePointContextSnapshot
): SharePointContextSnapshot {
  return {
    ...input,
    siteUrl: normalizeSharePointUrl(input.siteUrl),
    webUrl: normalizeSharePointUrl(input.webUrl)
  };
}
