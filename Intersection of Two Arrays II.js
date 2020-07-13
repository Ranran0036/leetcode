/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function(nums1, nums2) {
    let shorter = nums1;
    let longer = nums2;

    if(nums1.length != nums2.length){
        shorter = nums1.length >= nums2.length ? nums2 : nums1;
        longer = nums1.length <= nums2.length ? nums2 : nums1;
    }
    let result = [];

    for(let i = 0; i <= shorter.length - 1; i++){
        let index = longer.indexOf(shorter[i]);

        if(index >= 0){
            result.push(shorter[i]);
            longer.splice(index , 1);
        }
    }

    return result;

};

console.log(intersect([2,1] , [1,1]))