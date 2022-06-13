/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    let i = s.length - 1;
    while (i >= 0 && s[i] === " ") {
        --i;

        if (i < 0) {
            return 0;
        }
    }

    let j = i;
    while (j >= 0 && s[j] !== " ") {
        --j;
    }

    return i - j;
};
