/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const res = [];

    for (let i = 0; i < m + n - 1; i++) {
        if (!(i & 1)) {
            let x = i < m ? i : m - 1;
            let y = i < m ? 0 : i - m + 1;

            while (x >= 0 && y < n) {
                res.push(mat[x--][y++]);
            }
        } else {
            let x = i < n ? 0 : i - n + 1;
            let y = i < n ? i : n - 1;

            while (x < m && y >= 0) {
                res.push(mat[x++][y--]);
            }
        }
    }

    return res;
};
