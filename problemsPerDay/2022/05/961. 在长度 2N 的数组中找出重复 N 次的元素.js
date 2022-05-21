/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = function (nums) {
    const n = nums.length;

    while (true) {
        const index1 = Math.floor(Math.random() * n);
        const index2 = Math.floor(Math.random() * n);

        if (index1 !== index2 && nums[index1] === nums[index2]) {
            return nums[index1];
        }
    }
};
