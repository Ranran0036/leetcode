/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (matrix) {
    if (!matrix || !matrix[0]) {
        return [];
    }
    const m = matrix.length;
    const n = matrix[0].length;
    //从太平洋或大西洋逆流而上是否能到达某个坐标的数组 ture表示能流向某一个大洋
    const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
    const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));

    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [
            [r - 1, c],
            [r + 1, c],
            [r, c - 1],
            [r, c + 1],
        ].forEach(([nr, nc]) => {
            if (
                //防止越界
                nr >= 0 &&
                nr < m &&
                nc >= 0 &&
                nc < n &&
                //只有未标记的坐标才能继续递归 防止死循环
                !flow[nr][nc] &&
                //确保是逆流而上
                matrix[nr][nc] >= matrix[r][c]
            ) {
                dfs(nr, nc, flow);
            }
        });
    };
    //逆流而上
    for (let r = 0; r < m; r += 1) {
        dfs(r, 0, flow1);
        dfs(r, n - 1, flow2);
    }
    for (let c = 0; c < n; c += 1) {
        dfs(0, c, flow1);
        dfs(m - 1, c, flow2);
    }
    //统计两个大洋都能流向的坐标
    const res = [];
    for (let r = 0; r < m; r += 1) {
        for (let c = 0; c < n; c += 1) {
            if (flow1[r][c] && flow2[r][c]) {
                res.push([r, c]);
            }
        }
    }
    return res;
};
