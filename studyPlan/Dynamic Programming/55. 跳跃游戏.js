/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
    let maxJump = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxJump) return false;
        maxJump = Math.max(maxJump, i + nums[i]);
    }
    return true;
};
