import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HbcBadge, HbcEmptyState, hbcRadiusTokens, hbcSemanticTokens, hbcSpacingTokens, hbcTypographyTokens, } from "@hbc/ui-kit";
import { adaptGlobalUtilityLinks } from "./homepageAuthoringConfig";
import { getHomepageLinkProps } from "./homepageHardening";
const linkGridStyle = {
    display: "grid",
    gap: hbcSpacingTokens.sm,
    gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
};
const linkStyle = {
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
        return (_jsxs("footer", { "aria-labelledby": "global-utility-heading", "data-source-mode": adapted.sourceMode, children: [_jsx("h2", { id: "global-utility-heading", style: { marginTop: 0 }, children: "Global utility footer" }), _jsx(HbcEmptyState, { title: "Global utility links are not configured", body: "Add a concise set of support and platform links to keep this footer useful.", headingLevel: 3 })] }));
    }
    return (_jsxs("footer", { "aria-labelledby": "global-utility-heading", "data-source-mode": adapted.sourceMode, children: [_jsxs("div", { style: { display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }, children: [_jsx(HbcBadge, { children: "Global Utility" }), _jsx("h2", { id: "global-utility-heading", style: {
                            margin: 0,
                            color: hbcSemanticTokens.textPrimary,
                            fontSize: hbcTypographyTokens.title.fontSize,
                            lineHeight: hbcTypographyTokens.title.lineHeight,
                        }, children: "Global utility footer" })] }), _jsx("nav", { "aria-label": "Global utility links", "data-testid": "global-utility-links", style: linkGridStyle, children: adapted.items.map((link) => (_jsx("a", Object.assign({}, getHomepageLinkProps({
                    href: link.href,
                    purpose: `Open global utility link ${link.label}`,
                    external: link.external,
                }), { style: linkStyle, children: link.label }), link.id))) })] }));
}
