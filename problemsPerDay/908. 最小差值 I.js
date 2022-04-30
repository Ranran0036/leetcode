/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestRangeI = function (nums, k) {
    let minNum = Number.MAX_SAFE_INTEGER;
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (const num of nums) {
        minNum = Math.min(minNum, num);
        maxNum = Math.max(maxNum, num);
    }

    let minRange = maxNum - minNum;

    return 2 * k >= minRange ? 0 : minRange - 2 * k;
};
