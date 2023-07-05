function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (res < g.length && s[i] >= g[res]) {
            res++;
        }
    }

    return res;
}
