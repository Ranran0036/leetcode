function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a, b) => a - b);

    const ans: number[][] = [];
    let minDiff: number = Infinity;

    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];
        if (diff < minDiff) {
            minDiff = diff;
            ans.length = 0;
            ans.push([arr[i], arr[i + 1]]);
        } else if (diff === minDiff) {
            ans.push([arr[i], arr[i + 1]]);
        }
    }

    return ans;
}
