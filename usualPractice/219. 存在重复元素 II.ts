function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.has(num) && i - map.get(num)! <= k) {
            return true;
        }
        map.set(num, i);
    }

    return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
