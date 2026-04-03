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
exports.SEEDED_PEOPLE_MOMENTS_SOURCE = void 0;
exports.normalizePeopleMoments = normalizePeopleMoments;
exports.SEEDED_PEOPLE_MOMENTS_SOURCE = {
    items: [
        {
            id: "recognition-jordan-ellis",
            personName: "Jordan Ellis",
            type: "recognition",
            milestone: "Safety Leadership Recognition",
            supportLine: "Recognized for leading two high-risk closure drills with zero incidents.",
            destinationUrl: "#people-jordan-ellis",
            celebrate: true,
            rank: 1,
        },
        {
            id: "anniversary-sam-rivera",
            personName: "Sam Rivera",
            type: "anniversary",
            milestone: "10-year work anniversary",
            supportLine: "Celebrating a decade of project controls mentorship and field support.",
            destinationUrl: "#people-sam-rivera",
            celebrate: true,
            rank: 2,
        },
        {
            id: "promotion-kelsey-cho",
            personName: "Kelsey Cho",
            type: "promotion",
            milestone: "Promoted to Senior Project Manager",
            supportLine: "Now leading the mixed-use modernization delivery cohort.",
            destinationUrl: "#people-kelsey-cho",
            rank: 3,
        },
        {
            id: "birthday-devon-lee",
            personName: "Devon Lee",
            type: "birthday",
            milestone: "Birthday this week",
            supportLine: "Send a quick note and keep the culture feed active.",
            destinationUrl: "#people-devon-lee",
            rank: 4,
        },
    ],
};
function normalizePeopleMoments(source) {
    return __spreadArray([], source.items, true).sort(function (a, b) {
        var _a, _b;
        var aRank = (_a = a.rank) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER;
        var bRank = (_b = b.rank) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
        return aRank - bRank;
    });
}
//# sourceMappingURL=peopleMoments.js.map