const findPath = function (data, id) {
    let path = [];

    for (const item of data) {
        if (item.id === id) {
            return path.concat(item.id);
        }
        if (item.sub) {
            const subPath = findPath(item.sub, id);
            if (subPath.length > 0) {
                return path.concat(item.id, subPath);
            }
        }
    }
    return path;
};

const data = [
    {
        id: 1,
        sub: [
            {
                id: 2,
                sub: [
                    {
                        id: 3,
                        sub: null,
                    },
                    {
                        id: 4,
                        sub: [
                            {
                                id: 6,
                                sub: null,
                            },
                            {
                                id: 11,
                                sub: [
                                    {
                                        id: 12,
                                        sub: null,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 5,
                        sub: null,
                    },
                ],
            },
        ],
    },
    {
        id: 7,
        sub: [
            {
                id: 8,
                sub: [
                    {
                        id: 9,
                        sub: null,
                    },
                ],
            },
        ],
    },
    {
        id: 10,
        sub: null,
    },
];

console.log(findPath(data, 12));
