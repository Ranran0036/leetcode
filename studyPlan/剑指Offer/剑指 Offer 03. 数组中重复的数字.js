/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function (nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === i) {
            i++;
            continue;
        }

        if (nums[i] === nums[nums[i]]) {
            return nums[i];
        }

        let temp = nums[i];

        [nums[i], nums[temp]] = [nums[temp], nums[i]];
    }

    return -1;
};
