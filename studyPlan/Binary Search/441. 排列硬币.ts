function arrangeCoins(n: number): number {
    let ans = 0;
    let coins = 1;

    while (n >= coins) {
        n -= coins;
        ans++;
        coins++;
    }

    return ans;
}
