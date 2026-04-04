export const SEEDED_PEOPLE_MOMENTS_SOURCE = {
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
export function normalizePeopleMoments(source) {
    return [...source.items].sort((a, b) => {
        var _a, _b;
        const aRank = (_a = a.rank) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER;
        const bRank = (_b = b.rank) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
        return aRank - bRank;
    });
}
