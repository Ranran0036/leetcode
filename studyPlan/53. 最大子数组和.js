/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let pre = 0,
        maxSum = nums[0];

    nums.forEach((num) => {
        pre = Math.max(pre + num, num);
        maxSum = Math.max(maxSum, pre);
    });

    return maxSum;
};
