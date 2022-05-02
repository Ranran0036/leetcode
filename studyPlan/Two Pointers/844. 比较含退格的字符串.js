/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
    return getRealString(s) === getRealString(t);
};

const getRealString = function (s) {
    let res = "";
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "#") {
            if (res.length > 0) {
                res = res.slice(0, res.length - 1);
            }
        } else {
            res += s[i];
        }
    }
    return res;
};

console.log(getRealString("ab##c"));
