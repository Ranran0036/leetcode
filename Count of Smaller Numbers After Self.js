let countSmaller = function(nums) {
    let len = nums.length;
    if(len === 0){
        return nums;
    }

    let result = new Array(len);

    let sorted = [];

    for(let i = len-1; i >= 0; i--){
        let index = findIndex(sorted , nums[i]);
        sorted.splice(index , 0 , nums[i]);
        result[i] = index;
    }

    return result;
};

let findIndex = (sorted , target) => {
    let low = 0;
    let high = sorted.length - 1;

    while(low < high){
        let mid = (low + high) >>> 1;

        if(sorted[mid] < target){
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    if(sorted[low] < target){
        return low + 1;
    }

    return low;
}