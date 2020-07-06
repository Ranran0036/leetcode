const uniquePathsWithObstacles = (obstacleGrid) => {
    if (obstacleGrid[0][0] == 1) return 0; // 出发点就被障碍堵住 

    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // dp数组初始化
    const dp = new Array(m);

    for (let i = 0; i < m; i++) dp[i] = new Array(n);
    
    // base case
    dp[0][0] = 1;                 // 终点就是出发点

    for (let i = 1; i < m; i++) { // 第一列其余的case
        dp[i][0] = obstacleGrid[i][0] == 1 || dp[i - 1][0] == 0 ? 0 : 1;
    }

    for (let i = 1; i < n; i++) { // 第一行其余的case
        dp[0][i] = obstacleGrid[0][i] == 1 || dp[0][i - 1] == 0 ? 0 : 1;
    }

    // 迭代
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] == 1 ?
            0 :
            dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1]; // 到达(m-1,n-1)的路径数
};
