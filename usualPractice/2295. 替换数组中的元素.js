/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
const arrayChange = function (nums, operations) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < operations.length; i++) {
        const [index, val] = operations[i];
        const currVal = nums[index];
        if (currVal === val) {
            nums[index] = currVal + 1;
        } else if (currVal < val) {
            nums[index] = val;
        } else {
            const left = nums.slice(0, index);
            const right = nums.slice(index + 1);
            const mid = right.filter((num) => num < val);
            nums = [...left, val, ...mid, ...right];
        }
    }

    return nums;
};
