import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HbcBadge, HbcEmptyState, hbcRadiusTokens, hbcSemanticTokens, hbcSpacingTokens, hbcTypographyTokens, } from "@hbc/ui-kit";
import { adaptNewsRecognitionSource } from "./homepageAuthoringConfig";
import { getHomepageLinkProps } from "./homepageHardening";
const mosaicStyle = {
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
const featuredCardStyle = Object.assign(Object.assign({}, cardStyle), { border: `1px solid ${hbcSemanticTokens.actionAccent}`, background: hbcSemanticTokens.surfaceAccent });
function cardVariant(entry) {
    if (entry.featured) {
        return featuredCardStyle;
    }
    if (entry.type === "recognition") {
        return Object.assign(Object.assign({}, cardStyle), { background: hbcSemanticTokens.surfaceMuted });
    }
    return cardStyle;
}
export function NewsRecognitionSpotlightMosaic({ sourceModel, maxItems = 8, }) {
    const adapted = adaptNewsRecognitionSource(sourceModel, maxItems);
    const entries = adapted.items;
    if (adapted.state === "empty") {
        return (_jsxs("section", { "aria-labelledby": "news-recognition-heading", "data-source-mode": adapted.sourceMode, children: [_jsx("h2", { id: "news-recognition-heading", style: { marginTop: 0 }, children: "News and recognition mosaic" }), _jsx(HbcEmptyState, { title: "No news, recognition, or spotlight items are available", body: "Add at least one current item to keep this lower editorial section fresh.", headingLevel: 3 })] }));
    }
    return (_jsxs("section", { "aria-labelledby": "news-recognition-heading", "data-source-mode": adapted.sourceMode, children: [_jsxs("div", { style: { display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }, children: [_jsx(HbcBadge, { tone: "accent", children: "Editorial Mosaic" }), _jsx("h2", { id: "news-recognition-heading", style: {
                            margin: 0,
                            color: hbcSemanticTokens.textPrimary,
                            fontSize: hbcTypographyTokens.title.fontSize,
                            lineHeight: hbcTypographyTokens.title.lineHeight,
                        }, children: "News, recognition, and spotlight mosaic" })] }), _jsx("div", { "data-testid": "news-recognition-mosaic", "data-responsive-contract": "grid-stack", className: "hb-responsive-grid hb-grid-mosaic hb-layout-tier-marker", style: mosaicStyle, children: entries.map((entry) => (_jsxs("article", { style: cardVariant(entry), children: [_jsx("small", { style: { color: hbcSemanticTokens.textSecondary }, children: entry.label }), _jsx("h3", { style: {
                                margin: 0,
                                color: hbcSemanticTokens.textPrimary,
                                fontSize: "1rem",
                                lineHeight: hbcTypographyTokens.title.lineHeight,
                            }, children: entry.title }), _jsx("p", { style: { margin: 0, color: hbcSemanticTokens.textSecondary }, children: entry.summary }), _jsx("a", Object.assign({}, getHomepageLinkProps({
                            href: entry.href,
                            purpose: `Open ${entry.label} item ${entry.title}`,
                        }), { style: { color: hbcSemanticTokens.actionPrimary }, children: "Open item" }))] }, entry.id))) })] }));
}
