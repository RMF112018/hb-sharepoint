import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HbcBadge, HbcEmptyState, hbcRadiusTokens, hbcSemanticTokens, hbcSpacingTokens, hbcTypographyTokens, } from "@hbc/ui-kit";
import { adaptPeopleMomentsSource } from "./homepageAuthoringConfig";
import { getHomepageLinkProps } from "./homepageHardening";
const gridStyle = {
    gap: hbcSpacingTokens.md,
};
const cardStyle = {
    display: "grid",
    gap: hbcSpacingTokens.xs,
    padding: hbcSpacingTokens.md,
    borderRadius: hbcRadiusTokens.md,
    border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
    background: hbcSemanticTokens.surface,
};
function typeLabel(type) {
    if (type === "birthday")
        return "Birthday";
    if (type === "anniversary")
        return "Anniversary";
    if (type === "promotion")
        return "Promotion";
    return "Recognition";
}
export function PeopleMomentsSurface({ sourceModel, maxItems = 6, }) {
    const adapted = adaptPeopleMomentsSource(sourceModel, maxItems);
    const peopleMoments = adapted.items;
    if (adapted.state === "empty") {
        return (_jsxs("section", { "aria-labelledby": "people-moments-heading", "data-source-mode": adapted.sourceMode, children: [_jsx("h2", { id: "people-moments-heading", style: { marginTop: 0 }, children: "People Moments" }), _jsx(HbcEmptyState, { title: "No people moments are posted yet", body: "Add birthdays, anniversaries, promotions, or recognition notes to keep this section fresh.", headingLevel: 3 })] }));
    }
    return (_jsxs("section", { "aria-labelledby": "people-moments-heading", "data-source-mode": adapted.sourceMode, children: [_jsxs("div", { style: { display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }, children: [_jsx(HbcBadge, { tone: "accent", children: "People Moments" }), _jsx("h2", { id: "people-moments-heading", style: {
                            margin: 0,
                            color: hbcSemanticTokens.textPrimary,
                            fontSize: hbcTypographyTokens.title.fontSize,
                            lineHeight: hbcTypographyTokens.title.lineHeight,
                        }, children: "People and culture moments" })] }), _jsx("div", { "data-testid": "people-moments-grid", "data-responsive-contract": "grid-stack", className: "hb-responsive-grid hb-grid-mosaic hb-layout-tier-marker", style: gridStyle, children: peopleMoments.map((moment) => (_jsxs("article", { style: cardStyle, children: [_jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: hbcSpacingTokens.sm }, children: [_jsx("small", { style: { color: hbcSemanticTokens.textSecondary }, children: typeLabel(moment.type) }), moment.celebrate ? _jsx(HbcBadge, { tone: "accent", children: "Celebration" }) : null] }), _jsx("h3", { style: {
                                margin: 0,
                                color: hbcSemanticTokens.textPrimary,
                                fontSize: "1rem",
                                lineHeight: hbcTypographyTokens.title.lineHeight,
                            }, children: moment.personName }), _jsx("p", { style: { margin: 0, color: hbcSemanticTokens.textPrimary }, children: moment.milestone }), _jsx("p", { style: { margin: 0, color: hbcSemanticTokens.textSecondary }, children: moment.supportLine }), moment.destinationUrl ? (_jsx("a", Object.assign({}, getHomepageLinkProps({
                            href: moment.destinationUrl,
                            purpose: `Open people moment for ${moment.personName}`,
                        }), { style: { color: hbcSemanticTokens.actionPrimary }, children: "Open moment" }))) : null] }, moment.id))) })] }));
}
