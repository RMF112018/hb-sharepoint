import type { CSSProperties, PropsWithChildren, ReactNode } from "react";
import {
  getReducedMotionTransition,
  hbcElevationTokens,
  hbcMotionTokens,
  hbcRadiusTokens,
  hbcSemanticTokens,
  hbcSpacingTokens,
  hbcTypographyTokens,
} from "./tokens";

const sharedFontFamily = '"Segoe UI", Arial, sans-serif';
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type SurfaceTone = "default" | "muted" | "info" | "accent";

function resolveSurfaceTone(tone: SurfaceTone) {
  if (tone === "muted") return hbcSemanticTokens.surfaceMuted;
  if (tone === "info") return hbcSemanticTokens.surfaceInfo;
  if (tone === "accent") return hbcSemanticTokens.surfaceAccent;
  return hbcSemanticTokens.surface;
}

export function HbcSection({
  children,
  tone = "default",
}: PropsWithChildren<{ tone?: SurfaceTone }>) {
  const style: CSSProperties = {
    maxWidth: "72rem",
    margin: "0 auto",
    padding: hbcSpacingTokens.xxl,
    background: resolveSurfaceTone(tone),
    border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
    borderRadius: hbcRadiusTokens.lg,
    boxShadow: hbcElevationTokens.soft,
    fontFamily: sharedFontFamily,
  };

  return <section style={style}>{children}</section>;
}

export function HbcBadge({
  children,
  tone = "default",
}: PropsWithChildren<{ tone?: "default" | "accent" }>) {
  const style: CSSProperties = {
    display: "inline-block",
    padding: `${hbcSpacingTokens.xxs} ${hbcSpacingTokens.sm}`,
    borderRadius: hbcRadiusTokens.pill,
    background:
      tone === "accent" ? hbcSemanticTokens.actionAccent : hbcSemanticTokens.actionPrimary,
    color: hbcSemanticTokens.textOnStrong,
    fontSize: hbcTypographyTokens.eyebrow.fontSize,
    fontWeight: hbcTypographyTokens.eyebrow.fontWeight,
    letterSpacing: hbcTypographyTokens.eyebrow.letterSpacing,
    textTransform: hbcTypographyTokens.eyebrow.textTransform,
  };

  return <span style={style}>{children}</span>;
}

export function HbcEditorialCard({
  title,
  eyebrow,
  children,
  footer,
  titleLevel = 2,
}: PropsWithChildren<{
  title: string;
  eyebrow?: ReactNode;
  footer?: ReactNode;
  titleLevel?: HeadingLevel;
}>) {
  const cardStyle: CSSProperties = {
    display: "grid",
    gap: hbcSpacingTokens.lg,
    padding: hbcSpacingTokens.xl,
    borderRadius: hbcRadiusTokens.lg,
    background: hbcSemanticTokens.surface,
    border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
  };

  const titleStyle: CSSProperties = {
    margin: 0,
    color: hbcSemanticTokens.textPrimary,
    fontSize: hbcTypographyTokens.title.fontSize,
    lineHeight: hbcTypographyTokens.title.lineHeight,
    fontWeight: hbcTypographyTokens.title.fontWeight,
  };

  const bodyStyle: CSSProperties = {
    margin: 0,
    color: hbcSemanticTokens.textSecondary,
    fontSize: hbcTypographyTokens.body.fontSize,
    lineHeight: hbcTypographyTokens.body.lineHeight,
  };

  const TitleTag = `h${titleLevel}` as const;

  return (
    <article style={cardStyle}>
      <div style={{ display: "grid", gap: hbcSpacingTokens.sm }}>
        {eyebrow}
        <TitleTag style={titleStyle}>{title}</TitleTag>
      </div>
      <div style={bodyStyle}>{children}</div>
      {footer ? <div>{footer}</div> : null}
    </article>
  );
}

export function HbcMediaFrame({ label }: { label: string }) {
  const style: CSSProperties = {
    minHeight: "10rem",
    borderRadius: hbcRadiusTokens.md,
    background: `linear-gradient(145deg, ${hbcSemanticTokens.surfaceInfo}, ${hbcSemanticTokens.surfaceAccent})`,
    border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
    display: "grid",
    placeItems: "center",
    color: hbcSemanticTokens.textPrimary,
    fontSize: hbcTypographyTokens.compact.fontSize,
    fontWeight: hbcTypographyTokens.compact.fontWeight,
  };

  return <div aria-label={label} style={style}>{label}</div>;
}

