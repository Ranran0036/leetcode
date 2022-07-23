function sequenceReconstruction(nums: number[], sequences: number[][]): boolean {
    const n = nums.length;
    const indegrees = new Array(n + 1).fill(0);
    const graph = new Array(n + 1).fill(0).map(() => new Set<number>());

    for (const sequence of sequences) {
        const size = sequence.length;

        for (let i = 1; i < size; i++) {
            const prev = sequence[i - 1],
                next = sequence[i];

            if (graph[prev].add(next)) {
                indegrees[next]++;
            }
        }
    }

    const queue = [];

    for (let i = 1; i <= n; i++) {
        if (indegrees[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length) {
        if (queue.length > 1) {
            return false;
        }

        const num: number = queue.shift()!;
        const set: Set<number> = graph[num];

        for (const next of set) {
            indegrees[next]--;

            if (indegrees[next] === 0) {
                queue.push(next);
            }
        }
    }

    return true;
}
