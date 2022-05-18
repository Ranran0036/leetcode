/**
 * 荷兰国旗问题
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    if (nums.length < 2) {
        return;
    }

    //[0 , p0) ===> 0
    //[p0, i) ===> 1
    //(p2, len-1) ===> 2

    let p0 = 0,
        p2 = nums.length - 1,
        i = 0;

    while (i <= p2) {
        if (nums[i] === 0) {
            [nums[i], nums[p0]] = [nums[p0], nums[i]];
            p0++;
            i++;
        } else if (nums[i] === 2) {
            [nums[i], nums[p2]] = [nums[p2], nums[i]];
            p2--;
        } else {
            i++;
        }
    }
};
