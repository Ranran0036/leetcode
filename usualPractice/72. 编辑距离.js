/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
    const n = word1.length;
    const m = word2.length;

    if (m * n === 0) {
        return m + n;
    }

    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const left = dp[i - 1][j] + 1;
            const down = dp[i][j - 1] + 1;
            let leftDown = dp[i - 1][j - 1];

            if (word1[i - 1] !== word2[j - 1]) {
                leftDown++;
            }

            dp[i][j] = Math.min(left, down, leftDown);
        }
    }

    return dp[n][m];
};
