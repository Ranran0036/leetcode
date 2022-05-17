/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = function (strs) {
    if (strs.length < 2) {
        return 0;
    }

    let ans = 0;

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] < strs[j - 1][i]) {
                ans++;
                break;
            }
        }
    }

    return ans;
};
