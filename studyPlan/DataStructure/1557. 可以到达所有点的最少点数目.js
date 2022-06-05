/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findSmallestSetOfVertices = function (n, edges) {
    const flag = new Array(n).fill(true);

    for (const [_, v] of edges) {
        flag[v] = false;
    }

    const res = [];

    for (let i = 0; i < n; i++) {
        if (flag[i]) {
            res.push(i);
        }
    }

    return res;
};
