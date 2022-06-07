/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    const visited = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(false));
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    const dfs = (i, j, index, word) => {
        if (board[i][j] !== word[index]) {
            return false;
        } else if (index === word.length - 1) {
            return true;
        }

        visited[i][j] = true;
        let result = false;

        for (const [x, y] of directions) {
            const nextI = i + x;
            const nextJ = j + y;

            if (nextI >= 0 && nextI < board.length && nextJ >= 0 && nextJ < board[0].length && !visited[nextI][nextJ]) {
                let flag = dfs(nextI, nextJ, index + 1, word);
                if (flag) {
                    result = true;
                    break;
                }
            }
        }

        visited[i][j] = false;
        return result;
    };

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (word[0] === board[i][j]) {
                if (dfs(i, j, 0, word)) {
                    return true;
                }
            }
        }
    }

    return false;
};
