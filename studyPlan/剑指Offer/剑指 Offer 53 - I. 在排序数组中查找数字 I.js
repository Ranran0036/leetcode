/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let ans = 0;
    const left = binarySearch(nums, target, true);
    const right = binarySearch(nums, target, false) - 1;

    if (left <= right && right < nums.length && nums[left] === target && nums[right] === target) {
        ans = right - left + 1;
    }

    return ans;
};

/**
 *
 * @param {Array<Number>} nums
 * @param {Number} target
 * @param {Boolean} lower
 */
const binarySearch = function (nums, target, lower) {
    let left = 0;
    let right = nums.length - 1;
    let ans = nums.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target || (lower && nums[mid] === target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};
