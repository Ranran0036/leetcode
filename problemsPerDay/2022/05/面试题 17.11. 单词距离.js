/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
    let index1 = -1,
        index2 = -1,
        min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            index1 = i;
        }
        if (words[i] === word2) {
            index2 = i;
        }

        if (index1 !== -1 && index2 !== -1) {
            min = Math.min(min, Math.abs(index1 - index2));
        }
    }

    return min;
};
