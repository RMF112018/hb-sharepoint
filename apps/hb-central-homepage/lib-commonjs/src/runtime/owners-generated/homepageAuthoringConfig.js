"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOMEPAGE_SURFACE_AUTHORING_CONFIG = exports.HOMEPAGE_DYNAMIC_DATA_ENABLED = void 0;
exports.adaptFeaturedProjectsSource = adaptFeaturedProjectsSource;
exports.adaptCompanyPulseSource = adaptCompanyPulseSource;
exports.adaptPeopleMomentsSource = adaptPeopleMomentsSource;
exports.adaptQuickActionsSource = adaptQuickActionsSource;
exports.adaptNewsRecognitionSource = adaptNewsRecognitionSource;
exports.adaptPersonalizationDecision = adaptPersonalizationDecision;
exports.adaptGlobalUtilityLinks = adaptGlobalUtilityLinks;
var companyPulse_1 = require("./companyPulse");
var featuredProjects_1 = require("./featuredProjects");
var newsRecognition_1 = require("./newsRecognition");
var peopleMoments_1 = require("./peopleMoments");
var personalizationDecision_1 = require("./personalizationDecision");
var quickActions_1 = require("./quickActions");
exports.HOMEPAGE_DYNAMIC_DATA_ENABLED = false;
exports.HOMEPAGE_SURFACE_AUTHORING_CONFIG = {
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
function adaptFeaturedProjectsSource(sourceModel, maxItemsOverride) {
    var config = exports.HOMEPAGE_SURFACE_AUTHORING_CONFIG.featuredProjects;
    var items = (0, featuredProjects_1.normalizeFeaturedProjects)(sourceModel !== null && sourceModel !== void 0 ? sourceModel : featuredProjects_1.SEEDED_FEATURED_PROJECTS_SOURCE).slice(0, maxItemsOverride !== null && maxItemsOverride !== void 0 ? maxItemsOverride : config.maxItems);
    return {
        items: items,
        state: items.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
function adaptCompanyPulseSource(sourceModel, maxItemsOverride) {
    var config = exports.HOMEPAGE_SURFACE_AUTHORING_CONFIG.companyPulse;
    var items = (0, companyPulse_1.normalizePulseItems)(sourceModel !== null && sourceModel !== void 0 ? sourceModel : companyPulse_1.SEEDED_COMPANY_PULSE_SOURCE).slice(0, maxItemsOverride !== null && maxItemsOverride !== void 0 ? maxItemsOverride : config.maxItems);
    return {
        items: items,
        state: items.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
function adaptPeopleMomentsSource(sourceModel, maxItemsOverride) {
    var config = exports.HOMEPAGE_SURFACE_AUTHORING_CONFIG.peopleMoments;
    var items = (0, peopleMoments_1.normalizePeopleMoments)(sourceModel !== null && sourceModel !== void 0 ? sourceModel : peopleMoments_1.SEEDED_PEOPLE_MOMENTS_SOURCE).slice(0, maxItemsOverride !== null && maxItemsOverride !== void 0 ? maxItemsOverride : config.maxItems);
    return {
        items: items,
        state: items.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
function adaptQuickActionsSource(sourceModel, maxItemsOverride, labelMaxOverride) {
    var config = exports.HOMEPAGE_SURFACE_AUTHORING_CONFIG.quickActions;
    var items = (0, quickActions_1.normalizeQuickActions)(sourceModel !== null && sourceModel !== void 0 ? sourceModel : quickActions_1.SEEDED_QUICK_ACTIONS_SOURCE, {
        maxItemsPerGroup: maxItemsOverride !== null && maxItemsOverride !== void 0 ? maxItemsOverride : config.maxItems,
        labelMaxLength: labelMaxOverride !== null && labelMaxOverride !== void 0 ? labelMaxOverride : config.labelMaxLength,
    });
    return {
        items: items,
        state: items.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
function adaptNewsRecognitionSource(sourceModel, maxItemsOverride) {
    var config = exports.HOMEPAGE_SURFACE_AUTHORING_CONFIG.newsRecognition;
    var items = (0, newsRecognition_1.normalizeMosaicEntries)(sourceModel !== null && sourceModel !== void 0 ? sourceModel : newsRecognition_1.SEEDED_NEWS_RECOGNITION_SOURCE).slice(0, maxItemsOverride !== null && maxItemsOverride !== void 0 ? maxItemsOverride : config.maxItems);
    return {
        items: items,
        state: items.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
function adaptPersonalizationDecision() {
    var config = exports.HOMEPAGE_SURFACE_AUTHORING_CONFIG.personalizedLowerZone;
    return {
        decision: personalizationDecision_1.PERSONALIZATION_DECISION,
        sourceMode: config.sourceMode,
    };
}
function adaptGlobalUtilityLinks() {
    var config = exports.HOMEPAGE_SURFACE_AUTHORING_CONFIG.footerGlobalUtility;
    return {
        items: __spreadArray([], personalizationDecision_1.GLOBAL_UTILITY_LINKS, true),
        state: personalizationDecision_1.GLOBAL_UTILITY_LINKS.length > 0 ? "ready" : "empty",
        warnings: [],
        sourceMode: config.sourceMode,
    };
}
//# sourceMappingURL=homepageAuthoringConfig.js.map