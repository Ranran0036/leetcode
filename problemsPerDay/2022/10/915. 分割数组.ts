function partitionDisjoint(nums: number[]): number {
    const n = nums.length;
    const maxLeft: number[] = new Array(n).fill(0);

    let max: number = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i]);
        maxLeft[i] = max;
    }

    let ans: number = n - 1;

    let min: number = Number.MAX_SAFE_INTEGER;

    for (let i = n - 1; i >= 1; i--) {
        min = Math.min(min, nums[i]);

        if (min >= maxLeft[i - 1]) {
            ans = i;
        }
    }

    return ans;
}

console.log(partitionDisjoint([5, 0, 3, 8, 6]));
