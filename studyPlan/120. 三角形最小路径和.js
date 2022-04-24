/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
    const bottom = triangle[triangle.length - 1];

    const dp = new Array(bottom.length);

    for (let i = 0; i < dp.length; i++) {
        dp[i] = bottom[i];
    }

    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }

    return dp[0];
};
