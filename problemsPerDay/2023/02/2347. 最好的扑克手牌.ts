function bestHand(ranks: number[], suits: string[]): string {
    //是否是 Flush
    if (new Set(suits).size === 1) {
        return "Flush";
    }

    let map: Map<number, number> = new Map();
    let max: number = 0;

    for (const num of ranks) {
        map.set(num, (map.get(num) || 0) + 1);

        max = Math.max(max, map.get(num)!);
    }

    switch (max) {
        case 1:
            return "High Card";
            break;
        case 2:
            return "Pair";
            break;
        default:
            return "Three of a Kind";
            break;
    }
}
