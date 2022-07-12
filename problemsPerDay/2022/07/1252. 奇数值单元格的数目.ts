function oddCells(m: number, n: number, indices: number[][]): number {
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);

    for (const [i, j] of indices) {
        rows[i]++;
        cols[j]++;
    }

    let oddX = 0;
    let oddY = 0;

    for (let i = 0; i < m; i++) {
        if (rows[i] & 1) {
            oddX++;
        }
    }

    for (let i = 0; i < n; i++) {
        if (cols[i] & 1) {
            oddY++;
        }
    }

    return oddX * (n - oddY) + oddY * (m - oddX);
}
