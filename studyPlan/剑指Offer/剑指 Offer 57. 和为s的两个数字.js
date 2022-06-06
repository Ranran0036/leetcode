/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let find = target - nums[i];
        let res = false;

        if (find > nums[i]) {
            res = binarySearch(nums, i + 1, nums.length - 1, find);

            if (res) {
                return [nums[i], find];
            }
        } else if (find < nums[i]) {
            res = binarySearch(nums, 0, i - 1, find);

            if (res) {
                return [nums[i], find];
            }
        } else {
            if (i - 1 >= 0 && nums[i - 1] === nums[i]) {
                return [find, find];
            }

            if (i + 1 < nums.length && nums[i + 1] === nums[i]) {
                return [find, find];
            }
        }
    }

    return [];
};

const binarySearch = function (nums, start, end, target) {
    let res = false;
    if (start < 0 || start > nums.length - 1 || end < 0 || end > nums.length - 1) return res;

    while (start < end) {
        const mid = start + ((end - start) >> 1);
        if (check(nums, mid, target)) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return nums[start] === target;
};

const check = (nums, index, target) => {
    return nums[index] >= target;
};
