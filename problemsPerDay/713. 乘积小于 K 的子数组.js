/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = function (nums, k) {
    if (!nums || nums.length < 1) {
        return 0;
    }

    let length = nums.length;
    let ans = 0;

    for (let i = 0; i < length; i++) {
        let product = nums[i];

        if (product < k) {
            ans++;
        }
        if (product >= k || i + 1 > length) {
            continue;
        }
        for (let j = i + 1; j < length; j++) {
            product *= nums[j];
            if (product < k) {
                ans++;
            } else {
                break;
            }
        }
    }

    return ans;
};
