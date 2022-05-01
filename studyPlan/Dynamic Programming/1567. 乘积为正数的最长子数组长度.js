/**
 * @param {number[]} nums
 * @return {number}
 */
const getMaxLen = function (nums) {
    const len = nums.length;

    let positive = nums[0] > 0 ? 1 : 0;
    let negative = nums[0] < 0 ? 1 : 0;
    let res = positive;

    for (let i = 1; i < len; i++) {
        if (nums[i] > 0) {
            positive++;
            negative = negative > 0 ? negative + 1 : 0;
        } else if (nums[i] < 0) {
            let newPositive = negative > 0 ? negative + 1 : 0;
            let newNegative = positive + 1;

            positive = newPositive;
            negative = newNegative;
        } else {
            positive = 0;
            negative = 0;
        }

        res = Math.max(res, positive);
    }

    return res;
};
