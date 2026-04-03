"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar)
                    ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEEDED_NEWS_RECOGNITION_SOURCE = void 0;
exports.normalizeMosaicEntries = normalizeMosaicEntries;
exports.SEEDED_NEWS_RECOGNITION_SOURCE = {
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
    var newsEntries = source.news.map(function (item) {
        return ({
            id: item.id,
            type: "news",
            title: item.title,
            href: item.href,
            summary: item.summary,
            label: "News",
            featured: item.featured,
            rank: item.rank,
        });
    });
    var recognitionEntries = source.recognition.map(function (item) {
        return ({
            id: item.id,
            type: "recognition",
            title: item.title,
            href: item.href,
            summary: item.summary,
            label: "Recognition",
            featured: item.celebrate,
            rank: item.rank,
        });
    });
    var spotlightEntries = source.spotlight.map(function (item) {
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
    return __spreadArray(__spreadArray(__spreadArray([], newsEntries, true), recognitionEntries, true), spotlightEntries, true);
}
function normalizeMosaicEntries(source) {
    return toEntries(source).sort(function (a, b) {
        var _a, _b;
        var featuredDelta = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
        if (featuredDelta !== 0) {
            return featuredDelta;
        }
        var aRank = (_a = a.rank) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER;
        var bRank = (_b = b.rank) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
        return aRank - bRank;
    });
}
//# sourceMappingURL=newsRecognition.js.map