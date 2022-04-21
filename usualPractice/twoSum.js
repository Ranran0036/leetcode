/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let numMap = new Map();

    for (let i = 0; i<nums.length; i++) {
        if(numMap.has(target - nums[i])){
            return [i , numMap.get(target - nums[i])];
        }else{
            numMap.set(nums[i] , i);
        }
    }

    return [];
};

console.log(twoSum([2,7,11,15] , 9));