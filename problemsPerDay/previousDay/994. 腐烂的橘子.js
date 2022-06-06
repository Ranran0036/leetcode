const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
    const m = grid.length,
        n = grid[0].length;
    let cnts = 0,
        cost = 0,
        queue = new Array();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                cnts++;
                if (grid[i][j] == 2) {
                    queue.push([i, j]);
                }
            }
        }
    }

    while (queue.length > 0) {
        const nxt = new Array();
        cnts -= queue.length;
        for (const p of queue) {
            for (const d of dirs) {
                const nx = p[0] + d[0],
                    ny = p[1] + d[1];
                if (nx >= 0 && ny >= 0 && nx < m && ny < n && grid[nx][ny] == 1) {
                    grid[nx][ny] = 2;
                    nxt.push([nx, ny]);
                }
            }
        }
        queue = nxt;
        if (queue.length > 0) {
            cost++;
        }
    }
    return cnts == 0 ? cost : -1;
};

console.log(
    orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
    ])
);

/**
 * class Solution {
    int[] dr = new int[]{-1, 0, 1, 0};
    int[] dc = new int[]{0, -1, 0, 1};

    public int orangesRotting(int[][] grid) {
        int R = grid.length, C = grid[0].length;
        Queue<Integer> queue = new ArrayDeque<Integer>();
        Map<Integer, Integer> depth = new HashMap<Integer, Integer>();
        for (int r = 0; r < R; ++r) {
            for (int c = 0; c < C; ++c) {
                if (grid[r][c] == 2) {
                    int code = r * C + c;
                    queue.add(code);
                    depth.put(code, 0);
                }
            }
        }
        int ans = 0;
        while (!queue.isEmpty()) {
            int code = queue.remove();
            int r = code / C, c = code % C;
            for (int k = 0; k < 4; ++k) {
                int nr = r + dr[k];
                int nc = c + dc[k];
                if (0 <= nr && nr < R && 0 <= nc && nc < C && grid[nr][nc] == 1) {
                    grid[nr][nc] = 2;
                    int ncode = nr * C + nc;
                    queue.add(ncode);
                    depth.put(ncode, depth.get(code) + 1);
                    ans = depth.get(ncode);
                }
            }
        }
        for (int[] row: grid) {
            for (int v: row) {
                if (v == 1) {
                    return -1;
                }
            }
        }
        return ans;
    }
}
 */
