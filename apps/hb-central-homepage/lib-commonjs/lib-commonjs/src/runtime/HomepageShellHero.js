"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomepageShellHero = HomepageShellHero;
var jsx_runtime_1 = require("react/jsx-runtime");
var ui_kit_1 = require("@hbc/ui-kit");
function HomepageShellHero() {
    return ((0, jsx_runtime_1.jsx)("section", { "aria-labelledby": "homepage-shell-hero-heading", "data-surface": "homepage-shell-hero", children: (0, jsx_runtime_1.jsx)(ui_kit_1.HbcSection, { tone: "info", children: (0, jsx_runtime_1.jsx)(ui_kit_1.HbcEditorialCard, { title: "HB Central homepage shell and hero", titleLevel: 1, eyebrow: (0, jsx_runtime_1.jsx)(ui_kit_1.HbcBadge, { tone: "accent", children: "HB Central Hero" }), footer: (0, jsx_runtime_1.jsxs)("div", { style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: ui_kit_1.hbcSpacingTokens.sm,
                    }, children: [(0, jsx_runtime_1.jsx)(ui_kit_1.HbcCta, { href: "#hero-priority-board", ariaLabel: "Open hero priority board", children: "Open priority board" }), (0, jsx_runtime_1.jsx)(ui_kit_1.HbcCta, { href: "#hero-weekly-brief", ariaLabel: "Open weekly brief", children: "Open weekly brief" })] }), children: (0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gap: ui_kit_1.hbcSpacingTokens.md }, children: [(0, jsx_runtime_1.jsx)("h1", { id: "homepage-shell-hero-heading", style: {
                                margin: 0,
                                fontSize: ui_kit_1.hbcTypographyTokens.title.fontSize,
                                lineHeight: ui_kit_1.hbcTypographyTokens.title.lineHeight,
                            }, children: "Cinematic hero storyboard" }), (0, jsx_runtime_1.jsx)("p", { style: { margin: 0, lineHeight: ui_kit_1.hbcTypographyTokens.body.lineHeight }, children: "Premium shell and hero messaging now renders through a dedicated web part path, separated from non-hero homepage composition surfaces." }), (0, jsx_runtime_1.jsx)(ui_kit_1.HbcMediaFrame, { label: "Homepage hero media frame" })] }) }) }) }));
}
//# sourceMappingURL=HomepageShellHero.js.map