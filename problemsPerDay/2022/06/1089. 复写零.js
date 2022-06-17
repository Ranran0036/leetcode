/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function (arr) {
    let top = 0;
    let i = -1;

    while (top < arr.length) {
        i++;
        if (arr[i] !== 0) {
            top++;
        } else {
            top += 2;
        }
    }

    let j = arr.length - 1;
    if (top === arr.length + 1) {
        arr[j--] = 0;
        i--;
    }

    while (j >= 0) {
        arr[j--] = arr[i];

        if (arr[i] === 0) {
            arr[j--] = arr[i];
        }
        i--;
    }
};
