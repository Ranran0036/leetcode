function isMonotonic(nums: number[]): boolean {
    let isIncrease = true;
    let isDecrease = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            isDecrease = false;
        } else if (nums[i] < nums[i - 1]) {
            isIncrease = false;
        }
    }

    return isIncrease || isDecrease;
}
