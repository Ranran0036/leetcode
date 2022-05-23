/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let result = "0";

    for (let i = num2.length - 1; i >= 0; i--) {
        let carry = 0;
        let temp = "";
        for (let j = num1.length - 1; j >= 0; j--) {
            let sum = (num2[i] - "0") * (num1[j] - "0") + carry;
            temp = (sum % 10) + temp;
            carry = Math.floor(sum / 10);
        }
        if (carry > 0) {
            temp = carry + temp;
        }
        result = addStrings(result, add0(temp, num2.length - 1 - i));
    }

    return result;
};

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

const add0 = function (num, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += "0";
    }
    return num + result;
};

// 官方题解：

const multiply_2 = function (num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let m = num1.length;
    let n = num2.length;

    const ansArr = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        let x = num1[i] - "0";
        for (let j = n - 1; j >= 0; j--) {
            let y = num2[j] - "0";
            ansArr[i + j + 1] += x * y;
        }
    }

    for (let i = m + n - 1; i > 0; i--) {
        ansArr[i - 1] += Math.floor(ansArr[i] / 10);
        ansArr[i] %= 10;
    }

    let index = ansArr[0] === 0 ? 1 : 0;
    let ans = [];
    while (index < m + n) {
        ans.push(ansArr[index++]);
    }

    return ans.join("");
};
