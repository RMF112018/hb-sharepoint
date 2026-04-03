import {
  HbcBadge,
  HbcEmptyState,
  hbcRadiusTokens,
  hbcSemanticTokens,
  hbcSpacingTokens,
  hbcTypographyTokens,
} from "@hbc/ui-kit";
import type { CSSProperties } from "react";
import { adaptGlobalUtilityLinks } from "./homepageAuthoringConfig";
import { getHomepageLinkProps } from "./homepageHardening";

const linkGridStyle: CSSProperties = {
  display: "grid",
  gap: hbcSpacingTokens.sm,
  gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
};

const linkStyle: CSSProperties = {
  display: "block",
  padding: hbcSpacingTokens.sm,
  borderRadius: hbcRadiusTokens.md,
  border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
  background: hbcSemanticTokens.surfaceMuted,
  color: hbcSemanticTokens.actionPrimary,
  textDecoration: "none",
  fontWeight: 600,
};

export function GlobalUtilityFooter() {
  const adapted = adaptGlobalUtilityLinks();

  if (adapted.state === "empty") {
    return (
      <footer aria-labelledby="global-utility-heading" data-source-mode={adapted.sourceMode}>
        <h2 id="global-utility-heading" style={{ marginTop: 0 }}>
          Global utility footer
        </h2>
        <HbcEmptyState
          title="Global utility links are not configured"
          body="Add a concise set of support and platform links to keep this footer useful."
          headingLevel={3}
        />
      </footer>
    );
  }

  return (
    <footer aria-labelledby="global-utility-heading" data-source-mode={adapted.sourceMode}>
      <div style={{ display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }}>
        <HbcBadge>Global Utility</HbcBadge>
        <h2
          id="global-utility-heading"
          style={{
            margin: 0,
            color: hbcSemanticTokens.textPrimary,
            fontSize: hbcTypographyTokens.title.fontSize,
            lineHeight: hbcTypographyTokens.title.lineHeight,
          }}
        >
          Global utility footer
        </h2>
      </div>

      <nav aria-label="Global utility links" data-testid="global-utility-links" style={linkGridStyle}>
        {adapted.items.map((link) => (
          <a
            key={link.id}
            {...getHomepageLinkProps({
              href: link.href,
              purpose: `Open global utility link ${link.label}`,
              external: link.external,
            })}
            style={linkStyle}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
