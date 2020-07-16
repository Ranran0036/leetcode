/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = (prices) => {
    if (prices.length == 0) {
        return 0;
    }

    let n = prices.length;
    let f0 = -prices[0];
    let f1 = 0;
    let f2 = 0;
    for (let i = 1; i < n; ++i) {
        let newf0 = Math.max(f0, f2 - prices[i]);
        let newf1 = f0 + prices[i];
        let newf2 = Math.max(f1, f2);
        f0 = newf0;
        f1 = newf1;
        f2 = newf2;
    }

    return Math.max(f1, f2);
}
// @lc code=end

