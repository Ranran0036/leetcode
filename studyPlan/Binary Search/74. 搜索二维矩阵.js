/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    let col = matrix[0].length;
    //先二分找到列
    let arr = [];
    for (const item of matrix) {
        arr.push(item[col - 1]);
    }

    let row = binarySearch(arr, target, true);
    if (row === arr.length || row <= -1) return false;

    let index = binarySearch(matrix[row], target, false);

    return index !== -1 && matrix[row][index - 1] === target ? true : false;
};

/**
 *
 * @param {Array<Number>} arr
 * @param {Number} target
 * @param {Boolean} lower
 * @return {Number}
 */
const binarySearch = function (arr, target, lower) {
    let left = 0,
        right = arr.length - 1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (arr[mid] > target || (lower && arr[mid] >= target)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

console.log(
    searchMatrix(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ],
        3
    )
);
