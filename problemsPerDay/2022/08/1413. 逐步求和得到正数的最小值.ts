function minStartValue(nums: number[]): number {
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0, j = 1; i < nums.length; i++) {
        j += nums[i];
        min = Math.min(min, j);
    }

    return min < 1 ? 2 - min : 1;
}
