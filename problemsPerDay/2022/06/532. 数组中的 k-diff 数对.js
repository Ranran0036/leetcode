/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = function (nums, k) {
    nums.sort((a, b) => a - b);

    let x = 0,
        res = 0;

    for (let y = 0; y < nums.length; y++) {
        if (y === 0 || nums[y] !== nums[y - 1]) {
            while (x < nums.length && (nums[x] < nums[y] + k || x <= y)) {
                x++;
            }
            if (x < nums.length && nums[x] === nums[y] + k) {
                res++;
            }
        }
    }

    return res;
};
