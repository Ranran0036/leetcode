/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const occ = new Set();

    let rk = -1,
        ans = 0;

    for (let i = 0; i < s.length; i++) {
        if (i !== 0) {
            occ.delete(s.charAt(i - 1));
        }

        while (rk + 1 < s.length && !occ.has(s.charAt(rk + 1))) {
            occ.add(s.charAt(rk + 1));
            rk++;
        }

        ans = Math.max(ans, rk - i + 1);
    }

    return ans;
};
