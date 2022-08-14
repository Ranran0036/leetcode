function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set<number>(nums1);
    const set2 = new Set<number>(nums2);

    return intersection_(set1, set2);
}

function intersection_(set1: Set<number>, set2: Set<number>): number[] {
    if (set1.size > set2.size) {
        return intersection_(set2, set1);
    }

    const set = new Set<number>();

    for (const num of set1) {
        if (set2.has(num)) {
            set.add(num);
        }
    }

    return Array.from(set);
}
