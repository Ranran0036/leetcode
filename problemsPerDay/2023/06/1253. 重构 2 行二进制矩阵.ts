function reconstructMatrix(upper: number, lower: number, colsum: number[]): number[][] {
    let n = colsum.length;
    let sumVal = 0; //colsum的总和
    let twoSum = 0; //colsum中2的个数

    for (let i = 0; i < n; i++) {
        if (colsum[i] == 2) {
            twoSum++;
        }
        sumVal += colsum[i];
    }

    if (sumVal !== upper + lower || Math.min(upper, lower) < twoSum) {
        return [];
    }

    upper -= twoSum;
    lower -= twoSum;

    let res = Array.from({ length: 2 }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        if (colsum[i] == 2) {
            res[0][i] = res[1][i] = 1;
        } else if (colsum[i] == 1) {
            if (upper > 0) {
                res[0][i] = 1;
                upper--;
            } else {
                res[1][i] = 1;
            }
        }
    }

    return res;
}
