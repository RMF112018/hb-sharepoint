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
  type PeopleMomentsSourceModel,
  type PeopleMomentItem,
} from "./peopleMoments";
import { adaptPeopleMomentsSource } from "./homepageAuthoringConfig";
import { getHomepageLinkProps } from "./homepageHardening";

const gridStyle: CSSProperties = {
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

function typeLabel(type: PeopleMomentItem["type"]) {
  if (type === "birthday") return "Birthday";
  if (type === "anniversary") return "Anniversary";
  if (type === "promotion") return "Promotion";
  return "Recognition";
}

export interface PeopleMomentsSurfaceProps {
  sourceModel?: PeopleMomentsSourceModel;
  maxItems?: number;
}

export function PeopleMomentsSurface({
  sourceModel,
  maxItems = 6,
}: PeopleMomentsSurfaceProps) {
  const adapted = adaptPeopleMomentsSource(sourceModel, maxItems);
  const peopleMoments = adapted.items;

  if (adapted.state === "empty") {
    return (
      <section aria-labelledby="people-moments-heading" data-source-mode={adapted.sourceMode}>
        <h2 id="people-moments-heading" style={{ marginTop: 0 }}>
          People Moments
        </h2>
        <HbcEmptyState
          title="No people moments are posted yet"
          body="Add birthdays, anniversaries, promotions, or recognition notes to keep this section fresh."
          headingLevel={3}
        />
      </section>
    );
  }

  return (
    <section aria-labelledby="people-moments-heading" data-source-mode={adapted.sourceMode}>
      <div style={{ display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }}>
        <HbcBadge tone="accent">People Moments</HbcBadge>
        <h2
          id="people-moments-heading"
          style={{
            margin: 0,
            color: hbcSemanticTokens.textPrimary,
            fontSize: hbcTypographyTokens.title.fontSize,
            lineHeight: hbcTypographyTokens.title.lineHeight,
          }}
        >
          People and culture moments
        </h2>
      </div>

      <div
        data-testid="people-moments-grid"
        data-responsive-contract="grid-stack"
        className="hb-responsive-grid hb-grid-mosaic hb-layout-tier-marker"
        style={gridStyle}
      >
        {peopleMoments.map((moment) => (
          <article key={moment.id} style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: hbcSpacingTokens.sm }}>
              <small style={{ color: hbcSemanticTokens.textSecondary }}>
                {typeLabel(moment.type)}
              </small>
              {moment.celebrate ? <HbcBadge tone="accent">Celebration</HbcBadge> : null}
            </div>
            <h3
              style={{
                margin: 0,
                color: hbcSemanticTokens.textPrimary,
                fontSize: "1rem",
                lineHeight: hbcTypographyTokens.title.lineHeight,
              }}
            >
              {moment.personName}
            </h3>
            <p style={{ margin: 0, color: hbcSemanticTokens.textPrimary }}>
              {moment.milestone}
            </p>
            <p style={{ margin: 0, color: hbcSemanticTokens.textSecondary }}>
              {moment.supportLine}
            </p>
            {moment.destinationUrl ? (
              <a
                {...getHomepageLinkProps({
                  href: moment.destinationUrl,
                  purpose: `Open people moment for ${moment.personName}`,
                })}
                style={{ color: hbcSemanticTokens.actionPrimary }}
              >
                Open moment
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
