function purchasePlans(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let ans: number = 0;

    while (left < right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else {
            ans += right - left;
            left++;
        }
    }

    return ans % 1000000007;
}
