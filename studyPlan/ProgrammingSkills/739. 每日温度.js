/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
    const ans = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; ++i) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const j = stack.pop();
            ans[j] = i - j;
        }

        stack.push(i);
    }

    return ans;
};
