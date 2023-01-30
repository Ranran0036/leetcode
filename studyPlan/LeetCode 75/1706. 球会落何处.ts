function findBall(grid: number[][]): number[] {
    const n = grid[0].length;
    const ans: number[] = new Array(n);

    for (let i = 0; i < n; i++) {
        let col = i; // 小球的初始列

        for (const row of grid) {
            const dir = row[col];
            col += dir;

            if (col < 0 || col === n || row[col] !== dir) {
                // 小球到达边界 || 小球到达V形
                col = -1;
                break;
            }
        }

        ans[i] = col;
    }

    return ans;
}
