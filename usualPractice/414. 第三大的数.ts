function thirdMax(nums: number[]): number {
    let firstMax = -Number.MAX_VALUE,
        secondMax = -Number.MAX_VALUE,
        thirdMax = -Number.MAX_VALUE;

    for (const num of nums) {
        if (num > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = num;
        } else if (num < firstMax && num > secondMax) {
            thirdMax = secondMax;
            secondMax = num;
        } else if (num < secondMax && num > thirdMax) {
            thirdMax = num;
        }
    }

    return thirdMax === -Number.MAX_VALUE ? firstMax : thirdMax;
}
