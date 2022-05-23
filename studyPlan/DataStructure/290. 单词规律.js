/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
    pattern = pattern.split("");
    s = s.split(" ");

    if (pattern.length !== s.length) {
        return false;
    }

    const patternMap = new Map();
    const usedWords = new Set();

    for (const pat of pattern) {
        const word = s.shift();
        if (patternMap.has(pat)) {
            if (patternMap.get(pat) !== word) {
                return false;
            }
        } else {
            if (usedWords.has(word)) {
                return false;
            }
            patternMap.set(pat, word);
            usedWords.add(word);
        }
    }

    return true;
};
