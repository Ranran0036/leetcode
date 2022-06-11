/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function (s) {
    let dp0 = 0;
    let dp1 = 0;

    for (const char of s) {
        dp1 = Math.min(dp0, dp1) + (char === "0" ? 1 : 0);
        dp0 += char === "1" ? 1 : 0;
    }

    return Math.min(dp0, dp1);
};
