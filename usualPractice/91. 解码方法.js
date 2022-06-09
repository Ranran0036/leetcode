/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
    let len = s.length;

    s = " " + s;

    let f = new Array(3).fill(0);
    f[0] = 1;

    for (let i = 1; i <= len; i++) {
        f[i % 3] = 0;
        let a = s[i] - "0";
        let b = (s[i - 1] - "0") * 10 + (s[i] - "0");
        if (1 <= a && a <= 9) {
            f[i % 3] = f[(i - 1) % 3];
        }
        if (10 <= b && b <= 26) {
            f[i % 3] += f[(i - 2) % 3];
        }
    }

    return f[len % 3];
};
