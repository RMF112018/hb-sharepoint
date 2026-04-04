import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HbcBadge, HbcEmptyState, hbcRadiusTokens, hbcSemanticTokens, hbcSpacingTokens, hbcTypographyTokens, } from "@hbc/ui-kit";
import { adaptCompanyPulseSource } from "./homepageAuthoringConfig";
import { getHomepageLinkProps } from "./homepageHardening";
const listStyle = {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gap: hbcSpacingTokens.md,
};
const itemStyle = {
    display: "grid",
    gap: hbcSpacingTokens.xs,
    borderRadius: hbcRadiusTokens.md,
    border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
    background: hbcSemanticTokens.surfaceMuted,
    padding: hbcSpacingTokens.md,
};
function trendLabel(trend) {
    if (trend === "up")
        return "Trending up";
    if (trend === "down")
        return "Trending down";
    if (trend === "steady")
        return "Holding steady";
    return "No trend";
}
export function CompanyPulseBand({ sourceModel, maxItems = 4, }) {
    const adapted = adaptCompanyPulseSource(sourceModel, maxItems);
    const pulseItems = adapted.items;
    if (adapted.state === "empty") {
        return (_jsxs("section", { "aria-labelledby": "company-pulse-heading", "data-source-mode": adapted.sourceMode, children: [_jsx("h2", { id: "company-pulse-heading", style: { marginTop: 0 }, children: "Company Pulse" }), _jsx(HbcEmptyState, { title: "Company pulse is waiting for the next update", body: "Add 3-5 concise metrics with clear values to keep this band fast to scan.", headingLevel: 3 })] }));
    }
    return (_jsxs("section", { "aria-labelledby": "company-pulse-heading", "data-source-mode": adapted.sourceMode, children: [_jsxs("div", { style: { display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }, children: [_jsx(HbcBadge, { children: "Company Pulse" }), _jsx("h2", { id: "company-pulse-heading", style: {
                            margin: 0,
                            color: hbcSemanticTokens.textPrimary,
                            fontSize: hbcTypographyTokens.title.fontSize,
                            lineHeight: hbcTypographyTokens.title.lineHeight,
                        }, children: "Company pulse band" })] }), _jsx("ul", { "data-testid": "company-pulse-list", style: listStyle, children: pulseItems.map((item) => (_jsxs("li", { style: itemStyle, children: [_jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: hbcSpacingTokens.sm }, children: [_jsx("strong", { style: { color: hbcSemanticTokens.textPrimary }, children: item.title }), _jsx("span", { style: { color: hbcSemanticTokens.textPrimary, fontWeight: 700 }, children: item.value })] }), _jsx("p", { style: { margin: 0, color: hbcSemanticTokens.textSecondary }, children: item.supportLine }), _jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: hbcSpacingTokens.sm }, children: [_jsx("small", { style: { color: hbcSemanticTokens.textSecondary }, children: trendLabel(item.trend) }), item.destinationUrl ? (_jsx("a", Object.assign({}, getHomepageLinkProps({
                                    href: item.destinationUrl,
                                    purpose: `View ${item.title} metric`,
                                }), { style: { color: hbcSemanticTokens.actionPrimary }, children: "View metric" }))) : null] })] }, item.id))) })] }));
}
