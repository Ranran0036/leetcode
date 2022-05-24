/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function (s) {
    const L = 10;

    if (s.length <= L) {
        return [];
    }

    const char2numMap = new Map([
        ["A", 0],
        ["C", 1],
        ["G", 2],
        ["T", 3],
    ]);

    const ans = [];
    const len = s.length;

    let s2num = 0;

    for (let i = 0; i < L - 1; i++) {
        s2num = (s2num << 2) | char2numMap.get(s[i]);
    }

    const map = new Map();

    for (let i = 0; i <= len - L; i++) {
        s2num = ((s2num << 2) | char2numMap.get(s[i + L - 1])) & ((1 << (L * 2)) - 1);

        map.set(s2num, (map.get(s2num) || 0) + 1);
        if (map.get(s2num) === 2) {
            ans.push(s.slice(i, i + L));
        }
    }

    return ans;
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
