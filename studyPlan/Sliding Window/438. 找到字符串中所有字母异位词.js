/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
    const sLen = s.length,
        pLen = p.length;

    if (sLen < pLen) {
        return [];
    }

    const ans = [];
    const count = new Array(26).fill(0);

    for (let i = 0; i < pLen; i++) {
        count[s[i].charCodeAt() - 97]++;
        count[p[i].charCodeAt() - 97]--;
    }

    let differ = 0;

    for (let i = 0; i < 26; i++) {
        differ += count[i] === 0 ? 0 : 1;
    }

    if (differ === 0) {
        ans.push(0);
    }

    for (let i = 0; i < sLen - pLen; i++) {
        if (count[s[i].charCodeAt() - 97] === 1) {
            differ--;
        } else if (count[s[i].charCodeAt() - 97] === 0) {
            differ++;
        }

        count[s[i].charCodeAt() - 97]--;

        if (count[s[i + pLen].charCodeAt() - 97] === 0) {
            differ++;
        } else if (count[s[i + pLen].charCodeAt() - 97] === -1) {
            differ--;
        }

        count[s[i + pLen].charCodeAt() - 97]++;

        if (differ === 0) {
            ans.push(i + 1);
        }
    }

    return ans;
};
