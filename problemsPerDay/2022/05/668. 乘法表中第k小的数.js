/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = function (m, n, k) {
    let left = 1,
        right = m * n + 1;

    while (left + 1 !== right) {
        const mid = (left + right) >> 1;

        if (check(m, n, k, mid)) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return right;
};

/**
 *
 * @param {Number} m
 * @param {Number} n
 * @param {Number} k
 * @param {Number} expect
 * @return {Boolean}
 */
const check = (m, n, k, expect) => {
    let count = 0;

    for (let i = 1; i <= m; i++) {
        count += Math.min(n, Math.floor(expect / i));

        if (count >= k) {
            return true;
        }
    }

    return false;
};
