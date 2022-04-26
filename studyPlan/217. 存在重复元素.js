/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    /* let map = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true;
        } else {
            map.add(nums[i]);
        }
    }
    return false; */

    return new Set(nums).size !== nums.length;
};
