/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
    const isNotPrime = new Array(n).fill(false);
    let count = 0;

    for (let i = 2; i < n; i++) {
        if (!isNotPrime[i]) {
            count++;
            for (let j = i * i; j < n; j += i) {
                isNotPrime[j] = true;
            }
        }
    }

    return count;
};
