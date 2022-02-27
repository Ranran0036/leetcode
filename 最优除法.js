/**
 * @param {number[]} nums
 * @return {string}
 */
let optimalDivision = function(nums) {
    if(nums.length <= 2){
        return nums.join('/');
    }

    let delFirst = nums.shift();

    let ans = nums.join('/');

    return '' + delFirst + '/(' + ans + ')';
};