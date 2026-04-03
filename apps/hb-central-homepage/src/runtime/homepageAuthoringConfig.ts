import {
  SEEDED_COMPANY_PULSE_SOURCE,
  type CompanyPulseSourceModel,
  type PulseMetricItem,
  normalizePulseItems,
} from "./companyPulse";
import {
  SEEDED_FEATURED_PROJECTS_SOURCE,
  type FeaturedProjectItem,
  type FeaturedProjectsSourceModel,
  normalizeFeaturedProjects,
} from "./featuredProjects";
import {
  SEEDED_NEWS_RECOGNITION_SOURCE,
  type MosaicEntry,
  type NewsRecognitionSourceModel,
  normalizeMosaicEntries,
} from "./newsRecognition";
import {
  SEEDED_PEOPLE_MOMENTS_SOURCE,
  type PeopleMomentItem,
  type PeopleMomentsSourceModel,
  normalizePeopleMoments,
} from "./peopleMoments";
import { GLOBAL_UTILITY_LINKS, PERSONALIZATION_DECISION, type GlobalUtilityLinkItem } from "./personalizationDecision";
import {
  SEEDED_QUICK_ACTIONS_SOURCE,
  type QuickActionGroup,
  type QuickActionsSourceModel,
  normalizeQuickActions,
} from "./quickActions";

export type SurfaceSourceMode =
  | "editorial-seed"
  | "native-news-like"
  | "deferred";

export interface SurfaceAuthoringConfig {
  sourceMode: SurfaceSourceMode;
  maxItems?: number;
  featuredLimit?: number;
  labelMaxLength?: number;
  requiredFields: readonly string[];
  fallbackBehavior: string;
}

export interface SurfaceAdapterResult<T> {
  items: T[];
  state: "ready" | "empty";
  warnings: string[];
  sourceMode: SurfaceSourceMode;
}

export const HOMEPAGE_DYNAMIC_DATA_ENABLED = false;

export const HOMEPAGE_SURFACE_AUTHORING_CONFIG: Record<string, SurfaceAuthoringConfig> = {
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

export function adaptFeaturedProjectsSource(
  sourceModel?: FeaturedProjectsSourceModel,
  maxItemsOverride?: number,
): SurfaceAdapterResult<FeaturedProjectItem> {
  const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.featuredProjects;
  const items = normalizeFeaturedProjects(sourceModel ?? SEEDED_FEATURED_PROJECTS_SOURCE).slice(
    0,
    maxItemsOverride ?? config.maxItems,
  );
  return {
    items,
    state: items.length > 0 ? "ready" : "empty",
    warnings: [],
    sourceMode: config.sourceMode,
  };
}

export function adaptCompanyPulseSource(
  sourceModel?: CompanyPulseSourceModel,
  maxItemsOverride?: number,
): SurfaceAdapterResult<PulseMetricItem> {
  const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.companyPulse;
  const items = normalizePulseItems(sourceModel ?? SEEDED_COMPANY_PULSE_SOURCE).slice(
    0,
    maxItemsOverride ?? config.maxItems,
  );
  return {
    items,
    state: items.length > 0 ? "ready" : "empty",
    warnings: [],
    sourceMode: config.sourceMode,
  };
}

export function adaptPeopleMomentsSource(
  sourceModel?: PeopleMomentsSourceModel,
  maxItemsOverride?: number,
): SurfaceAdapterResult<PeopleMomentItem> {
  const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.peopleMoments;
  const items = normalizePeopleMoments(sourceModel ?? SEEDED_PEOPLE_MOMENTS_SOURCE).slice(
    0,
    maxItemsOverride ?? config.maxItems,
  );
  return {
    items,
    state: items.length > 0 ? "ready" : "empty",
    warnings: [],
    sourceMode: config.sourceMode,
  };
}

export function adaptQuickActionsSource(
  sourceModel?: QuickActionsSourceModel,
  maxItemsOverride?: number,
  labelMaxOverride?: number,
): SurfaceAdapterResult<QuickActionGroup> {
  const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.quickActions;
  const items = normalizeQuickActions(sourceModel ?? SEEDED_QUICK_ACTIONS_SOURCE, {
    maxItemsPerGroup: maxItemsOverride ?? config.maxItems,
    labelMaxLength: labelMaxOverride ?? config.labelMaxLength,
  });
  return {
    items,
    state: items.length > 0 ? "ready" : "empty",
    warnings: [],
    sourceMode: config.sourceMode,
  };
}

export function adaptNewsRecognitionSource(
  sourceModel?: NewsRecognitionSourceModel,
  maxItemsOverride?: number,
): SurfaceAdapterResult<MosaicEntry> {
  const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.newsRecognition;
  const items = normalizeMosaicEntries(sourceModel ?? SEEDED_NEWS_RECOGNITION_SOURCE).slice(
    0,
    maxItemsOverride ?? config.maxItems,
  );
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

export function adaptGlobalUtilityLinks(): SurfaceAdapterResult<GlobalUtilityLinkItem> {
  const config = HOMEPAGE_SURFACE_AUTHORING_CONFIG.footerGlobalUtility;
  return {
    items: [...GLOBAL_UTILITY_LINKS],
    state: GLOBAL_UTILITY_LINKS.length > 0 ? "ready" : "empty",
    warnings: [],
    sourceMode: config.sourceMode,
  };
}
