/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
    let vote = 0 , major = 0;
    for(let i = 0; i < nums.length; i++){
        if(vote == 0){
            major = nums[i]
        }

        vote += (nums[i] == major) ? 1 : -1;
    }

    return major;
};