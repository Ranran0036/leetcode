function minCostClimbingStairs(cost: number[]): number {
    let l = cost.length;
    if (l === 2) return Math.min(cost[0], cost[1]);
    for (let i = 2; i < l; i++) {
        cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2]);
    }
    return Math.min(cost[l - 1], cost[l - 2]);
}
