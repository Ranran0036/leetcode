//选择排序
const selectSort = (arr) => {
    if (!arr || arr.length <= 1) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
};

//冒泡排序
const bubbleSort = (arr) => {
    if (!arr || arr.length <= 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
};

//插入排序
const insertSort = (arr) => {
    if (!arr || arr.length <= 1) {
        return arr;
    }

    for (let end = 1; end < arr.length; end++) {
        for (let pre = end - 1; pre >= 0 && arr[pre] > arr[pre + 1]; pre--) {
            [arr[pre], arr[pre + 1]] = [arr[pre + 1], arr[pre]];
        }
    }

    return arr;
};

const arr = [56, 7, 6, 77, 81, 12, 385, 4, 2, 9, 33, 44, 15];

console.log(insertSort(arr));
console.log(arr);
