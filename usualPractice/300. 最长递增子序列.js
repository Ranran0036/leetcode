/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
    let len = 1,
        n = nums.length;

    if (n === 0) {
        return 0;
    }

    const d = new Array(n + 1);
    d[len] = nums[0];

    for (let i = 1; i < n; i++) {
        if (nums[i] > d[len]) {
            d[++len] = nums[i];
        } else {
            let l = 1,
                r = len,
                pos = 0;

            while (l <= r) {
                const mid = (l + r) >> 1;

                if (d[mid] < nums[i]) {
                    pos = mid;
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }

            d[pos + 1] = nums[i];
        }
    }

    return len;
};
