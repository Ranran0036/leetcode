/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function (arr) {
    let left = 1;
    let right = arr.length - 2;
    let ans = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[mid + 1]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
