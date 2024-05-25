function findIndices(nums: number[], indexDifference: number, valueDifference: number): number[] {
    let minIndex = 0,
        maxIndex = 0;
    for (let j = indexDifference; j < nums.length; j++) {
        let i = j - indexDifference;
        if (nums[i] < nums[minIndex]) {
            minIndex = i;
        }
        if (nums[j] - nums[minIndex] >= valueDifference) {
            return [minIndex, j];
        }
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
        if (nums[maxIndex] - nums[j] >= valueDifference) {
            return [maxIndex, j];
        }
    }
    return [-1, -1];
}
