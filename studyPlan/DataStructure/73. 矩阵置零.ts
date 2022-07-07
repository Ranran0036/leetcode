/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const m = matrix.length;
    const n = matrix[0].length;

    let flagCol0 = false;

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }

        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }

        if (flagCol0) {
            matrix[i][0] = 0;
        }
    }
}
