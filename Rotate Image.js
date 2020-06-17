let rotate = function(matrix) {
    // 时间复杂度O(n^2) 空间复杂度O(1)
  
    // 做法： 先沿着对角线翻转，然后沿着水平线翻转
    const n = matrix.length;
    function swap(arr, [i, j], [m, n]) {
        const temp = arr[i][j];
        arr[i][j] = arr[m][n];
        arr[m][n] = temp;
    }

    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i; j++) {
            swap(matrix, [i, j], [n - j - 1, n - i - 1]);
        }
    }
  
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n; j++) {
            swap(matrix, [i, j], [n - i - 1, j]);
        }
    }
};
