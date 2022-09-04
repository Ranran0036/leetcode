function numSpecial(mat: number[][]): number {
    const m = mat.length,
        n = mat[0].length;

    for (let i = 0; i < m; i++) {
        let cnt1 = 0;
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                cnt1++;
            }
        }

        if (i === 0) {
            cnt1--;
        }

        if (cnt1 > 0) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] === 1) {
                    mat[0][j] += cnt1;
                }
            }
        }
    }

    let sum = 0;

    for (const num of mat[0]) {
        if (num === 1) {
            sum++;
        }
    }

    return sum;
}
