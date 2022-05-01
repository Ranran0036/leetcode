/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
    let max = nums[0];
    let min = nums[0];
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i];
        if (cur < 0) {
            [max, min] = [min, max];
        }
        max = Math.max(cur, cur * max);
        min = Math.min(cur, cur * min);
        res = Math.max(res, max);
    }
    return res;
};
