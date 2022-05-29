/**
 * @param {string} s
 * @return {character}
 */
const firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        let index = s.indexOf(s[i]);
        if (s.indexOf(s[i], index + 1) === -1) {
            return s[i];
        }
    }

    return " ";
};
