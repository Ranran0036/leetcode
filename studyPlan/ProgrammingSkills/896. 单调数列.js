/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function (nums) {
    let dec = true,
        inc = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            inc = false;
        }
        if (nums[i] > nums[i - 1]) {
            dec = false;
        }

        if (!inc && !dec) {
            return false;
        }
    }

    return true;
};
