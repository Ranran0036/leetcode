function maxEqualFreq(nums: number[]): number {
    let n = nums.length,
        max = 0,
        ans = 0;
    const cnt = new Array(100010).fill(0),
        sum = new Array(100010).fill(0);

    for (let i = 0; i < n; i++) {
        let t = nums[i],
            len = i + 1,
            cur = ++cnt[t];

        sum[cur]++;
        sum[cur - 1]--;
        max = Math.max(max, cur);

        if (max === 1) {
            ans = len;
        }

        if (max * sum[max] + 1 === len) {
            ans = len;
        }

        if ((max - 1) * (sum[max - 1] + 1) + 1 == len) {
            ans = len;
        }
    }

    return ans;
}
