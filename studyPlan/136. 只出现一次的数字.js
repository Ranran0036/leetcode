/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    return nums.reduce((a, b) => a ^ b);
};
