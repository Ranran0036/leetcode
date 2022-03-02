/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function(board) {
    let rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let subbox = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            let item = board[i][j];
            if(item !== '.'){
                let index = parseInt(item) - 1;
                rows[i][index]++;
                cols[j][index]++;
                subbox[Math.floor(i/3)][Math.floor(j/3)][index]++;

                if(rows[i][index] > 1 || cols[j][index] > 1 || subbox[Math.floor(i/3)][Math.floor(j/3)][index] > 1){
                    return false;
                }
            }
        }
    }

    return true;
};