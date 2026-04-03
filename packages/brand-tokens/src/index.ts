export const HBC_BRAND_TOKENS = {
  color: {
    brandPrimary: "#225391",
    brandAccent: "#E57E46",
    inkStrong: "#16314F",
    inkMuted: "#4B6078",
    white: "#FFFFFF"
  },
  surface: {
    canvas: "#EEF4FB",
    panel: "#FFFFFF",
    panelMuted: "#F5F8FC",
    borderSubtle: "#D9E3EF",
    borderStrong: "#9DB1C7",
    infoTint: "#DBE8F7",
    accentTint: "#FAE4D9",
    skeletonBase: "#E4EBF4",
    skeletonHighlight: "#F7F9FC",
    errorTint: "#FDECEC",
    errorBorder: "#D93A3A"
  },
  spacing: {
    xxs: "0.25rem",
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem"
  },
  radius: {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    pill: "999px"
  },
  typography: {
    eyebrow: {
      fontSize: "0.8rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase" as const,
      fontWeight: 700
    },
    title: {
      fontSize: "clamp(1.75rem, 4vw, 3rem)",
      lineHeight: 1.05,
      fontWeight: 800
    },
    body: {
      fontSize: "1rem",
      lineHeight: 1.7,
      fontWeight: 400
    },
    compact: {
      fontSize: "0.92rem",
      lineHeight: 1.5,
      fontWeight: 500
    }
  },
  motion: {
    durationFast: "120ms",
    durationStandard: "200ms",
    easingStandard: "ease-out",
    hoverLift: "translateY(-2px)",
    reducedMotionTransform: "none"
  }
} as const;

export type HbcBrandTokens = typeof HBC_BRAND_TOKENS;
