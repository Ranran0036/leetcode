/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }

    let left = 0,
        right = nums.length - 1;

    while (left < right) {
        if ((nums[left] & 1) === 1 && (nums[right] & 1) === 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--;
            left++;
        }
        if ((nums[left] & 1) === 0) {
            left++;
        }

        if ((nums[right] & 1) === 1) {
            right--;
        }
    }

    return nums;
};
