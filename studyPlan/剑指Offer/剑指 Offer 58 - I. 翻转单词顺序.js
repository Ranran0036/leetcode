/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
    //去除首尾空格
    s = s.trim();

    let left = s.length - 1,
        right = s.length - 1;

    const res = [];

    while (right >= 0) {
        while (right >= 0 && s[right] !== " ") {
            right--;
        }

        res.push(s.substring(left + 1, right + 1));

        while (right >= 0 && s[right] === " ") {
            right--;
        }

        left = right;
    }

    return res.join(" ");
};
