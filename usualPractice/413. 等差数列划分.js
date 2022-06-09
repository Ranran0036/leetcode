/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
    if (nums.length < 3) {
        return 0;
    }

    let res = 0;
    let count = 0;
    let d = nums[1] - nums[0];

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === d) {
            count++;
        } else {
            d = nums[i] - nums[i - 1];
            count = 0;
        }

        res += count;
    }

    return res;
};