export function HbcCta({
  href,
  children,
  ariaLabel,
  external = false,
}: PropsWithChildren<{ href: string; ariaLabel?: string; external?: boolean }>) {
  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: hbcSpacingTokens.xs,
    padding: `${hbcSpacingTokens.sm} ${hbcSpacingTokens.lg}`,
    borderRadius: hbcRadiusTokens.pill,
    background: hbcSemanticTokens.actionPrimary,
    color: hbcSemanticTokens.textOnStrong,
    textDecoration: "none",
    fontWeight: 700,
    transition: `transform ${getReducedMotionTransition(false)}`,
  };

  return (
    <a
      href={href}
      style={style}
      aria-label={ariaLabel}
      className="hb-homepage-link hb-focus-link"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
    >
      {children}
    </a>
  );
}

export function HbcSkeletonBlock({ label }: { label: string }) {
  const style: CSSProperties = {
    minHeight: "4rem",
    borderRadius: hbcRadiusTokens.md,
    background: `linear-gradient(90deg, ${hbcSemanticTokens.skeletonBase}, ${hbcSemanticTokens.skeletonHighlight}, ${hbcSemanticTokens.skeletonBase})`,
    backgroundSize: "200% 100%",
    animation: `hbc-skeleton ${hbcMotionTokens.durationStandard} linear infinite`,
  };

  return (
    <div aria-label={label} style={style}>
      <style>{`
        @keyframes hbc-skeleton {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes hbc-skeleton {
            0% { background-position: 0 0; }
            100% { background-position: 0 0; }
          }
        }
      `}</style>
    </div>
  );
}

export function HbcEmptyState({
  title,
  body,
  headingLevel = 2,
}: {
  title: string;
  body: string;
  headingLevel?: HeadingLevel;
}) {
  const wrapperStyle: CSSProperties = {
    display: "grid",
    gap: hbcSpacingTokens.sm,
    padding: hbcSpacingTokens.xl,
    borderRadius: hbcRadiusTokens.md,
    background: hbcSemanticTokens.surfaceMuted,
    border: `1px dashed ${hbcSemanticTokens.borderStrong}`,
  };

  const headingStyle: CSSProperties = {
    margin: 0,
    color: hbcSemanticTokens.textPrimary,
    fontSize: "1.1rem",
    fontWeight: 700,
  };

  const bodyStyle: CSSProperties = {
    margin: 0,
    color: hbcSemanticTokens.textSecondary,
    lineHeight: hbcTypographyTokens.body.lineHeight,
  };

  const HeadingTag = `h${headingLevel}` as const;

  return (
    <div style={wrapperStyle}>
      <HeadingTag style={headingStyle}>{title}</HeadingTag>
      <p style={bodyStyle}>{body}</p>
    </div>
  );
}

export function HbcErrorState({
  title,
  body,
  headingLevel = 2,
}: {
  title: string;
  body: string;
  headingLevel?: HeadingLevel;
}) {
  const wrapperStyle: CSSProperties = {
    display: "grid",
    gap: hbcSpacingTokens.sm,
    padding: hbcSpacingTokens.xl,
    borderRadius: hbcRadiusTokens.md,
    background: hbcSemanticTokens.surfaceError,
    border: `1px solid ${hbcSemanticTokens.actionDanger}`,
  };

  const headingStyle: CSSProperties = {
    margin: 0,
    color: hbcSemanticTokens.textPrimary,
    fontSize: "1.1rem",
    fontWeight: 700,
  };

  const bodyStyle: CSSProperties = {
    margin: 0,
    color: hbcSemanticTokens.textSecondary,
    lineHeight: hbcTypographyTokens.body.lineHeight,
  };

  const HeadingTag = `h${headingLevel}` as const;

  return (
    <div role="alert" style={wrapperStyle}>
      <HeadingTag style={headingStyle}>{title}</HeadingTag>
      <p style={bodyStyle}>{body}</p>
    </div>
  );
}
