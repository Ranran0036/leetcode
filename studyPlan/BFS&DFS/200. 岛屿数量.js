/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
    if (!grid || !grid.length) {
        return 0;
    }

    const m = grid.length;
    const n = grid[0].length;

    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(grid, i, j);
            }
        }
    }

    return count;
};

const dfs = function (grid, i, j) {
    if (
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        grid[i][j] === "0"
    ) {
        return;
    }

    grid[i][j] = "0";
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
};
