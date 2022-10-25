let n: number;
const p = new Array<number>(10010).fill(0);
const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

function shortestBridge(g: number[][]): number {
    function getIdx(x: number, y: number): number {
        return x * n + y;
    }

    function find(x: number): number {
        if (p[x] != x) p[x] = find(p[x]);
        return p[x];
    }

    function union(x: number, y: number): void {
        p[find(x)] = p[find(y)];
    }

    function update(d: Array<Array<number>>, m1: Map<number, number>, m2: Map<number, number>): number {
        let sz = d.length;

        while (sz-- > 0) {
            const info = d.shift()!;

            const x = info[0],
                y = info[1],
                idx = getIdx(x, y),
                step = m1.get(idx)!;

            for (const di of dirs) {
                const nx = x + di[0],
                    ny = y + di[1],
                    nidx = getIdx(nx, ny);

                if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
                    continue;
                }

                if (m1.has(nidx)) {
                    continue;
                }

                if (m2.has(nidx)) {
                    return step + 1 + m2.get(nidx)!;
                }

                d.push([nx, ny]);
                m1.set(nidx, step + 1);
            }
        }
        return -1;
    }

    n = g.length;

    for (let i = 0; i < n * n; i++) p[i] = i;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j] == 0) {
                continue;
            }

            for (const di of dirs) {
                const x = i + di[0],
                    y = j + di[1];
                if (x < 0 || x >= n || y < 0 || y >= n) {
                    continue;
                }
                if (g[x][y] == 0) {
                    continue;
                }
                union(getIdx(i, j), getIdx(x, y));
            }
        }
    }

    let a = -1,
        b = -1;

    const d1 = new Array<number[]>(),
        d2 = new Array<number[]>();

    const m1 = new Map<number, number>(),
        m2 = new Map<number, number>();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j] == 0) continue;
            const idx = getIdx(i, j),
                root = find(idx);
            if (a == -1) a = root;
            else if (a != root && b == -1) b = root;
            if (a == root) {
                d1.push([i, j]);
                m1.set(idx, 0);
            } else if (b == root) {
                d2.push([i, j]);
                m2.set(idx, 0);
            }
        }
    }

    while (d1.length != 0 && d2.length != 0) {
        let t = -1;
        if (d1.length < d2.length) t = update(d1, m1, m2);
        else t = update(d2, m2, m1);
        if (t != -1) return t - 1;
    }

    return -1;
}
