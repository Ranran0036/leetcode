/**
 * @param {number[][]} triangle
 * @return {number}
 */
let minimumTotal = (triangle) => {
    const dp = new Array(triangle[triangle.length - 1].length);
    // base case 是最后一行
    for (let i = 0; i < dp.length; i++) {
        dp[i] = triangle[triangle.length - 1][i];
    }
    // 从倒数第二列开始迭代
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
};

/*



*/