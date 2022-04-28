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

    if (length == 2) {
        return Math.max(nums[0], nums[1]);
    }

    return Math.max(
        robFromStartToEnd(nums, 0, length - 2),
        robFromStartToEnd(nums, 1, length - 1)
    );
};

/**
 *
 * @param {Array<Number>} nums
 * @param {Number} start
 * @param {Number} end
 * @returns {Number}
 */
const robFromStartToEnd = function (nums, start, end) {
    let first = nums[start],
        second = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
        let temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
};
