//找到局部最小
const findLocalMin = (arr) => {
    if (!arr || arr.length === 0) {
        return -1;
    }

    if (arr[0] < arr[1]) {
        return 0;
    }

    if (arr[arr.length - 1] < arr[arr.length - 2]) {
        return arr.length - 1;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) {
            return mid;
        } else if (arr[mid] > arr[mid + 1]) {
            right = mid;
        } else {
            left = mid;
        }
    }
};
