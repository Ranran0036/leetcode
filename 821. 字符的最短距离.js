/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortestToChar = function (s, c) {
    let len = s.length;

    let forwardindex = s.indexOf(c),
        reverseIndex = s.lastIndexOf(c);

    let res = Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        if (i < forwardindex) {
            res[i] = forwardindex - i;
        } else {
            if (s[i] === c) {
                dis = 0;
            }
            res[i] = dis;
            dis++;
        }
    }

    for (let j = len - 1; j > 0; j--) {
        if (j > reverseIndex) {
            res[j] = Math.max(j - reverseIndex, res[j]);
        } else {
            if (s[j] === c) {
                dis = 0;
            }
            res[j] = Math.min(dis, res[j]);
            dis++;
        }
    }

    return res;
};

console.log(shortestToChar("loveleetcode", "e"));
