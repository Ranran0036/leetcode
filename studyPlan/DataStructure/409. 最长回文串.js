/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
    const charMap = new Map();
    let result = 0;

    for (const char of s) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);

            if (charMap.get(char) % 2 === 0) {
                result += 2;
            }
        } else {
            charMap.set(char, 1);
        }
    }

    if (result < s.length) {
        result++;
    }

    return result;
};
