/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function (nums) {
    let pluralCount = false;

    for (const num of nums) {
        if (num === 0) {
            return 0;
        }
        if (num < 0) {
            pluralCount = !pluralCount;
        }
    }

    return pluralCount ? -1 : 1;
};
