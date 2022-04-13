/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let res = Array(nums.length);
    let write = nums.length - 1;

    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            res[write] = nums[left] ** 2;
            left++;
            write--;
        } else {
            res[write] = nums[right] ** 2;
            right--;
            write--;
        }
    }

    return res;
};
