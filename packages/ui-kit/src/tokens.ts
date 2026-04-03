export const hbcBrandTokens = {
  primary: "#225391",
  accent: "#E57E46",
  inkStrong: "#16314f",
  inkMuted: "#4b6078",
  white: "#ffffff",
} as const;

export const hbcSurfaceTokens = {
  canvas: "#eef4fb",
  panel: "#ffffff",
  panelMuted: "#f5f8fc",
  borderSubtle: "#d9e3ef",
  borderStrong: "#9db1c7",
  infoTint: "#dbe8f7",
  accentTint: "#fae4d9",
  skeletonBase: "#e4ebf4",
  skeletonHighlight: "#f7f9fc",
} as const;

export const hbcSpacingTokens = {
  xxs: "0.25rem",
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
} as const;

export const hbcRadiusTokens = {
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  pill: "999px",
} as const;

export const hbcElevationTokens = {
  soft: "0 12px 32px rgba(22,49,79,0.08)",
  strong: "0 20px 60px rgba(22,49,79,0.14)",
} as const;

export const hbcTypographyTokens = {
  eyebrow: {
    fontSize: "0.8rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    fontWeight: 700,
  },
  title: {
    fontSize: "clamp(1.75rem, 4vw, 3rem)",
    lineHeight: 1.05,
    fontWeight: 800,
  },
  body: {
    fontSize: "1rem",
    lineHeight: 1.7,
    fontWeight: 400,
  },
  compact: {
    fontSize: "0.92rem",
    lineHeight: 1.5,
    fontWeight: 500,
  },
} as const;

export const hbcMotionTokens = {
  durationFast: "120ms",
  durationStandard: "200ms",
  easingStandard: "ease-out",
  hoverLift: "translateY(-2px)",
  reducedMotionTransform: "none",
} as const;

export const hbcSemanticTokens = {
  background: hbcSurfaceTokens.canvas,
  surface: hbcSurfaceTokens.panel,
  surfaceMuted: hbcSurfaceTokens.panelMuted,
  surfaceInfo: hbcSurfaceTokens.infoTint,
  surfaceAccent: hbcSurfaceTokens.accentTint,
  textPrimary: hbcBrandTokens.inkStrong,
  textSecondary: hbcBrandTokens.inkMuted,
  textOnStrong: hbcBrandTokens.white,
  borderSubtle: hbcSurfaceTokens.borderSubtle,
  borderStrong: hbcSurfaceTokens.borderStrong,
  actionPrimary: hbcBrandTokens.primary,
  actionAccent: hbcBrandTokens.accent,
  skeletonBase: hbcSurfaceTokens.skeletonBase,
  skeletonHighlight: hbcSurfaceTokens.skeletonHighlight,
} as const;

export function getReducedMotionTransition(
  prefersReducedMotion: boolean,
  fallback = hbcMotionTokens.durationStandard,
) {
  return prefersReducedMotion ? "none" : `${fallback} ${hbcMotionTokens.easingStandard}`;
}
