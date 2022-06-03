/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let str = "";
    let i = 0;
    let l = s.length;
    while (i < l) {
        if (s[i + 2] !== "#") {
            str += String.fromCharCode(parseInt(s.substring(i, i + 1)) + 96);
            i++;
        } else {
            str += String.fromCharCode(parseInt(s.substring(i, i + 2)) + 96);
            i += 3;
        }
    }
    return str;
};
