/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = function (nums) {
    let preMin = 0,
        preMax = 0,
        maxSum = nums[0],
        minSum = nums[0],
        sum = 0;

    for (const num of nums) {
        sum += num;
        //最大子数组和
        preMax = Math.max(preMax + num, num);
        maxSum = Math.max(maxSum, preMax);
        //最小子数组和
        preMin = Math.min(preMin + num, num);
        minSum = Math.min(minSum, preMin);
    }

    return maxSum > 0 ? Math.max(maxSum, sum - minSum) : maxSum;
};
