function getMinDistance(nums: number[], target: number, start: number): number {
    let ans = 0;

    while (start + ans < nums.length || start - ans >= 0) {
        if (nums[start + ans] === target || nums[start - ans] === target) {
            return ans;
        }

        ans++;
    }

    return -1;
}
