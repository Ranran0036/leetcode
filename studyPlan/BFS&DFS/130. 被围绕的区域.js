/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
    if (board.length === 0) {
        return;
    }

    const m = board.length;
    const n = board[0].length;

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    const dfs = (x, y) => {
        if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== "O") {
            return;
        }

        board[x][y] = "-";

        for (const dir of directions) {
            dfs(x + dir[0], y + dir[1]);
        }
    };

    for (let i = 0; i < m; i++) {
        dfs(i, 0);
        dfs(i, n - 1);
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j);
        dfs(m - 1, j);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "-") {
                board[i][j] = "O";
            } else {
                board[i][j] = "X";
            }
        }
    }
};
