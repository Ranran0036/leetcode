function maxDivScore(nums: number[], divisors: number[]): number {
    divisors.sort((a, b) => a - b);

    let maxDivScore = 0;
    let curDivisors = divisors[0];

    for (const divisor of divisors) {
        let curDivScore = 0;

        for (const number of nums) {
            if (number % divisor === 0) {
                curDivScore++;
            }
        }

        if (curDivScore > maxDivScore) {
            maxDivScore = curDivScore;
            curDivisors = divisor;
        }
    }

    return curDivisors;
}

console.log(maxDivScore([4, 7, 9, 3, 9], [5, 2, 3]));
