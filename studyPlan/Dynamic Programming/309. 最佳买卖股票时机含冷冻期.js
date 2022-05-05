/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    if (!prices || prices.length < 2) {
        return 0;
    }

    let f0 = -prices[0],
        f1 = 0,
        f2 = 0;

    for (let i = 1; i < prices.length; i++) {
        [f0, f1, f2] = [
            Math.max(f0, f2 - prices[i]),
            f0 + prices[i],
            Math.max(f1, f2),
        ];
    }

    return Math.max(f1, f2);
};
