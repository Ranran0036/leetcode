function nextGreaterElement(n: number): number {
    if (n <= 10) return -1;
    const arr = n.toString().split("");
    let i = arr.length - 2;
    while (i >= 0 && arr[i + 1] <= arr[i]) {
        i--;
    }
    if (i < 0) return -1;
    let j = arr.length - 1;
    while (j >= 0 && arr[j] <= arr[i]) {
        j--;
    }
    swap(arr, i, j);
    reverse_(arr, i + 1, arr.length - 1);
    const res = parseInt(arr.join(""));
    return res >= 2 ** 31 ? -1 : res;
}

function swap(arr: string[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function reverse_(arr: string[], i: number, j: number) {
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
}
