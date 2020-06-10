let maxArea = function(height) {
    let rightFlag = true;
    let leftFlag = true;
    let right = height.length - 1;
    let left = 0;
    let result = 0;

    while(rightFlag || leftFlag){
        result = Math.max(result , Math.min(height[left] , height[right]) * (right - left))

        if(height[left] >= height[right]){
            leftFlag = ((height[right-1]>height[right]) && (left != right-1)) ? true : false;
            rightFlag = false;
        }else{
            leftFlag = false;
            rightFlag = ((height[left+1]>height[left]) && (left+1 != right)) ? true : false;
        }

        if(rightFlag){
            left++;
        }

        if(leftFlag){
            right--;
        }
    }

    return result;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([3,9,3,4,7,2,12,6]))
console.log(maxArea([1,2,1]))
console.log(maxArea([1,2]))
console.log(maxArea([2,3,4,5,18,17,6]))
console.log(maxArea([1,3,2,5,25,24,5]))