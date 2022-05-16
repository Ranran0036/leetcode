/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
    for (let i = 1; i < words.length; i++) {
        if (!isSortedByOrder(words[i - 1], words[i], order)) {
            return false;
        }
    }

    return true;
};

/**
 *
 * @param {String} word1
 * @param {String} word2
 * @param {String} order
 * @return {Boolean}
 */
const isSortedByOrder = (word1, word2, order) => {
    let shortLen = Math.min(word1.length, word2.length);

    for (let i = 0; i < shortLen; i++) {
        if (word1[i] !== word2[i]) {
            return order.indexOf(word1[i]) < order.indexOf(word2[i]);
        }
    }

    if (word1.length > word2.length) {
        return false;
    }

    return true;
};
