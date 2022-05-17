class Solution2 {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.numsMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (!this.numsMap.has(nums[i])) {
                this.numsMap.set(nums[i], []);
            }
            this.numsMap.get(nums[i]).push(i);
        }
    }
    /**
     * @param {number} target
     * @return {number}
     */
    pick(target) {
        const indexs = this.numsMap.get(target);
        return indexs[Math.floor(Math.random() * indexs.length)];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

class Solution {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums;
    }
    /**
     * @param {number} target
     * @return {number}
     */
    pick(target) {
        let ans = -1;
        let count = 0;

        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] === target) {
                count++;
                if (Math.floor(Math.random() * count) === 0) {
                    ans = i;
                }
            }
        }

        return ans;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

let nums = [1, 2, 3, 3, 3];
let obj = new Solution(nums);
let param_1 = obj.pick(3);
console.log(param_1);
