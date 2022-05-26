/**
 * @param {string} s
 * @return {string}
 */
const replaceSpace = function (s) {
    let sArr = [];

    for (const char of s) {
        if (char === " ") {
            sArr.push("%20");
        } else {
            sArr.push(char);
        }
    }

    return sArr.join("");
    // return s.replace(/\s/g, "%20");
};
