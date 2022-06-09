/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isStraight = function (nums) {
    nums = nums.filter((num) => num !== 0);

    if (new Set(nums).size !== nums.length) {
        return false;
    }

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    return max - min <= 4;
};
