/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {
    /* let left = 0;
    let right = n;
    let mid = 0;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid * (mid + 1) / 2 === n) {
            return mid;
        } else if (mid * (mid + 1) / 2 > n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right; */

    return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
};
