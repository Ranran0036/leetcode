/**
 * @param {number} num
 * @return {number}
 */
const translateNum = function (num) {
    num = num.toString();

    let prev = 1;
    let curr = 1;

    for (let i = 2; i <= num.length + 1; i++) {
        const temp = Number(num[i - 2] + num[i - 1]);
        if (temp >= 10 && temp <= 25) {
            const t = curr;
            curr += prev;
            prev = t;
        } else {
            prev = curr;
        }
    }

    return curr;
};
