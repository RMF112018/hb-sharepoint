import {
  HbcBadge,
  HbcEmptyState,
  hbcRadiusTokens,
  hbcSemanticTokens,
  hbcSpacingTokens,
  hbcTypographyTokens,
} from "@hbc/ui-kit";
import type { CSSProperties } from "react";
import type { QuickActionsSourceModel } from "./quickActions";
import { adaptQuickActionsSource } from "./homepageAuthoringConfig";
import { getHomepageLinkProps } from "./homepageHardening";

const groupGridStyle: CSSProperties = {
  display: "grid",
  gap: hbcSpacingTokens.lg,
};

const actionGridStyle: CSSProperties = {
  gap: hbcSpacingTokens.sm,
};

const actionCardStyle: CSSProperties = {
  display: "grid",
  gap: hbcSpacingTokens.xs,
  borderRadius: hbcRadiusTokens.md,
  border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
  background: hbcSemanticTokens.surface,
  padding: hbcSpacingTokens.md,
};

const priorityCardStyle: CSSProperties = {
  ...actionCardStyle,
  border: `1px solid ${hbcSemanticTokens.actionAccent}`,
  background: hbcSemanticTokens.surfaceAccent,
};

export interface QuickActionsDeckProps {
  sourceModel?: QuickActionsSourceModel;
  maxItems?: number;
  labelMaxLength?: number;
}

export function QuickActionsDeck({
  sourceModel,
  maxItems,
  labelMaxLength,
}: QuickActionsDeckProps) {
  const adapted = adaptQuickActionsSource(sourceModel, maxItems, labelMaxLength);
  const groups = adapted.items;

  if (adapted.state === "empty") {
    return (
      <section aria-labelledby="quick-actions-heading" data-source-mode={adapted.sourceMode}>
        <h2 id="quick-actions-heading" style={{ marginTop: 0 }}>
          Quick Actions
        </h2>
        <HbcEmptyState
          title="No quick actions are configured"
          body="Add a small set of high-frequency destinations to keep this deck focused and useful."
          headingLevel={3}
        />
      </section>
    );
  }

  return (
    <section aria-labelledby="quick-actions-heading" data-source-mode={adapted.sourceMode}>
      <div style={{ display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }}>
        <HbcBadge>Quick Actions</HbcBadge>
        <h2
          id="quick-actions-heading"
          style={{
            margin: 0,
            color: hbcSemanticTokens.textPrimary,
            fontSize: hbcTypographyTokens.title.fontSize,
            lineHeight: hbcTypographyTokens.title.lineHeight,
          }}
        >
          Quick actions deck
        </h2>
      </div>

      <div data-testid="quick-actions-groups" style={groupGridStyle}>
        {groups.map((group) => (
          <section key={group.id} aria-labelledby={`quick-actions-group-${group.id}`}>
            <h3
              id={`quick-actions-group-${group.id}`}
              style={{ margin: `0 0 ${hbcSpacingTokens.sm} 0`, color: hbcSemanticTokens.textPrimary }}
            >
              {group.title}
            </h3>

            <div
              data-testid="quick-actions-wrap"
              data-responsive-contract="grid-stack"
              className="hb-responsive-grid hb-grid-actions hb-layout-tier-marker"
              style={actionGridStyle}
            >
              {group.items.map((action) => (
                <a
                  key={action.id}
                  {...getHomepageLinkProps({
                    href: action.href,
                    purpose: `Open action ${action.label}`,
                    external: action.external,
                  })}
                  style={action.priority ? priorityCardStyle : actionCardStyle}
                  data-priority={action.priority ? "true" : "false"}
                >
                  <strong style={{ color: hbcSemanticTokens.textPrimary }}>{action.label}</strong>
                  {action.description ? (
                    <span style={{ color: hbcSemanticTokens.textSecondary }}>
                      {action.description}
                    </span>
                  ) : null}
                  <small style={{ color: hbcSemanticTokens.textSecondary }}>
                    {action.external ? "External destination" : "Internal destination"}
                  </small>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
