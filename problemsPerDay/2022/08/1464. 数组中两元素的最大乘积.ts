function maxProduct(nums: number[]): number {
    let a = nums[0],
        b = nums[1];

    if (a < b) {
        [a, b] = [b, a];
    }

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > a) {
            b = a;
            a = nums[i];
        } else if (nums[i] > b) {
            b = nums[i];
        }
    }

    return (a - 1) * (b - 1);
}
