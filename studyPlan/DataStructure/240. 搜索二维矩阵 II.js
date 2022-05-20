/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    let m = matrix.length,
        n = matrix[0].length;
    let x = 0,
        y = n - 1;

    while (x < m && y >= 0) {
        if (matrix[x][y] === target) {
            return true;
        } else if (matrix[x][y] < target) {
            x++;
        } else {
            y--;
        }
    }

    return false;
};
