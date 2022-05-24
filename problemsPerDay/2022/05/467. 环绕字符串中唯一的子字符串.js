/**
 * @param {string} p
 * @return {number}
 */
const findSubstringInWraproundString = function (p) {
    const dp = new Array(26).fill(0);

    let len = 0;

    for (let i = 0; i < p.length; i++) {
        if (i > 0 && (p.charCodeAt(i) - p.charCodeAt(i - 1) + 26) % 26 === 1) {
            len++;
        } else {
            len = 1;
        }

        dp[p.charCodeAt(i) - 97] = Math.max(dp[p.charCodeAt(i) - 97], len);
    }

    return dp.reduce((a, b) => a + b);
};
