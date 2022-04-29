/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
    let n = nums.length;
    let maxPos = 0,
        end = 0,
        step = 0;
    for (let i = 0; i < n - 1; i++) {
        if (maxPos >= i) {
            maxPos = Math.max(maxPos, i + nums[i]);
            if (i === end) {
                end = maxPos;
                step++;
            }
        }
    }
    return step;
};
