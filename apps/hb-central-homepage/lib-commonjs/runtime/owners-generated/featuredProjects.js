export const SEEDED_FEATURED_PROJECTS_SOURCE = {
    items: [
        {
            id: "beacon-tower-modernization",
            title: "Beacon Tower Modernization",
            destinationUrl: "#project-beacon-tower-modernization",
            supportLine: "Lobby and amenity transformation entering commissioning phase.",
            sublabel: "Boston, MA - Mixed-Use",
            featured: true,
            rank: 1,
            image: {
                src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
                alt: "Downtown tower with illuminated facade at dusk",
                aspectRatio: "16 / 9",
            },
        },
        {
            id: "lakeside-medical-campus",
            title: "Lakeside Medical Campus",
            destinationUrl: "#project-lakeside-medical-campus",
            supportLine: "Vertical expansion package now sequencing utility cutovers.",
            sublabel: "Austin, TX - Healthcare",
            rank: 2,
            image: {
                src: "https://images.unsplash.com/photo-1465800872432-9897fb6f0f3d?auto=format&fit=crop&w=1200&q=80",
                alt: "Healthcare campus buildings framed by evening sky",
                aspectRatio: "4 / 3",
            },
        },
        {
            id: "north-harbor-distribution-hub",
            title: "North Harbor Distribution Hub",
            destinationUrl: "#project-north-harbor-distribution-hub",
            supportLine: "Envelope close-in complete; automation fit-out begins next sprint.",
            sublabel: "Savannah, GA - Industrial",
            rank: 3,
        },
    ],
};
export function normalizeFeaturedProjects(source) {
    return [...source.items].sort((a, b) => {
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
