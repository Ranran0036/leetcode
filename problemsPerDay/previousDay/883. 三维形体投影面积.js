/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = function (grid) {
    const len = grid.length;

    let ans = 0;

    for (let i = 0; i < len; i++) {
        let yzHeight = 0,
            xzHeight = 0;
        for (let j = 0; j < len; j++) {
            ans += grid[i][j] > 0 ? 1 : 0;
            yzHeight = Math.max(yzHeight, grid[i][j]);
            xzHeight = Math.max(xzHeight, grid[j][i]);
        }
        ans += yzHeight + xzHeight;
    }

    return ans;
};
