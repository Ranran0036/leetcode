/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
    nums.sort((a, b) => a - b);

    let maxValue = nums[nums.length - 1];

    let sumArr = new Array(maxValue + 1).fill(0);

    for (const item of nums) {
        sumArr[item] += item;
    }

    return rob(sumArr);
};

/**
 * rob
 * @param {Array<Number>} nums
 * @return {Number}
 */
const rob = function (nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }
    let length = nums.length;
    if (length == 1) {
        return nums[0];
    }
    let first = nums[0],
        second = Math.max(nums[0], nums[1]);
    for (let i = 2; i < length; i++) {
        let temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
};
