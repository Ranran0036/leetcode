/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }
    let length = nums.length;
    if (length == 1) {
        return nums[0];
    }
    let first = nums[0],
        second = Math.max(nums[0], nums[1]);
    for (let i = 2; i < length; i++) {
        let temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
};
