import {
  HbcBadge,
  HbcEmptyState,
  hbcRadiusTokens,
  hbcSemanticTokens,
  hbcSpacingTokens,
  hbcTypographyTokens,
} from "@hbc/ui-kit";
import type { CSSProperties } from "react";
import type { CompanyPulseSourceModel } from "./companyPulse";
import { adaptCompanyPulseSource } from "./homepageAuthoringConfig";
import { getHomepageLinkProps } from "./homepageHardening";

const listStyle: CSSProperties = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  gap: hbcSpacingTokens.md,
};

const itemStyle: CSSProperties = {
  display: "grid",
  gap: hbcSpacingTokens.xs,
  borderRadius: hbcRadiusTokens.md,
  border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
  background: hbcSemanticTokens.surfaceMuted,
  padding: hbcSpacingTokens.md,
};

function trendLabel(trend?: "up" | "down" | "steady") {
  if (trend === "up") return "Trending up";
  if (trend === "down") return "Trending down";
  if (trend === "steady") return "Holding steady";
  return "No trend";
}

export interface CompanyPulseBandProps {
  sourceModel?: CompanyPulseSourceModel;
  maxItems?: number;
}

export function CompanyPulseBand({
  sourceModel,
  maxItems = 4,
}: CompanyPulseBandProps) {
  const adapted = adaptCompanyPulseSource(sourceModel, maxItems);
  const pulseItems = adapted.items;

  if (adapted.state === "empty") {
    return (
      <section aria-labelledby="company-pulse-heading" data-source-mode={adapted.sourceMode}>
        <h2 id="company-pulse-heading" style={{ marginTop: 0 }}>
          Company Pulse
        </h2>
        <HbcEmptyState
          title="Company pulse is waiting for the next update"
          body="Add 3-5 concise metrics with clear values to keep this band fast to scan."
          headingLevel={3}
        />
      </section>
    );
  }

  return (
    <section aria-labelledby="company-pulse-heading" data-source-mode={adapted.sourceMode}>
      <div style={{ display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }}>
        <HbcBadge>Company Pulse</HbcBadge>
        <h2
          id="company-pulse-heading"
          style={{
            margin: 0,
            color: hbcSemanticTokens.textPrimary,
            fontSize: hbcTypographyTokens.title.fontSize,
            lineHeight: hbcTypographyTokens.title.lineHeight,
          }}
        >
          Company pulse band
        </h2>
      </div>
      <ul data-testid="company-pulse-list" style={listStyle}>
        {pulseItems.map((item) => (
          <li key={item.id} style={itemStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: hbcSpacingTokens.sm }}>
              <strong style={{ color: hbcSemanticTokens.textPrimary }}>{item.title}</strong>
              <span style={{ color: hbcSemanticTokens.textPrimary, fontWeight: 700 }}>{item.value}</span>
            </div>
            <p style={{ margin: 0, color: hbcSemanticTokens.textSecondary }}>{item.supportLine}</p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: hbcSpacingTokens.sm }}>
              <small style={{ color: hbcSemanticTokens.textSecondary }}>{trendLabel(item.trend)}</small>
              {item.destinationUrl ? (
                <a
                  {...getHomepageLinkProps({
                    href: item.destinationUrl,
                    purpose: `View ${item.title} metric`,
                  })}
                  style={{ color: hbcSemanticTokens.actionPrimary }}
                >
                  View metric
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
