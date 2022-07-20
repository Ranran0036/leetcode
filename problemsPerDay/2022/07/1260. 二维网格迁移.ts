function shiftGrid(grid: number[][], k: number): number[][] {
    const m = grid.length;
    const n = grid[0].length;
    const res = [];

    for (let i = 0; i < m; i++) {
        res.push(new Array(n).fill(0));
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const idx = (i * n + j + k) % (m * n);
            res[Math.floor(idx / n)].splice(idx % n, 1, grid[i][j]);
        }
    }

    return res;
}
