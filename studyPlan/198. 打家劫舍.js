/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }
    /* let length = nums.length;
    if (length == 1) {
        return nums[0];
    }
    let first = nums[0],
        second = Math.max(nums[0], nums[1]);
    for (let i = 2; i < length; i++) {
        let temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second; */

    let dp = new Array(nums.length);
    dp[0] = nums[0];

    //状态转移方程 dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] ? dp[i - 2] + nums[i] : nums[i]); //这里的判断是为了防止出现dp[i-2]为undefined的情况
    }
    console.log(dp);

    return dp[nums.length - 1];
};

console.log(rob([1, 2, 3, 1]));
