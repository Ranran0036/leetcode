/**
 * @param {number} n
 * @return {number}
 */
const binaryGap = function (n) {
    let ans = 0;
    let loopTimes = 0;
    let lastIndex = -1;

    while (n) {
        loopTimes++;
        if (n % 2 === 1) {
            if (lastIndex !== -1) {
                ans = Math.max(ans, loopTimes - lastIndex);
                lastIndex = loopTimes;
            } else if (lastIndex === -1) {
                lastIndex = loopTimes;
            }
        }
        n = Math.floor(n / 2);
    }

    return ans;
};

console.log(binaryGap(22));
