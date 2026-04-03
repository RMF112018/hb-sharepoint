"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HbCentralHomepageHost = HbCentralHomepageHost;
var jsx_runtime_1 = require("react/jsx-runtime");
var ui_kit_1 = require("@hbc/ui-kit");
var react_1 = require("react");
var PeopleMomentsSurface_1 = require("./PeopleMomentsSurface");
var homepageComposition_1 = require("./homepageComposition");
var homepageHardening_1 = require("./homepageHardening");
var NewsRecognitionSpotlightMosaic = (0, react_1.lazy)(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = {};
                return [4 /*yield*/, Promise.resolve().then(function () { return require("./NewsRecognitionSpotlightMosaic"); })];
            case 1: return [2 /*return*/, (_a.default = (_b.sent()).NewsRecognitionSpotlightMosaic,
                    _a)];
        }
    });
}); });
var PersonalizedLowerZoneSeam = (0, react_1.lazy)(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = {};
                return [4 /*yield*/, Promise.resolve().then(function () { return require("./PersonalizedLowerZoneSeam"); })];
            case 1: return [2 /*return*/, (_a.default = (_b.sent()).PersonalizedLowerZoneSeam,
                    _a)];
        }
    });
}); });
var GlobalUtilityFooter = (0, react_1.lazy)(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = {};
                return [4 /*yield*/, Promise.resolve().then(function () { return require("./GlobalUtilityFooter"); })];
            case 1: return [2 /*return*/, (_a.default = (_b.sent()).GlobalUtilityFooter,
                    _a)];
        }
    });
}); });
var zoneStyles = {
    "full-width": { maxWidth: "100%" },
    banded: { maxWidth: "72rem" },
    mosaic: {
        maxWidth: "72rem",
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
    },
};
function renderShellState(state) {
    if (state === "loading") {
        return ((0, jsx_runtime_1.jsx)(ui_kit_1.HbcSection, { tone: "muted", children: (0, jsx_runtime_1.jsxs)(ui_kit_1.HbcEditorialCard, { title: "Homepage shell loading", titleLevel: 2, eyebrow: (0, jsx_runtime_1.jsx)(ui_kit_1.HbcBadge, { tone: "accent", children: "Prompt-04 Composition Shell" }), children: [(0, jsx_runtime_1.jsx)("p", { children: "The shell renders layout wrappers before feature data loads to keep section structure stable." }), (0, jsx_runtime_1.jsx)(ui_kit_1.HbcSkeletonBlock, { label: "Homepage shell loading placeholder" })] }) }));
    }
    if (state === "empty") {
        return ((0, jsx_runtime_1.jsx)(ui_kit_1.HbcSection, { tone: "muted", children: (0, jsx_runtime_1.jsx)(ui_kit_1.HbcEmptyState, { title: "Homepage composition is ready but no surfaces are configured", body: "Feature teams can plug surfaces into the static app-local manifest without rewriting shell structure.", headingLevel: 2 }) }));
    }
    return ((0, jsx_runtime_1.jsx)(ui_kit_1.HbcSection, { tone: "accent", children: (0, jsx_runtime_1.jsx)(ui_kit_1.HbcEmptyState, { title: "Homepage shell could not render configured surfaces", body: "The shell-level error slot is active while preserving section and zone contracts for recovery.", headingLevel: 2 }) }));
}
function renderDeferredSurfaceFallback(sectionTitle) {
    return ((0, jsx_runtime_1.jsx)(ui_kit_1.HbcEditorialCard, { title: "Loading ".concat(sectionTitle), titleLevel: 3, children: (0, jsx_runtime_1.jsx)(ui_kit_1.HbcSkeletonBlock, { label: "Loading ".concat(sectionTitle, " surface") }) }));
}
var SURFACE_RENDERERS = {
    people: function () { return (0, jsx_runtime_1.jsx)(PeopleMomentsSurface_1.PeopleMomentsSurface, {}); },
    newsRecognition: function () { return (0, jsx_runtime_1.jsx)(NewsRecognitionSpotlightMosaic, {}); },
    personalizedLowerZone: function () { return (0, jsx_runtime_1.jsx)(PersonalizedLowerZoneSeam, {}); },
    footerGlobalUtility: function () { return (0, jsx_runtime_1.jsx)(GlobalUtilityFooter, {}); },
};
function HbCentralHomepageHost(_a) {
    var _b = _a.shellState, shellState = _b === void 0 ? "ready" : _b, _c = _a.includePersonalizedLowerZone, includePersonalizedLowerZone = _c === void 0 ? false : _c;
    var orderedSections = (0, react_1.useMemo)(function () {
        return homepageComposition_1.HOMEPAGE_COMPOSITION_MANIFEST.filter(function (entry) { return !(entry.id === "personalizedLowerZone" && !includePersonalizedLowerZone); });
    }, [includePersonalizedLowerZone]);
    if (shellState !== "ready") {
        return ((0, jsx_runtime_1.jsxs)("main", { className: "hb-homepage-main", "aria-label": "HB Central homepage", role: "main", style: homepageHardening_1.homepageRootStyle, children: [(0, jsx_runtime_1.jsx)("h1", { style: homepageHardening_1.srOnlyStyle, children: "HB Central homepage" }), renderShellState(shellState)] }));
    }
    return ((0, jsx_runtime_1.jsxs)("main", { className: "hb-homepage-main", "aria-label": "HB Central homepage", role: "main", style: homepageHardening_1.homepageRootStyle, children: [(0, jsx_runtime_1.jsx)("h1", { style: homepageHardening_1.srOnlyStyle, children: "HB Central homepage" }), orderedSections.map(function (entry) {
                var _a;
                return ((0, jsx_runtime_1.jsxs)("section", { "data-testid": "homepage-section-".concat(entry.id), "data-section-id": entry.id, "data-zone": entry.zone, style: zoneStyles[entry.zone], "aria-labelledby": "".concat(entry.id, "-landmark-heading"), className: "hb-homepage-shell", children: [(0, jsx_runtime_1.jsx)("h2", { id: "".concat(entry.id, "-landmark-heading"), style: homepageHardening_1.srOnlyStyle, children: entry.title }), (0, jsx_runtime_1.jsx)(ui_kit_1.HbcSection, { tone: entry.zone === "full-width" ? "info" : "default", children: SURFACE_RENDERERS[entry.id] ? ((0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: renderDeferredSurfaceFallback(entry.title), children: (_a = SURFACE_RENDERERS[entry.id]) === null || _a === void 0 ? void 0 : _a.call(SURFACE_RENDERERS) })) : ((0, jsx_runtime_1.jsx)(ui_kit_1.HbcEditorialCard, { title: entry.title, titleLevel: 3, eyebrow: (0, jsx_runtime_1.jsx)(ui_kit_1.HbcBadge, { children: entry.zone }), footer: (0, jsx_runtime_1.jsxs)(ui_kit_1.HbcCta, { href: "#".concat(entry.id), children: ["Slot: ", entry.slot] }), children: (0, jsx_runtime_1.jsx)("p", { children: entry.description }) })) })] }, entry.id));
            })] }));
}
//# sourceMappingURL=HbCentralHomepageHost.js.map