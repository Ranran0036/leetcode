/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function (n) {
    let product = 1,
        sum = 0;

    while (n > 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);

        product *= digit;
        sum += digit;
    }

    return product - sum;
};
