function minPathCost(grid: number[][], moveCost: number[][]): number {
    let m = grid.length,
        n = grid[0].length;

    let dp = new Array(2).fill(0).map(() => new Array(n));
    dp[0] = Array.from(grid[0]);

    let cur = 0;
    for (let i = 0; i < m; i++) {
        let next = 1 - cur;

        for (let j = 0; j < n; j++) {
            dp[next][j] = Infinity;

            //for(let k = 0; )
        }
    }

    return 0;
}
