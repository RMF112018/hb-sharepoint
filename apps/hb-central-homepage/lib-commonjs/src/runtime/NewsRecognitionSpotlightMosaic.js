"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsRecognitionSpotlightMosaic = NewsRecognitionSpotlightMosaic;
var jsx_runtime_1 = require("react/jsx-runtime");
var ui_kit_1 = require("@hbc/ui-kit");
var homepageAuthoringConfig_1 = require("./homepageAuthoringConfig");
var homepageHardening_1 = require("./homepageHardening");
var mosaicStyle = {
    gap: ui_kit_1.hbcSpacingTokens.md,
};
var cardStyle = {
    display: "grid",
    gap: ui_kit_1.hbcSpacingTokens.xs,
    padding: ui_kit_1.hbcSpacingTokens.md,
    borderRadius: ui_kit_1.hbcRadiusTokens.md,
    border: "1px solid ".concat(ui_kit_1.hbcSemanticTokens.borderSubtle),
    background: ui_kit_1.hbcSemanticTokens.surface,
};
var featuredCardStyle = __assign(__assign({}, cardStyle), { border: "1px solid ".concat(ui_kit_1.hbcSemanticTokens.actionAccent), background: ui_kit_1.hbcSemanticTokens.surfaceAccent });
function cardVariant(entry) {
    if (entry.featured) {
        return featuredCardStyle;
    }
    if (entry.type === "recognition") {
        return __assign(__assign({}, cardStyle), { background: ui_kit_1.hbcSemanticTokens.surfaceMuted });
    }
    return cardStyle;
}
function NewsRecognitionSpotlightMosaic(_a) {
    var sourceModel = _a.sourceModel, _b = _a.maxItems, maxItems = _b === void 0 ? 8 : _b;
    var adapted = (0, homepageAuthoringConfig_1.adaptNewsRecognitionSource)(sourceModel, maxItems);
    var entries = adapted.items;
    if (adapted.state === "empty") {
        return ((0, jsx_runtime_1.jsxs)("section", { "aria-labelledby": "news-recognition-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsx)("h2", { id: "news-recognition-heading", style: { marginTop: 0 }, children: "News and recognition mosaic" }), (0, jsx_runtime_1.jsx)(ui_kit_1.HbcEmptyState, { title: "No news, recognition, or spotlight items are available", body: "Add at least one current item to keep this lower editorial section fresh.", headingLevel: 3 })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("section", { "aria-labelledby": "news-recognition-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gap: ui_kit_1.hbcSpacingTokens.sm, marginBottom: ui_kit_1.hbcSpacingTokens.md }, children: [(0, jsx_runtime_1.jsx)(ui_kit_1.HbcBadge, { tone: "accent", children: "Editorial Mosaic" }), (0, jsx_runtime_1.jsx)("h2", { id: "news-recognition-heading", style: {
                            margin: 0,
                            color: ui_kit_1.hbcSemanticTokens.textPrimary,
                            fontSize: ui_kit_1.hbcTypographyTokens.title.fontSize,
                            lineHeight: ui_kit_1.hbcTypographyTokens.title.lineHeight,
                        }, children: "News, recognition, and spotlight mosaic" })] }), (0, jsx_runtime_1.jsx)("div", { "data-testid": "news-recognition-mosaic", "data-responsive-contract": "grid-stack", className: "hb-responsive-grid hb-grid-mosaic hb-layout-tier-marker", style: mosaicStyle, children: entries.map(function (entry) { return ((0, jsx_runtime_1.jsxs)("article", { style: cardVariant(entry), children: [(0, jsx_runtime_1.jsx)("small", { style: { color: ui_kit_1.hbcSemanticTokens.textSecondary }, children: entry.label }), (0, jsx_runtime_1.jsx)("h3", { style: {
                                margin: 0,
                                color: ui_kit_1.hbcSemanticTokens.textPrimary,
                                fontSize: "1rem",
                                lineHeight: ui_kit_1.hbcTypographyTokens.title.lineHeight,
                            }, children: entry.title }), (0, jsx_runtime_1.jsx)("p", { style: { margin: 0, color: ui_kit_1.hbcSemanticTokens.textSecondary }, children: entry.summary }), (0, jsx_runtime_1.jsx)("a", __assign({}, (0, homepageHardening_1.getHomepageLinkProps)({
                            href: entry.href,
                            purpose: "Open ".concat(entry.label, " item ").concat(entry.title),
                        }), { style: { color: ui_kit_1.hbcSemanticTokens.actionPrimary }, children: "Open item" }))] }, entry.id)); }) })] }));
}
//# sourceMappingURL=NewsRecognitionSpotlightMosaic.js.map