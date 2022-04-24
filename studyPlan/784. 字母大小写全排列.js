/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = function (s) {
    s = s.toLowerCase();
    let arr = [s[0]];
    if (s[0].charCodeAt() > 96) {
        arr.push(s[0].toUpperCase());
    }
    for (let i = 1; i < s.length; i++) {
        arr = arr.map((word) => (word += s[i]));
        if (s[i].charCodeAt() > 96)
            arr = arr.concat(
                arr.map((word) => word.slice(0, -1) + s[i].toUpperCase())
            );
    }
    return arr;
};
