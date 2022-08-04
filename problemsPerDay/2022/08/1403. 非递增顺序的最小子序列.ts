function minSubsequence(nums: number[]): number[] {
    nums = nums.sort((a, b) => a - b);

    let sum = 0,
        cur = 0,
        idx = nums.length - 1;

    for (const i of nums) sum += i;

    const ans = new Array<number>();

    while (cur <= sum) {
        sum -= nums[idx];
        cur += nums[idx];
        ans.push(nums[idx--]);
    }

    return ans;
}
