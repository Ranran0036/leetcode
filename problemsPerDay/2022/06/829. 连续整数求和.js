/**
 * @param {number} n
 * @return {number}
 */
const consecutiveNumbersSum = function (n) {
    let ans = 0;
    for (let i = 1; i * (i + 1) <= 2 * n; i++) {
        if (isKConsecutive(n, i)) {
            ans++;
        }
    }

    return ans;
};

const isKConsecutive = function (nums, k) {
    if (k % 2 === 1) {
        return nums % k === 0;
    } else {
        return nums % k !== 0 && (2 * nums) % k === 0;
    }
};
