let g: number[][] = [];
let n: number = 0,
    m: number = 0;
let vis: boolean[][] = [];
const dirs: number[][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
function search(_x: number, _y: number, s1: Set<number>, s2: Set<number>): number {
    let he = 0,
        ta = 0,
        ans = 0;
    let d: Array<number> = new Array<number>();
    s1.add(_x * m + _y);
    vis[_x][_y] = true;
    d[ta++] = _x * m + _y;
    while (he < ta) {
        const poll = d[he++];
        const x = Math.floor(poll / m),
            y = poll % m;
        for (const di of dirs) {
            const nx = x + di[0],
                ny = y + di[1],
                loc = nx * m + ny;
            if (nx < 0 || nx >= n || ny < 0 || ny >= m || vis[nx][ny]) continue;
            if (g[nx][ny] == 1) {
                s1.add(loc);
                vis[nx][ny] = true;
                d[ta++] = loc;
            } else if (g[nx][ny] == 0) {
                s2.add(loc);
                ans++;
            }
        }
    }
    return ans;
}
function getCnt(): number {
    vis = new Array<Array<boolean>>(n);
    for (let i = 0; i < n; i++) vis[i] = new Array<boolean>(m).fill(false);
    let max = 0,
        ans = 0;
    let l1: Array<Set<number>> = new Array<Set<number>>(),
        l2: Array<Set<number>> = new Array<Set<number>>();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 1 && !vis[i][j]) {
                let s1 = new Set<number>(),
                    s2 = new Set<number>();
                const b = search(i, j, s1, s2),
                    a = s2.size;
                if (a > max) {
                    max = a;
                    ans = b;
                }
                l1.push(s1);
                l2.push(s2);
            }
        }
    }
    for (let i = 0; i < l2.length; i++) {
        for (let loc of l2[i].size == max ? l1[i] : l2[i]) {
            const x = Math.floor(loc / m),
                y = loc % m;
            g[x][y] = l2[i].size == max ? -1 : 1;
        }
    }
    return ans;
}
function containVirus(_g: number[][]): number {
    g = _g;
    n = g.length;
    m = g[0].length;
    let ans: number = 0;
    while (true) {
        const cnt = getCnt();
        if (cnt == 0) break;
        ans += cnt;
    }
    return ans;
}
