function cherryPickup(grid: number[][]): number {
    const n = grid.length;
    const f = new Array(n).fill(0).map(() => new Array(n).fill(-Number.MAX_VALUE));
    f[0][0] = grid[0][0];
    for (let k = 1; k < n * 2 - 1; ++k) {
        for (let x1 = Math.min(k, n - 1); x1 >= Math.max(k - n + 1, 0); --x1) {
            for (let x2 = Math.min(k, n - 1); x2 >= x1; --x2) {
                const y1 = k - x1,
                    y2 = k - x2;
                if (grid[x1][y1] === -1 || grid[x2][y2] === -1) {
                    f[x1][x2] = -Number.MAX_VALUE;
                    continue;
                }
                let res = f[x1][x2]; // 都往右
                if (x1 > 0) {
                    res = Math.max(res, f[x1 - 1][x2]); // 往下，往右
                }
                if (x2 > 0) {
                    res = Math.max(res, f[x1][x2 - 1]); // 往右，往下
                }
                if (x1 > 0 && x2 > 0) {
                    res = Math.max(res, f[x1 - 1][x2 - 1]); //都往下
                }
                res += grid[x1][y1];
                if (x2 !== x1) {
                    // 避免重复摘同一个樱桃
                    res += grid[x2][y2];
                }
                f[x1][x2] = res;
            }
        }
    }
    return Math.max(f[n - 1][n - 1], 0);
}
