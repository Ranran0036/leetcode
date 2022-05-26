/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    /* if (n === 1) return 1;
    if (n === 2) return 2;
    let first = 1;
    let second = 2;
    for (let i = 2; i < n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second; */

    let sqrt = Math.sqrt(5);
    return Math.floor((Math.pow((1 + sqrt) / 2, n + 1) - Math.pow((1 - sqrt) / 2, n + 1)) / sqrt);
};
