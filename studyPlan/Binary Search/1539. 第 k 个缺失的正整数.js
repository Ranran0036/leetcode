/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
    if (arr[0] > k) {
        return k;
    }

    let l = 0,
        r = arr.length;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        let x = mid < arr.length ? arr[mid] : 2000000;
        if (x - mid - 1 >= k) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return k - (arr[l - 1] - (l - 1) - 1) + arr[l - 1];
};
