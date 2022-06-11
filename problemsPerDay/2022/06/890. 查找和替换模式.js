/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function (words, pattern) {
    return words.filter((word) => isMatch(word, pattern) && isMatch(pattern, word));
};

const isMatch = function (s, p) {
    const map = new Map();
    for (let i = 0; i < s.length; ++i) {
        const x = s[i],
            y = p[i];

        if (!map.has(x)) {
            map.set(x, y);
        } else if (map.get(x) !== y) {
            return false;
        }
    }

    return true;
};
