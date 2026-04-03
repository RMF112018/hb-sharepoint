import {
  HbcBadge,
  HbcEmptyState,
  hbcRadiusTokens,
  hbcSemanticTokens,
  hbcSpacingTokens,
  hbcTypographyTokens,
} from "@hbc/ui-kit";
import type { CSSProperties } from "react";
import {
  type MosaicEntry,
  type NewsRecognitionSourceModel,
} from "./newsRecognition";
import { adaptNewsRecognitionSource } from "./homepageAuthoringConfig";
import { getHomepageLinkProps } from "./homepageHardening";

const mosaicStyle: CSSProperties = {
  gap: hbcSpacingTokens.md,
};

const cardStyle: CSSProperties = {
  display: "grid",
  gap: hbcSpacingTokens.xs,
  padding: hbcSpacingTokens.md,
  borderRadius: hbcRadiusTokens.md,
  border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
  background: hbcSemanticTokens.surface,
};

const featuredCardStyle: CSSProperties = {
  ...cardStyle,
  border: `1px solid ${hbcSemanticTokens.actionAccent}`,
  background: hbcSemanticTokens.surfaceAccent,
};

function cardVariant(entry: MosaicEntry): CSSProperties {
  if (entry.featured) {
    return featuredCardStyle;
  }
  if (entry.type === "recognition") {
    return {
      ...cardStyle,
      background: hbcSemanticTokens.surfaceMuted,
    };
  }
  return cardStyle;
}

export interface NewsRecognitionSpotlightMosaicProps {
  sourceModel?: NewsRecognitionSourceModel;
  maxItems?: number;
}

export function NewsRecognitionSpotlightMosaic({
  sourceModel,
  maxItems = 8,
}: NewsRecognitionSpotlightMosaicProps) {
  const adapted = adaptNewsRecognitionSource(sourceModel, maxItems);
  const entries = adapted.items;

  if (adapted.state === "empty") {
    return (
      <section aria-labelledby="news-recognition-heading" data-source-mode={adapted.sourceMode}>
        <h2 id="news-recognition-heading" style={{ marginTop: 0 }}>
          News and recognition mosaic
        </h2>
        <HbcEmptyState
          title="No news, recognition, or spotlight items are available"
          body="Add at least one current item to keep this lower editorial section fresh."
          headingLevel={3}
        />
      </section>
    );
  }

  return (
    <section aria-labelledby="news-recognition-heading" data-source-mode={adapted.sourceMode}>
      <div style={{ display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }}>
        <HbcBadge tone="accent">Editorial Mosaic</HbcBadge>
        <h2
          id="news-recognition-heading"
          style={{
            margin: 0,
            color: hbcSemanticTokens.textPrimary,
            fontSize: hbcTypographyTokens.title.fontSize,
            lineHeight: hbcTypographyTokens.title.lineHeight,
          }}
        >
          News, recognition, and spotlight mosaic
        </h2>
      </div>

      <div
        data-testid="news-recognition-mosaic"
        data-responsive-contract="grid-stack"
        className="hb-responsive-grid hb-grid-mosaic hb-layout-tier-marker"
        style={mosaicStyle}
      >
        {entries.map((entry) => (
          <article key={entry.id} style={cardVariant(entry)}>
            <small style={{ color: hbcSemanticTokens.textSecondary }}>{entry.label}</small>
            <h3
              style={{
                margin: 0,
                color: hbcSemanticTokens.textPrimary,
                fontSize: "1rem",
                lineHeight: hbcTypographyTokens.title.lineHeight,
              }}
            >
              {entry.title}
            </h3>
            <p style={{ margin: 0, color: hbcSemanticTokens.textSecondary }}>{entry.summary}</p>
            <a
              {...getHomepageLinkProps({
                href: entry.href,
                purpose: `Open ${entry.label} item ${entry.title}`,
              })}
              style={{ color: hbcSemanticTokens.actionPrimary }}
            >
              Open item
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
