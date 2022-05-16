/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getStrongest = function (arr, k) {
    arr.sort((a, b) => a - b);

    const median = arr[Math.floor((arr.length - 1) / 2)];

    let left = 0,
        right = arr.length - 1;

    let ans = [];

    while (ans.length < k) {
        if (Math.abs(arr[left] - median) > Math.abs(arr[right] - median)) {
            ans.push(arr[left]);
            left++;
        } else {
            ans.push(arr[right]);
            right--;
        }
    }

    return ans;
};
