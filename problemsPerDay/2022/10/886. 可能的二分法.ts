function possibleBipartition(n: number, dislikes: number[][]): boolean {
    const dfs = (curnode: number, nowcolor: number, color: number[], g: number[][]): boolean => {
        color[curnode] = nowcolor;

        for (const nextnode of g[curnode]) {
            if (color[nextnode] !== 0 && color[nextnode] === color[curnode]) {
                return false;
            }
            if (color[nextnode] === 0 && !dfs(nextnode, 3 ^ nowcolor, color, g)) {
                return false;
            }
        }

        return true;
    };

    const color = new Array(n + 1).fill(0);
    const g = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        g[i] = [];
    }

    for (const p of dislikes) {
        g[p[0]].push(p[1]);
        g[p[1]].push(p[0]);
    }

    for (let i = 1; i <= n; i++) {
        if (color[i] === 0 && !dfs(i, 1, color, g)) {
            return false;
        }
    }

    return true;
}
