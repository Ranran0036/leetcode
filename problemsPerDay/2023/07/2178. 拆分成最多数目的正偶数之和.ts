function maximumEvenSplit(finalSum: number): number[] {
    if (finalSum % 2 !== 0) return [];
    let res = [];

    for (let i = 2; i <= finalSum; i += 2) {
        res.push(i);
        finalSum -= i;
    }

    res[res.length - 1] += finalSum;

    return res;
}

function maximumEvenSplit2(finalSum: number): number[] {
    if (finalSum % 2 !== 0) return [];

    let length = Math.round(Math.sqrt(finalSum));
    let end = 0;
    if (length * (length + 1) > finalSum) {
        length--;
        end = finalSum - length * (length + 1);
    }

    let ans: number[] = [];
    for (let i = 1; i < length; i++) {
        ans.push(i << 1);
    }
    ans.push(2 * length + end);

    return ans;
}
