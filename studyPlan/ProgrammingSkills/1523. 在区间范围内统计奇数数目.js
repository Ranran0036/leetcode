/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = function (low, high) {
    //return countOddsToN(high) - countOddsToN(low - 1);
    return ((high + 1) >> 1) - (low >> 1);
};

/**
 * 计算0到n的奇数个数
 * @param {Number} n
 * @return {Number}
 */
const countOddsToN = function (n) {
    return (n + 1) >> 1;
};
