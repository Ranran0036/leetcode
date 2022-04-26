/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
    const fibArr = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }

    return fibArr[n];
};
