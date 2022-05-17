const gcd = (a, b) => {
    return b ? gcd(b, a % b) : a;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    if (nums.length === 0) return;
    k = k % nums.length;
    if (k === 0) return;

    let count = gcd(nums.length, k);
    for (let start = 0; start < count; start++) {
        let cur = start;
        let prev = nums[start];
        do {
            let next = (cur + k) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            cur = next;
        } while (cur !== start);
    }
};
