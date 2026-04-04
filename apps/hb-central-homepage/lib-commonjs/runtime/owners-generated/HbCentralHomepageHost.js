var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HbcBadge, HbcCta, HbcEditorialCard, HbcEmptyState, HbcSkeletonBlock, HbcSection, } from "@hbc/ui-kit";
import { Suspense, lazy, useMemo } from "react";
import { PeopleMomentsSurface } from "./PeopleMomentsSurface";
import { HOMEPAGE_COMPOSITION_MANIFEST, } from "./homepageComposition";
import { homepageRootStyle, srOnlyStyle } from "./homepageHardening";
const NewsRecognitionSpotlightMosaic = lazy(() => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        default: (yield import("./NewsRecognitionSpotlightMosaic")).NewsRecognitionSpotlightMosaic,
    });
}));
const PersonalizedLowerZoneSeam = lazy(() => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        default: (yield import("./PersonalizedLowerZoneSeam")).PersonalizedLowerZoneSeam,
    });
}));
const GlobalUtilityFooter = lazy(() => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        default: (yield import("./GlobalUtilityFooter")).GlobalUtilityFooter,
    });
}));
const zoneStyles = {
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
        return (_jsx(HbcSection, { tone: "muted", children: _jsxs(HbcEditorialCard, { title: "Homepage shell loading", titleLevel: 2, eyebrow: _jsx(HbcBadge, { tone: "accent", children: "Prompt-04 Composition Shell" }), children: [_jsx("p", { children: "The shell renders layout wrappers before feature data loads to keep section structure stable." }), _jsx(HbcSkeletonBlock, { label: "Homepage shell loading placeholder" })] }) }));
    }
    if (state === "empty") {
        return (_jsx(HbcSection, { tone: "muted", children: _jsx(HbcEmptyState, { title: "Homepage composition is ready but no surfaces are configured", body: "Feature teams can plug surfaces into the static app-local manifest without rewriting shell structure.", headingLevel: 2 }) }));
    }
    return (_jsx(HbcSection, { tone: "accent", children: _jsx(HbcEmptyState, { title: "Homepage shell could not render configured surfaces", body: "The shell-level error slot is active while preserving section and zone contracts for recovery.", headingLevel: 2 }) }));
}
function renderDeferredSurfaceFallback(sectionTitle) {
    return (_jsx(HbcEditorialCard, { title: `Loading ${sectionTitle}`, titleLevel: 3, children: _jsx(HbcSkeletonBlock, { label: `Loading ${sectionTitle} surface` }) }));
}
const SURFACE_RENDERERS = {
    people: () => _jsx(PeopleMomentsSurface, {}),
    newsRecognition: () => _jsx(NewsRecognitionSpotlightMosaic, {}),
    personalizedLowerZone: () => _jsx(PersonalizedLowerZoneSeam, {}),
    footerGlobalUtility: () => _jsx(GlobalUtilityFooter, {}),
};
export function HbCentralHomepageHost({ shellState = "ready", includePersonalizedLowerZone = false, }) {
    const orderedSections = useMemo(() => HOMEPAGE_COMPOSITION_MANIFEST.filter((entry) => !(entry.id === "personalizedLowerZone" && !includePersonalizedLowerZone)), [includePersonalizedLowerZone]);
    if (shellState !== "ready") {
        return (_jsxs("main", { className: "hb-homepage-main", "aria-label": "HB Central homepage", role: "main", style: homepageRootStyle, children: [_jsx("h1", { style: srOnlyStyle, children: "HB Central homepage" }), renderShellState(shellState)] }));
    }
    return (_jsxs("main", { className: "hb-homepage-main", "aria-label": "HB Central homepage", role: "main", style: homepageRootStyle, children: [_jsx("h1", { style: srOnlyStyle, children: "HB Central homepage" }), orderedSections.map((entry) => {
                var _a;
                return (_jsxs("section", { "data-testid": `homepage-section-${entry.id}`, "data-section-id": entry.id, "data-zone": entry.zone, style: zoneStyles[entry.zone], "aria-labelledby": `${entry.id}-landmark-heading`, className: "hb-homepage-shell", children: [_jsx("h2", { id: `${entry.id}-landmark-heading`, style: srOnlyStyle, children: entry.title }), _jsx(HbcSection, { tone: entry.zone === "full-width" ? "info" : "default", children: SURFACE_RENDERERS[entry.id] ? (_jsx(Suspense, { fallback: renderDeferredSurfaceFallback(entry.title), children: (_a = SURFACE_RENDERERS[entry.id]) === null || _a === void 0 ? void 0 : _a.call(SURFACE_RENDERERS) })) : (_jsx(HbcEditorialCard, { title: entry.title, titleLevel: 3, eyebrow: _jsx(HbcBadge, { children: entry.zone }), footer: _jsxs(HbcCta, { href: `#${entry.id}`, children: ["Slot: ", entry.slot] }), children: _jsx("p", { children: entry.description }) })) })] }, entry.id));
            })] }));
}
