function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
    const edges: Set<number>[] = new Array(n).fill(0).map(() => new Set());
    for (const [e0, e1] of redEdges) edges[e0].add(e1);
    for (const [e0, e1] of blueEdges) edges[e0].add(-e1);

    const ans = new Array(n).fill(Infinity);
    let nodes = edges[0],
        visited = new Set([0]);

    for (let depth = 1; nodes.size; depth++) {
        const nextNodes: Set<number> = new Set();

        for (const n of nodes) {
            if (visited.has(n)) continue;
            visited.add(n);

            const i = n < 0 ? -n : n;
            ans[i] = Math.min(ans[i], depth);

            for (const e of edges[i]) {
                if (Math.sign(n) !== Math.sign(e)) nextNodes.add(e);
            }
        }

        nodes = nextNodes;
    }

    return (ans[0] = 0), ans.map((a) => (a === Infinity ? -1 : a));
}
