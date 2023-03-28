function findSubarrays(nums: number[]): boolean {
    const cnt: Set<number> = new Set();

    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i] + nums[i + 1];

        if (cnt.has(sum)) {
            return true;
        } else {
            cnt.add(sum);
        }
    }

    return false;
}

//test
