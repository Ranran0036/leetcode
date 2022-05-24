/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
    let count = 0;
    while (x > 0 || y > 0) {
        if ((x & 1) !== (y & 1)) {
            count++;
        }
        x >>= 1;
        y >>= 1;
    }

    return count;
};
