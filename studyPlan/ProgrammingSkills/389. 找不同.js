/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
    //hash表计数
    /* const letterMap = new Array(26).fill(0);

    for (const char of s) {
        letterMap[char.charCodeAt() - 97]++;
    }

    for (const char of t) {
        letterMap[char.charCodeAt() - 97]--;
        if (letterMap[char.charCodeAt() - 97] < 0) {
            return char;
        }
    }

    return ""; */

    //异或
    let res = 0;
    for (const char of s + t) {
        res ^= char.charCodeAt();
    }

    return String.fromCharCode(res);
};
