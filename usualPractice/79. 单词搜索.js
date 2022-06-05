/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(board, word, i, j, 0, visited)) {
                return true;
            }
        }
    }

    return false;
};

const dfs = function (board, word, i, j, index, visited) {
    if (index === word.length) {
        return true;
    }

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] !== word[index]) {
        return false;
    }

    visited[i][j] = 1;

    const res =
        dfs(board, word, i + 1, j, index + 1, visited) ||
        dfs(board, word, i - 1, j, index + 1, visited) ||
        dfs(board, word, i, j + 1, index + 1, visited) ||
        dfs(board, word, i, j - 1, index + 1, visited);

    visited[i][j] = 0;

    return res;
};
