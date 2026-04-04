import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HbcBadge, HbcCta, HbcEditorialCard, HbcMediaFrame, hbcRadiusTokens, hbcSemanticTokens, hbcSpacingTokens, hbcTypographyTokens, } from "@hbc/ui-kit";
import { adaptFeaturedProjectsSource } from "./homepageAuthoringConfig";
const gridStyle = {
    gap: hbcSpacingTokens.lg,
};
function renderMedia(project) {
    var _a, _b;
    if (!((_a = project.image) === null || _a === void 0 ? void 0 : _a.src)) {
        return _jsx(HbcMediaFrame, { label: `Image pending for ${project.title}` });
    }
    return (_jsx("img", { src: project.image.src, alt: project.image.alt || `${project.title} project image`, style: {
            width: "100%",
            borderRadius: hbcRadiusTokens.md,
            aspectRatio: (_b = project.image.aspectRatio) !== null && _b !== void 0 ? _b : "16 / 9",
            objectFit: "cover",
            border: `1px solid ${hbcSemanticTokens.borderSubtle}`,
        } }));
}
export function FeaturedProjectsShowcase({ sourceModel, maxItems, }) {
    const adapted = adaptFeaturedProjectsSource(sourceModel, maxItems);
    const projects = adapted.items;
    return (_jsxs("section", { "aria-labelledby": "featured-projects-heading", "data-source-mode": adapted.sourceMode, children: [_jsxs("div", { style: { display: "grid", gap: hbcSpacingTokens.sm, marginBottom: hbcSpacingTokens.md }, children: [_jsx(HbcBadge, { tone: "accent", children: "Featured Projects" }), _jsx("h2", { id: "featured-projects-heading", style: {
                            margin: 0,
                            color: hbcSemanticTokens.textPrimary,
                            fontSize: hbcTypographyTokens.title.fontSize,
                            lineHeight: hbcTypographyTokens.title.lineHeight,
                        }, children: "Featured projects showcase" })] }), _jsx("div", { "data-testid": "featured-projects-grid", "data-responsive-contract": "grid-stack", className: "hb-responsive-grid hb-grid-featured hb-layout-tier-marker", style: gridStyle, children: projects.map((project) => (_jsx(HbcEditorialCard, { title: project.title, titleLevel: 3, eyebrow: project.sublabel ? (_jsx("p", { style: {
                            margin: 0,
                            color: hbcSemanticTokens.textSecondary,
                            fontSize: hbcTypographyTokens.compact.fontSize,
                            lineHeight: hbcTypographyTokens.compact.lineHeight,
                        }, children: project.sublabel })) : null, footer: _jsxs(HbcCta, { href: project.destinationUrl, ariaLabel: `View ${project.title} project destination`, children: ["View ", project.title, " project"] }), children: _jsxs("div", { style: { display: "grid", gap: hbcSpacingTokens.md }, children: [renderMedia(project), _jsx("p", { style: {
                                    margin: 0,
                                    color: hbcSemanticTokens.textSecondary,
                                    fontSize: hbcTypographyTokens.body.fontSize,
                                    lineHeight: hbcTypographyTokens.body.lineHeight,
                                }, children: project.supportLine })] }) }, project.id))) })] }));
}
