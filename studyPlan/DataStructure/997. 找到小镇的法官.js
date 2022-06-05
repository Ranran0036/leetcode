/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (n, trust) {
    const trustCount = new Array(n).fill(0);
    const trustedCount = new Array(n).fill(0);

    trust.forEach(([a, b]) => {
        trustCount[a - 1]++;
        trustedCount[b - 1]++;
    });

    for (let i = 0; i < n; i++) {
        if (trustCount[i] === 0 && trustedCount[i] === n - 1) {
            return i + 1;
        }
    }

    return -1;
};
