/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
    let res = "";
    let i = 0,
        j = 0;
    while (i < word1.length && j < word2.length) {
        res += word1[i] + word2[j];
        i++;
        j++;
    }
    while (i < word1.length) {
        res += word1[i];
        i++;
    }
    while (j < word2.length) {
        res += word2[j];
        j++;
    }
    return res;
};
