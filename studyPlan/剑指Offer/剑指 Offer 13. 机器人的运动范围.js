/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const movingCount = function (m, n, k) {
    const reached = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    let count = 0;

    const dfs = (i, j) => {
        reached[i][j] = true;
        count++;
        for (const [x, y] of directions) {
            const nextI = i + x;
            const nextJ = j + y;

            if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !reached[nextI][nextJ]) {
                if (getCounts(nextI, nextJ) <= k) {
                    dfs(nextI, nextJ);
                }
            }
        }

        return;
    };

    dfs(0, 0);

    return count;
};

getCounts = (x, y) => {
    let count = 0;
    while (x > 0) {
        count += x % 10;
        x = Math.floor(x / 10);
    }

    while (y > 0) {
        count += y % 10;
        y = Math.floor(y / 10);
    }

    return count;
};

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const movingCount2 = function (m, n, k) {
    if (k === 0) {
        return 1;
    }

    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    let ans = 1;
    visited[0][0] = true;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((i === 0 && j === 0) || getCounts(i, j) > k) {
                continue;
            }

            if (i - 1 >= 0) {
                visited[i][j] |= visited[i - 1][j];
            }

            if (j - 1 >= 0) {
                visited[i][j] |= visited[i][j - 1];
            }

            ans += visited[i][j] ? 1 : 0;
        }
    }

    return ans;
};
