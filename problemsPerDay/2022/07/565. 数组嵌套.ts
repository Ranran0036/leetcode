function arrayNesting(nums: number[]): number {
    let ans: number = 0,
        n: number = nums.length;

    for (let i = 0; i < n; i++) {
        let cnt: number = 0;

        while (nums[i] < n) {
            const tmp: number = nums[i];
            nums[i] = n;
            i = tmp;
            cnt++;
        }

        ans = Math.max(ans, cnt);
    }

    return ans;
}
