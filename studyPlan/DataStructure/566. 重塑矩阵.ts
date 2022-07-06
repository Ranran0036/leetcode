function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const row = mat.length;
    const col = mat[0].length;
    if (row * col !== r * c) {
        return mat;
    }

    const result: number[][] = new Array(r).fill(0).map(() => new Array(c).fill(0));

    for (let i = 0; i < row * col; i++) {
        result[Math.floor(i / c)][i % c] = mat[Math.floor(i / col)][i % col];
    }

    return result;
}
