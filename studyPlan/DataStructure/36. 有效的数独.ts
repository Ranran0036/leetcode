function isValidSudoku(board: string[][]): boolean {
    const rows: number[][] = new Array<number>(9).fill(0).map(() => new Array<number>(9).fill(0));
    const cols: number[][] = new Array<number>(9).fill(0).map(() => new Array<number>(9).fill(0));
    const boxes: number[][][] = new Array<number>(3).fill(0).map(() => new Array<number>(3).fill(0).map(() => new Array<number>(9).fill(0)));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];

            if (num !== ".") {
                const numInt = parseInt(num);
                rows[i][numInt - 1]++;
                cols[j][numInt - 1]++;
                boxes[Math.floor(i / 3)][Math.floor(j / 3)][numInt - 1]++;

                if (rows[i][numInt - 1] > 1 || cols[j][numInt - 1] > 1 || boxes[Math.floor(i / 3)][Math.floor(j / 3)][numInt - 1] > 1) {
                    return false;
                }
            }
        }
    }

    return true;
}
