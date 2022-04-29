/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    let ans = [-1, -1];

    let leftIndex = binarySearch(nums, target, true);
    let rightIndex = binarySearch(nums, target, false) - 1;

    if (
        leftIndex <= rightIndex &&
        rightIndex < nums.length &&
        nums[leftIndex] === target &&
        nums[rightIndex] === target
    ) {
        ans = [leftIndex, rightIndex];
    }

    return ans;
};

/**
 *
 * @param {Array<Number>} nums
 * @param {Number} target
 * @param {Boolean} lower
 * @return {Number}
 */
const binarySearch = (nums, target, lower) => {
    let left = 0,
        right = nums.length - 1,
        ans = nums.length;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};
