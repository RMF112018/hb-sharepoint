import { HBC_BRAND_TOKENS } from "@hbc/brand-tokens";

export const hbcBrandTokens = {
  primary: HBC_BRAND_TOKENS.color.brandPrimary,
  accent: HBC_BRAND_TOKENS.color.brandAccent,
  inkStrong: HBC_BRAND_TOKENS.color.inkStrong,
  inkMuted: HBC_BRAND_TOKENS.color.inkMuted,
  white: HBC_BRAND_TOKENS.color.white,
} as const;

export const hbcSurfaceTokens = {
  canvas: HBC_BRAND_TOKENS.surface.canvas,
  panel: HBC_BRAND_TOKENS.surface.panel,
  panelMuted: HBC_BRAND_TOKENS.surface.panelMuted,
  borderSubtle: HBC_BRAND_TOKENS.surface.borderSubtle,
  borderStrong: HBC_BRAND_TOKENS.surface.borderStrong,
  infoTint: HBC_BRAND_TOKENS.surface.infoTint,
  accentTint: HBC_BRAND_TOKENS.surface.accentTint,
  skeletonBase: HBC_BRAND_TOKENS.surface.skeletonBase,
  skeletonHighlight: HBC_BRAND_TOKENS.surface.skeletonHighlight,
  errorTint: HBC_BRAND_TOKENS.surface.errorTint,
  errorBorder: HBC_BRAND_TOKENS.surface.errorBorder,
} as const;

export const hbcSpacingTokens = HBC_BRAND_TOKENS.spacing;

export const hbcRadiusTokens = HBC_BRAND_TOKENS.radius;

export const hbcElevationTokens = {
  soft: "0 12px 32px rgba(22,49,79,0.08)",
  strong: "0 20px 60px rgba(22,49,79,0.14)",
} as const;

export const hbcTypographyTokens = HBC_BRAND_TOKENS.typography;

export const hbcMotionTokens = HBC_BRAND_TOKENS.motion;

export const hbcSemanticTokens = {
  background: hbcSurfaceTokens.canvas,
  surface: hbcSurfaceTokens.panel,
  surfaceMuted: hbcSurfaceTokens.panelMuted,
  surfaceInfo: hbcSurfaceTokens.infoTint,
  surfaceAccent: hbcSurfaceTokens.accentTint,
  surfaceError: hbcSurfaceTokens.errorTint,
  textPrimary: hbcBrandTokens.inkStrong,
  textSecondary: hbcBrandTokens.inkMuted,
  textOnStrong: hbcBrandTokens.white,
  borderSubtle: hbcSurfaceTokens.borderSubtle,
  borderStrong: hbcSurfaceTokens.borderStrong,
  actionPrimary: hbcBrandTokens.primary,
  actionAccent: hbcBrandTokens.accent,
  actionDanger: hbcSurfaceTokens.errorBorder,
  skeletonBase: hbcSurfaceTokens.skeletonBase,
  skeletonHighlight: hbcSurfaceTokens.skeletonHighlight,
} as const;

export function getReducedMotionTransition(
  prefersReducedMotion: boolean,
  fallback = hbcMotionTokens.durationStandard,
) {
  return prefersReducedMotion ? "none" : `${fallback} ${hbcMotionTokens.easingStandard}`;
}
