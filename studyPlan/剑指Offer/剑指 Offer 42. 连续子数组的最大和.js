/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let pre = 0,
        max = nums[0];

    for (const num of nums) {
        pre = Math.max(pre + num, num);
        max = Math.max(max, pre);
    }

    return max;
};
