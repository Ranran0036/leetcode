/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function (n) {
    const tribArr = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        tribArr[i] = tribArr[i - 1] + tribArr[i - 2] + tribArr[i - 3];
    }

    return tribArr[n];
};

const tribonacci2 = function (n) {
    if (n === 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    const q = [
        [1, 1, 1],
        [1, 0, 0],
        [0, 1, 0],
    ];
    const res = pow(q, n);
    return res[0][2];
};

const pow = (a, n) => {
    let ret = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ];
    while (n > 0) {
        if ((n & 1) === 1) {
            ret = multiply(ret, a);
        }
        n >>= 1;
        a = multiply(a, a);
    }
    return ret;
};

const multiply = (a, b) => {
    const c = new Array(3).fill(0).map(() => new Array(3).fill(0));
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j] + a[i][2] * b[2][j];
        }
    }
    return c;
};
