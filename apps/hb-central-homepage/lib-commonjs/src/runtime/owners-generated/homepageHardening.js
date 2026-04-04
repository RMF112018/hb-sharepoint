"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusRingStyle = exports.homepageRootStyle = exports.sectionShellStyle = exports.srOnlyStyle = void 0;
exports.getHomepageLinkProps = getHomepageLinkProps;
var ui_kit_1 = require("@hbc/ui-kit");
function getHomepageLinkProps(_a) {
    var href = _a.href, purpose = _a.purpose, _b = _a.external, external = _b === void 0 ? false : _b;
    return {
        href: href,
        target: external ? "_blank" : undefined,
        rel: external ? "noreferrer noopener" : undefined,
        "aria-label": purpose,
        className: "hb-homepage-link hb-focus-link",
    };
}
exports.srOnlyStyle = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
};
exports.sectionShellStyle = {
    display: "grid",
    gap: "1rem",
};
exports.homepageRootStyle = {
    "--hb-action-primary": ui_kit_1.hbcSemanticTokens.actionPrimary,
};
exports.focusRingStyle = {
    outline: "2px solid ".concat(ui_kit_1.hbcSemanticTokens.actionPrimary),
    outlineOffset: "2px",
};
//# sourceMappingURL=homepageHardening.js.map