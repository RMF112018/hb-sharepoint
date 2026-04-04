export const SEEDED_NEWS_RECOGNITION_SOURCE = {
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
function toEntries(source) {
    const newsEntries = source.news.map((item) => ({
        id: item.id,
        type: "news",
        title: item.title,
        href: item.href,
        summary: item.summary,
        label: "News",
        featured: item.featured,
        rank: item.rank,
    }));
    const recognitionEntries = source.recognition.map((item) => ({
        id: item.id,
        type: "recognition",
        title: item.title,
        href: item.href,
        summary: item.summary,
        label: "Recognition",
        featured: item.celebrate,
        rank: item.rank,
    }));
    const spotlightEntries = source.spotlight.map((item) => {
        var _a;
        return ({
            id: item.id,
            type: "spotlight",
            title: item.title,
            href: item.href,
            summary: item.summary,
            label: (_a = item.label) !== null && _a !== void 0 ? _a : "Spotlight",
            featured: item.featured,
            rank: item.rank,
        });
    });
    return [...newsEntries, ...recognitionEntries, ...spotlightEntries];
}
export function normalizeMosaicEntries(source) {
    return toEntries(source).sort((a, b) => {
        var _a, _b;
        const featuredDelta = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
        if (featuredDelta !== 0) {
            return featuredDelta;
        }
        const aRank = (_a = a.rank) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER;
        const bRank = (_b = b.rank) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
        return aRank - bRank;
    });
}
