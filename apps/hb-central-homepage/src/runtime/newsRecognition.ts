export interface NewsItem {
  id: string;
  title: string;
  href: string;
  summary: string;
  publishedAt: string;
  featured?: boolean;
  rank?: number;
}

export interface RecognitionItem {
  id: string;
  personName: string;
  title: string;
  href: string;
  summary: string;
  celebrate?: boolean;
  rank?: number;
}

export interface SpotlightItem {
  id: string;
  title: string;
  href: string;
  summary: string;
  label?: string;
  featured?: boolean;
  rank?: number;
}

export interface NewsRecognitionSourceModel {
  news: readonly NewsItem[];
  recognition: readonly RecognitionItem[];
  spotlight: readonly SpotlightItem[];
}

export type MosaicEntryType = "news" | "recognition" | "spotlight";

export interface MosaicEntry {
  id: string;
  type: MosaicEntryType;
  title: string;
  href: string;
  summary: string;
  label: string;
  featured?: boolean;
  rank?: number;
}

export const SEEDED_NEWS_RECOGNITION_SOURCE: NewsRecognitionSourceModel = {
  news: [
    {
      id: "news-campus-expansion",
      title: "Campus Expansion Reaches Structural Milestone",
      href: "#news-campus-expansion",
      summary: "The mixed-use expansion topped out two weeks ahead of baseline schedule.",
      publishedAt: "2026-04-01",
      featured: true,
      rank: 1,
    },
    {
      id: "news-safety-refresh",
      title: "Safety Workflow Refresh Rolled Out",
      href: "#news-safety-refresh",
      summary: "New digital checklists are now active across active delivery teams.",
      publishedAt: "2026-03-30",
      rank: 3,
    },
  ],
  recognition: [
    {
      id: "recognition-field-team",
      personName: "Field Coordination Team",
      title: "Recognition: Zero-incident shutdown sequence",
      href: "#recognition-field-team",
      summary: "Team recognition for a complex utility shutdown completed with no incidents.",
      celebrate: true,
      rank: 2,
    },
  ],
  spotlight: [
    {
      id: "spotlight-supplier-partnership",
      title: "Spotlight: Supplier Partnership Program",
      href: "#spotlight-supplier-partnership",
      summary: "How coordinated supplier planning reduced lead-time variance this quarter.",
      label: "Spotlight",
      rank: 4,
    },
  ],
};

function toEntries(source: NewsRecognitionSourceModel): MosaicEntry[] {
  const newsEntries: MosaicEntry[] = source.news.map((item) => ({
    id: item.id,
    type: "news",
    title: item.title,
    href: item.href,
    summary: item.summary,
    label: "News",
    featured: item.featured,
    rank: item.rank,
  }));

  const recognitionEntries: MosaicEntry[] = source.recognition.map((item) => ({
    id: item.id,
    type: "recognition",
    title: item.title,
    href: item.href,
    summary: item.summary,
    label: "Recognition",
    featured: item.celebrate,
    rank: item.rank,
  }));

  const spotlightEntries: MosaicEntry[] = source.spotlight.map((item) => ({
    id: item.id,
    type: "spotlight",
    title: item.title,
    href: item.href,
    summary: item.summary,
    label: item.label ?? "Spotlight",
    featured: item.featured,
    rank: item.rank,
  }));

  return [...newsEntries, ...recognitionEntries, ...spotlightEntries];
}

export function normalizeMosaicEntries(source: NewsRecognitionSourceModel): MosaicEntry[] {
  return toEntries(source).sort((a, b) => {
    const featuredDelta = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    if (featuredDelta !== 0) {
      return featuredDelta;
    }
    const aRank = a.rank ?? Number.MAX_SAFE_INTEGER;
    const bRank = b.rank ?? Number.MAX_SAFE_INTEGER;
    return aRank - bRank;
  });
}
