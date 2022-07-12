/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i + 1, nums.length - 1);
}

function swap(nums: number[], i: number, j: number): void {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
        swap(nums, start++, end--);
    }
}
