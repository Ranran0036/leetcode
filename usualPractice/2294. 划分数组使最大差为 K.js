/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const partitionArray = function (nums, k) {
    nums.sort((a, b) => a - b);

    let ans = 1;
    let min = nums[0];

    for (const num of nums) {
        if (num - min > k) {
            ans++;
            min = num;
        }
    }

    return ans;
};
