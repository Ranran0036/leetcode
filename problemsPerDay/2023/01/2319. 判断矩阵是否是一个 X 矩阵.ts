function checkXMatrix(grid: number[][]): boolean {
    const len = grid.length;

    for (let x = 0; x < len; x++) {
        for (let y = 0; y < len; y++) {
            //如果x,y落在对角线上
            if (x === y || y === len - x - 1) {
                if (grid[x][y] === 0) {
                    return false;
                }
            } else if (grid[x][y] !== 0) {
                return false;
            }
        }
    }

    return true;
}
