export const SEEDED_COMPANY_PULSE_SOURCE = {
    items: [
        {
            id: "safety-observations",
            title: "Safety Observations",
            value: "98%",
            supportLine: "Weekly close-out rate across active program sites.",
            destinationUrl: "#pulse-safety-observations",
            trend: "up",
            rank: 1,
        },
        {
            id: "schedule-variance",
            title: "Schedule Variance",
            value: "-1.2 d",
            supportLine: "Average slip across top-priority construction milestones.",
            destinationUrl: "#pulse-schedule-variance",
            trend: "steady",
            rank: 2,
        },
        {
            id: "budget-health",
            title: "Budget Health",
            value: "93%",
            supportLine: "Projects within approved contingency thresholds.",
            destinationUrl: "#pulse-budget-health",
            trend: "up",
            rank: 3,
        },
        {
            id: "quality-punch-close",
            title: "Quality Punch Close",
            value: "86%",
            supportLine: "Open punch items closed inside the target SLA window.",
            destinationUrl: "#pulse-quality-punch-close",
            trend: "up",
            rank: 4,
        },
        {
            id: "change-order-cycle",
            title: "Change Order Cycle",
            value: "4.6 d",
            supportLine: "Median turnaround from intake to approved disposition.",
            destinationUrl: "#pulse-change-order-cycle",
            trend: "down",
            rank: 5,
        },
    ],
};
export function normalizePulseItems(source) {
    return [...source.items].sort((a, b) => {
        var _a, _b;
        const aRank = (_a = a.rank) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER;
        const bRank = (_b = b.rank) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
        return aRank - bRank;
    });
}
