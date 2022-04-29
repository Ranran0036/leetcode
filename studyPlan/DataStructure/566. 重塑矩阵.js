/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;
    if (n * m !== r * c) return mat;
    let ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
    for (let x = 0; x < m * n; ++x) {
        ans[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n];
    }
    return ans;
};
