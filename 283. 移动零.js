/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    if (nums.length === 1 || nums.length === 0) {
        return;
    }

    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j++]] = [nums[j], nums[i]];
        }
    }
};
