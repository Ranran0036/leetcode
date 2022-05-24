/**
 * 马拉车算法(Manacher)
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let T = preProcess(s);
    const len = T.length;
    const P = new Array(len);
    let C = 0,
        R = 0;

    for (let i = 1; i < len - 1; i++) {
        let i_mirror = 2 * C - i;

        if (R > i) {
            P[i] = Math.min(R - i, P[i_mirror]);
        } else {
            P[i] = 0;
        }

        while (T[i + 1 + P[i]] === T[i - 1 - P[i]]) {
            P[i]++;
        }

        if (i + P[i] > R) {
            C = i;
            R = i + P[i];
        }
    }

    let maxLen = 0;
    let centerIndex = 0;

    for (let i = 1; i < len - 1; i++) {
        if (P[i] > maxLen) {
            maxLen = P[i];
            centerIndex = i;
        }
    }

    return s.slice((centerIndex - 1 - maxLen) / 2, (centerIndex - 1 + maxLen) / 2);
};

const preProcess = function (s) {
    const len = s.length;
    if (len === 0) {
        return "^$";
    }

    let res = "^";
    for (let i = 0; i < len; i++) {
        res += "#" + s[i];
    }
    res += "#$";

    return res;
};
