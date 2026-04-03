"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturedProjectsShowcase = FeaturedProjectsShowcase;
var jsx_runtime_1 = require("react/jsx-runtime");
var ui_kit_1 = require("@hbc/ui-kit");
var homepageAuthoringConfig_1 = require("./homepageAuthoringConfig");
var gridStyle = {
    gap: ui_kit_1.hbcSpacingTokens.lg,
};
function renderMedia(project) {
    var _a, _b;
    if (!((_a = project.image) === null || _a === void 0 ? void 0 : _a.src)) {
        return (0, jsx_runtime_1.jsx)(ui_kit_1.HbcMediaFrame, { label: "Image pending for ".concat(project.title) });
    }
    return ((0, jsx_runtime_1.jsx)("img", { src: project.image.src, alt: project.image.alt || "".concat(project.title, " project image"), style: {
            width: "100%",
            borderRadius: ui_kit_1.hbcRadiusTokens.md,
            aspectRatio: (_b = project.image.aspectRatio) !== null && _b !== void 0 ? _b : "16 / 9",
            objectFit: "cover",
            border: "1px solid ".concat(ui_kit_1.hbcSemanticTokens.borderSubtle),
        } }));
}
function FeaturedProjectsShowcase(_a) {
    var sourceModel = _a.sourceModel, maxItems = _a.maxItems;
    var adapted = (0, homepageAuthoringConfig_1.adaptFeaturedProjectsSource)(sourceModel, maxItems);
    var projects = adapted.items;
    return ((0, jsx_runtime_1.jsxs)("section", { "aria-labelledby": "featured-projects-heading", "data-source-mode": adapted.sourceMode, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gap: ui_kit_1.hbcSpacingTokens.sm, marginBottom: ui_kit_1.hbcSpacingTokens.md }, children: [(0, jsx_runtime_1.jsx)(ui_kit_1.HbcBadge, { tone: "accent", children: "Featured Projects" }), (0, jsx_runtime_1.jsx)("h2", { id: "featured-projects-heading", style: {
                            margin: 0,
                            color: ui_kit_1.hbcSemanticTokens.textPrimary,
                            fontSize: ui_kit_1.hbcTypographyTokens.title.fontSize,
                            lineHeight: ui_kit_1.hbcTypographyTokens.title.lineHeight,
                        }, children: "Featured projects showcase" })] }), (0, jsx_runtime_1.jsx)("div", { "data-testid": "featured-projects-grid", "data-responsive-contract": "grid-stack", className: "hb-responsive-grid hb-grid-featured hb-layout-tier-marker", style: gridStyle, children: projects.map(function (project) { return ((0, jsx_runtime_1.jsx)(ui_kit_1.HbcEditorialCard, { title: project.title, titleLevel: 3, eyebrow: project.sublabel ? ((0, jsx_runtime_1.jsx)("p", { style: {
                            margin: 0,
                            color: ui_kit_1.hbcSemanticTokens.textSecondary,
                            fontSize: ui_kit_1.hbcTypographyTokens.compact.fontSize,
                            lineHeight: ui_kit_1.hbcTypographyTokens.compact.lineHeight,
                        }, children: project.sublabel })) : null, footer: (0, jsx_runtime_1.jsxs)(ui_kit_1.HbcCta, { href: project.destinationUrl, ariaLabel: "View ".concat(project.title, " project destination"), children: ["View ", project.title, " project"] }), children: (0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gap: ui_kit_1.hbcSpacingTokens.md }, children: [renderMedia(project), (0, jsx_runtime_1.jsx)("p", { style: {
                                    margin: 0,
                                    color: ui_kit_1.hbcSemanticTokens.textSecondary,
                                    fontSize: ui_kit_1.hbcTypographyTokens.body.fontSize,
                                    lineHeight: ui_kit_1.hbcTypographyTokens.body.lineHeight,
                                }, children: project.supportLine })] }) }, project.id)); }) })] }));
}
//# sourceMappingURL=FeaturedProjectsShowcase.js.map