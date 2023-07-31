function findShortestSubArray(nums: number[]): number {
    const mp: { [key: number]: [number, number, number] } = {};

    for (const [index, value] of nums.entries()) {
        if (value in mp) {
            mp[value][0]++;
            mp[value][2] = index;
        } else {
            mp[value] = [1, index, index];
        }
    }

    let maxNum = 0,
        minLen = 0;
    for (const [count, left, right] of Object.values(mp)) {
        if (maxNum < count) {
            maxNum = count;
            minLen = right - left + 1;
        } else if (maxNum === count) {
            if (minLen > right - left + 1) {
                minLen = right - left + 1;
            }
        }
    }
    return minLen;
}
