function findDisappearedNumbers(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        nums[index] = -Math.abs(nums[index]);
    }

    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            ans.push(i + 1);
        }
    }

    return ans;
}
