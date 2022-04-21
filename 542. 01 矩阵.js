/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;

    const queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = Infinity;
            }
        }
    }

    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        for (let i = 0; i < dirs.length; i++) {
            const [dx, dy] = dirs[i];
            const nx = x + dx;
            const ny = y + dy;
            if (
                nx >= 0 &&
                nx < m &&
                ny >= 0 &&
                ny < n &&
                mat[nx][ny] > mat[x][y] + 1
            ) {
                mat[nx][ny] = mat[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    return mat;
};
