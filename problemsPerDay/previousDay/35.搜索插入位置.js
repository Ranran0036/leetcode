/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let len = nums.length;

    if(len === 0){
        return 0;
    }

    if(len === 1){
        return nums[0] >= target ? 0 : 1;
    }

    let left = 0 , right = len - 1;

    while(left <= right){
        let mid = (left + right) >>> 1;

        if(nums[mid] === target ){
            return mid;
        }else if(nums[mid] > target){
            right = mid - 1;
        } else{
            left = mid + 1
        }
    }

    return left;
};
// @lc code=end
console.log(searchInsert([1,3,5,6] , 5))
console.log(searchInsert([1,3] , 2))
console.log(searchInsert([1] , 1))
console.log(searchInsert([1,3,5,6] , 5))
