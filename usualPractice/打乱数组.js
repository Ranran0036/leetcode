/**
 * @param {number[]} nums
 */
class Solution {
    constructor(nums) {
        this.nums = nums;
    }
    /**
     * @return {number[]}
     */
    reset() {
        return this.nums;
    }
    /**
     * @return {number[]}
     */
    shuffle() {
        let nums = Array.from(this.nums);
        let len = nums.length;
        for (let i = 0; i < len - 1; i++) {
            let j = i + Math.floor(Math.random() * (len - i));
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        return nums;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
