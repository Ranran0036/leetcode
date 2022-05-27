/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParentheses = function (s) {
    let res = "";
    const stack = [];

    for (const char of s) {
        if (char === ")") {
            stack.pop();
        }

        if (stack.length) {
            res += char;
        }

        if (char === "(") {
            stack.push(char);
        }
    }

    return res;
};
