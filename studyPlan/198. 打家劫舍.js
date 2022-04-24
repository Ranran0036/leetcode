/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    let first = nums[0];
    let second = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        let third = first + nums[i];
        first = second;
        second = Math.max(second, third);
    }
    return second;
};
