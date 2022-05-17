/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
    let result = [];

    for (let num of nums) {
        num = Math.abs(num);

        if (nums[num - 1] < 0) {
            result.push(num);
        } else {
            nums[num - 1] = -nums[num - 1];
        }
    }

    return result;
};
