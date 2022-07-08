function lenLongestFibSubseq(arr: number[]): number {
    const n = arr.length;
    if (n === 0) {
        return 0;
    }

    const intMap = new Map<number, number>();

    for (let i = 0; i < n; i++) {
        intMap.set(arr[i], i);
    }

    const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = 2;
        }
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const diff = arr[j] - arr[i];
            if (intMap.has(diff)) {
                const index = intMap.get(diff)!;
                if (index < i) {
                    dp[i][j] = Math.max(dp[i][j], dp[index][i] + 1);
                }
            }
            ans = Math.max(ans, dp[i][j]);
        }
    }

    return ans > 2 ? ans : 0;
}
