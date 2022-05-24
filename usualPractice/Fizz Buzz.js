/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
    const ans = [];

    for (let i = 1; i <= n; i++) {
        switch (true) {
            case i % 3 === 0 && i % 5 === 0:
                ans.push("FizzBuzz");
                break;
            case i % 3 === 0:
                ans.push("Fizz");
                break;
            case i % 5 === 0:
                ans.push("Buzz");
                break;
            default:
                ans.push(i.toString());
        }
    }

    return ans;
};
