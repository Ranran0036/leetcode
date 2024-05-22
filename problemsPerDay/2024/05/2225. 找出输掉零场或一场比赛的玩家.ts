function findWinners(matches: number[][]): number[][] {
    const map = new Map<number, number>();

    for (const [winner, loser] of matches) {
        map.set(loser, (map.get(loser) ?? 0) + 1);

        if (!map.has(winner)) {
            map.set(winner, 0);
        }
    }

    const res: number[][] = [[], []];

    for (const [key, value] of map) {
        if (value < 2) {
            res[value].push(key);
        }
    }

    res.map((item) => item.sort((a, b) => a - b));

    return res;
}
