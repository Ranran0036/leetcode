/**
 * @param {string} s
 * @return {string}
 */
const toLowerCase = function (s) {
    let ans = "";

    for (const char of s) {
        if (char >= "A" && char <= "Z") {
            ans += String.fromCharCode(char.charCodeAt() | 32);
        } else {
            ans += char;
        }
    }

    return ans;
};
