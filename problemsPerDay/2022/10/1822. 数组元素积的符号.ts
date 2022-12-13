function arraySign(nums: number[]): number {
    let hasNegtive = 1;

    for (const num of nums) {
        if (num === 0) {
            return 0;
        }

        if (num < 0) {
            hasNegtive = -hasNegtive;
        }
    }

    return hasNegtive;
}

console.log(19 | 26);
