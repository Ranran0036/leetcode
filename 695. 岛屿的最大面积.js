/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
    let len = grid.length;
    let width = grid[0].length;
    let max = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === 1) {
                let area = dfs(grid, i, j);
                max = Math.max(max, area);
            }
        }
    }
    return max;
};

const dfs = (grid, i, j) => {
    if (
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        grid[i][j] === 0
    ) {
        return 0;
    }
    grid[i][j] = 0;
    return (
        1 +
        dfs(grid, i - 1, j) +
        dfs(grid, i + 1, j) +
        dfs(grid, i, j - 1) +
        dfs(grid, i, j + 1)
    );
};
