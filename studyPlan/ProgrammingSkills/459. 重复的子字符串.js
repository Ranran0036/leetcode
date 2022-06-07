/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
    return kmp(s + s, s);
};

const kmp = (s, p) => {
    let n = s.length;
    let m = p.length;

    const next = new Array(m).fill(0);
    next[0] = -1;

    for (let i = 1; i < m; i++) {
        let j = next[i - 1];
        while (j > -1 && p[i] !== p[j + 1]) {
            j = next[j];
        }
        if (p[i] === p[j + 1]) {
            next[i] = j + 1;
        }
    }

    let match = -1;

    for (let i = 1; i < n - 1; i++) {
        while (match !== -1 && p[match + 1] !== s[i]) {
            match = next[match];
        }

        if (p[match + 1] === s[i]) {
            match++;
            if (match === m - 1) {
                return true;
            }
        }
    }

    return false;
};
