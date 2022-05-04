/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findTheWinner = function (n, k) {
    let pos = 0;

    for (let i = 2; i <= n; i++) {
        pos = (pos + k) % i;
    }

    return pos + 1;
};
