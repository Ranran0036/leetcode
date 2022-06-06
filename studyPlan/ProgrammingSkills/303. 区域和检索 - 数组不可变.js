/**
 * @param {number[]} nums
 */
class NumArray {
    constructor(nums) {
        this.sum = new Array(nums.length + 1);
        this.sum[0] = 0;
        for (let i = 1; i <= nums.length; i++) {
            this.sum[i] = this.sum[i - 1] + nums[i - 1];
        }
    }
    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.sum[right + 1] - this.sum[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
