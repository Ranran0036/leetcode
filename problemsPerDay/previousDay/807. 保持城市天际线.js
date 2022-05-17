/**
 * @param {number[][]} grid
 * @return {number}
 */
let maxIncreaseKeepingSkyline = function(grid) {
    const len = grid.length;
    const rowMax = new Array(len).fill(0);
    const colMax = new Array(len).fill(0);

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            rowMax[i] = Math.max(rowMax[i] , grid[i][j]);
            colMax[j] = Math.max(colMax[j] , grid[i][j]);
        }
    }

    let ans = 0;

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            ans += Math.min(rowMax[i] , colMax[j]) - grid[i][j]
        }
    }

    return ans;
};