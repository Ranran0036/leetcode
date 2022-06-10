/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = function (num, k) {
    const res = [];
    const n = num.length;
    for (let i = n - 1; i >= 0 || k > 0; --i, k = Math.floor(k / 10)) {
        if (i >= 0) {
            k += num[i];
        }
        res.push(k % 10);
    }
    res.reverse();
    return res;
};
