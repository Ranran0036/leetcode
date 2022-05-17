/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
    /* //动态规划 状态转移方程 dp[i] = max(2 * (i - 2) , 2 * dp[i - 2], 3 * dp[i - 3] , 3 * (i - 3))
    if (n <= 3) {
        return n - 1;
    }

    let dp = new Array(n + 1).fill(0);
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        dp[i] = Math.max(
            2 * (i - 2),
            2 * dp[i - 2],
            3 * dp[i - 3],
            3 * (i - 3)
        );
    }

    return dp[n]; */

    //数学方法
    if (n <= 3) {
        return n - 1;
    }

    const quotient = Math.floor(n / 3);
    const remainder = n % 3;

    if (remainder === 0) {
        return 3 ** quotient;
    } else if (remainder === 1) {
        return 3 ** (quotient - 1) * 4;
    } else {
        return 3 ** quotient * 2;
    }
};
