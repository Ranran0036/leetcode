let maxArea = function(height) {
    let i = 0, j = height.length -1, max = j*(Math.min(height[0], height[j]));
    while (i<j) {
        if (height[i] < height[j]) {
            i++;
            if (height[i - 1] < height[i]) {
                max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
            }
        } else {
                j--;
            if (height[1+j] < height[j]) {
                max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
            }
        }
    }
    return max;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([3,9,3,4,7,2,12,6]))
console.log(maxArea([1,2,1]))
console.log(maxArea([1,2]))
console.log(maxArea([2,3,4,5,18,17,6]))
console.log(maxArea([1,3,2,5,25,24,5]))