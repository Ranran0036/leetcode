function kItemsWithMaximumSum(numOnes: number, numZeros: number, numNegOnes: number, k: number): number {
    let len = numOnes + numZeros + numNegOnes;
    let arr = new Array(len).fill(-1);

    for (let i = 0; i < numOnes; i++) {
        arr[i] = 1;
    }

    for (let i = numOnes; i < numOnes + numZeros; i++) {
        arr[i] = 0;
    }

    let ans = 0;

    for (let i = 0; i < k; i++) {
        ans += arr[i];
    }

    return ans;
}

function kItemsWithMaximumSum2(numOnes: number, numZeros: number, numNegOnes: number, k: number): number {
    if (k <= numOnes) {
        return k;
    } else if (k <= numOnes + numZeros) {
        return numOnes;
    } else {
        return numOnes - k + numOnes + numZeros;
    }
}
