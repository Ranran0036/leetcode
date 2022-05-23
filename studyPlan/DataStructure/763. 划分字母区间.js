/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function (s) {
    const lastIndex = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        lastIndex[s.charCodeAt(i) - 97] = i;
    }

    let start = 0;
    let end = 0;

    const ans = [];

    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s.charCodeAt(i) - 97]);
        if (i === end) {
            ans.push(end - start + 1);
            start = end + 1;
        }
    }

    return ans;
};
