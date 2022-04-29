/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }

    let left = 1;
    let right = x;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid * mid > x) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left - 1;
};
