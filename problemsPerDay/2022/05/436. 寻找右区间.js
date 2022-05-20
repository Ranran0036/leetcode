/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
const findRightInterval = function (intervals) {
    if (intervals.length < 2) {
        return [-1];
    }

    const map = new Map();
    const starts = [];
    for (let i = 0; i < intervals.length; i++) {
        map.set(intervals[i][0], i);
        starts.push(intervals[i][0]);
    }

    starts.sort((a, b) => a - b);

    const res = [];

    for (let i = 0; i < intervals.length; i++) {
        const target = intervals[i][1];
        const index = findHigher(starts, target);
        if (index === -1) {
            res.push(-1);
        } else {
            res.push(map.get(starts[index]));
        }
    }

    return res;
};

const findHigher = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = left + ((right - left) >> 1);

        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    if (left >= nums.length || nums[left] < target) {
        return -1;
    }

    return left;
};
