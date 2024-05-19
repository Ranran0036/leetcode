function getWinner(arr: number[], k: number): number {
    let prev: number = Math.max(arr[0], arr[1]);
    if (k === 1 || arr.length === 2) {
        // 只需要赢一回合，直接返回前两个数的最大值
        return prev;
    }

    let maxNum: number = prev;
    let winTimes: number = 1;

    for (let i = 2; i < arr.length; ++i) {
        let curr = arr[i];
        if (prev > curr) {
            winTimes++;

            if (winTimes === k) {
                return prev;
            }
        } else {
            prev = curr;
            winTimes = 1;
        }

        maxNum = Math.max(maxNum, prev);
    }

    return maxNum;
}
