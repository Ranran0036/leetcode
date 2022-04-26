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

const arr = [56, 7, 6, 77, 81, 12, 385, 4, 2, 9, 33, 44, 15];

console.log(selectSort(arr));
console.log(bubbleSort(arr));
console.log(arr);
