export const navItems = [
    { label: 'Welcome', page: 0, activePages: [0] },
    {
        label: 'Extract',
        page: 1,
        activePages: [1, 2, 3],
        steps: [
            { label: 'Create Capture', page: 1 },
            { label: 'Discover Schema', page: 2 },
            { label: 'Monitoring', page: 3 },
        ],
    },
    {
        label: 'Manage',
        page: 4,
        activePages: [4, 5],
        steps: [
            { label: 'Store history & real-time', page: 4 },
            { label: 'Streaming SQL Transforms', page: 5 },
        ],
    },
    {
        label: 'Load',
        page: 6,
        activePages: [6],
        steps: [{ label: 'Stream to destination', page: 6 }],
    },
    {
        label: 'Pricing',
        page: 7,
        activePages: [7],
        steps: [{ label: 'Flat Pricing', page: 7 }],
    },
];
