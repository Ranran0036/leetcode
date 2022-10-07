function maxAscendingSum(nums: number[]): number {
    let res: number = 0;
    let l: number = 0;

    while (l < nums.length) {
        let cursum = nums[l++];

        while (l < nums.length && nums[l] > nums[l - 1]) {
            cursum += nums[l++];
        }

        res = Math.max(res, cursum);
    }

    return res;
}
