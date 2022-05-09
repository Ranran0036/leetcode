/**
 * @param {string} s
 * @return {number[]}
 */
const diStringMatch = function (s) {
    let result = [];

    let min = 0,
        max = s.length;

    for (const char of s) {
        if (char === "I") {
            result.push(min);
            min++;
        } else {
            result.push(max);
            max--;
        }
    }

    result.push(max);

    return result;
};
