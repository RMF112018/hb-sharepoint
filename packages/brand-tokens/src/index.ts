export const HBC_BRAND_TOKENS = {
  color: {
    brandPrimary: "#0B2E4F",
    brandAccent: "#F47B20",
    surfaceNeutral: "#F7F9FC",
    textPrimary: "#132238"
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12
  }
} as const;

export type HbcBrandTokens = typeof HBC_BRAND_TOKENS;
