function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();

    for (const num of nums1) {
        if (map.has(num)) {
            map.set(num, map.get(num)! + 1);
        } else {
            map.set(num, 1);
        }
    }

    const result: number[] = [];

    for (const num of nums2) {
        if (map.has(num)) {
            result.push(num);
            map.set(num, map.get(num)! - 1);
            if (map.get(num)! === 0) {
                map.delete(num);
            }
        }
    }

    return result;
}
