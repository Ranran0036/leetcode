function missingTwo(nums: number[]): number[] {
    const totalLength = nums.length + 2;

    let totalSum = ((1 + totalLength) * totalLength) >> 1;

    for (const num of nums) {
        totalSum -= num;
    }

    let missingHalf = totalSum >> 1;

    let missingHalfSum = ((1 + missingHalf) * missingHalf) >> 1;

    for (const num of nums) {
        if (num <= missingHalf) {
            missingHalfSum -= num;
        }
    }

    return [missingHalfSum, totalSum - missingHalfSum];
}
