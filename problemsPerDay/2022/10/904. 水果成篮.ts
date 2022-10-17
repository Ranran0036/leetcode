function totalFruit(fruits: number[]): number {
    const n = fruits.length;
    const map: Map<number, number> = new Map<number, number>();

    let left: number = 0,
        ans: number = 0;

    for (let right = 0; right < n; right++) {
        map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

        while (map.size > 2) {
            map.set(fruits[left], map.get(fruits[left])! - 1);

            if (map.get(fruits[left]) === 0) {
                map.delete(fruits[left]);
            }

            ++left;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
}
