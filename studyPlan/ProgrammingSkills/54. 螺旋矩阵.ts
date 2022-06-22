function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0 && matrix[0].length === 0) {
        return [];
    }

    let ans: number[] = [];
    const rows: number = matrix.length;
    const cols: number = matrix[0].length;

    let left: number = 0,
        right: number = cols - 1,
        top: number = 0,
        bottom: number = rows - 1;

    while (left <= right && top <= bottom) {
        for (let col = left; col <= right; col++) {
            ans.push(matrix[top][col]);
        }

        for (let row = top + 1; row <= bottom; row++) {
            ans.push(matrix[row][right]);
        }

        if (left < right && top < bottom) {
            for (let col = right - 1; col > left; col--) {
                ans.push(matrix[bottom][col]);
            }

            for (let row = bottom; row > top; row--) {
                ans.push(matrix[row][left]);
            }
        }

        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }

    return ans;
}

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
