/**
 * @param {number[]} nums
 * @return {number}
 */
const maxRotateFunction = function (nums) {
    let len = nums.length;
    if (len <= 1) {
        return 0;
    }
    let ans = 0;
    let sum = nums.reduce((a, b) => {
        return a + b;
    }, 0);

    for (let i = 0; i < len; i++) {
        ans += i * nums[i];
    }

    let temp = ans;
    for (let i = len - 1; i >= 1; i--) {
        temp = temp + sum - len * nums[i];
        ans = Math.max(ans, temp);
    }

    return ans;
};
