/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
    let count = 0;
    while (n) {
        count++;
        n &= n - 1;
    }
    return count;
};
