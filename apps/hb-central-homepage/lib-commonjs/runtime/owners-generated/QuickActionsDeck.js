import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HbcBadge, HbcEmptyState, hbcRadiusTokens, hbcSemanticTokens, hbcSpacingTokens, hbcTypographyTokens, } from "@hbc/ui-kit";
import { adaptQuickActionsSource } from "./homepageAuthoringConfig";
import { getHomepageLinkProps } from "./homepageHardening";
const groupGridStyle = {
    display: "grid",
    gap: hbcSpacingTokens.lg,
};
const actionGridStyle = {
    gap: hbcSpacingTokens.sm,
};
const actionCardStyle = {
    display: "grid",
    gap: hbcSpacingTokens.xs,
    borderRadius: hbcRadiusTokens.md,
    border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
    background: hbcSemanticTokens.surface,
    padding: hbcSpacingTokens.md,
};
const priorityCardStyle = Object.assign(Object.assign({}, actionCardStyle), { border: `1px solid ${hbcSemanticTokens.actionAccent}`, background: hbcSemanticTokens.surfaceAccent });
export function QuickActionsDeck({ sourceModel, maxItems, labelMaxLength, }) {
    const adapted = adaptQuickActionsSource(sourceModel, maxItems, labelMaxLength);
    const groups = adapted.items;
    if (adapted.state === "empty") {
        return (_jsxs("section", { "aria-labelledby": "quick-actions-heading", "data-source-mode": adapted.sourceMode, children: [_jsx("h2", { id: "quick-actions-heading", style: { marginTop: 0 }, children: "Quick Actions" }), _jsx(HbcEmptyState, { title: "No quick actions are configured", body: "Add a small set of high-frequency destinations to keep this deck focused and useful.", headingLevel: 3 })] }));
    }
    return (_jsxs("section", { "aria-labelledby": "quick-actions-heading", "data-source-mode": adapted.sourceMode, children: [_jsxs("div", { style: { display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }, children: [_jsx(HbcBadge, { children: "Quick Actions" }), _jsx("h2", { id: "quick-actions-heading", style: {
                            margin: 0,
                            color: hbcSemanticTokens.textPrimary,
                            fontSize: hbcTypographyTokens.title.fontSize,
                            lineHeight: hbcTypographyTokens.title.lineHeight,
                        }, children: "Quick actions deck" })] }), _jsx("div", { "data-testid": "quick-actions-groups", style: groupGridStyle, children: groups.map((group) => (_jsxs("section", { "aria-labelledby": `quick-actions-group-${group.id}`, children: [_jsx("h3", { id: `quick-actions-group-${group.id}`, style: { margin: `0 0 ${hbcSpacingTokens.sm} 0`, color: hbcSemanticTokens.textPrimary }, children: group.title }), _jsx("div", { "data-testid": "quick-actions-wrap", "data-responsive-contract": "grid-stack", className: "hb-responsive-grid hb-grid-actions hb-layout-tier-marker", style: actionGridStyle, children: group.items.map((action) => (_jsxs("a", Object.assign({}, getHomepageLinkProps({
                                href: action.href,
                                purpose: `Open action ${action.label}`,
                                external: action.external,
                            }), { style: action.priority ? priorityCardStyle : actionCardStyle, "data-priority": action.priority ? "true" : "false", children: [_jsx("strong", { style: { color: hbcSemanticTokens.textPrimary }, children: action.label }), action.description ? (_jsx("span", { style: { color: hbcSemanticTokens.textSecondary }, children: action.description })) : null, _jsx("small", { style: { color: hbcSemanticTokens.textSecondary }, children: action.external ? "External destination" : "Internal destination" })] }), action.id))) })] }, group.id))) })] }));
}
