/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestDistancePair = function (nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length,
        left = 0,
        right = nums[n - 1] - nums[0];

    while (left <= right) {
        const mid = (left + right) >> 1;
        let cnt = 0;

        for (let i = 0, j = 0; j < n; j++) {
            while (nums[j] - nums[i] > mid) {
                i++;
            }
            cnt += j - i;
        }

        if (cnt < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};
