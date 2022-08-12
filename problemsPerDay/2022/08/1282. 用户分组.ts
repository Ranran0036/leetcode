function groupThePeople(groupSizes: number[]): number[][] {
    const map = new Map<number, number[]>();

    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        if (!map.has(size)) {
            map.set(size, []);
        }
        map.get(size)!.push(i);
    }

    const result: number[][] = [];

    for (const [size, indexes] of map.entries()) {
        const groupCount = Math.ceil(indexes.length / size);
        for (let i = 0; i < groupCount; i++) {
            result.push(indexes.slice(i * size, (i + 1) * size));
        }
    }

    return result;
}
