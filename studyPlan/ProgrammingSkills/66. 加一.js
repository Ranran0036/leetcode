/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + carry === 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            digits[i] += carry;
            carry = 0;
            break;
        }
    }

    if (carry === 1) {
        digits.unshift(1);
    }

    return digits;
};
