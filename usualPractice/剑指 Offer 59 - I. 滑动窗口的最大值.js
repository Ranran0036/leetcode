/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
    if (nums.length === 0) return [];
    const n = nums.length;
    const q = [];

    for (let i = 0; i < k; i++) {
        while (q.length && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
    }

    const ans = [nums[q[0]]];

    for (let i = k; i < n; i++) {
        while (q.length && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);

        while (q[0] <= i - k) {
            q.shift();
        }

        ans.push(nums[q[0]]);
    }

    return ans;
};
