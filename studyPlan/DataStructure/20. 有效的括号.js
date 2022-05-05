/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    const stack = [];
    const pairs = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"],
    ]);

    for (const char of s) {
        if (pairs.has(char)) {
            if (!stack.length || stack.pop() !== pairs.get(char)) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
