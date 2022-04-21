/**
 * @param {number[]} nums
 * @return {number}
 */
let maximumDifference = function(nums) {
    let ans = -1;
    let minNum = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > minNum){
            ans = Math.max(ans , nums[i]-minNum)
        }else{
            minNum = nums[i]
        }
    }

    return ans;
};