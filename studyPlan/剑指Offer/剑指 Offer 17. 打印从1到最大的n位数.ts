function printNumbers(n: number): number[] {
    let ans: number[] = [];

    for (let i = 1; i < 10 ** n; i++) {
        ans.push(i);
    }

    return ans;
}
