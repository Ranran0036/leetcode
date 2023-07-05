function islandPerimeter(grid: number[][]): number {
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            if (grid[x][y] === 1) {
                return dfs(grid, x, y);
            }
        }
    }

    return 0;

    function dfs(grid: number[][], x: number, y: number): number {
        if (!(x >= 0 && x < grid.length && y >= 0 && y < grid[0].length)) {
            return 1;
        }

        if (grid[x][y] === 0) {
            return 1;
        }

        if (grid[x][y] !== 1) {
            return 0;
        }

        grid[x][y] = 2;

        return dfs(grid, x + 1, y) + dfs(grid, x - 1, y) + dfs(grid, x, y + 1) + dfs(grid, x, y - 1);
    }
}
