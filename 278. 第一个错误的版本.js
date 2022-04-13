/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1,
            right = n;
        while (left < right) {
            const mid = Math.floor((right - left) / 2 + left);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
};
