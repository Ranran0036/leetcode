/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function (mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i] + mat[i][mat.length - 1 - i];
    }

    return sum - mat[mat.length >> 1][mat.length >> 1] * (mat.length & 1);
};
