function arrayRankTransform(arr: number[]): number[] {
    const newArr = arr.slice();

    newArr.sort((a, b) => a - b);

    const rankMap = new Map<number, number>();
    let rank = 1;

    for (const num of newArr) {
        if (!rankMap.has(num)) {
            rankMap.set(num, rank);
            rank++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = rankMap.get(arr[i])!;
    }

    return newArr;
}
