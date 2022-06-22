function hammingWeight(n: number): number {
    let count: number = 0;
    while (n) {
        n &= n - 1;
        count++;
    }
    return count;
}
