/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
    let left = 0,
        right = left,
        sum = 0,
        minLen = Number.MAX_SAFE_INTEGER;

    while (right < nums.length) {
        sum += nums[right];

        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }

        right++;
    }

    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};
