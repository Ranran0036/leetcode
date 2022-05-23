/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
    const map = new Map();
    map.set(0, 1);

    let sum = 0,
        pre = 0;

    for (const num of nums) {
        pre += num;

        if (map.has(pre - k)) {
            sum += map.get(pre - k);
        }

        if (map.has(pre)) {
            map.set(pre, map.get(pre) + 1);
        } else {
            map.set(pre, 1);
        }
    }

    return sum;
};
