import { SEEDED_COMPANY_PULSE_SOURCE, normalizePulseItems, } from "./companyPulse";
import { SEEDED_FEATURED_PROJECTS_SOURCE, normalizeFeaturedProjects, } from "./featuredProjects";
import { SEEDED_NEWS_RECOGNITION_SOURCE, normalizeMosaicEntries, } from "./newsRecognition";
import { SEEDED_PEOPLE_MOMENTS_SOURCE, normalizePeopleMoments, } from "./peopleMoments";
import { GLOBAL_UTILITY_LINKS, PERSONALIZATION_DECISION } from "./personalizationDecision";
import { SEEDED_QUICK_ACTIONS_SOURCE, normalizeQuickActions, } from "./quickActions";
export const HOMEPAGE_DYNAMIC_DATA_ENABLED = false;
export const HOMEPAGE_SURFACE_AUTHORING_CONFIG = {
    featuredProjects: {
        sourceMode: "editorial-seed",
        maxItems: 6,
        featuredLimit: 1,
        requiredFields: ["title", "destinationUrl", "supportLine"],
        fallbackBehavior: "missingImageUsesMediaFrame",
    },
    companyPulse: {
        sourceMode: "editorial-seed",
        maxItems: 4,
        requiredFields: ["title", "value", "supportLine"],
        fallbackBehavior: "renderEmptyPulseState",
    },
    peopleMoments: {
        sourceMode: "editorial-seed",
        maxItems: 6,
        requiredFields: ["personName", "type", "milestone", "supportLine"],
        fallbackBehavior: "renderEmptyPeopleMomentsState",
    },
    quickActions: {
        sourceMode: "editorial-seed",
        maxItems: 8,
        labelMaxLength: 40,
        requiredFields: ["label", "href"],
        fallbackBehavior: "renderEmptyQuickActionsState",
    },
    newsRecognition: {
        sourceMode: "native-news-like",
        maxItems: 8,
        featuredLimit: 2,
        requiredFields: ["title", "href", "summary"],
        fallbackBehavior: "renderEmptyMosaicState",
    },
    personalizedLowerZone: {
        sourceMode: "deferred",
        requiredFields: [],
        fallbackBehavior: "renderDecisionSeam",
    },
    footerGlobalUtility: {
        sourceMode: "editorial-seed",
        requiredFields: ["label", "href"],
        fallbackBehavior: "renderPageLocalFooterUtility",
    },
};
export function adaptFeaturedProjectsSource(sourceModel, maxItemsOverride) {
    const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.featuredProjects;
    const items = normalizeFeaturedProjects(sourceModel !== null && sourceModel !== void 0 ? sourceModel : SEEDED_FEATURED_PROJECTS_SOURCE).slice(0, maxItemsOverride !== null && maxItemsOverride !== void 0 ? maxItemsOverride : config.maxItems);
    return {
        items,
        state: items.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
export function adaptCompanyPulseSource(sourceModel, maxItemsOverride) {
    const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.companyPulse;
    const items = normalizePulseItems(sourceModel !== null && sourceModel !== void 0 ? sourceModel : SEEDED_COMPANY_PULSE_SOURCE).slice(0, maxItemsOverride !== null && maxItemsOverride !== void 0 ? maxItemsOverride : config.maxItems);
    return {
        items,
        state: items.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
export function adaptPeopleMomentsSource(sourceModel, maxItemsOverride) {
    const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.peopleMoments;
    const items = normalizePeopleMoments(sourceModel !== null && sourceModel !== void 0 ? sourceModel : SEEDED_PEOPLE_MOMENTS_SOURCE).slice(0, maxItemsOverride !== null && maxItemsOverride !== void 0 ? maxItemsOverride : config.maxItems);
    return {
        items,
        state: items.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
export function adaptQuickActionsSource(sourceModel, maxItemsOverride, labelMaxOverride) {
    const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.quickActions;
    const items = normalizeQuickActions(sourceModel !== null && sourceModel !== void 0 ? sourceModel : SEEDED_QUICK_ACTIONS_SOURCE, {
        maxItemsPerGroup: maxItemsOverride !== null && maxItemsOverride !== void 0 ? maxItemsOverride : config.maxItems,
        labelMaxLength: labelMaxOverride !== null && labelMaxOverride !== void 0 ? labelMaxOverride : config.labelMaxLength,
    });
    return {
        items,
        state: items.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
export function adaptNewsRecognitionSource(sourceModel, maxItemsOverride) {
    const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.newsRecognition;
    const items = normalizeMosaicEntries(sourceModel !== null && sourceModel !== void 0 ? sourceModel : SEEDED_NEWS_RECOGNITION_SOURCE).slice(0, maxItemsOverride !== null && maxItemsOverride !== void 0 ? maxItemsOverride : config.maxItems);
    return {
        items,
        state: items.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
export function adaptPersonalizationDecision() {
    const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.personalizedLowerZone;
    return {
        decision: PERSONALIZATION_DECISION,
        sourceMode: config.sourceMode,
    };
}
export function adaptGlobalUtilityLinks() {
    const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.footerGlobalUtility;
    return {
        items: [...GLOBAL_UTILITY_LINKS],
        state: GLOBAL_UTILITY_LINKS.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
