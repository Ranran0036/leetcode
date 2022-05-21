/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
    let result = "";
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;

        if (i >= 0) {
            sum += num1[i] - "0";
            i--;
        }

        if (j >= 0) {
            sum += num2[j] - "0";
            j--;
        }

        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }

    return result;
};
