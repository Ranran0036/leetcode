function maximumDetonation(bombs: number[][]): number {
    const n = bombs.length;
    const graph: number[][] = Array.from({ length: n }, () => []);

    // 构建图
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                const [x1, y1, r1] = bombs[i];
                const [x2, y2] = bombs[j];
                const distance = (x1 - x2) ** 2 + (y1 - y2) ** 2;
                if (distance <= r1 ** 2) {
                    graph[i].push(j);
                }
            }
        }
    }

    // 计算从某个炸弹开始能够引爆的最多炸弹数量
    const dfs = (i: number, visited: boolean[]): number => {
        visited[i] = true;
        let count = 1;
        for (const neighbor of graph[i]) {
            if (!visited[neighbor]) {
                count += dfs(neighbor, visited);
            }
        }
        return count;
    };

    let maxDetonations = 0;

    // 遍历所有炸弹，找出能够引爆最多炸弹的起始炸弹
    for (let i = 0; i < n; i++) {
        const visited = new Array(n).fill(false);
        maxDetonations = Math.max(maxDetonations, dfs(i, visited));
    }

    return maxDetonations;
}

// // 示例测试
// const bombs = [
//     [2, 1, 3],
//     [6, 1, 4],
// ];
// console.log(maximumDetonation(bombs)); // 输出: 2
