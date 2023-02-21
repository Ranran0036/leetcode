function numberOfPairs(nums: number[]): number[] {
    const map: boolean[] = new Array(101).fill(true);
    let res: number = 0;

    for (const num of nums) {
        map[num] = !map[num];

        res += map[num] ? 1 : 0;
    }

    return [res, nums.length - res * 2];
}

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
