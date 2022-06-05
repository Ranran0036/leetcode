/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = function (arr) {
    return arr.sort((a, b) => countBits(a) - countBits(b) || a - b);
};

const countBits = function (num) {
    let bits = 0;

    while (num > 0) {
        bits += num & 1;
        num >>= 1;
    }

    return bits;
};
