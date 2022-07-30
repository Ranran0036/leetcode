const N = 20010;

const p: number[] = new Array<number>(N),
    sz = new Array<number>(N);

let ans = 0;

function find(x: number): number {
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
}

function union(a: number, b: number): void {
    if (find(a) == find(b)) return;
    sz[find(a)] += sz[find(b)];
    p[find(b)] = p[find(a)];
    ans = Math.max(ans, sz[find(a)]);
}

function largestComponentSize(nums: number[]): number {
    const n = nums.length;
    const map: Map<number, Array<number>> = new Map<number, Array<number>>();
    for (let i = 0; i < n; i++) {
        let cur = nums[i];
        for (let j = 2; j * j <= cur; j++) {
            if (cur % j == 0) add_(map, j, i);
            while (cur % j == 0) cur /= j;
        }
        if (cur > 1) add_(map, cur, i);
    }
    for (let i = 0; i < n; i++) {
        p[i] = i;
        sz[i] = 1;
    }
    ans = 1;
    for (const key of map.keys()) {
        const list = map.get(key)!;
        for (let i = 1; i < list.length; i++) union(list[0], list[i]);
    }
    return ans;
}

function add_(map: Map<number, Array<number>>, key: number, val: number): void {
    let list = map.get(key);
    if (list == null) list = new Array<number>();
    list.push(val);
    map.set(key, list);
}
