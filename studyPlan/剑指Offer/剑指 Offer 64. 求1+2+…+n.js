/**
 * @param {number} n
 * @return {number}
 */
const sumNums = function (n) {
    n && (n += sumNums(n - 1));
    return n;
};
