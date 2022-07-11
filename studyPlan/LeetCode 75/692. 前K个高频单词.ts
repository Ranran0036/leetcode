function topKFrequent(words: string[], k: number): string[] {
    const countMap = new Map();
    for (const item of words) {
        if (countMap.has(item)) {
            countMap.set(item, countMap.get(item) + 1);
        } else {
            countMap.set(item, 1);
        }
    }
    const ret = [];
    for (const [key, val] of countMap.entries()) {
        const obj = { key, val };
        ret.push(obj);
    }
    ret.sort((a, b) => b.val - a.val || a.key.localeCompare(b.key));
    return ret.slice(0, k).map((item) => item.key);
}
