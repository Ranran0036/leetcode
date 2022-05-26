/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
const reverseLeftWords = function (s, n) {
    if (n === 0 || n === s.length) {
        return s;
    }

    let left = "";
    let right = "";

    for (let i = 0; i < s.length; i++) {
        if (i < n) {
            left += s[i];
        } else {
            right += s[i];
        }
    }

    return right + left;
    // return s.substr(n) + s.substr(0, n);
};
