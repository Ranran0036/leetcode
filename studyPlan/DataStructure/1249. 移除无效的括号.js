/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function (s) {
    let left = [];
    let _delete = new Set();

    s = s.split("");

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            left.push(i);
        } else if (s[i] === ")") {
            if (left.length === 0) {
                _delete.add(i);
            } else {
                left.pop();
            }
        }
    }

    left = new Set(left);

    s = s.filter((_, i) => !_delete.has(i) && !left.has(i));

    return s.join("");
};
