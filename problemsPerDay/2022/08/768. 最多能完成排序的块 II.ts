function maxChunksToSorted(arr: number[]): number {
    let clone = [...arr].sort((a, b) => a - b);

    let n = arr.length,
        ans = 0;

    const map = new Map<number, number>();

    for (let i = 0, tot = 0; i < n; i++) {
        const a = arr[i],
            b = clone[i];

        if (!map.has(a)) {
            map.set(a, 0);
        }

        if (map.get(a) == 0) {
            tot++;
        } else if (map.get(a) == -1) {
            tot--;
        }

        map.set(a, map.get(a)! + 1);

        if (!map.has(b)) {
            map.set(b, 0);
        }

        if (map.get(b) == 0) {
            tot++;
        } else if (map.get(b) == 1) {
            tot--;
        }

        map.set(b, map.get(b)! - 1);

        if (tot == 0) {
            ans++;
        }
    }
    return ans;
}
