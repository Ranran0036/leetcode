function trimMean(arr: number[]): number {
    const n = arr.length;

    arr.sort((a, b) => a - b);

    let sum = 0;

    for (let i = n / 20; i < (19 * n) / 20; i++) {
        sum += arr[i];
    }

    return sum / (n * 0.9);
}
