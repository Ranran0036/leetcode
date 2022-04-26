/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
    const len = cost.length;

    if (cost.length === 2) {
        return Math.min(cost[0], cost[1]);
    }

    /* const dp = new Array(len + 1);
    dp[0] = 0;
    dp[1] = 0;
    //dp[i]=min(dp[i−1]+cost[i−1],dp[i−2]+cost[i−2])
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[len]; */

    let prev = 0,
        curr = 0;

    for (let i = 2; i <= len; i++) {
        let next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
        prev = curr;
        curr = next;
    }

    return curr;
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
