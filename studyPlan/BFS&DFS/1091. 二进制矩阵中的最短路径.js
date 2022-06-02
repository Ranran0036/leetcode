/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function (grid) {
    if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) {
        return -1;
    }
    if (grid.length === 1) {
        return 1;
    }

    let depth = 0;
    let queue = [[0, 0]];
    grid[0][0] = 1;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1],
    ];

    while (queue.length) {
        depth++;

        let size = queue.length;

        while (size--) {
            let [x, y] = queue.shift();
            if (x === grid.length - 1 && y === grid.length - 1) {
                return depth;
            }

            for (const dir of directions) {
                let nx = x + dir[0];
                let ny = y + dir[1];
                if (nx < 0 || ny < 0 || nx >= grid.length || ny >= grid.length || grid[nx][ny] === 1) {
                    continue;
                }

                grid[nx][ny] = 1;
                queue.push([nx, ny]);
            }
        }
    }

    return -1;
};
