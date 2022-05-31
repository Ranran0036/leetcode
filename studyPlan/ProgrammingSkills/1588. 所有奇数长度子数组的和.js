/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function (arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i] * (Math.floor((i + 1) / 2) * Math.floor((arr.length - i) / 2) + (Math.floor(i / 2) + 1) * (Math.floor((arr.length - i - 1) / 2) + 1));
    }

    return ans;
};
