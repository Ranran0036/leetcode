/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sArr = new Array(26).fill(0);

    for (const char of s) {
        sArr[char.charCodeAt() - 97]++;
    }

    for (const char of t) {
        sArr[char.charCodeAt() - 97]--;
        if (sArr[char.charCodeAt() - 97] < 0) {
            return false;
        }
    }

    return true;
};
