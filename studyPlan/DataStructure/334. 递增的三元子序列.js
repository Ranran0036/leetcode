/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
    if (nums.length < 3) return false;

    let min = Number.MAX_SAFE_INTEGER;
    let mid = Number.MAX_SAFE_INTEGER;

    for (const num of nums) {
        if (num <= min) {
            min = num;
        } else if (num <= mid) {
            mid = num;
        } else {
            return true;
        }
    }

    return false;
};
