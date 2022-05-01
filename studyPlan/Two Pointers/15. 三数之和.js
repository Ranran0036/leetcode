/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    // 最左侧值为定值，右侧所有值进行两边推进计算
    let res = [];
    nums.sort((a, b) => a - b);
    let size = nums.length;
    if (nums[0] <= 0 && nums[size - 1] >= 0) {
        // 保证有正数负数
        let i = 0;
        while (i < size - 2) {
            if (nums[i] > 0) break; // 最左侧大于0，无解
            let first = i + 1;
            let last = size - 1;
            while (first < last) {
                if (nums[i] * nums[last] > 0) break; // 三数同符号，无解
                let sum = nums[i] + nums[first] + nums[last];
                if (sum === 0) {
                    res.push([nums[i], nums[first], nums[last]]);
                }
                if (sum <= 0) {
                    // 负数过小，first右移
                    while (nums[first] === nums[++first]) {} // 重复值跳过
                } else {
                    while (nums[last] === nums[--last]) {} // 重复值跳过
                }
            }
            while (nums[i] === nums[++i]) {}
        }
    }

    return res;
};
