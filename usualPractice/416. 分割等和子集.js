/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
    let len = nums.length;
    let sum = nums.reduce((a, b) => a + b, 0);

    if (sum % 2 !== 0) {
        return false;
    }

    let target = sum / 2;

    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    if (nums[0] <= target) {
        dp[nums[0]] = true;
    }

    for (let i = 1; i < len; i++) {
        for (let j = target; j >= nums[i]; j--) {
            if (dp[target]) {
                return true;
            }
            dp[j] = dp[j] || dp[j - nums[i]];
        }
    }

    return dp[target];
};
