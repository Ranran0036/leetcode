/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let end_a = a.length - 1;
    let end_b = b.length - 1;

    let carry = 0;

    let result = "";

    while (end_a >= 0 || end_b >= 0) {
        let a_val = end_a >= 0 ? a[end_a] - "0" : 0;
        let b_val = end_b >= 0 ? b[end_b] - "0" : 0;

        let sum = a_val + b_val + carry;

        result = (sum % 2) + result;

        carry = Math.floor(sum / 2);

        end_a--;
        end_b--;
    }

    if (carry > 0) {
        result = carry + result;
    }

    return result;
};
