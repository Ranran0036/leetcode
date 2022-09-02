function findLongestChain(pairs: number[][]): number {
    let cur = -Number.MAX_VALUE,
        res = 0;

    pairs.sort((a, b) => a[1] - b[1]);

    for (const p of pairs) {
        if (cur < p[0]) {
            cur = p[1];
            res++;
        }
    }

    return res;
}
