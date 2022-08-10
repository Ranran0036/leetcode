function sumOfUnique(nums: number[]): number {
    const numMap: number[] = new Array(100).fill(0);

    let sum: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (numMap[nums[i]] === 0) {
            sum += nums[i];
            numMap[nums[i]] = 1;
        } else {
            numMap[nums[i]]++;

            if (numMap[nums[i]] === 2) {
                sum -= nums[i];
            }
        }
    }

    return sum;
}
